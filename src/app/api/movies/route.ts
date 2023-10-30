import cardHTMLToJSON from "@/utils/htmlToJSON";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  console.log(query);

  try {
    const data = await fetch(`https://www.fzmovies.ng/search?${query}`);
    const text = await data.text();
    const json = await cardHTMLToJSON(text);

    return NextResponse.json({ success: true, data: json });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
