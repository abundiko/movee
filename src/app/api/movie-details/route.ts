import { detailHTMLToJSON } from "@/utils/htmlToJSON";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fz_url } = await req.json();

  try {
    const data = await fetch(fz_url);
    const text = await data.text();
    const json = await detailHTMLToJSON(text);

    return NextResponse.json({ success: true, data: json });
  } catch (error) {
    return NextResponse.json({ error: true });
  }
}
