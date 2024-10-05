import { AwaMovie } from "@/app/api/v2/movies/route";
import { load } from "cheerio";

const awaUrl = "https://www.awafim.tv/titles/";
const HOST = process.env.HOST ?? "";

export async function browseHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  const articles: AwaMovie[] = [];

  // Find all <article> elements and loop through them
  $(".titles-many .titles-one").each(function () {
    const article = $(this);

    // Extract data for each article
    const id = article.find(">a").attr("href")?.trim().replaceAll(awaUrl, "");
    const imgUrl = article.find("img.to-thumb").attr("src")?.trim();
    const year = article.find(".to-info .toi-year").text()?.trim();
    const duration = article.find(".to-info .toi-run").text()?.trim();
    const movieType = duration[0] === "S" ? "Series" : "Movie";
    const country = article
      .find(".toi-countries i.fi")
      .attr("class")
      ?.trim()
      .split("-")[1];
    const rate = article
      .find(".toi-meta .toi-rating .stars-list")
      .attr("title")
      ?.replace("Rated ", "")
      ?.trim();
    const title = article.find("h3.to-h3").text()?.trim();
    const postedAt = article.find(".toi-meta .toi-timestamp").text()?.trim();

    // Construct JSON object for the current article
    const articleData = {
      id,
      imgUrl,
      movieType,
      country,
      title,
      year,
      duration,
      rate,
      postedAt,
    };

    // Add the article data to the array
    articles.push(articleData as AwaMovie);
  });

  return articles;
}

export async function titleHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  const articles: object[] = [];
  const details: any = {};
  $("ul.tei-list li").each(function (i, element) {
    const key = $(element).find(".tei-name").text().trim().toLowerCase();
    let value: any = $(element).find(".tei-value").text().trim();

    // Handle nested lists (e.g., Country with multiple flags)
    if ($(element).find(".tei-value ul").length > 0) {
      const nestedValues: string[] = [];
      $(element)
        .find(".tei-value ul li a")
        .each(function (j, nestedElement) {
          nestedValues.push($(nestedElement).text().trim());
        });
      value = nestedValues;
    }

    // Handle links (e.g., Cast with character names)
    if ($(element).find(".tei-value a").length > 0) {
      const cast: any[] = [];
      $(element)
        .find(".tei-value a")
        .each(function (_, nestedElement) {
          cast.push({
            name: $(nestedElement).text().trim(),
            url: $(nestedElement).attr("href"),
          });
        });
      value = cast;
    }

    details[key] = value;
  });

  const related = await browseHTMLToJSON(htmlString);
  let seriesDetails = {
    seasons: [] as any[],
    episodes: [] as any[],
  };

  // Find all <article> elements and loop through them
  $("#main").each(function () {
    const article = $(this);

    // Extract data for each article
    const imgUrl = article.find("#title-metadata .te-thumb>img").attr("src");
    const title = article.find("h1#page-h1").text();
    const duration = article.find(".header-metadata li:nth-child(1)").text();
    const year = article.find(".header-metadata li:nth-child(2)").text().trim();
    const posted = article.find(".header-metadata li:nth-child(3)").text();
    const rate = article
      .find(".header-metadata li:nth-child(4) .stars-list")
      .attr("title")
      ?.replace("Rated", "")
      .trim();
    const votes = article
      .find(".header-metadata li:nth-child(4) .vote-count")
      .attr("title")
      ?.replace("votes", "")
      .trim();
    const desc = article
      .find(".te-info .tei-info-inner .tei-plot")
      .text()
      .replaceAll("<br>", "")
      .replaceAll('"', "")
      .trim();

    const video = article
      .find(".download-btn:nth-of-type(1)")
      .attr("href")
      ?.replace("https://www.awafim.tv/titles/", `${HOST}/api/v2/download/`);
    const subtitle = article
      .find(".download-btn:first-of-type")
      .attr("href")
      ?.replace("-0-0", "-0-1")
      ?.replace("https://www.awafim.tv/titles/", `${HOST}/api/v2/download/`);
    const trailer = article.find(".lazy-yt-loader").attr("data-youtube-id");
    article
      .find(".title-seasons-list ul li span, .title-seasons-list ul li a")
      .each((_, element) => {
        const isCurrent = element.attribs.class.includes("active");
        const e = $(element);
        const num = e.text().trim().replace(/[^\d]/g, "");
        const urlId = e.attr("href")?.trim().replaceAll(awaUrl, "");
        const seas = { isCurrent, num, urlId };
        seriesDetails.seasons.push(seas);
      });

    article
      .find(".title-episodes-list ul li span, .title-episodes-list ul li a")
      .each((_, element) => {
        const isCurrent = element.attribs.class.includes("active");
        const e = $(element);
        const num = e.text().trim().replace(/[^\d]/g, "");
        const urlId = e.attr("href")?.trim().replaceAll(awaUrl, "");
        const ep = { isCurrent, num, urlId };
        seriesDetails.episodes.push(ep);
      });
    // const movieType =

    // Construct JSON object for the current article
    if (seriesDetails.seasons.length == 0 && seriesDetails.episodes.length == 0)
      seriesDetails = undefined as any;
    const articleData = {
      imgUrl,
      title,
      desc,
      trailer,
      seriesDetails,
      meta: {
        duration,
        year,
        posted,
        rate,
        votes,
      },
      download: {
        video,
        subtitle,
      },
      related,
    };

    // Add the article data to the array
    articles.push(articleData);
  });

  return {
    ...articles[0],
    details,
  };
}

export async function downloadHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  let downloadUrl = "";
  $("head").each(function () {
    const i = $(this);
    const link = i.find('link[rel="canonical"]').attr("href");
    downloadUrl = link ?? "";
  });

  return downloadUrl;
}
