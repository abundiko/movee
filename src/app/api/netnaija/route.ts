import { netnaijaCardHTMLToJSON } from "@/utils/htmlToJSON";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { page } = await req.json();
  const pageQuery = page ? `page/${page}` : "";

  try {
    const data = await fetch(`https://netnaija.xyz/${pageQuery}`);
    const text = await data.text();
    const json = await netnaijaCardHTMLToJSON(text);

    return NextResponse.json({ success: true, data: json });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
