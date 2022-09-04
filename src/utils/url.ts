import { Url as url } from "url";

const normalizeUrl = (url: string) => {
  if (url.startsWith("/")) {
    url = url.slice(1);
  }
  return url.startsWith("http") ? url : `https://${url}`;
};

const extractEncodedUrl = (prefix: string, path: string) => {
  return path.replace(prefix, "").split("?")[0];
};

const base64UrlDecode = (string: string) => {
  const base64String = string.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(base64String, "base64").toString();
};

const base64UrlEncode = (string: string) => {
  const base64String = Buffer.from(string).toString("base64");
  return base64String.replace(/\+/g, "-").replace(/\//g, "_");
};

const getCacheHeaders = (privacy: string, maxAge: string, sMaxAge: string) => {
  return `${privacy}, max-age=${maxAge}, s-maxage=${sMaxAge}`;
};

const sleep = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const proxyImage = (url: string, host: string) => {
  return `https://services.f-ck.me/v1/image/${btoa(url).replace(/\+/g, "-").replace(/\//g, "_")}?host=${host}`
}

export {
  normalizeUrl,
  extractEncodedUrl,
  base64UrlDecode,
  base64UrlEncode,
  getCacheHeaders,
  sleep,
  proxyImage,
};
