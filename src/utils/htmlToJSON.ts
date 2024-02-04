import { load } from "cheerio";

  const netUrl = 'https://netnaija.xyz/';
  const https = 'https:';

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

export async function netnaijaCardHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  const articles: object[] = [];

  // Find all <article> elements and loop through them
  $(".post-item.tie-standard, .related-item.tie-standard").each(function() {
    const article = $(this);

    // Extract data for each article
    const imgUrl = netUrl+article
      .find("img.wp-post-image")
      .attr("src");
    const title = article.find("h2.post-title>a").text();
    const datetimeString = article.find("span.date").text();
    const datetimeRaw = article
      .find("span.post-date.published")
      .attr("datetime") ?? '';
    const url = netUrl+article.find("a.post-thumb").attr("href");

    // Construct JSON object for the current article
    const articleData = {
      imgUrl,
      title,
      datetime: { raw: datetimeRaw, string: datetimeString },
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
  let trailer: string | undefined = "";
  $("div.html5-video-player").each(function() {
    const article = $(this);
    trailer = article
      .find('a[data-sessionlink="feature=player-title"]')
      .attr("href");
  });
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
      trailer,
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

export async function netnaijaDetailHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  const articles: object[] = [];
  let trailer: string | undefined = "";
  $("div.wp-block-embed__wrapper").each(function() {
    const article = $(this);
    trailer = https+article
      .find('iframe')
      .attr("src");
  });
  // Find all <article> elements and loop through them
  $("#main-content-row").each(function() {
    const article = $(this);

    // Extract data for each article
    const imgUrl = netUrl+article.find("img.attachment-full.size-full.wp-post-image").attr("src");
    const title = article.find("h1.post-title.entry-title").text();
    const datetimeRaw = article
      .find(".single-post-meta.post-meta>.meta-item.last-updated").text()
      .split(':')[0] ?? '';
    const datetimeString = article.find(".single-post-meta.post-meta>date.meta-item.tie-icon").text();
    const desc = article
      .find(
        "blockquote.wp-block-quote"
      )
      .text()
      .replaceAll('<p>','')
      .replaceAll('</p>','\n')
      ;
    const url = https+article
      .find('div.wp-block-button>a.wp-block-button__link.wp-element-button')
      .attr("href");

    // Construct JSON object for the current article
    const articleData = {
      imgUrl,
      title,
      desc,
      trailer,
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

//https://netnaijafiles.xyz/1dacaeb189c2f231/WWE_Royal_Rumble_(2024)_(NetNaija.xyz).mp4
//https://netnaijafiles.xyz/a810615c23ebdc20/The_Beekeeper_(2024)_(NetNaija.xyz).mkv
//https://netnaijafiles.xyz/a810615c23ebdc20/The_Beekeeper_(2024)_(NetNaija.xyz).mkv

export async function netnaijaDownloadHTMLToJSON(htmlString: string) {
  const $ = load(htmlString);
  let downloadUrl = '';
  $('script').each(function(){
    const i = $(this);
    const scriptContent = i.html()??'';
    const match = scriptContent.match(/let tk = "(.*?)";/);
    
    console.log(scriptContent);
    if (match) {
      
        const tkValue = match[1];
        console.log(tkValue);
        downloadUrl = tkValue;
        return;
    }
});

return downloadUrl;
  
}

