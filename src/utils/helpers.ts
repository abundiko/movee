export function buildUrlQuery(obj: { [key: string]: any } | undefined) {
  if (!obj) return "";
  const query = Object.entries(obj)
    .map((v) => `${v[0]}=${v[1] ?? ""}`)
    .join("&");
  return query ? "?" + query : "";
}
