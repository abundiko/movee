"use client";

import { load } from "cheerio";

export async function fetchMovies(query: string) {
  const response = await fetch(`https://www.fzmovies.ng/search?${query}`);
  const data = await response.text();
  return htmlToJSON(data);
}

function htmlToJSON(htmlString: string) {
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
