import { load } from "cheerio";

export default async function cardHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  const articles: object[] = [];

  // Find all <article> elements and loop through them
  $("article").each(function() {
    const article = $(this);

    // Extract data for each article
    const imgUrl = article.find("img.snip-thumbnail").attr("src");
    const title = article.find('h2.entry-title a span[itemprop="name"]').text();
    const datetimeRaw = article
      .find("span.post-date.published")
      .attr("datetime");
    const datetimeString = article.find("span.post-date.published").text();
    const url = article.find("h2.entry-title a").attr("href");

    // Construct JSON object for the current article
    const articleData = {
      imgUrl,
      title,
      datetime: {
        raw: datetimeRaw,
        string: datetimeString
      },
      url
    };

    // Add the article data to the array
    articles.push(articleData);
  });

  return articles;
}

export async function detailHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  const articles: object[] = [];

  // Find all <article> elements and loop through them
  $("div.post-inner-area").each(function() {
    const article = $(this);

    // Extract data for each article
    const imgUrl = article.find("img").attr("src");
    const title = article.find("h1.entry-title").text();
    const datetimeRaw = article
      .find("span.post-date.published")
      .attr("datetime");
    const datetimeString = article.find("span.post-date.published").text();
    const desc = article
      .find(
        ".post-body.entry-content div:nth-of-type(4), .post-body.entry-content>p"
      )
      .text();
    const url = article
      .find('.post-body.entry-content a[rel="nofollow"]')
      .attr("href");

    // Construct JSON object for the current article
    const articleData = {
      imgUrl,
      title,
      desc,
      datetime: {
        raw: datetimeRaw,
        string: datetimeString
      },
      url
    };

    // Add the article data to the array
    articles.push(articleData);
  });

  return articles[0];
}
