import { ShortUrl } from "../types";

export function saveUrl(data: ShortUrl) {
  const urls = JSON.parse(localStorage.getItem("urls") || "[]");
  urls.push(data);
  localStorage.setItem("urls", JSON.stringify(urls));
}

export function getUrls(): ShortUrl[] {
  return JSON.parse(localStorage.getItem("urls") || "[]");
}

export function getUrlByShortCode(shortUrl: string): ShortUrl | undefined {
  const urls = JSON.parse(localStorage.getItem("urls") || "[]");
  return urls.find((u: ShortUrl) => u.shortUrl === shortUrl);
}
