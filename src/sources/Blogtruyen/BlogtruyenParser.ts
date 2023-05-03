import { MangaTile, SearchRequest } from "paperback-extensions-common";
import {CheerioAPI} from 'cheerio';

const entities = require("entities"); //Import package for decoding HTML entities (unescape string)

export interface UpdatedManga {
    ids: string[];
    loadMore: boolean;
}

export const generateSearch = (query: SearchRequest): string => {
    const keyword: string = query.title ?? "";
    return encodeURI(keyword);
}

export const parseSearch = ($: CheerioAPI): MangaTile[] => {
    const collectedIds: string[] = [];
    const mangas: MangaTile[] = [];
    for (const obj of $('p:not(:first-child)', '.list').toArray()) {
        const title = $(`a`, obj).text().trim();
        const subtitle = 'Chương ' + $(`span:nth-child(2)`, obj).text().trim();
        const image = $('img', $(obj).next()).attr('src') ?? "";
        const id = $(`a`, obj).attr('href') ?? title;
        if (!collectedIds.includes(id)) { //ko push truyện trùng nhau
            mangas.push(createMangaTile({
                id: encodeURI(id),
                image: encodeURI(image.replace('150x', '300x300')),
                title: createIconText({ text: decodeHTMLEntity(title) }),
                subtitleText: createIconText({ text: subtitle }),
            }));
            collectedIds.push(id);
        }
    }
    return mangas;
}

export const parseViewMore = ($: CheerioAPI, select: number): MangaTile[] => {
    const manga: MangaTile[] = [];
    const collectedIds: string[] = [];
    if (select === 1) {
        for (const obj of $('.row', '.list-mainpage .storyitem').toArray()) {
            const title = $(`h3.title > a`, obj).text().trim();
            const subtitle = $(`div:nth-child(2) > div:nth-child(4) > span:nth-child(1) > .color-red`, obj).text();
            const image = $(`div:nth-child(1) > a > img`, obj).attr('src');
            const id = $(`div:nth-child(1) > a`, obj).attr('href') ?? title;
            if (!collectedIds.includes(id)) { //ko push truyện trùng nhau
                manga.push(createMangaTile({
                    id: id,
                    image: !image ? "https://i.imgur.com/GYUxEX8.png" : encodeURI(image),
                    title: createIconText({ text: decodeHTMLEntity(title) }),
                    subtitleText: createIconText({ text: 'Chương ' + subtitle }),
                }));
                collectedIds.push(id);
            }
        }
    } else {
        for (const obj of $('p:not(:first-child)', '.list').toArray()) {
            const title = $(`a`, obj).text().trim();
            const subtitle = 'Chương ' + $(`span:nth-child(2)`, obj).text().trim();
            const image = $('img', $(obj).next()).attr('src') ?? "";
            const id = $(`a`, obj).attr('href') ?? title;
            if (!collectedIds.includes(id)) { //ko push truyện trùng nhau
                manga.push(createMangaTile({
                    id: id,
                    image: encodeURI(image.replace('150x', '300x300')),
                    title: createIconText({
                        text: decodeHTMLEntity(title),
                    }),
                    subtitleText: createIconText({
                        text: subtitle,
                    }),
                }))
                collectedIds.push(id);
            }
        }
    }
    return manga;
}

export const isLastPage = ($: CheerioAPI): boolean => {
    let isLast = false;
    const pages = [];

    for (const page of $("a", "ul.pagination > li").toArray()) {
        const p = Number($(page).text().trim());
        if (isNaN(p)) continue;
        pages.push(p);
    }
    const lastPage = Math.max(...pages);
    const currentPage = Number($("ul.pagination > li > select > option").find(":selected").text().split(' ')[1]);
    if (currentPage >= lastPage) isLast = true;
    return isLast;
}

export const decodeHTMLEntity = (str: string): string => entities.decodeHTML(str)

// decodeHTMLEntity(str: string): string { //hàm của bato.to
//     return str.replace(/&#(\d+);/g, function (match, dec) {
//         return String.fromCharCode(dec);
//     })
// }

