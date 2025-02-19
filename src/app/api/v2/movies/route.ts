export const maxDuration = 30; // This function can run for a maximum of 5 seconds

import { objectFromParams } from "@/functions";
import { browseHTMLToJSON } from "@/utils/awafim";
import { buildUrlQuery } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  page?: string;
};

export type AwaMovie = {
  id: string;
  imgUrl: string;
  country: string;
  title: string;
  year: string;
  duration: string;
  rate: string;
  postedAt: string;
};



const HOST = "https://www.awafim.tv/browse";
// ?q=&type=movie&country%5B%5D=UMI&country%5B%5D=USA&language%5B%5D=eng&year%5B%5D=2024

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = objectFromParams<Params>(url.searchParams);
  const pageQuery = searchParams.page ? `/page/${searchParams.page}` : "";

  try {
    const data = await fetch(HOST + pageQuery + buildUrlQuery(searchParams));
    const text = await data.text();
    const json = browseHTMLToJSON(text);
    // return NextResponse.json({ success: true, data: text });

    return NextResponse.json({ success: true, data: json });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Something went wrong" });
  }
}
