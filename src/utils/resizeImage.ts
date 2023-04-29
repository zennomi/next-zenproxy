export default function resizeImage(url: string, width: number) {
    return `https://images.weserv.nl/?url=https://services.f-ck.me/v1/image/${btoa(url).replace(/\+/g, "-").replace(/\//g, "_")}&w=${width}`
}

export function proxyImage(url: string, host: string) {
    return `https://services.f-ck.me/v1/image/${btoa(url).replace(/\+/g, "-").replace(/\//g, "_")}?host=${host}`
}