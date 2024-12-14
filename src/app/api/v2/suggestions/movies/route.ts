export const maxDuration = 30; // This function can run for a maximum of 5 seconds

import { suggestionHTMLToJSON } from "@/utils/awafim";
import { NextRequest, NextResponse } from "next/server";

const HOST = "https://www.awafim.tv/suggestions/movie";

export async function GET(_: NextRequest) {
  try {
    const data = await fetch(HOST);
    const text = await data.text();
    const json = await suggestionHTMLToJSON(text);

    return NextResponse.json({ success: true, data: json });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Something went wrong" });
  }
}

export const revalidate = 60 * 60;
