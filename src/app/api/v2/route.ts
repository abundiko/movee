export async function GET() {
  try {
    const req = await fetch(
      "https://www.lulacloud.com/d/rmggqjVEp56-the-holdovers-2023-awafim-tv-mkv",
      {
        method: "POST",
      }
    );
    const h = req.headers;
    console.log(h.entries());
    return new Response("ok");
  } catch (error) {
    console.error({ error: "Something went wrong" });
  }
}
