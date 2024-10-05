export const maxDuration = 30; // This function can run for a maximum of 5 seconds

import { titleHTMLToJSON } from "@/utils/awafim";
import { NextRequest, NextResponse } from "next/server";

const HOST = "https://www.awafim.tv/titles/";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string | string[] } }
) {
  console.log(params);
  const id = [params.id].flat().join("");

  try {
    const data = await fetch(HOST + id);
    const text = await data.text();
    const json = await titleHTMLToJSON(text);
    // console.log(json);
    return NextResponse.json({ success: true, data: json });
  } catch (errorMessage) {
    console.log(errorMessage);
    return NextResponse.json({ error: "Something went wrong" });
  }
}
