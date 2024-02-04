import {
  netnaijaCardHTMLToJSON,
  netnaijaDetailHTMLToJSON,
  netnaijaDownloadHTMLToJSON
} from "@/utils/htmlToJSON";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  try {
    let downloadUrl;
    const data = await fetch(url);
    const text = await data.text();
    const json = await netnaijaDetailHTMLToJSON(text);
    const related = await netnaijaCardHTMLToJSON(text);
    console.log(11);

    if ((json as any).url) {
      const downloadData = await fetch((json as any).url);
      const downloadText = await downloadData.text();
      console.log(downloadText);
      console.log(12);
      const downloadJson = await netnaijaDownloadHTMLToJSON(downloadText);
      // if (downloadJson.length != 0) {
      downloadUrl = downloadJson;
      // }
    }

    return NextResponse.json({
      success: true,
      data: { ...json, related, downloadUrl }
    });
  } catch (errorMessage) {
    console.log(errorMessage);

    return NextResponse.json({ error: true });
  }
}
