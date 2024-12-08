export function getColorFromUrl(urlParam: string) {
  const params = new URLSearchParams(window.location.search);
  return params.get(urlParam)?.replace("#", "") || "000000";
}
