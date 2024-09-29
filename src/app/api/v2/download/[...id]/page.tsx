import { downloadHTMLToJSON } from "@/utils/awafim";
import { writeFileSync } from "fs";
import { NextRequest } from "next/server";

const HOST = "https://www.awafim.tv/titles";

function embedIdInHTML(id: string) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="form" method="post" action="${id}">
        <input type="submit" value="click here if download does not start automatically">
    </form>
    <script>
        const f = document.getElementById("form");
        f.requestSubmit();
    </script>
</body>
</html>
    `;
}

export default async function Page({ params }: { params: { id: string | string[] } }) {
  let htmlValue = "";
  try {
    const id = typeof params.id == "string" ? params.id : params.id.join("/");
    console.log({ id });
    const req = await fetch(`${HOST}/${id}`, {
      headers: {
        Accept: "*/*",
        Referer: "https://www.awafim.tv/titles",
      },
    });
    const html = await req.text();
    writeFileSync("./eg.html", html);

    const link = await downloadHTMLToJSON(html);
    htmlValue = embedIdInHTML(link);
  } catch (error) {
    console.error(error);
    return new Response("", { status: 404, statusText: "file not found" });
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlValue,
      }}
    ></div>
  );
}
