export const maxDuration = 30; // This function can run for a maximum of 5 seconds

import { downloadHTMLToJSON } from "@/utils/awafim";
import { NextRequest, NextResponse } from "next/server";
import { objectFromParams } from "../../movies/route";

const HOST = "https://www.awafim.tv/titles";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string | string[] } }
) {
  try {
    const url = new URL(request.url);
    const searchParams = objectFromParams<any>(url.searchParams);
    const redirect = searchParams.redirect == "true";
    const id = typeof params.id == "string" ? params.id : params.id.join("/");
    console.log({ id });
    const req = await fetch(`${HOST}/${id}`, {
      headers: {
        Accept: "*/*",
        Referer: "https://www.awafim.tv/titles",
      },
    });
    const html = await req.text();
    const link = await downloadHTMLToJSON(html);
    const req2 = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "text/html",
      },
      redirect: "manual",
      body: "",
    });

    const location = req2.headers.get("location");
    console.log({ location });
    if (!location)
      return NextResponse.json({ error: "Unable to generate link" });
    if (redirect) return NextResponse.redirect(location);
    return NextResponse.json({ success: true, link: location });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
}
