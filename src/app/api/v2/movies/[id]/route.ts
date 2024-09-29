import { titleHTMLToJSON } from "@/utils/awafim";
import {
  netnaijaCardHTMLToJSON,
  netnaijaDetailHTMLToJSON,
  netnaijaDownloadHTMLToJSON,
} from "@/utils/htmlToJSON";
import { NextRequest, NextResponse } from "next/server";

const HOST = "https://www.awafim.tv/titles/";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params);

  try {
    let downloadUrl;
    const data = await fetch(HOST + params.id);
    const text = await data.text();
    const json = await titleHTMLToJSON(text);
    console.log(json);
    return NextResponse.json({ json });
    const related = await netnaijaCardHTMLToJSON(text);

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
      data: { ...json, related, downloadUrl },
    });
  } catch (errorMessage) {
    console.log(errorMessage);
    return NextResponse.json({ error: "Something went wrong" });
  }
}
