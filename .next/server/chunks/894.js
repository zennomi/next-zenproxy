"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ Blogtruyen)
});

// UNUSED EXPORTS: BlogtruyenInfo

// EXTERNAL MODULE: external "paperback-extensions-common"
var external_paperback_extensions_common_ = __webpack_require__(4580);
// EXTERNAL MODULE: ./src/utils/url.ts
var url = __webpack_require__(4870);
// EXTERNAL MODULE: ./src/sources/types.ts
var types = __webpack_require__(1866);
;// CONCATENATED MODULE: ./src/sources/Blogtruyen/BlogtruyenParser.ts
const entities = __webpack_require__(1730); //Import package for decoding HTML entities (unescape string)
const generateSearch = (query)=>{
    const keyword = query.title ?? "";
    return encodeURI(keyword);
};
const parseSearch = ($)=>{
    const collectedIds = [];
    const mangas = [];
    for (const obj of $("p:not(:first-child)", ".list").toArray()){
        const title = $(`a`, obj).text().trim();
        const subtitle = "Ch\u01B0\u01A1ng " + $(`span:nth-child(2)`, obj).text().trim();
        const image = $("img", $(obj).next()).attr("src") ?? "";
        const id = $(`a`, obj).attr("href") ?? title;
        if (!collectedIds.includes(id)) {
            mangas.push(createMangaTile({
                id: encodeURI(id),
                image: encodeURI(image.replace("150x", "300x300")),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
            collectedIds.push(id);
        }
    }
    return mangas;
};
const parseViewMore = ($, select)=>{
    const manga = [];
    const collectedIds = [];
    if (select === 1) {
        for (const obj of $(".row", ".list-mainpage .storyitem").toArray()){
            const title = $(`h3.title > a`, obj).text().trim();
            const subtitle = $(`div:nth-child(2) > div:nth-child(4) > span:nth-child(1) > .color-red`, obj).text();
            const image = $(`div:nth-child(1) > a > img`, obj).attr("src");
            const id = $(`div:nth-child(1) > a`, obj).attr("href") ?? title;
            if (!collectedIds.includes(id)) {
                manga.push(createMangaTile({
                    id: id,
                    image: !image ? "https://i.imgur.com/GYUxEX8.png" : encodeURI(image),
                    title: createIconText({
                        text: decodeHTMLEntity(title)
                    }),
                    subtitleText: createIconText({
                        text: "Ch\u01B0\u01A1ng " + subtitle
                    })
                }));
                collectedIds.push(id);
            }
        }
    } else {
        for (const obj of $("p:not(:first-child)", ".list").toArray()){
            const title = $(`a`, obj).text().trim();
            const subtitle = "Ch\u01B0\u01A1ng " + $(`span:nth-child(2)`, obj).text().trim();
            const image = $("img", $(obj).next()).attr("src") ?? "";
            const id = $(`a`, obj).attr("href") ?? title;
            if (!collectedIds.includes(id)) {
                manga.push(createMangaTile({
                    id: id,
                    image: encodeURI(image.replace("150x", "300x300")),
                    title: createIconText({
                        text: decodeHTMLEntity(title)
                    }),
                    subtitleText: createIconText({
                        text: subtitle
                    })
                }));
                collectedIds.push(id);
            }
        }
    }
    return manga;
};
const isLastPage = ($)=>{
    let isLast = false;
    const pages = [];
    for (const page of $("a", "ul.pagination > li").toArray()){
        const p = Number($(page).text().trim());
        if (isNaN(p)) continue;
        pages.push(p);
    }
    const lastPage = Math.max(...pages);
    const currentPage = Number($("ul.pagination > li > select > option").find(":selected").text().split(" ")[1]);
    if (currentPage >= lastPage) isLast = true;
    return isLast;
};
const decodeHTMLEntity = (str)=>entities.decodeHTML(str) // decodeHTMLEntity(str: string): string { //hàm của bato.to
     //     return str.replace(/&#(\d+);/g, function (match, dec) {
     //         return String.fromCharCode(dec);
     //     })
     // }
;

;// CONCATENATED MODULE: ./src/sources/Blogtruyen/Blogtruyen.ts




const DOMAIN = "https://blogtruyen.vn";
const method = "GET";
const BlogtruyenInfo = {
    version: "2.0.1",
    name: "Blogtruyen",
    icon: "icon.png",
    author: "Huynhzip3",
    authorWebsite: "https://github.com/huynh12345678",
    description: "Extension that pulls manga from Blogtruyen",
    websiteBaseURL: `${DOMAIN}`,
    contentRating: external_paperback_extensions_common_.ContentRating.MATURE,
    sourceTags: [
        {
            text: "Recommended",
            type: external_paperback_extensions_common_.TagType.BLUE
        }, 
    ]
};
class Blogtruyen extends types/* ZenSource */.bp {
    id = "blogtruyen";
    name = "blogtruyen";
    icon = "Blogtruyen.png";
    description = "BlogTruyen";
    websiteBaseURL = "https://blogtruyen.vn";
    contentRating = external_paperback_extensions_common_.ContentRating.EVERYONE;
    language = external_paperback_extensions_common_.LanguageCode.VIETNAMESE;
    getMangaInternalURL = (mangaId)=>{
        if (mangaId.includes("/")) mangaId = mangaId.split("/")[1];
        return `/${this.id}/${mangaId}`;
    };
    getMangaShareUrl(mangaId) {
        return `${DOMAIN}/${mangaId}`;
    }
    requestManager = createRequestManager({
        requestsPerSecond: 5,
        requestTimeout: 20000,
        interceptor: {
            interceptRequest: async (request)=>{
                request.headers = {
                    ...request.headers ?? {},
                    ...{
                        referer: DOMAIN
                    }
                };
                return request;
            },
            interceptResponse: async (response)=>response
        }
    });
    getSection = async (sectionId, page)=>{
        switch(sectionId){
            case "top":
                return await this.getViewMoreItems("new_updated", {
                    page
                });
            case "new_romcom":
                const request = createRequestObject({
                    url: `${this.websiteBaseURL}/ajax/Category/AjaxLoadMangaByCategory?id=25&orderBy=5&p=${page}`,
                    method: "GET"
                });
                const data = await this.requestManager.schedule(request, 1);
                const $ = this.cheerio.load(data.data);
                const manga = parseViewMore($, 0);
                const metadata = !isLastPage($) ? {
                    page: page + 1
                } : undefined;
                return createPagedResults({
                    results: manga,
                    metadata
                });
            default:
                return await this.getViewMoreItems(sectionId, {
                    page
                });
        }
    };
    async getMangaDetails(mangaId) {
        const url = `${DOMAIN}/${mangaId}`;
        const request = createRequestObject({
            url: url,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        const tags = [];
        let creator = "";
        let status = 1; //completed, 1 = Ongoing
        const desc = $(".content").text();
        for (const test of $("p", ".description").toArray()){
            switch($(test).clone().children().remove().end().text().trim()){
                case "T\xe1c gi\u1EA3:":
                    creator = decodeHTMLEntity($("a", test).text());
                    break;
                case "Th\u1EC3 lo\u1EA1i:":
                    for (const t of $(".category > a", test).toArray()){
                        const genre = $(t).text().trim();
                        const id = $(t).attr("href") ?? genre;
                        tags.push(createTag({
                            label: genre,
                            id
                        }));
                    }
                    status = $(".color-red", $(test).next()).text().toLowerCase().includes("\u0111ang") ? 1 : 0;
                    break;
                default:
                    break;
            }
        }
        const image = $(".thumbnail > img").attr("src") ?? "";
        return createManga({
            id: mangaId,
            author: creator,
            artist: creator,
            desc: desc,
            titles: [
                decodeHTMLEntity($(".entry-title > a").text().trim())
            ],
            image: encodeURI(image),
            status,
            // rating: parseFloat($('span[itemprop="ratingValue"]').text()),
            hentai: false,
            tags: [
                createTagSection({
                    label: "genres",
                    tags: tags,
                    id: "0"
                })
            ]
        });
    }
    async getChapters(mangaId) {
        const request = createRequestObject({
            url: `${DOMAIN}/${mangaId}`,
            method
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const chapters = [];
        let i = 0;
        for (const obj of $("#list-chapters > p").toArray()){
            i++;
            const getTime = $(".publishedDate", obj).text().trim().split(" ");
            const time = {
                date: getTime[0],
                time: getTime[1]
            };
            const arrDate = time.date.split(/\//);
            const fixDate = [
                arrDate[1],
                arrDate[0],
                arrDate[2]
            ].join("/");
            const finalTime = new Date(fixDate + " " + time.time);
            chapters.push(createChapter({
                id: $("span.title > a", obj).first().attr("href")?.split("/")[1],
                chapNum: i,
                name: decodeHTMLEntity($("span.title > a", obj).text().trim()),
                mangaId: mangaId,
                langCode: external_paperback_extensions_common_.LanguageCode.VIETNAMESE,
                time: finalTime
            }));
        }
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        const request = createRequestObject({
            url: `https://blogtruyen.vn/${chapterId}/abc`,
            method
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const pages = [];
        for (const obj of $("#content > img").toArray()){
            if (!obj.attribs["src"]) continue;
            const link = (0,url/* proxyImage */.qG)(obj.attribs["src"], DOMAIN);
            pages.push(link);
        }
        const chapterDetails = createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages,
            longStrip: false
        });
        return chapterDetails;
    }
    async getHomePageSections(sectionCallback) {
        const featured = createHomeSection({
            id: "featured",
            title: "Truy\u1EC7n \u0110\u1EC1 C\u1EED",
            type: external_paperback_extensions_common_.HomeSectionType.featured
        });
        const hot = createHomeSection({
            id: "hot",
            title: "Truy\u1EC7n xem nhi\u1EC1u nh\u1EA5t",
            view_more: true
        });
        const newUpdated = createHomeSection({
            id: "new_updated",
            title: "Truy\u1EC7n m\u1EDBi c\u1EADp nh\u1EADt",
            view_more: true
        });
        const newAdded = createHomeSection({
            id: "new_added",
            title: "Truy\u1EC7n m\u1EDBi \u0111\u0103ng",
            view_more: false
        });
        const full = createHomeSection({
            id: "full",
            title: "\u0110\u1EE7 b\u1ED9",
            view_more: true
        });
        const girl = createHomeSection({
            id: "girl",
            title: "Con g\xe1i",
            view_more: true
        });
        const boy = createHomeSection({
            id: "boy",
            title: "Con trai",
            view_more: true
        });
        //Load empty sections
        sectionCallback(hot);
        console.log(featured);
        sectionCallback(newUpdated);
        sectionCallback(newAdded);
        sectionCallback(full);
        sectionCallback(girl);
        sectionCallback(boy);
        ///Get the section data
        //Featured
        let url = `${DOMAIN}`;
        let request = createRequestObject({
            url: `${DOMAIN}/thumb`,
            method: "GET"
        });
        let data = await this.requestManager.schedule(request, 1);
        let $ = this.cheerio.load(data.data);
        const featuredItems = [];
        for (const manga of $("a", "div#storyPinked").toArray()){
            const title = $("p:first-child", $(manga).next()).text().trim();
            const id = $(manga).attr("href");
            const image = $("img", manga).attr("src")?.replace("300x300", "500x") ?? "";
            const subtitle = $("p:last-child", $(manga).next()).text().trim();
            if (!id || !title) continue;
            featuredItems.push(createMangaTile({
                id: id.split("/")[1],
                image: encodeURI(image),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: decodeHTMLEntity(subtitle)
                })
            }));
        }
        featured.items = featuredItems;
        sectionCallback(featured);
        // Hot
        url = "";
        request = createRequestObject({
            url: "https://blogtruyen.vn/ajax/Search/AjaxLoadListManga?key=tatca&orderBy=3&p=1",
            method: "GET"
        });
        const hotItems = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (const obj of $("p:not(:first-child)", ".list").toArray()){
            const title = $(`a`, obj).text().trim();
            const subtitle = "Ch\u01B0\u01A1ng " + $(`span:nth-child(2)`, obj).text().trim();
            const image = $("img", $(obj).next()).attr("src") ?? "";
            const id = $(`a`, obj).attr("href") ?? title;
            hotItems.push(createMangaTile({
                id: id.split("/")[1],
                image: encodeURI(image.replace("150x", "300x300")),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        hot.items = hotItems;
        sectionCallback(hot);
        //New Updates
        url = "";
        request = createRequestObject({
            url: "https://blogtruyen.vn/thumb",
            method: "GET"
        });
        const newUpdatedItems = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (const obj1 of $(".row", ".list-mainpage .storyitem").toArray().splice(0, 20)){
            const title = $(`h3.title > a`, obj1).attr("title") ?? "";
            const subtitle = $(`div:nth-child(2) > div:nth-child(4) > span:nth-child(1) > .color-red`, obj1).text();
            const image = $(`div:nth-child(1) > a > img`, obj1).attr("src");
            const id = ($(`div:nth-child(1) > a`, obj1).attr("href") ?? title) ?? "";
            // if (!id || !subtitle) continue;
            newUpdatedItems.push(createMangaTile({
                id: id.split("/")[1],
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : encodeURI(image),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: "Ch\u01B0\u01A1ng " + subtitle
                })
            }));
        }
        newUpdated.items = newUpdatedItems;
        sectionCallback(newUpdated);
        //New Added
        url = DOMAIN;
        request = createRequestObject({
            url: "https://blogtruyen.vn/thumb",
            method: "GET"
        });
        const newAddItems = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (const obj2 of $("a", "#top-newest-story").toArray()){
            const title = $(obj2).attr("title")?.trim() ?? "";
            // let subtitle = $(`.info-bottom > span`, obj).text().split(":")[0].trim();
            const image = $(`img`, obj2).attr("src");
            const id = $(obj2).attr("href") ?? title;
            // if (!id || !subtitle) continue;
            newAddItems.push(createMangaTile({
                id: id.split("/")[1],
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : encodeURI(image.replace("110x110", "300x300")),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                })
            }));
        }
        newAdded.items = newAddItems;
        sectionCallback(newAdded);
        //full
        url = "";
        request = createRequestObject({
            url: "https://blogtruyen.vn/ajax/Category/AjaxLoadMangaByCategory?id=0&orderBy=5&p=1",
            method: "GET"
        });
        const fullItems = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (const obj3 of $("p:not(:first-child)", ".list").toArray()){
            const title = $(`a`, obj3).text().trim();
            const subtitle = "Ch\u01B0\u01A1ng " + $(`span:nth-child(2)`, obj3).text().trim();
            const image = $("img", $(obj3).next()).attr("src") ?? "";
            const id = $(`a`, obj3).attr("href") ?? title;
            fullItems.push(createMangaTile({
                id: id.split("/")[1],
                image: encodeURI(image.replace("150x", "300x300")),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        full.items = fullItems;
        sectionCallback(full);
        //girl
        url = "";
        request = createRequestObject({
            url: "https://blogtruyen.vn/ajax/Category/AjaxLoadMangaByCategory?id=29&orderBy=5&p=1",
            method: "GET"
        });
        const girlItems = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (const obj4 of $("p:not(:first-child)", ".list").toArray()){
            const title = $(`a`, obj4).text().trim();
            const subtitle = "Ch\u01B0\u01A1ng " + $(`span:nth-child(2)`, obj4).text().trim();
            const image = $("img", $(obj4).next()).attr("src") ?? "";
            const id = $(`a`, obj4).attr("href") ?? title;
            girlItems.push(createMangaTile({
                id: id.split("/")[1],
                image: encodeURI(image.replace("150x", "300x300")),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        girl.items = girlItems;
        sectionCallback(girl);
        //boy
        url = "";
        request = createRequestObject({
            url: "https://blogtruyen.vn/ajax/Category/AjaxLoadMangaByCategory?id=31&orderBy=5&p=1",
            method: "GET"
        });
        const boyItems = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (const obj5 of $("p:not(:first-child)", ".list").toArray()){
            const title = $(`a`, obj5).text().trim();
            const subtitle = "Ch\u01B0\u01A1ng " + $(`span:nth-child(2)`, obj5).text().trim();
            const image = $("img", $(obj5).next()).attr("src") ?? "";
            const id = $(`a`, obj5).attr("href") ?? title;
            boyItems.push(createMangaTile({
                id: id.split("/")[1],
                image: encodeURI(image.replace("150x", "300x300")),
                title: createIconText({
                    text: decodeHTMLEntity(title)
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        boy.items = boyItems;
        sectionCallback(boy);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 1;
        const param = "";
        let url = "";
        let select = 1;
        switch(homepageSectionId){
            case "hot":
                url = `${DOMAIN}/ajax/Search/AjaxLoadListManga?key=tatca&orderBy=3&p=${page}`;
                select = 0;
                break;
            case "new_updated":
                url = `${DOMAIN}/thumb-${page}`;
                select = 1;
                break;
            case "full":
                url = `${DOMAIN}/ajax/Category/AjaxLoadMangaByCategory?id=0&orderBy=5&p=${page}`;
                select = 0;
                break;
            case "girl":
                url = `${DOMAIN}/ajax/Category/AjaxLoadMangaByCategory?id=29&orderBy=5&p=${page}`;
                select = 0;
                break;
            case "boy":
                url = `${DOMAIN}/ajax/Category/AjaxLoadMangaByCategory?id=31&orderBy=5&p=${page}`;
                select = 0;
                break;
            default:
                return Promise.resolve(createPagedResults({
                    results: []
                }));
        }
        const request = createRequestObject({
            url,
            method,
            param
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const manga = parseViewMore($, select);
        metadata = !isLastPage($) ? {
            page: page + 1
        } : undefined;
        return createPagedResults({
            results: manga,
            metadata
        });
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 1;
        const tags = query.includedTags?.map((tag)=>tag.id
        ) ?? [];
        const request = createRequestObject({
            url: encodeURI(`${DOMAIN}/timkiem/nangcao/1/0/${tags[0] ? tags[0] : "-1"}/-1?txt=${query.title ? query.title : ""}`),
            method: "GET",
            param: encodeURI(`&p=${page}`)
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        const tiles = parseSearch($);
        metadata = !isLastPage($) ? {
            page: page + 1
        } : undefined;
        return createPagedResults({
            results: tiles,
            metadata
        });
    }
    async getSearchTags() {
        const tags = [];
        const url = `${DOMAIN}/timkiem/nangcao`;
        const request = createRequestObject({
            url: url,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        //the loai
        for (const tag of $("li", ".list-unstyled.row").toArray()){
            const label = decodeHTMLEntity($(tag).text().trim());
            const id = $(tag).attr("data-id") ?? label;
            if (!id || !label) continue;
            tags.push({
                id: id,
                label: label
            });
        }
        const tagSections = [
            createTagSection({
                id: "0",
                label: "Th\u1EC3 Lo\u1EA1i",
                tags: tags.map((x)=>createTag(x)
                )
            }), 
        ];
        return tagSections;
    }
}


/***/ }),

/***/ 2059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ MangaDex)
/* harmony export */ });
/* unused harmony export MangaDexInfo */
/* harmony import */ var paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4580);
/* harmony import */ var paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1386);
/* harmony import */ var _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(562);
/* harmony import */ var _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9517);
/* harmony import */ var _MangaDexSimilarManga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3138);
/* harmony import */ var _external_tag_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(271);
/* harmony import */ var _MangaDexParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1724);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities__WEBPACK_IMPORTED_MODULE_1__]);
entities__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @typescript-eslint/ban-ts-comment */ 







const MANGADEX_DOMAIN = "https://mangadex.org";
const MANGADEX_API = "https://api.mangadex.org";
const COVER_BASE_URL = "https://uploads.mangadex.org/covers";
// Titles recommendations are shown on the homepage when enabled in source settings.
// Recommendations are made using https://github.com/Similar-Manga
const RECOMMENDATION_URL = "https://framboisepi.github.io/SimilarData";
const MangaDexInfo = {
    author: "nar1n",
    description: "Extension that pulls manga from MangaDex",
    icon: "icon.png",
    name: "MangaDex",
    version: "2.1.9",
    authorWebsite: "https://github.com/nar1n",
    websiteBaseURL: MANGADEX_DOMAIN,
    contentRating: paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.ContentRating.EVERYONE,
    language: paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.ENGLISH,
    sourceTags: [
        {
            text: "Notifications",
            type: paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.TagType.GREEN
        }, 
    ]
};
class MangaDex extends _types__WEBPACK_IMPORTED_MODULE_7__/* .ZenSource */ .bp {
    id = "mangadex";
    description = "L\u1ECDc manga romcom m\u1EDBi \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt tr\xean Mangadex";
    icon = "MangaDex.png";
    name = "mangadex";
    websiteBaseURL = "https://mangadex.org";
    contentRating = paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.ContentRating.EVERYONE;
    language = paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.ENGLISH;
    getSection = async (sectionId, page)=>{
        const offset = page * 100 - 100;
        const includedTags = [
            {
                id: "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
                label: "romance"
            }
        ];
        const excludedTags = "3b60b75c-a2d7-4860-ab56-05f391bb889c,3b60b75c-a2d7-4860-ab56-05f391bb889c,5920b825-4181-4a17-beeb-9918b0ff7a30,a3c67850-4684-404e-9b7f-c69850ee5da6,acc803a4-c95a-4c22-86fc-eb6b582d82a2,f8f62932-27da-4fe4-8ee1-6779a8c5edba,2bd2e8d0-f146-434a-9b51-fc9ff2c5fe6a,2d1f5d56-a1e5-4d0d-a961-2193588b08ec,5bd0e105-4481-44ca-b6e7-7544da56b1a3,65761a2a-415e-47f3-bef2-a9dababba7a6,9ab53f92-3eed-4e9b-903a-917c86035ee3,aafb99c1-7f60-43fa-b75f-fc9502ce29c7".split(",").map((id)=>({
                id,
                label: ""
            })
        );
        const languages = [
            "en",
            "vi"
        ];
        let url = "";
        switch(sectionId){
            case "top":
                return this.getViewMoreItems("popular", {
                    offset
                });
            case "top_romcom":
                url = new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addQueryParameter("limit", 100).addQueryParameter("order", {
                    followedCount: "desc"
                }).addQueryParameter("offset", offset).addQueryParameter("includes", [
                    "cover_art"
                ]).addQueryParameter("includedTags", includedTags?.map((x)=>x.id
                )).addQueryParameter("excludedTags", excludedTags?.map((x)=>x.id
                )).addQueryParameter("order", {
                    rating: "desc"
                }).addQueryParameter("availableTranslatedLanguage", languages).addQueryParameter("originalLanguage", [
                    "ja"
                ]).addQueryParameter("hasAvailableChapters", true).buildUrl();
                break;
            case "new_romcom":
                url = new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addQueryParameter("limit", 100).addQueryParameter("order", {
                    followedCount: "desc"
                }).addQueryParameter("offset", offset).addQueryParameter("includes", [
                    "cover_art"
                ]).addQueryParameter("includedTags", includedTags?.map((x)=>x.id
                )).addQueryParameter("excludedTags", excludedTags?.map((x)=>x.id
                )).addQueryParameter("order", {
                    createdAt: "desc"
                }).addQueryParameter("availableTranslatedLanguage", languages).addQueryParameter("originalLanguage", [
                    "ja"
                ]).addQueryParameter("hasAvailableChapters", true).buildUrl();
                break;
            default:
                return await this.getViewMoreItems(sectionId, {
                    offset: page * 100 - 100
                });
        }
        const request = createRequestObject({
            url,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        if (json.data === undefined) throw new Error("Failed to parse json results for getViewMoreItems");
        const results = await (0,_MangaDexParser__WEBPACK_IMPORTED_MODULE_6__/* .parseMangaList */ .k)(json.data, this, _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getHomepageThumbnail */ .bv);
        return createPagedResults({
            results,
            metadata: {
                offset: offset + 100
            }
        });
    };
    MANGADEX_DOMAIN = MANGADEX_DOMAIN;
    MANGADEX_API = MANGADEX_API;
    COVER_BASE_URL = COVER_BASE_URL;
    requestManager = createRequestManager({
        requestsPerSecond: 4,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request)=>{
                // Impossible to have undefined headers, ensured by the app
                request.headers = {
                    ...request.headers,
                    referer: `${this.MANGADEX_DOMAIN}/`
                };
                let accessToken = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getAccessToken */ .hP)(this.stateManager);
                if (request.url.includes("auth/") || !accessToken) return request;
                // Padding 60 secs to make sure it wont expire in-transit if the connection is really bad
                if (Number(accessToken.tokenBody.exp) <= Date.now() / 1000 - 60) {
                    try {
                        const response = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .authEndpointRequest */ .PK)(this.requestManager, "refresh", {
                            token: accessToken.refreshToken
                        });
                        accessToken = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .saveAccessToken */ .j1)(this.stateManager, response.token.session, response.token.refresh);
                        if (!accessToken) return request;
                    } catch  {
                        return request;
                    }
                }
                // Impossible to have undefined headers, ensured by the app
                request.headers = {
                    ...request.headers,
                    authorization: "Bearer " + accessToken.accessToken
                };
                return request;
            },
            interceptResponse: async (x)=>x
        }
    });
    stateManager = createSourceStateManager({});
    async getSourceMenu() {
        return Promise.resolve(createSection({
            id: "main",
            header: "Source Settings",
            rows: async ()=>[
                    await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .accountSettings */ .Hl)(this.stateManager, this.requestManager),
                    (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .contentSettings */ .LK)(this.stateManager),
                    (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .thumbnailSettings */ .hz)(this.stateManager),
                    (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .homepageSettings */ .u5)(this.stateManager),
                    (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .resetSettings */ .Sl)(this.stateManager), 
                ]
        }));
    }
    getMangaShareUrl(mangaId) {
        return `${this.MANGADEX_DOMAIN}/title/${mangaId}`;
    }
    async getSearchTags() {
        const sections = {};
        for (const tag of _external_tag_json__WEBPACK_IMPORTED_MODULE_5__){
            const group = tag.data.attributes.group;
            if (sections[group] == null) {
                sections[group] = createTagSection({
                    id: group,
                    label: group.charAt(0).toUpperCase() + group.slice(1),
                    tags: []
                });
            }
            const tagObject = createTag({
                id: tag.data.id,
                label: tag.data.attributes.name.en
            });
            // Since we already know that a section for the group has to exist, eslint is complaining
            // for no reason at all.
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            sections[group].tags = [
                ...sections[group]?.tags ?? [],
                tagObject
            ];
        }
        return Object.values(sections);
    }
    async supportsSearchOperators() {
        return true;
    }
    async supportsTagExclusion() {
        return true;
    }
    async getCustomListRequestURL(listId, ratings) {
        const request = createRequestObject({
            url: `${this.MANGADEX_API}/list/${listId}`,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        return new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addQueryParameter("limit", 100).addQueryParameter("contentRating", ratings).addQueryParameter("includes", [
            "cover_art"
        ]).addQueryParameter("ids", json.data.relationships.filter((x)=>x.type == "manga"
        ).map((x)=>x.id
        )).buildUrl();
    }
    async getCoversMapping(mangaIds, ratings) {
        const mapping = {};
        const request = createRequestObject({
            url: new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addQueryParameter("limit", 100).addQueryParameter("contentRating", ratings).addQueryParameter("ids", mangaIds).addQueryParameter("includes", [
                "cover_art"
            ]).buildUrl(),
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        for (const manga of json.data){
            const mangaId = manga.id;
            const coverFileName = manga.relationships.filter((x)=>x.type == "cover_art"
            ).map((x)=>x.attributes?.fileName
            )[0];
            if (!mangaId || !coverFileName) continue;
            mapping[mangaId] = coverFileName;
        }
        return mapping;
    }
    async getMangaDetails(mangaId) {
        if (!mangaId.includes("-")) {
            // Legacy Id
            console.log("OLD ID: PLEASE MIGRATE");
            throw new Error("OLD ID: PLEASE MIGRATE");
        }
        const request = createRequestObject({
            url: new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addPathComponent(mangaId).addQueryParameter("includes", [
                "author",
                "artist",
                "cover_art"
            ]).buildUrl(),
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        const mangaDetails = json.data.attributes;
        const titles = [
            ...Object.values(mangaDetails.title),
            ...mangaDetails.altTitles.flatMap((x)=>Object.values(x)
            ), 
        ].map((x)=>this.decodeHTMLEntity(x)
        ).filter((x)=>x
        );
        const desc = this.decodeHTMLEntity(mangaDetails.description.en)?.replace(/\[\/?[bus]]/g, ""); // Get rid of BBcode tags
        let status = paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.MangaStatus.COMPLETED;
        if (mangaDetails.status == "ongoing") {
            status = paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.MangaStatus.ONGOING;
        }
        const tags = [];
        for (const tag of mangaDetails.tags){
            const tagName = tag.attributes.name;
            tags.push(createTag({
                id: tag.id,
                label: Object.keys(tagName).map((keys)=>tagName[keys]
                )[0] ?? "Unknown"
            }));
        }
        const author = json.data.relationships.filter((x)=>x.type == "author"
        ).map((x)=>x.attributes.name
        ).join(", ");
        const artist = json.data.relationships.filter((x)=>x.type == "artist"
        ).map((x)=>x.attributes.name
        ).join(", ");
        const coverFileName = json.data.relationships.filter((x)=>x.type == "cover_art"
        ).map((x)=>x.attributes?.fileName
        )[0];
        let image;
        if (coverFileName) {
            image = `${this.COVER_BASE_URL}/${mangaId}/${coverFileName}${_MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .MDImageQuality.getEnding */ .hR.getEnding(await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getMangaThumbnail */ .O7)(this.stateManager))}`;
        } else {
            image = "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg";
        }
        return createManga({
            id: mangaId,
            titles,
            image,
            author,
            artist,
            desc,
            rating: 5,
            status,
            tags: [
                createTagSection({
                    id: "tags",
                    label: "Tags",
                    tags: tags
                }), 
            ]
        });
    }
    async getChapters(mangaId) {
        if (!mangaId.includes("-")) {
            // Legacy Id
            console.log("OLD ID: PLEASE MIGRATE");
            throw new Error("OLD ID: PLEASE MIGRATE");
        }
        const languages = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getLanguages */ .Vb)(this.stateManager);
        const skipSameChapter = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getSkipSameChapter */ .gs)(this.stateManager);
        const ratings = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getRatings */ .DC)(this.stateManager);
        const collectedChapters = [];
        const chapters = [];
        let offset = 0;
        let sortingIndex = 0;
        let hasResults = true;
        while(hasResults){
            const request = createRequestObject({
                url: new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addPathComponent(mangaId).addPathComponent("feed").addQueryParameter("limit", 500).addQueryParameter("offset", offset).addQueryParameter("includes", [
                    "scanlation_group"
                ]).addQueryParameter("translatedLanguage", languages).addQueryParameter("order", {
                    volume: "desc",
                    chapter: "desc",
                    publishAt: "desc"
                }).addQueryParameter("contentRating", ratings).addQueryParameter("includeFutureUpdates", "0").buildUrl(),
                method: "GET"
            });
            const response = await this.requestManager.schedule(request, 1);
            const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
            offset += 500;
            if (json.data === undefined) throw new Error(`Failed to parse json results for ${mangaId}`);
            for (const chapter of json.data){
                const chapterId = chapter.id;
                const chapterDetails = chapter.attributes;
                const name = this.decodeHTMLEntity(chapterDetails.title);
                const chapNum = Number(chapterDetails?.chapter);
                const volume = Number(chapterDetails?.volume);
                const langCode = _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .MDLanguages.getPBCode */ .F0.getPBCode(chapterDetails.translatedLanguage);
                const time = new Date(chapterDetails.publishAt);
                const group = chapter.relationships.filter((x)=>x.type == "scanlation_group"
                ).map((x)=>x.attributes.name
                ).join(", ");
                const pages = Number(chapterDetails.pages);
                const identifier = `${volume}-${chapNum}-${chapterDetails.translatedLanguage}`;
                if ((!collectedChapters.includes(identifier) || !skipSameChapter) && pages > 0) {
                    chapters.push(createChapter({
                        id: chapterId,
                        mangaId: mangaId,
                        name,
                        chapNum,
                        volume,
                        langCode,
                        group,
                        time,
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        sortingIndex
                    }));
                    collectedChapters.push(identifier);
                    sortingIndex--;
                }
            }
            if (json.total <= offset) {
                hasResults = false;
            }
        }
        return chapters;
    }
    async getChapterDetails(mangaId, chapterId) {
        if (!chapterId.includes("-")) {
            // Numeric ID
            console.log("OLD ID: PLEASE MIGRATE");
            throw new Error("OLD ID: PLEASE REFRESH AND CLEAR ORPHANED CHAPTERS");
        }
        const dataSaver = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getDataSaver */ .X8)(this.stateManager);
        const request = createRequestObject({
            url: `${this.MANGADEX_API}/at-home/server/${chapterId}`,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        const serverUrl = json.baseUrl;
        const chapterDetails = json.chapter;
        let pages;
        if (dataSaver) {
            pages = chapterDetails.dataSaver.map((x)=>`${serverUrl}/data-saver/${chapterDetails.hash}/${x}`
            );
        } else {
            pages = chapterDetails.data.map((x)=>`${serverUrl}/data/${chapterDetails.hash}/${x}`
            );
        }
        // The chapter is being read, add the mangaId to the recommendation list
        (0,_MangaDexSimilarManga__WEBPACK_IMPORTED_MODULE_4__/* .addRecommendedId */ .XE)(this.stateManager, mangaId);
        return createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages,
            longStrip: false
        });
    }
    async getSearchResults(query, metadata) {
        const ratings = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getRatings */ .DC)(this.stateManager);
        const offset = metadata?.offset ?? 0;
        let results = [];
        const searchType = query.title?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i) ? "ids[]" : "title";
        const url = new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga")// Since we already know that a title must exist, we can ignore this.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .addQueryParameter(searchType, (query.title?.length ?? 0) > 0 ? encodeURIComponent(query.title) : undefined).addQueryParameter("limit", 100).addQueryParameter("offset", offset).addQueryParameter("contentRating", ratings).addQueryParameter("includes", [
            "cover_art"
        ]).addQueryParameter("includedTags", query.includedTags?.map((x)=>x.id
        )).addQueryParameter("includedTagsMode", query.includeOperator).addQueryParameter("excludedTags", query.excludedTags?.map((x)=>x.id
        )).addQueryParameter("excludedTagsMode", query.excludeOperator).buildUrl();
        const request = createRequestObject({
            url: url,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        if (response.status != 200) {
            return createPagedResults({
                results
            });
        }
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        if (json.data === undefined) {
            throw new Error("Failed to parse json for the given search");
        }
        results = await (0,_MangaDexParser__WEBPACK_IMPORTED_MODULE_6__/* .parseMangaList */ .k)(json.data, this, _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getSearchThumbnail */ .WH);
        return createPagedResults({
            results,
            metadata: {
                offset: offset + 100
            }
        });
    }
    async getHomePageSections(sectionCallback) {
        const ratings = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getRatings */ .DC)(this.stateManager);
        const languages = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getLanguages */ .Vb)(this.stateManager);
        const promises = [];
        // On the homepage we only show sections enabled in source settings:
        // enabled_homepage_sections and recommended titles sections
        const enabled_homepage_sections = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getEnabledHomePageSections */ .uL)(this.stateManager);
        const sections = [
            {
                request: createRequestObject({
                    url: await this.getCustomListRequestURL("ff210dec-862b-4c17-8608-0e7f97c70488", ratings),
                    method: "GET"
                }),
                section: createHomeSection({
                    id: "seasonal",
                    title: "Seasonal",
                    type: paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.HomeSectionType.featured
                })
            },
            {
                request: createRequestObject({
                    url: new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addQueryParameter("limit", 20).addQueryParameter("order", {
                        followedCount: "desc"
                    }).addQueryParameter("contentRating", ratings).addQueryParameter("includes", [
                        "cover_art"
                    ]).buildUrl(),
                    method: "GET"
                }),
                section: createHomeSection({
                    id: "popular",
                    title: "Popular",
                    view_more: true
                })
            },
            {
                request: createRequestObject({
                    url: new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("chapter").addQueryParameter("limit", 100).addQueryParameter("order", {
                        publishAt: "desc"
                    }).addQueryParameter("translatedLanguage", languages).addQueryParameter("includes", [
                        "manga"
                    ]).addQueryParameter("includeFutureUpdates", "0").buildUrl(),
                    method: "GET"
                }),
                section: createHomeSection({
                    id: "latest_updates",
                    title: "Latest Updates",
                    view_more: true
                })
            }, 
        ];
        for (const section1 of sections){
            // We only add the section if it is requested by the user in settings
            if (enabled_homepage_sections.includes(section1.section.id)) {
                // Let the app load empty sections
                sectionCallback(section1.section);
                // Get the section data
                promises.push(this.requestManager.schedule(section1.request, 1).then(async (response)=>{
                    const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
                    if (json.data === undefined) throw new Error(`Failed to parse json results for section ${section1.section.title}`);
                    switch(section1.section.id){
                        case "latest_updates":
                            {
                                const coversMapping = await this.getCoversMapping(json.data.map((x1)=>x1.relationships.filter((x)=>x.type == "manga"
                                    ).map((x)=>x.id
                                    )[0]
                                ), ratings);
                                section1.section.items = await (0,_MangaDexParser__WEBPACK_IMPORTED_MODULE_6__/* .parseChapterList */ .w)(json.data, coversMapping, this, _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getHomepageThumbnail */ .bv, ratings);
                                break;
                            }
                        default:
                            section1.section.items = await (0,_MangaDexParser__WEBPACK_IMPORTED_MODULE_6__/* .parseMangaList */ .k)(json.data, this, _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getHomepageThumbnail */ .bv);
                    }
                    sectionCallback(section1.section);
                }));
            }
        }
        // If the user want to see recommendations on the homepage, we process them
        if (await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getEnabledRecommendations */ .h6)(this.stateManager)) {
            const recommendedIds = await (0,_MangaDexSimilarManga__WEBPACK_IMPORTED_MODULE_4__/* .getRecommendedIds */ .De)(this.stateManager);
            for (const recommendedId of recommendedIds){
                // First we fetch similar titles
                const similarRequest = createRequestObject({
                    url: `${RECOMMENDATION_URL}/similar/${recommendedId}.json`,
                    method: "GET"
                });
                promises.push(this.requestManager.schedule(similarRequest, 1).then(async (similarResponse)=>{
                    // We should only process if the response is valid
                    // We won't throw an error but silently pass as an error can occurre with
                    // titles unsupported by SimilarManga (new titles for example)
                    if (similarResponse.status !== 200) {
                        console.log(`Could not fetch similar titles for id: ${recommendedId}, request failed with status ${similarResponse.status}`);
                    } else {
                        const similarJson = typeof similarResponse.data === "string" ? JSON.parse(similarResponse.data) : similarResponse.data;
                        // We should only process if the result is valid
                        // We won't throw an error but silently pass as an error can occurre with
                        // titles unsupported by SimilarManga (new titles for example)
                        if (similarJson.id === undefined) {
                            console.log("Could not fetch similar titles for id: " + recommendedId + ", json is invalid");
                        } else {
                            // We know the title of the recommended manga, we can thus create the homepage section
                            const section = createHomeSection({
                                id: recommendedId,
                                // Can titles be html encoded?
                                title: "More like " + this.decodeHTMLEntity(similarJson.title.en),
                                view_more: false
                            });
                            // Let the app load empty sections
                            sectionCallback(section);
                            // Generate the MangaTiles list, sorted by decreasing similarity
                            const results = [];
                            // We first add the title used for the recommendation
                            let image;
                            if (similarJson.coverFileName === "unknown") {
                                image = "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg";
                            } else {
                                image = `${COVER_BASE_URL}/${recommendedId}/${similarJson.coverFileName}${_MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .MDImageQuality.getEnding */ .hR.getEnding(await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getMangaThumbnail */ .O7)(this.stateManager))}`;
                            }
                            results.push(createMangaTile({
                                id: recommendedId,
                                title: createIconText({
                                    text: this.decodeHTMLEntity(similarJson.title.en) ?? "No Title"
                                }),
                                image
                            }));
                            // We then add similar titles, ordered by decreasing similarity
                            for (const manga of similarJson.matches){
                                // We should only add the title if its rating is enabled
                                if (ratings.includes(manga.contentRating)) {
                                    // The similar api contains the coverFileName or 'unknown'
                                    let image;
                                    if (manga.coverFileName === "unknown") {
                                        image = "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg";
                                    } else {
                                        image = `${COVER_BASE_URL}/${manga.id}/${manga.coverFileName}${_MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .MDImageQuality.getEnding */ .hR.getEnding(await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getMangaThumbnail */ .O7)(this.stateManager))}`;
                                    }
                                    results.push(createMangaTile({
                                        id: manga.id,
                                        title: createIconText({
                                            text: this.decodeHTMLEntity(manga.title.en) ?? "No Title"
                                        }),
                                        subtitleText: createIconText({
                                            text: `Similarity ${manga.score.toFixed(2)}`
                                        }),
                                        image
                                    }));
                                }
                            }
                            section.items = results;
                            sectionCallback(section);
                        }
                    }
                }));
            }
        }
        // Make sure the function completes
        await Promise.all(promises);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const offset = metadata?.offset ?? 0;
        const collectedIds = metadata?.collectedIds ?? [];
        let results = [];
        const ratings = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getRatings */ .DC)(this.stateManager);
        const languages = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getLanguages */ .Vb)(this.stateManager);
        let url = "";
        switch(homepageSectionId){
            case "popular":
                {
                    url = new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("manga").addQueryParameter("limit", 100).addQueryParameter("order", {
                        followedCount: "desc"
                    }).addQueryParameter("offset", offset).addQueryParameter("contentRating", ratings).addQueryParameter("includes", [
                        "cover_art"
                    ]).buildUrl();
                    break;
                }
            case "latest_updates":
                {
                    url = new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("chapter").addQueryParameter("limit", 100).addQueryParameter("offset", offset).addQueryParameter("order", {
                        publishAt: "desc"
                    }).addQueryParameter("translatedLanguage", languages).addQueryParameter("includes", [
                        "manga"
                    ]).addQueryParameter("includeFutureUpdates", "0").buildUrl();
                    break;
                }
        }
        const request = createRequestObject({
            url,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        if (json.data === undefined) throw new Error("Failed to parse json results for getViewMoreItems");
        switch(homepageSectionId){
            case "latest_updates":
                {
                    const coversMapping = await this.getCoversMapping(json.data.map((x2)=>x2.relationships.filter((x)=>x.type == "manga"
                        ).map((x)=>x.id
                        )[0]
                    ), ratings);
                    results = await (0,_MangaDexParser__WEBPACK_IMPORTED_MODULE_6__/* .parseChapterList */ .w)(json.data, coversMapping, this, _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getHomepageThumbnail */ .bv, ratings);
                    break;
                }
            default:
                results = await (0,_MangaDexParser__WEBPACK_IMPORTED_MODULE_6__/* .parseMangaList */ .k)(json.data, this, _MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getHomepageThumbnail */ .bv);
        }
        return createPagedResults({
            results,
            metadata: {
                offset: offset + 100,
                collectedIds
            }
        });
    }
    async filterUpdatedManga(mangaUpdatesFoundCallback, time, ids) {
        let offset = 0;
        const maxRequests = 100;
        let loadNextPage = true;
        const updatedManga = [];
        const updatedAt = time.toISOString().split(".")[0]; // They support a weirdly truncated version of an ISO timestamp
        const languages = await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_2__/* .getLanguages */ .Vb)(this.stateManager);
        while(loadNextPage){
            const request = createRequestObject({
                url: new _MangaDexHelper__WEBPACK_IMPORTED_MODULE_3__/* .URLBuilder */ .UK(this.MANGADEX_API).addPathComponent("chapter").addQueryParameter("limit", 100).addQueryParameter("offset", offset).addQueryParameter("publishAtSince", updatedAt).addQueryParameter("order", {
                    publishAt: "desc"
                }).addQueryParameter("translatedLanguage", languages).addQueryParameter("includeFutureUpdates", "0").buildUrl(),
                method: "GET"
            });
            const response = await this.requestManager.schedule(request, 1);
            // If we have no content, there are no updates available
            if (response.status == 204) {
                return;
            }
            const json = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
            if (json.data === undefined) {
                // Log this, no need to throw.
                console.log(`Failed to parse JSON results for filterUpdatedManga using the date ${updatedAt} and the offset ${offset}`);
                return;
            }
            const mangaToUpdate = [];
            for (const chapter of json.data){
                const mangaId = chapter.relationships.filter((x)=>x.type == "manga"
                )[0]?.id;
                if (ids.includes(mangaId) && !updatedManga.includes(mangaId)) {
                    mangaToUpdate.push(mangaId);
                    updatedManga.push(mangaId);
                }
            }
            offset = offset + 100;
            if (json.total <= offset || offset >= 100 * maxRequests) {
                loadNextPage = false;
            }
            if (mangaToUpdate.length > 0) {
                mangaUpdatesFoundCallback(createMangaUpdates({
                    ids: mangaToUpdate
                }));
            }
        }
        mangaUpdatesFoundCallback(createMangaUpdates({
            ids: []
        }));
    }
    decodeHTMLEntity(str) {
        if (str == undefined) return undefined;
        return entities__WEBPACK_IMPORTED_MODULE_1__.decodeHTML(str);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F0": () => (/* binding */ MDLanguages),
/* harmony export */   "HO": () => (/* binding */ MDRatings),
/* harmony export */   "UK": () => (/* binding */ URLBuilder),
/* harmony export */   "hR": () => (/* binding */ MDImageQuality),
/* harmony export */   "q$": () => (/* binding */ MDHomepageSections)
/* harmony export */ });
class MDLanguagesClass {
    Languages = [
        {
            // Arabic
            name: "\u0627\u064E\u0644\u0652\u0639\u064E\u0631\u064E\u0628\u0650\u064A\u064E\u0651\u0629\u064F",
            MDCode: "ar",
            PBCode: "sa"
        },
        {
            // Bulgarian
            name: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
            MDCode: "bg",
            PBCode: "bg"
        },
        {
            // Bengali
            name: "\u09AC\u09BE\u0982\u09B2\u09BE",
            MDCode: "bn",
            PBCode: "bd"
        },
        {
            // Catalan
            name: "Catal\xe0",
            MDCode: "ca",
            PBCode: "es"
        },
        {
            // Czech
            name: "\u010Ce\u0161tina",
            MDCode: "cs",
            PBCode: "cz"
        },
        {
            // Danish
            name: "Dansk",
            MDCode: "da",
            PBCode: "dk"
        },
        {
            // German
            name: "Deutsch",
            MDCode: "de",
            PBCode: "de"
        },
        {
            // English
            name: "English",
            MDCode: "en",
            PBCode: "gb",
            default: true
        },
        {
            // Spanish
            name: "Espa\xf1ol",
            MDCode: "es",
            PBCode: "es"
        },
        {
            // Spanish (Latin American)
            name: "Espa\xf1ol (Latinoam\xe9rica)",
            MDCode: "es-la",
            PBCode: "es"
        },
        {
            // Farsi
            name: "\u0641\u0627\u0631\u0633\u06CC",
            MDCode: "fa",
            PBCode: "ir"
        },
        {
            // Finnish
            name: "Suomi",
            MDCode: "fi",
            PBCode: "fi"
        },
        {
            // French
            name: "Fran\xe7ais",
            MDCode: "fr",
            PBCode: "fr"
        },
        {
            // Hebrew
            name: "\u05E2\u05B4\u05D1\u05B0\u05E8\u05B4\u05D9\u05EA",
            MDCode: "he",
            PBCode: "il"
        },
        {
            // Hindi
            name: "\u0939\u093F\u0928\u094D\u0926\u0940",
            MDCode: "hi",
            PBCode: "in"
        },
        {
            // Hungarian
            name: "Magyar",
            MDCode: "hu",
            PBCode: "hu"
        },
        {
            // Indonesian
            name: "Indonesia",
            MDCode: "id",
            PBCode: "id"
        },
        {
            // Italian
            name: "Italiano",
            MDCode: "it",
            PBCode: "it"
        },
        {
            // Japanese
            name: "\u65E5\u672C\u8A9E",
            MDCode: "ja",
            PBCode: "jp"
        },
        {
            // Korean
            name: "\uD55C\uAD6D\uC5B4",
            MDCode: "ko",
            PBCode: "kr"
        },
        {
            // Lithuanian
            name: "Lietuvi\u0173",
            MDCode: "lt",
            PBCode: "lt"
        },
        {
            // Mongolian
            name: "\u043C\u043E\u043D\u0433\u043E\u043B",
            MDCode: "mn",
            PBCode: "mn"
        },
        {
            // Malay
            name: "Melayu",
            MDCode: "ms",
            PBCode: "my"
        },
        {
            // Burmese
            name: "\u1019\u103C\u1014\u103A\u1019\u102C\u1018\u102C\u101E\u102C",
            MDCode: "my",
            PBCode: "mm"
        },
        {
            // Dutch
            name: "Nederlands",
            MDCode: "nl",
            PBCode: "nl"
        },
        {
            // Norwegian
            name: "Norsk",
            MDCode: "no",
            PBCode: "no"
        },
        {
            // Polish
            name: "Polski",
            MDCode: "pl",
            PBCode: "pl"
        },
        {
            // Portuguese
            name: "Portugu\xeas",
            MDCode: "pt",
            PBCode: "pt"
        },
        {
            // Portuguese (Brazilian)
            name: "Portugu\xeas (Brasil)",
            MDCode: "pt-br",
            PBCode: "pt"
        },
        {
            // Romanian
            name: "Rom\xe2n\u0103",
            MDCode: "ro",
            PBCode: "ro"
        },
        {
            // Russian
            name: "P\u0443\u0441\u0441\u043A\u0438\u0439",
            MDCode: "ru",
            PBCode: "ru"
        },
        {
            // Serbian
            name: "C\u0440\u043F\u0441\u043A\u0438",
            MDCode: "sr",
            PBCode: "rs"
        },
        {
            // Swedish
            name: "Svenska",
            MDCode: "sv",
            PBCode: "se"
        },
        {
            // Thai
            name: "\u0E44\u0E17\u0E22",
            MDCode: "th",
            PBCode: "th"
        },
        {
            // Tagalog
            name: "Filipino",
            MDCode: "tl",
            PBCode: "ph"
        },
        {
            // Turkish
            name: "T\xfcrk\xe7e",
            MDCode: "tr",
            PBCode: "tr"
        },
        {
            // Ukrainian
            name: "Y\u043A\u0440\u0430\u0457\u0301\u043D\u0441\u044C\u043A\u0430",
            MDCode: "uk",
            PBCode: "ua"
        },
        {
            // Vietnamese
            name: "Ti\u1EBFng Vi\u1EC7t",
            MDCode: "vi",
            PBCode: "vn"
        },
        {
            // Chinese (Simplified)
            name: "\u4E2D\u6587 (\u7B80\u5316\u5B57)",
            MDCode: "zh",
            PBCode: "cn"
        },
        {
            // Chinese (Traditional)
            name: "\u4E2D\u6587 (\u7E41\u9AD4\u5B57)",
            MDCode: "zh-hk",
            PBCode: "hk"
        }, 
    ];
    constructor(){
        // Sorts the languages based on name
        this.Languages = this.Languages.sort((a, b)=>a.name > b.name ? 1 : -1
        );
    }
    getMDCodeList() {
        return this.Languages.map((Language)=>Language.MDCode
        );
    }
    getName(MDCode) {
        return this.Languages.filter((Language)=>Language.MDCode == MDCode
        )[0]?.name ?? "Unknown";
    }
    getPBCode(MDCode) {
        return this.Languages.filter((Language)=>Language.MDCode == MDCode
        )[0]?.PBCode ?? "_unknown";
    }
    getDefault() {
        return this.Languages.filter((Language)=>Language.default
        ).map((Language)=>Language.MDCode
        );
    }
}
const MDLanguages = new MDLanguagesClass;
class MDContentRatingClass {
    Ratings = [
        {
            name: "Safe",
            enum: "safe",
            default: true
        },
        {
            name: "Suggestive",
            enum: "suggestive"
        },
        {
            name: "Erotica",
            enum: "erotica"
        },
        {
            name: "Pornographic",
            enum: "pornographic"
        }
    ];
    getEnumList() {
        return this.Ratings.map((Rating)=>Rating.enum
        );
    }
    getName(ratingEum) {
        return this.Ratings.filter((Rating)=>Rating.enum == ratingEum
        )[0]?.name ?? "";
    }
    getDefault() {
        return this.Ratings.filter((Rating)=>Rating.default
        ).map((Rating)=>Rating.enum
        );
    }
}
const MDRatings = new MDContentRatingClass;
class MDHomepageSectionsClass {
    Sections = [
        {
            name: "Seasonal",
            enum: "seasonal",
            default: true
        },
        {
            name: "Popular",
            enum: "popular",
            default: true
        },
        {
            name: "Latest Updates",
            enum: "latest_updates",
            default: true
        }
    ];
    getEnumList() {
        return this.Sections.map((Sections)=>Sections.enum
        );
    }
    getName(sectionsEnum) {
        return this.Sections.filter((Sections)=>Sections.enum == sectionsEnum
        )[0]?.name ?? "";
    }
    getDefault() {
        return this.Sections.filter((Sections)=>Sections.default
        ).map((Sections)=>Sections.enum
        );
    }
}
const MDHomepageSections = new MDHomepageSectionsClass;
class URLBuilder {
    parameters = {};
    pathComponents = [];
    constructor(baseUrl){
        this.baseUrl = baseUrl.replace(/(^\/)?(?=.*)(\/$)?/gim, "");
    }
    addPathComponent(component) {
        this.pathComponents.push(component.replace(/(^\/)?(?=.*)(\/$)?/gim, ""));
        return this;
    }
    addQueryParameter(key, value) {
        this.parameters[key] = value;
        return this;
    }
    buildUrl({ addTrailingSlash , includeUndefinedParameters  } = {
        addTrailingSlash: false,
        includeUndefinedParameters: false
    }) {
        let finalUrl = this.baseUrl + "/";
        finalUrl += this.pathComponents.join("/");
        finalUrl += addTrailingSlash ? "/" : "";
        finalUrl += Object.values(this.parameters).length > 0 ? "?" : "";
        finalUrl += Object.entries(this.parameters).map((entry)=>{
            if (!entry[1] && !includeUndefinedParameters) {
                return undefined;
            }
            if (Array.isArray(entry[1])) {
                return entry[1].map((value)=>value || includeUndefinedParameters ? `${entry[0]}[]=${value}` : undefined
                ).filter((x)=>x !== undefined
                ).join("&");
            }
            if (typeof entry[1] === "object") {
                return Object.keys(entry[1]).map((key)=>entry[1][key] || includeUndefinedParameters ? `${entry[0]}[${key}]=${entry[1][key]}` : undefined
                ).filter((x)=>x !== undefined
                ).join("&");
            }
            return `${entry[0]}=${entry[1]}`;
        }).filter((x)=>x !== undefined
        ).join("&");
        return finalUrl;
    }
}
class MDImageQualityClass {
    ImageQualities = [
        {
            name: "Source (Original/Best)",
            enum: "source",
            ending: "",
            default: [
                "manga"
            ]
        },
        {
            name: "<= 512px",
            enum: "512",
            ending: ".512.jpg"
        },
        {
            name: "<= 256px",
            enum: "256",
            ending: ".256.jpg",
            default: [
                "homepage",
                "search"
            ]
        }
    ];
    getEnumList() {
        return this.ImageQualities.map((ImageQuality)=>ImageQuality.enum
        );
    }
    getName(imageQualityEnum) {
        return this.ImageQualities.filter((ImageQuality)=>ImageQuality.enum == imageQualityEnum
        )[0]?.name ?? "";
    }
    getEnding(imageQualityEnum) {
        return this.ImageQualities.filter((ImageQuality)=>ImageQuality.enum == imageQualityEnum
        )[0]?.ending ?? "";
    }
    getDefault(section) {
        return this.ImageQualities.filter((ImageQuality)=>ImageQuality.default?.includes(section)
        ).map((ImageQuality)=>ImageQuality.enum
        )[0] ?? "";
    }
}
const MDImageQuality = new MDImageQualityClass;


/***/ }),

/***/ 1724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ parseMangaList),
/* harmony export */   "w": () => (/* binding */ parseChapterList)
/* harmony export */ });
/* harmony import */ var _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9517);

const parseMangaList = async (object, source, thumbnailSelector)=>{
    const results = [];
    for (const manga of object){
        const mangaId = manga.id;
        const mangaDetails = manga.attributes;
        const title = source.decodeHTMLEntity(Object.values(mangaDetails.title)[0]);
        const coverFileName = manga.relationships.filter((x)=>x.type == "cover_art"
        ).map((x)=>x.attributes?.fileName
        )[0];
        const image = coverFileName ? `${source.COVER_BASE_URL}/${mangaId}/${coverFileName}${_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getEnding */ .hR.getEnding(await thumbnailSelector(source.stateManager))}` : "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg";
        results.push(createMangaTile({
            id: mangaId,
            title: createIconText({
                text: title
            }),
            image
        }));
    }
    return results;
};
const parseChapterList = async (chapterObject, coversMapping, source, thumbnailSelector, ratings)=>{
    const results = [];
    for (const chapter of chapterObject){
        const mangaId = chapter.relationships.filter((x)=>x.type == "manga"
        ).map((x)=>x.id
        )[0];
        const title = chapter.relationships.filter((x)=>x.type == "manga"
        ).map((x)=>x.attributes.title.en
        )[0];
        const volume_num = chapter.attributes.volume;
        const chapter_num = chapter.attributes.chapter;
        const subtitle = `${volume_num ? `Vol. ${volume_num}` : ""} ${chapter_num ? `Ch. ${chapter_num}` : ""}`;
        const coverFileName = coversMapping[mangaId];
        const image = coverFileName ? `${source.COVER_BASE_URL}/${mangaId}/${coverFileName}${_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getEnding */ .hR.getEnding(await thumbnailSelector(source.stateManager))}` : "https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg";
        if (!mangaId || !title || !ratings.includes(chapter.relationships.filter((x)=>x.type == "manga"
        ).map((x)=>x.attributes.contentRating
        )[0])) continue;
        results.push(createMangaTile({
            id: mangaId,
            title: createIconText({
                text: title
            }),
            subtitleText: createIconText({
                text: subtitle
            }),
            image: image
        }));
    }
    return results;
};


/***/ }),

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DC": () => (/* binding */ getRatings),
/* harmony export */   "Hl": () => (/* binding */ accountSettings),
/* harmony export */   "LK": () => (/* binding */ contentSettings),
/* harmony export */   "O7": () => (/* binding */ getMangaThumbnail),
/* harmony export */   "PK": () => (/* binding */ authEndpointRequest),
/* harmony export */   "Sl": () => (/* binding */ resetSettings),
/* harmony export */   "UW": () => (/* binding */ getAmountRecommendations),
/* harmony export */   "Vb": () => (/* binding */ getLanguages),
/* harmony export */   "WH": () => (/* binding */ getSearchThumbnail),
/* harmony export */   "X8": () => (/* binding */ getDataSaver),
/* harmony export */   "bv": () => (/* binding */ getHomepageThumbnail),
/* harmony export */   "gs": () => (/* binding */ getSkipSameChapter),
/* harmony export */   "h6": () => (/* binding */ getEnabledRecommendations),
/* harmony export */   "hP": () => (/* binding */ getAccessToken),
/* harmony export */   "hz": () => (/* binding */ thumbnailSettings),
/* harmony export */   "j1": () => (/* binding */ saveAccessToken),
/* harmony export */   "u5": () => (/* binding */ homepageSettings),
/* harmony export */   "uL": () => (/* binding */ getEnabledHomePageSections)
/* harmony export */ });
/* unused harmony export parseAccessToken */
/* harmony import */ var _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9517);
/* harmony import */ var _MangaDexSimilarManga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3138);


const getLanguages = async (stateManager)=>await stateManager.retrieve("languages") ?? _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDLanguages.getDefault */ .F0.getDefault()
;
const getRatings = async (stateManager)=>await stateManager.retrieve("ratings") ?? _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDRatings.getDefault */ .HO.getDefault()
;
const getDataSaver = async (stateManager)=>await stateManager.retrieve("data_saver") ?? false
;
const getSkipSameChapter = async (stateManager)=>await stateManager.retrieve("skip_same_chapter") ?? false
;
const contentSettings = (stateManager)=>createNavigationButton({
        id: "content_settings",
        value: "",
        label: "Content Settings",
        form: createForm({
            onSubmit: (values)=>Promise.all([
                    stateManager.store("languages", values.languages),
                    stateManager.store("ratings", values.ratings),
                    stateManager.store("data_saver", values.data_saver),
                    stateManager.store("skip_same_chapter", values.skip_same_chapter)
                ]).then()
            ,
            validate: ()=>Promise.resolve(true)
            ,
            sections: ()=>Promise.resolve([
                    createSection({
                        id: "content",
                        footer: "When enabled, same chapters from different scanlation group will not be shown.",
                        rows: ()=>Promise.all([
                                getLanguages(stateManager),
                                getRatings(stateManager),
                                getDataSaver(stateManager),
                                getSkipSameChapter(stateManager)
                            ]).then(async (values)=>[
                                    createSelect({
                                        id: "languages",
                                        label: "Languages",
                                        options: _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDLanguages.getMDCodeList */ .F0.getMDCodeList(),
                                        displayLabel: (option)=>_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDLanguages.getName */ .F0.getName(option)
                                        ,
                                        value: values[0],
                                        allowsMultiselect: true,
                                        minimumOptionCount: 1
                                    }),
                                    createSelect({
                                        id: "ratings",
                                        label: "Content Rating",
                                        options: _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDRatings.getEnumList */ .HO.getEnumList(),
                                        displayLabel: (option)=>_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDRatings.getName */ .HO.getName(option)
                                        ,
                                        value: values[1],
                                        allowsMultiselect: true,
                                        minimumOptionCount: 1
                                    }),
                                    createSwitch({
                                        id: "data_saver",
                                        label: "Data Saver",
                                        value: values[2]
                                    }),
                                    createSwitch({
                                        id: "skip_same_chapter",
                                        label: "Skip Same Chapter",
                                        value: values[3]
                                    })
                                ]
                            )
                    })
                ])
        })
    })
;
const getHomepageThumbnail = async (stateManager)=>await stateManager.retrieve("homepage_thumbnail") ?? _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getDefault */ .hR.getDefault("homepage")
;
const getSearchThumbnail = async (stateManager)=>await stateManager.retrieve("search_thumbnail") ?? _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getDefault */ .hR.getDefault("search")
;
const getMangaThumbnail = async (stateManager)=>await stateManager.retrieve("manga_thumbnail") ?? _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getDefault */ .hR.getDefault("manga")
;
const getAccessToken = async (stateManager)=>{
    const accessToken = await stateManager.keychain.retrieve("access_token");
    if (!accessToken) return undefined;
    const refreshToken = await stateManager.keychain.retrieve("refresh_token");
    return {
        accessToken,
        refreshToken,
        tokenBody: await parseAccessToken(accessToken)
    };
};
const saveAccessToken = async (stateManager, accessToken, refreshToken)=>{
    await Promise.all([
        stateManager.keychain.store("access_token", accessToken),
        stateManager.keychain.store("refresh_token", refreshToken)
    ]);
    if (!accessToken) return undefined;
    return {
        accessToken,
        refreshToken,
        tokenBody: await parseAccessToken(accessToken)
    };
};
const parseAccessToken = async (accessToken)=>{
    if (!accessToken) return undefined;
    const tokenBodyBase64 = accessToken.split(".")[1];
    if (!tokenBodyBase64) return undefined;
    const tokenBodyJSON = Buffer.from(tokenBodyBase64, "base64").toString("ascii");
    return JSON.parse(tokenBodyJSON);
};
const authRequestCache = {};
const authEndpointRequest = (requestManager, endpoint, payload)=>{
    if (authRequestCache[endpoint] == undefined) {
        authRequestCache[endpoint] = _authEndpointRequest(requestManager, endpoint, payload).finally(()=>{
            delete authRequestCache[endpoint];
        });
    }
    return authRequestCache[endpoint];
};
const _authEndpointRequest = async (requestManager, endpoint, payload)=>{
    const response = await requestManager.schedule(createRequestObject({
        method: "POST",
        url: "https://api.mangadex.org/auth/" + endpoint,
        headers: {
            "content-type": "application/json"
        },
        data: payload
    }), 1);
    if (response.status > 399) {
        throw new Error("Request failed with error code:" + response.status);
    }
    const jsonData = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
    if (jsonData.result != "ok") {
        throw new Error("Request failed with errors: " + jsonData.errors.map((x)=>`[${x.title}]: ${x.detail}`
        ));
    }
    return jsonData;
};
const accountSettings = async (stateManager, requestManager)=>{
    const accessToken1 = await getAccessToken(stateManager);
    if (!accessToken1) {
        return createNavigationButton({
            id: "login_button",
            label: "Login",
            value: undefined,
            form: createForm({
                onSubmit: async (values)=>{
                    if (!values.username) {
                        throw new Error("Username must not be empty");
                    }
                    if (!values.password) {
                        throw new Error("Password must not be empty");
                    }
                    const response = await authEndpointRequest(requestManager, "login", {
                        username: values.username,
                        password: values.password
                    });
                    await saveAccessToken(stateManager, response.token.session, response.token.refresh);
                },
                validate: async ()=>true
                ,
                sections: async ()=>[
                        createSection({
                            id: "username_section",
                            header: "Username",
                            footer: "Enter your MangaDex account username",
                            rows: async ()=>[
                                    createInputField({
                                        id: "username",
                                        placeholder: "Username",
                                        value: "",
                                        maskInput: false
                                    })
                                ]
                        }),
                        createSection({
                            id: "password_section",
                            header: "Password",
                            footer: "Enter the password associated with your MangaDex account Username",
                            rows: async ()=>[
                                    createInputField({
                                        id: "password",
                                        placeholder: "Password",
                                        value: "",
                                        maskInput: true
                                    })
                                ]
                        })
                    ]
            })
        });
    }
    return createNavigationButton({
        id: "account_settings",
        value: undefined,
        label: "Session Info",
        form: createForm({
            onSubmit: async ()=>undefined
            ,
            validate: async ()=>true
            ,
            sections: async ()=>{
                const accessToken = await getAccessToken(stateManager);
                if (!accessToken) {
                    return [
                        createSection({
                            id: "not_logged_in_section",
                            rows: async ()=>[
                                    createLabel({
                                        id: "not_logged_in",
                                        label: "Not Logged In",
                                        value: undefined
                                    })
                                ]
                        })
                    ];
                }
                return [
                    createSection({
                        id: "introspect",
                        rows: async ()=>Object.keys(accessToken.tokenBody).map((key)=>{
                                const value = accessToken.tokenBody[key];
                                return createMultilineLabel({
                                    id: key,
                                    label: key,
                                    value: Array.isArray(value) ? value.join("\n") : `${value}`
                                });
                            })
                    }),
                    createSection({
                        id: "refresh_button_section",
                        rows: async ()=>[
                                createButton({
                                    id: "refresh_token_button",
                                    label: "Refresh Token",
                                    value: undefined,
                                    onTap: async ()=>{
                                        const response = await authEndpointRequest(requestManager, "refresh", {
                                            token: accessToken.refreshToken
                                        });
                                        await saveAccessToken(stateManager, response.token.session, response.token.refresh);
                                    }
                                }),
                                createButton({
                                    id: "logout_button",
                                    label: "Logout",
                                    value: undefined,
                                    onTap: async ()=>{
                                        await authEndpointRequest(requestManager, "logout", {});
                                        await saveAccessToken(stateManager, undefined, undefined);
                                    }
                                })
                            ]
                    })
                ];
            }
        })
    });
};
const thumbnailSettings = (stateManager)=>createNavigationButton({
        id: "thumbnail_settings",
        value: "",
        label: "Thumbnail Quality",
        form: createForm({
            onSubmit: (values)=>Promise.all([
                    stateManager.store("homepage_thumbnail", values.homepage_thumbnail[0]),
                    stateManager.store("search_thumbnail", values.search_thumbnail[0]),
                    stateManager.store("manga_thumbnail", values.manga_thumbnail[0]), 
                ]).then()
            ,
            validate: ()=>Promise.resolve(true)
            ,
            sections: ()=>Promise.resolve([
                    createSection({
                        id: "thumbnail",
                        rows: ()=>Promise.all([
                                getHomepageThumbnail(stateManager),
                                getSearchThumbnail(stateManager),
                                getMangaThumbnail(stateManager)
                            ]).then(async (values)=>[
                                    createSelect({
                                        id: "homepage_thumbnail",
                                        label: "Homepage Thumbnail",
                                        options: _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getEnumList */ .hR.getEnumList(),
                                        displayLabel: (option)=>_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getName */ .hR.getName(option)
                                        ,
                                        value: [
                                            values[0]
                                        ],
                                        allowsMultiselect: false,
                                        minimumOptionCount: 1
                                    }),
                                    createSelect({
                                        id: "search_thumbnail",
                                        label: "Search Thumbnail",
                                        options: _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getEnumList */ .hR.getEnumList(),
                                        displayLabel: (option)=>_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getName */ .hR.getName(option)
                                        ,
                                        value: [
                                            values[1]
                                        ],
                                        allowsMultiselect: false,
                                        minimumOptionCount: 1
                                    }),
                                    createSelect({
                                        id: "manga_thumbnail",
                                        label: "Manga Thumbnail",
                                        options: _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getEnumList */ .hR.getEnumList(),
                                        displayLabel: (option)=>_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDImageQuality.getName */ .hR.getName(option)
                                        ,
                                        value: [
                                            values[2]
                                        ],
                                        allowsMultiselect: false,
                                        minimumOptionCount: 1
                                    })
                                ]
                            )
                    })
                ])
        })
    })
;
const resetSettings = (stateManager)=>createButton({
        id: "reset",
        label: "Reset to Default",
        value: "",
        onTap: ()=>Promise.all([
                stateManager.store("languages", null),
                stateManager.store("ratings", null),
                stateManager.store("data_saver", null),
                stateManager.store("skip_same_chapter", null),
                stateManager.store("homepage_thumbnail", null),
                stateManager.store("search_thumbnail", null),
                stateManager.store("manga_thumbnail", null),
                stateManager.store("recommendedIds", null),
                stateManager.store("enabled_homepage_sections", null),
                stateManager.store("enabled_recommendations", null),
                stateManager.store("amount_of_recommendations", null)
            ]).then()
    })
;
const getEnabledHomePageSections = async (stateManager)=>{
    const enabled_homepage_sections = await stateManager.retrieve("enabled_homepage_sections");
    return enabled_homepage_sections != undefined && enabled_homepage_sections.length > 0 ? enabled_homepage_sections : _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDHomepageSections.getDefault */ .q$.getDefault();
};
const getEnabledRecommendations = async (stateManager)=>await stateManager.retrieve("enabled_recommendations") ?? false
;
const getAmountRecommendations = async (stateManager)=>await stateManager.retrieve("amount_of_recommendations") ?? 5
;
const homepageSettings = (stateManager)=>createNavigationButton({
        id: "homepage_settings",
        value: "",
        label: "Homepage Settings",
        form: createForm({
            onSubmit: (values)=>Promise.all([
                    stateManager.store("enabled_homepage_sections", values.enabled_homepage_sections),
                    // The `as boolean` seems required to prevent Paperback from throwing
                    // `Invalid type for key value; expected `Bool` got `Optional<JSValue>``
                    stateManager.store("enabled_recommendations", values.enabled_recommendations),
                    stateManager.store("amount_of_recommendations", values.amount_of_recommendations),
                    (0,_MangaDexSimilarManga__WEBPACK_IMPORTED_MODULE_1__/* .sliceRecommendedIds */ .xG)(stateManager, values.amount_of_recommendations), 
                ]).then()
            ,
            validate: ()=>Promise.resolve(true)
            ,
            sections: ()=>Promise.resolve([
                    createSection({
                        id: "homepage_sections_section",
                        //footer: 'Which sections should be shown on the homepage',
                        rows: ()=>Promise.all([
                                getEnabledHomePageSections(stateManager), 
                            ]).then(async (values)=>[
                                    createSelect({
                                        id: "enabled_homepage_sections",
                                        label: "Homepage sections",
                                        options: _MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDHomepageSections.getEnumList */ .q$.getEnumList(),
                                        displayLabel: (option)=>_MangaDexHelper__WEBPACK_IMPORTED_MODULE_0__/* .MDHomepageSections.getName */ .q$.getName(option)
                                        ,
                                        value: values[0] ?? [],
                                        allowsMultiselect: true,
                                        minimumOptionCount: 0
                                    }), 
                                ]
                            )
                    }),
                    createSection({
                        id: "recommendations_settings_section",
                        header: "Titles recommendations",
                        footer: "Recommendation are based on recently read chapters and shown on the homepage",
                        rows: ()=>Promise.all([
                                getEnabledRecommendations(stateManager),
                                getAmountRecommendations(stateManager)
                            ]).then(async (values)=>[
                                    createSwitch({
                                        id: "enabled_recommendations",
                                        label: "Enable recommendations",
                                        value: values[0] ?? false
                                    }),
                                    createStepper({
                                        id: "amount_of_recommendations",
                                        label: "Amount of recommendation",
                                        value: values[1] ?? 5,
                                        min: 1,
                                        max: 15,
                                        step: 1
                                    }),
                                    createButton({
                                        id: "reset_recommended_ids",
                                        label: "Reset recommended titles",
                                        value: "",
                                        onTap: ()=>Promise.all([
                                                stateManager.store("recommendedIds", null), 
                                            ]).then()
                                    }), 
                                ]
                            )
                    }), 
                ])
        })
    })
;


/***/ }),

/***/ 3138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "De": () => (/* binding */ getRecommendedIds),
/* harmony export */   "XE": () => (/* binding */ addRecommendedId),
/* harmony export */   "xG": () => (/* binding */ sliceRecommendedIds)
/* harmony export */ });
/* harmony import */ var _MangaDexSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);

const getRecommendedIds = async (stateManager)=>// Return the list of ids that should be used for recommendations
    // We don't need to check the length of the list. If the max length was changed by the user, 
    // the list should have been modified
    (await stateManager.retrieve("recommendedIds")) ?? []
;
const sliceRecommendedIds = async (stateManager, amount)=>{
    // Only keep `amount` elements in the recommendation list
    const recommendedIds = await getRecommendedIds(stateManager);
    stateManager.store("recommendedIds", recommendedIds.slice(0, amount));
};
const addRecommendedId = async (stateManager, mangaId)=>{
    // Add an id to the list of manga that should be used for recommendations
    const recommendedIds = await getRecommendedIds(stateManager);
    // If the id is already in the list, we remove it to put it at the beginning
    const index = recommendedIds.indexOf(mangaId, 0);
    if (index > -1) {
        recommendedIds.splice(index, 1);
    }
    // We add the id at the beginning of list
    recommendedIds.unshift(mangaId);
    // We only keep the right amount of titles in order to prevent the list from being to large
    stateManager.store("recommendedIds", recommendedIds.slice(0, await (0,_MangaDexSettings__WEBPACK_IMPORTED_MODULE_0__/* .getAmountRecommendations */ .UW)(stateManager)));
} /*
async removeRecommendedId(id: string): Promise<void>{
    const recommendedIds: string[] = await this.getRecommendedIds()
    
    // If the id is already in the list, we put it at the end
    const index = recommendedIds.indexOf(id, 0)
    if (index > -1) {
        recommendedIds.splice(index, 1)
    }
    
    this.stateManager.store('recommendedIds', recommendedIds)
}
*/ ;


/***/ }),

/***/ 5765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ NHentai)
});

// UNUSED EXPORTS: NHentaiInfo

// EXTERNAL MODULE: external "paperback-extensions-common"
var external_paperback_extensions_common_ = __webpack_require__(4580);
// EXTERNAL MODULE: ./src/sources/types.ts
var types = __webpack_require__(1866);
;// CONCATENATED MODULE: ./src/sources/NHentai/NHentaiHelper.ts

class NHLanguagesClass {
    Languages = [
        // Include all langauages
        {
            name: "Include All",
            NHCode: "",
            PBCode: external_paperback_extensions_common_.LanguageCode.UNKNOWN,
            default: true
        },
        {
            // English
            name: "English",
            NHCode: "english",
            PBCode: external_paperback_extensions_common_.LanguageCode.ENGLISH
        },
        {
            // Japanese
            name: "\u65E5\u672C\u8A9E",
            NHCode: "japanese",
            PBCode: external_paperback_extensions_common_.LanguageCode.JAPANESE
        },
        {
            // Chinese (Simplified)
            name: "\u4E2D\u6587 (\u7B80\u5316\u5B57)",
            NHCode: "chinese",
            PBCode: external_paperback_extensions_common_.LanguageCode.CHINEESE
        }, 
    ];
    constructor(){
        // Sorts the languages based on name
        this.Languages = this.Languages.sort((a, b)=>a.name > b.name ? 1 : -1
        );
    }
    getNHCodeList() {
        return this.Languages.map((Language)=>Language.NHCode
        );
    }
    getName(NHCode) {
        return this.Languages.filter((Language)=>Language.NHCode == NHCode
        )[0]?.name ?? "Unknown";
    }
    getPBCode(NHCode) {
        return this.Languages.filter((Language)=>Language.NHCode == NHCode
        )[0]?.PBCode ?? external_paperback_extensions_common_.LanguageCode.UNKNOWN;
    }
    getDefault() {
        return this.Languages.filter((Language)=>Language.default
        ).map((Language)=>Language.NHCode
        );
    }
}
const NHLanguages = new NHLanguagesClass();
class NHSortOrderClass {
    SortOrders = [
        {
            // Sort by popular
            name: "Popular all-time",
            NHCode: "popular",
            shortcuts: [
                "s:p",
                "s:popular",
                "sort:p",
                "sort:popular"
            ],
            default: true
        },
        {
            // Sort by popular this week
            name: "Popular this week",
            NHCode: "popular-week",
            shortcuts: [
                "s:pw",
                "s:w",
                "s:popular-week",
                "sort:pw",
                "sort:w",
                "sort:popular-week"
            ]
        },
        {
            // Sort by popular today
            name: "Popular today",
            NHCode: "popular-today",
            shortcuts: [
                "s:pt",
                "s:t",
                "s:popular-today",
                "sort:pt",
                "sort:t",
                "sort:popular-today"
            ]
        },
        {
            // Sort by recent
            name: "Recent",
            NHCode: "date",
            shortcuts: [
                "s:r",
                "s:recent",
                "sort:r",
                "sort:recent"
            ]
        }, 
    ];
    constructor(){
        // Sorts the sort orders based on name
        this.SortOrders = this.SortOrders.sort((a, b)=>a.name > b.name ? 1 : -1
        );
    }
    containsShortcut(query) {
        for (const SortOrder of this.SortOrders){
            for (const shortcut of SortOrder.shortcuts){
                if (query.includes(shortcut)) {
                    return [
                        SortOrder.NHCode,
                        shortcut
                    ];
                }
            }
        }
        return [
            "",
            ""
        ];
    }
    getNHCodeList() {
        return this.SortOrders.map((SortOrder)=>SortOrder.NHCode
        );
    }
    getName(NHCode) {
        return this.SortOrders.filter((SortOrder)=>SortOrder.NHCode == NHCode
        )[0]?.name ?? "Unknown";
    }
    getDefault() {
        return this.SortOrders.filter((SortOrder)=>SortOrder.default
        ).map((SortOrder)=>SortOrder.NHCode
        );
    }
}
const NHSortOrders = new NHSortOrderClass();

;// CONCATENATED MODULE: ./src/sources/NHentai/NHentaiParser.ts


const typeMap = {
    "j": "jpg",
    "p": "png",
    "g": "gif"
};
const typeOfImage = (image)=>typeMap[image.t] ?? ""
;
const getArtist = (gallery)=>{
    const tags = gallery.tags;
    for (const tag of tags){
        if (tag.type === "artist") {
            return tag.name;
        }
    }
    return "";
};
const getLanguage = (gallery)=>{
    const tags = gallery.tags;
    for (const tag of tags){
        if (tag.type === "language" && tag.name !== "translated") {
            return tag.name;
        }
    }
    return "";
};
const parseGallery = (data)=>{
    const tags = [];
    for (const tag of data.tags){
        if (tag.type === "tag") tags.push(createTag({
            id: tag.id.toString(),
            label: tag.name
        }));
    }
    const artist = getArtist(data);
    return createManga({
        id: data.id.toString(),
        titles: [
            data.title.english,
            data.title.japanese,
            data.title.pretty
        ],
        artist,
        author: artist,
        image: `https://t.nhentai.net/galleries/${data.media_id}/cover.${typeOfImage(data.images.cover)}`,
        rating: 0,
        status: external_paperback_extensions_common_.MangaStatus.COMPLETED,
        follows: data.num_favorites,
        tags: [
            createTagSection({
                id: "tags",
                label: "Tags",
                tags: tags
            })
        ],
        hentai: true
    });
};
const parseChapterDetails = (data, mangaId)=>createChapterDetails({
        id: mangaId,
        mangaId: mangaId,
        longStrip: false,
        pages: data.images.pages.map((image, i)=>{
            const type = typeOfImage(image);
            return `https://i.nhentai.net/galleries/${data.media_id}/${i + 1}.${type}`;
        })
    })
;
const parseSearch = (data)=>{
    const tiles = [];
    for (const gallery of data.result){
        tiles.push(createMangaTile({
            id: gallery.id.toString(),
            image: `https://t.nhentai.net/galleries/${gallery.media_id}/cover.${typeOfImage(gallery.images.cover)}`,
            subtitleText: createIconText({
                text: NHLanguages.getName(getLanguage(gallery))
            }),
            title: createIconText({
                text: gallery.title.pretty
            })
        }));
    }
    return tiles;
};
const parseGalleryIntoChapter = (data, mangaId)=>createChapter({
        id: mangaId,
        mangaId: mangaId,
        chapNum: 1,
        name: data.title.english,
        langCode: NHLanguages.getPBCode(getLanguage(data)),
        time: new Date(data.upload_date * 1000)
    })
;

;// CONCATENATED MODULE: ./src/sources/NHentai/NHentaiSettings.ts

const getLanguages = async (stateManager)=>await stateManager.retrieve("languages") ?? NHLanguages.getDefault()
;
const getExtraArgs = async (stateManager)=>await stateManager.retrieve("extra_args") ?? ""
;
const getSortOrders = async (stateManager)=>await stateManager.retrieve("sort_order") ?? NHSortOrders.getDefault()
;
const settings = (stateManager)=>createNavigationButton({
        id: "settings",
        value: "",
        label: "Content Settings",
        form: createForm({
            onSubmit: async (values)=>{
                await Promise.all([
                    stateManager.store("languages", values.languages),
                    stateManager.store("sort_order", values.sort_order),
                    stateManager.store("extra_args", values.extra_args.replace(/[“”‘’]/g, '"')), 
                ]);
            },
            validate: async ()=>true
            ,
            sections: ()=>Promise.resolve([
                    createSection({
                        id: "content",
                        footer: "Modify the nhentai experience to your liking.",
                        rows: ()=>Promise.all([
                                getLanguages(stateManager),
                                getSortOrders(stateManager),
                                getExtraArgs(stateManager), 
                            ]).then(async (values)=>[
                                    createSelect({
                                        id: "languages",
                                        label: "Languages",
                                        options: NHLanguages.getNHCodeList(),
                                        displayLabel: (option)=>NHLanguages.getName(option)
                                        ,
                                        value: values[0],
                                        allowsMultiselect: false,
                                        minimumOptionCount: 1
                                    }),
                                    createSelect({
                                        id: "sort_order",
                                        label: "Default search sort",
                                        options: NHSortOrders.getNHCodeList(),
                                        displayLabel: (option)=>NHSortOrders.getName(option)
                                        ,
                                        value: values[1],
                                        allowsMultiselect: false,
                                        minimumOptionCount: 1
                                    }),
                                    createInputField({
                                        id: "extra_args",
                                        label: "Additional arguments",
                                        placeholder: "woman -lolicon -shotacon -yaoi",
                                        maskInput: false,
                                        value: values[2]
                                    })
                                ]
                            )
                    })
                ])
        })
    })
;
const resetSettings = (stateManager)=>createButton({
        id: "reset",
        label: "Reset to Default",
        value: "",
        onTap: async ()=>{
            await Promise.all([
                stateManager.store("languages", null),
                stateManager.store("sort_order", null),
                stateManager.store("extra_args", null), 
            ]);
        }
    })
;

;// CONCATENATED MODULE: ./src/sources/NHentai/NHentai.ts





const NHENTAI_URL = "https://nhentai.net";
const API = NHENTAI_URL + "/api";
const NHentaiInfo = {
    version: "3.2.4",
    name: "nhentai",
    icon: "icon.png",
    author: "NotMarek",
    authorWebsite: "https://github.com/notmarek",
    description: "Extension which pulls 18+ content from nHentai.",
    contentRating: external_paperback_extensions_common_.ContentRating.ADULT,
    websiteBaseURL: NHENTAI_URL,
    sourceTags: [
        {
            text: "18+",
            type: external_paperback_extensions_common_.TagType.YELLOW
        },
        {
            text: "Cloudflare",
            type: external_paperback_extensions_common_.TagType.RED
        }, 
    ]
};
const language = async (stateManager)=>{
    const lang = await stateManager.retrieve("languages") ?? "";
    if (lang == "") {
        return '""';
    } else {
        return `language:${lang}`;
    }
};
const sortOrder = async (query, stateManager)=>{
    const inQuery = NHSortOrders.containsShortcut(query);
    if (inQuery[0]?.length !== 0) {
        return [
            inQuery[0] ?? "",
            query.replace(inQuery[1] ?? "", "")
        ];
    } else {
        const sortOrder1 = await stateManager.retrieve("sort_order") ?? NHSortOrders.getDefault();
        return [
            sortOrder1,
            query
        ];
    }
};
const extraArgs = async (stateManager)=>{
    const args = await getExtraArgs(stateManager);
    return ` ${args}`;
};
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15";
class NHentai extends types/* ZenSource */.bp {
    id = "nhentai";
    name = "NhenTai";
    icon = "Nhentai.png";
    description = "Only Vanila";
    contentRating = external_paperback_extensions_common_.ContentRating.ADULT;
    websiteBaseURL = "https://nhentai.net";
    language = external_paperback_extensions_common_.LanguageCode.ENGLISH;
    getSection = async (sectionId, page)=>{
        switch(sectionId){
            case "top":
            case "top_romcom":
                return await this.getViewMoreItems("popular", {
                    page
                });
            case "new_romcom":
                const request = createRequestObject({
                    url: "https://wholesomelist.com/list?tierabove=S-",
                    method: "GET"
                });
                const data = await this.requestManager.schedule(request, 1);
                const $ = this.cheerio.load(data.data);
                const tiles = [];
                for (const row of $('tr[id$="row"]').toArray()){
                    const subtitleText = $("td", row).last().text().trim();
                    const rating = $("td.dt-center.dt-nowrap", row).text().trim();
                    if (!rating.includes("S")) continue;
                    if (subtitleText.includes("Yaoi") || subtitleText.includes("Yuri")) continue;
                    const nhentaiTd = $("td[data-export^='https://nhentai.net/g/']", row);
                    if (nhentaiTd.toArray().length === 0) continue;
                    const a = $("a.internal-link", row);
                    const image = "https://wholesomelist.com/asset/" + a.attr("href")?.split("/")[2] + ".jpg";
                    const title = a.text().trim();
                    const id = nhentaiTd.attr("data-export")?.split("/")[4] ?? "";
                    tiles.push(createMangaTile({
                        id,
                        image,
                        title: createIconText({
                            text: title
                        }),
                        subtitleText: createIconText({
                            text: subtitleText
                        })
                    }));
                }
                return createPagedResults({
                    results: tiles
                });
            default:
                return await this.getViewMoreItems(sectionId, {
                    page
                });
        }
    };
    requestManager = createRequestManager({
        requestsPerSecond: 3,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request)=>{
                request.headers = {
                    ...request.headers ?? {},
                    ...{
                        "user-agent": userAgent,
                        referer: `${NHENTAI_URL}/`
                    }
                };
                return request;
            },
            interceptResponse: async (response)=>response
        }
    });
    stateManager = createSourceStateManager({});
    async getSourceMenu() {
        return Promise.resolve(createSection({
            id: "main",
            header: "Source Settings",
            rows: ()=>Promise.resolve([
                    settings(this.stateManager),
                    resetSettings(this.stateManager)
                ])
        }));
    }
    getMangaShareUrl(mangaId) {
        return `${NHENTAI_URL}/g/${mangaId}`;
    }
    async getMangaDetails(mangaId) {
        const request = createRequestObject({
            url: `${API}/gallery/${mangaId}`,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(data.status);
        const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
        return parseGallery(json_data);
    }
    async getChapters(mangaId) {
        const request = createRequestObject({
            url: `${API}/gallery/${mangaId}`,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(data.status);
        const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
        return [
            parseGalleryIntoChapter(json_data, mangaId)
        ];
    }
    async getChapterDetails(mangaId) {
        const request = createRequestObject({
            url: `${API}/gallery/${mangaId}`,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(data.status);
        const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
        return parseChapterDetails(json_data, mangaId);
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 1;
        const title = query.title ?? "";
        if (metadata?.stopSearch ?? false) {
            return createPagedResults({
                results: [],
                metadata: {
                    stopSearch: true
                }
            });
        }
        if (/^\d+$/.test(title)) {
            const request = createRequestObject({
                url: `${API}/gallery/${title}`,
                method: "GET"
            });
            const data = await this.requestManager.schedule(request, 1);
            this.CloudFlareError(data.status);
            const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
            return createPagedResults({
                results: parseSearch({
                    result: [
                        json_data
                    ],
                    num_pages: 1,
                    per_page: 1
                }),
                metadata: {
                    page: page + 1,
                    stopSearch: true
                }
            });
        } else {
            const q = title + " " + await language(this.stateManager) + await extraArgs(this.stateManager);
            const [sort, query] = await sortOrder(q, this.stateManager) ?? [
                "",
                q
            ];
            const request = createRequestObject({
                url: `${API}/galleries/search?query=${encodeURIComponent(query ?? "")}&sort=${sort}&page=${page}`,
                method: "GET"
            });
            const data = await this.requestManager.schedule(request, 1);
            this.CloudFlareError(data.status);
            const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
            return createPagedResults({
                results: parseSearch(json_data),
                metadata: {
                    page: page + 1
                }
            });
        }
    }
    async getHomePageSections(sectionCallback) {
        const section1 = createHomeSection({
            id: "date",
            title: "Recent",
            view_more: true
        });
        const section2 = createHomeSection({
            id: "popular-today",
            title: "Popular Today",
            view_more: true
        });
        const section3 = createHomeSection({
            id: "popular-week",
            title: "Popular Week",
            view_more: true
        });
        const section4 = createHomeSection({
            id: "popular",
            title: "Popular All-time",
            view_more: true
        });
        const sections = [
            section1,
            section2,
            section3,
            section4
        ];
        for (const section of sections){
            sectionCallback(section);
            const request = createRequestObject({
                url: `${API}/galleries/search?query=${encodeURIComponent(await language(this.stateManager) + await extraArgs(this.stateManager))}&sort=${section.id}`,
                method: "GET"
            });
            const data = await this.requestManager.schedule(request, 1);
            this.CloudFlareError(data.status);
            const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
            section.items = parseSearch(json_data);
            sectionCallback(section);
        }
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        let page = metadata?.page ?? 1;
        const request = createRequestObject({
            url: `${API}/galleries/search?query=${encodeURIComponent(await language(this.stateManager) + await extraArgs(this.stateManager))}&sort=${homepageSectionId}&page=${page}`,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        this.CloudFlareError(data.status);
        const json_data = typeof data.data == "string" ? JSON.parse(data.data) : data.data;
        page++;
        return createPagedResults({
            results: parseSearch(json_data),
            metadata: {
                page: page
            }
        });
    }
    getCloudflareBypassRequest() {
        return createRequestObject({
            url: NHENTAI_URL,
            method: "GET",
            headers: {
                "user-agent": userAgent,
                referer: `${NHENTAI_URL}.`
            }
        });
    }
    CloudFlareError(status) {
        if (status == 503) {
            throw new Error("CLOUDFLARE BYPASS ERROR:\nPlease go to Settings > Sources > <The name of this source> and press Cloudflare Bypass");
        }
    }
}


/***/ }),

/***/ 5359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R8": () => (/* binding */ NetTruyen)
});

// UNUSED EXPORTS: NetTruyenInfo, isLastPage

// EXTERNAL MODULE: external "paperback-extensions-common"
var external_paperback_extensions_common_ = __webpack_require__(4580);
// EXTERNAL MODULE: ./src/utils/url.ts
var url = __webpack_require__(4870);
// EXTERNAL MODULE: ./src/sources/types.ts
var types = __webpack_require__(1866);
;// CONCATENATED MODULE: ./src/sources/NetTruyen/NetTruyenParser.ts


const DOMAIN = "http://www.nettruyenn.com/";
class Parser {
    convertTime(timeAgo) {
        let time;
        let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
        trimmed = trimmed == 0 && timeAgo.includes("a") ? 1 : trimmed;
        if (timeAgo.includes("gi\xe2y") || timeAgo.includes("secs")) {
            time = new Date(Date.now() - trimmed * 1000) // => mili giây (1000 ms = 1s)
            ;
        } else if (timeAgo.includes("ph\xfat")) {
            time = new Date(Date.now() - trimmed * 60000);
        } else if (timeAgo.includes("gi\u1EDD")) {
            time = new Date(Date.now() - trimmed * 3600000);
        } else if (timeAgo.includes("ng\xe0y")) {
            time = new Date(Date.now() - trimmed * 86400000);
        } else if (timeAgo.includes("n\u0103m")) {
            time = new Date(Date.now() - trimmed * 31556952000);
        } else {
            if (timeAgo.includes(":")) {
                const split = timeAgo.split(" ");
                const H = split[0]; //vd => 21:08
                const D = split[1]; //vd => 25/08 
                const fixD = D.split("/");
                const finalD = fixD[1] + "/" + fixD[0] + "/" + new Date().getFullYear();
                time = new Date(finalD + " " + H);
            } else {
                const split = timeAgo.split("/"); //vd => 05/12/18
                time = new Date(split[1] + "/" + split[0] + "/" + "20" + split[2]);
            }
        }
        return time;
    }
    parseMangaDetails($, mangaId) {
        const tags = [];
        for (const obj of $("li.kind > p.col-xs-8 > a").toArray()){
            const label = $(obj).text();
            const id = $(obj).attr("href")?.split("/")[4] ?? label;
            tags.push(createTag({
                label: label,
                id: id
            }));
        }
        const creator = $("ul.list-info > li.author > p.col-xs-8").text();
        const image = "http:" + $("div.col-image > img").attr("src");
        return createManga({
            id: mangaId,
            author: creator,
            artist: creator,
            desc: $("div.detail-content > p").text(),
            titles: [
                $("h1.title-detail").text()
            ],
            image: (0,url/* proxyImage */.qG)(image, DOMAIN) ?? "",
            status: $("li.status > p.col-xs-8").text().toLowerCase().includes("ho\xe0n th\xe0nh") ? 0 : 1,
            rating: parseFloat($('span[itemprop="ratingValue"]').text()),
            hentai: false,
            tags: [
                createTagSection({
                    label: "genres",
                    tags: tags,
                    id: "0"
                })
            ]
        });
    }
    parseChapterList($, mangaId) {
        const chapters = [];
        for (const obj of $("div.list-chapter > nav > ul > li.row:not(.heading)").toArray()){
            const time = $("div.col-xs-4", obj).text();
            const group = $("div.col-xs-3", obj).text();
            const name = $("div.chapter a", obj).text();
            const chapNum = parseFloat($("div.chapter a", obj).text().split(" ")[1]);
            const timeFinal = this.convertTime(time);
            chapters.push(createChapter({
                id: $("div.chapter a", obj).attr("href").split("/")[6],
                chapNum: chapNum,
                name: name.includes(":") ? name.split("Chapter " + chapNum + ":")[1].trim() : "",
                mangaId: mangaId,
                langCode: external_paperback_extensions_common_.LanguageCode.VIETNAMESE,
                time: timeFinal,
                group: group + " l\u01B0\u1EE3t xem"
            }));
        }
        return chapters;
    }
    parseChapterDetails($) {
        const pages = [];
        for (const obj of $("div.reading-detail > div.page-chapter > img").toArray()){
            if (!obj.attribs["data-original"]) continue;
            const link = obj.attribs["data-original"];
            if (link.indexOf("http") === -1) {
                pages.push("http:" + obj.attribs["data-original"]);
            } else {
                pages.push(link);
            }
        }
        return pages;
    }
    parseSearchResults($) {
        const tiles = [];
        for (const manga of $("div.item", "div.row").toArray()){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            tiles.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : (0,url/* proxyImage */.qG)("http:" + image, DOMAIN),
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return tiles;
    }
    parseTags($) {
        //id tag đéo đc trùng nhau
        const arrayTags = [];
        const arrayTags2 = [];
        const arrayTags3 = [];
        const arrayTags4 = [];
        const arrayTags5 = [];
        //The loai
        for (const tag of $("div.col-md-3.col-sm-4.col-xs-6.mrb10", "div.col-sm-10 > div.row").toArray()){
            const label = $("div.genre-item", tag).text().trim();
            const id = $("div.genre-item > span", tag).attr("data-id") ?? label;
            if (!id || !label) continue;
            arrayTags.push({
                id: id,
                label: label
            });
        }
        //Số lượng chapter
        for (const tag1 of $("option", "select.select-minchapter").toArray()){
            const label = $(tag1).text().trim();
            const id = ("minchapter." + $(tag1).attr("value")) ?? label;
            if (!id || !label) continue;
            arrayTags2.push({
                id: id,
                label: label
            });
        }
        //Tình trạng
        for (const tag2 of $("option", ".select-status").toArray()){
            const label = $(tag2).text().trim();
            const id = ("status." + $(tag2).attr("value")) ?? label;
            if (!id || !label) continue;
            arrayTags3.push({
                id: id,
                label: label
            });
        }
        //Dành cho
        for (const tag3 of $("option", ".select-gender").toArray()){
            const label = $(tag3).text().trim();
            const id = ("gender." + $(tag3).attr("value")) ?? label;
            if (!id || !label) continue;
            arrayTags4.push({
                id: id,
                label: label
            });
        }
        //Sắp xếp theo
        for (const tag4 of $("option", ".select-sort").toArray()){
            const label = $(tag4).text().trim();
            const id = ("sort." + $(tag4).attr("value")) ?? label;
            if (!id || !label) continue;
            arrayTags5.push({
                id: id,
                label: label
            });
        }
        const tagSections = [
            createTagSection({
                id: "0",
                label: "Th\u1EC3 Lo\u1EA1i (C\xf3 th\u1EC3 ch\u1ECDn nhi\u1EC1u h\u01A1n 1)",
                tags: arrayTags.map((x)=>createTag(x)
                )
            }),
            createTagSection({
                id: "1",
                label: "S\u1ED1 L\u01B0\u1EE3ng Chapter (Ch\u1EC9 ch\u1ECDn 1)",
                tags: arrayTags2.map((x)=>createTag(x)
                )
            }),
            createTagSection({
                id: "2",
                label: "T\xecnh Tr\u1EA1ng (Ch\u1EC9 ch\u1ECDn 1)",
                tags: arrayTags3.map((x)=>createTag(x)
                )
            }),
            createTagSection({
                id: "3",
                label: "D\xe0nh Cho (Ch\u1EC9 ch\u1ECDn 1)",
                tags: arrayTags4.map((x)=>createTag(x)
                )
            }),
            createTagSection({
                id: "4",
                label: "S\u1EAFp x\u1EBFp theo (Ch\u1EC9 ch\u1ECDn 1)",
                tags: arrayTags5.map((x)=>createTag(x)
                )
            }), 
        ];
        return tagSections;
    }
    parseFeaturedSection($) {
        const featuredItems = [];
        for (const manga of $("div.item", "div.altcontent1").toArray()){
            const title = $(".slide-caption > h3 > a", manga).text();
            const id = $("a", manga).attr("href")?.split("/").pop();
            const image = $("a > img.lazyOwl", manga).attr("data-src");
            const subtitle = $(".slide-caption > a", manga).text().trim() + " - " + $(".slide-caption > .time", manga).text().trim();
            if (!id || !title) continue;
            featuredItems.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return featuredItems;
    }
    parsePopularSection($) {
        const viewestItems = [];
        for (const manga of $("div.item", "div.row").toArray().splice(0, 20)){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            viewestItems.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return viewestItems;
    }
    parseHotSection($) {
        const TopWeek = [];
        for (const manga of $("div.item", "div.row").toArray().splice(0, 20)){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            TopWeek.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return TopWeek;
    }
    parseNewUpdatedSection($) {
        const newUpdatedItems = [];
        for (const manga of $("div.item", "div.row").toArray().splice(0, 20)){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            newUpdatedItems.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return newUpdatedItems;
    }
    parseNewAddedSection($) {
        const newAddedItems = [];
        for (const manga of $("div.item", "div.row").toArray().splice(0, 20)){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            newAddedItems.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return newAddedItems;
    }
    parseFullSection($) {
        const fullItems = [];
        for (const manga of $("div.item", "div.row").toArray().splice(0, 20)){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            fullItems.push(createMangaTile({
                id: id,
                image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                title: createIconText({
                    text: title
                }),
                subtitleText: createIconText({
                    text: subtitle
                })
            }));
        }
        return fullItems;
    }
    parseViewMoreItems($) {
        const mangas = [];
        const collectedIds = [];
        for (const manga of $("div.item", "div.row").toArray()){
            const title = $("figure.clearfix > figcaption > h3 > a", manga).first().text();
            const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
            const image = $("figure.clearfix > div.image > a > img", manga).first().attr("data-original");
            const subtitle = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > a", manga).last().text().trim();
            if (!id || !title) continue;
            if (!collectedIds.includes(id)) {
                mangas.push(createMangaTile({
                    id: id,
                    image: !image ? "https://i.imgur.com/GYUxEX8.png" : "http:" + image,
                    title: createIconText({
                        text: title
                    }),
                    subtitleText: createIconText({
                        text: subtitle
                    })
                }));
                collectedIds.push(id);
            }
        }
        return mangas;
    }
    parseUpdatedManga(updateManga, time, ids) {
        const returnObject = {
            "ids": []
        };
        // // for (let manga of $('div.item', 'div.row').toArray()) {
        // const id = ids[0];
        // let x = $('time.small').text().trim();
        // let y = x.split("lúc:")[1].replace(']', '').trim().split(' ');
        // let z = y[1].split('/');
        // const timeUpdate = new Date(z[1] + '/' + z[0] + '/' + z[2] + ' ' + y[0]);
        // updateManga.push(({
        //     id: id,
        //     time: timeUpdate
        // }));
        // // }
        for (const elem of updateManga){
            if (ids.includes(elem.id) && time < this.convertTime(elem.time)) returnObject.ids.push(elem.id);
        }
        return returnObject;
    }
}

;// CONCATENATED MODULE: ./src/sources/NetTruyen/NetTruyen.ts




const NetTruyen_DOMAIN = "http://www.nettruyenn.com/";
const isLastPage = ($)=>{
    const current = $("ul.pagination > li.active > a").text();
    let total = $("ul.pagination > li.PagerSSCCells:last-child").text();
    if (current) {
        total = total ?? "";
        return +total === +current; //+ => convert value to number
    }
    return true;
};
const NetTruyenInfo = {
    version: "3.0.2",
    name: "NetTruyen",
    icon: "icon.png",
    author: "Huynhzip3",
    authorWebsite: "https://github.com/huynh12345678",
    description: "Extension that pulls manga from NetTruyen.",
    websiteBaseURL: NetTruyen_DOMAIN,
    contentRating: external_paperback_extensions_common_.ContentRating.MATURE,
    sourceTags: [
        {
            text: "Recommended",
            type: external_paperback_extensions_common_.TagType.BLUE
        },
        {
            text: "Notifications",
            type: external_paperback_extensions_common_.TagType.GREEN
        }, 
    ]
};
class NetTruyen extends types/* ZenSource */.bp {
    id = "nettruyen";
    name = "N\xe1tTruyen";
    icon = "Nettruyen.png";
    description = "M\u1ECDi ng\u01B0\u1EDDi ch\xea r\xe1c nh\u01B0ng n\xf3 load \u1EA3nh nhanh.";
    websiteBaseURL = "http://www.nettruyenn.com";
    contentRating = external_paperback_extensions_common_.ContentRating.MATURE;
    language = external_paperback_extensions_common_.LanguageCode.VIETNAMESE;
    getMangaInternalURL = (mangaId)=>{
        if (mangaId.includes("/")) mangaId = mangaId.split("/")[1];
        return `/${this.id}/${mangaId}`;
    };
    getSection = (sectionId, page)=>{
        const includedTags = [
            {
                id: "35",
                label: "romance"
            }
        ];
        const excludedTags = "1,2,15,16,24,25,40,42,45,46,58,59".split(",").map((id)=>({
                label: "",
                id
            })
        );
        switch(sectionId){
            case "top":
                return this.getViewMoreItems("hot", {
                    page
                });
            case "new_romcom":
                return this.getSearchResults({
                    includedTags,
                    excludedTags,
                    parameters: {
                        "": [
                            ""
                        ]
                    }
                }, {
                    page
                });
            default:
                return this.getViewMoreItems(sectionId, {
                    page
                });
        }
    };
    parser = new Parser();
    getMangaShareUrl(mangaId) {
        return `${NetTruyen_DOMAIN}truyen-tranh/${mangaId}`;
    }
    requestManager = createRequestManager({
        requestsPerSecond: 5,
        requestTimeout: 20000,
        interceptor: {
            interceptRequest: async (request)=>{
                request.headers = {
                    ...request.headers ?? {},
                    ...{
                    }
                };
                return request;
            },
            interceptResponse: async (response)=>response
        }
    });
    async getMangaDetails(mangaId) {
        const url = `${NetTruyen_DOMAIN}truyen-tranh/${mangaId}`;
        const request = createRequestObject({
            url: url,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        return this.parser.parseMangaDetails($, mangaId);
    }
    async getChapters(mangaId) {
        const url = `${NetTruyen_DOMAIN}truyen-tranh/${mangaId}`;
        const request = createRequestObject({
            url: url,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        return this.parser.parseChapterList($, mangaId);
    }
    async getChapterDetails(mangaId, chapterId) {
        const request = createRequestObject({
            url: `${NetTruyen_DOMAIN}/truyen-tranh/${mangaId.split("-").slice(0, -1).join("-")}/abc/${chapterId}`,
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        const pages = this.parser.parseChapterDetails($);
        return createChapterDetails({
            pages: pages.map((p)=>(0,url/* proxyImage */.qG)(p, NetTruyen_DOMAIN)
            ),
            longStrip: false,
            id: chapterId,
            mangaId: mangaId
        });
    }
    async getSearchResults(query, metadata) {
        const page = metadata?.page ?? 1;
        const search = {
            genres: "",
            notgenres: "",
            gender: "-1",
            status: "-1",
            minchapter: "1",
            sort: "0"
        };
        const tags = query.includedTags?.map((tag)=>tag.id
        ) ?? [];
        const nottags = query.excludedTags?.map((tag)=>tag.id
        ) ?? [];
        const genres = [];
        const notgenres = [];
        tags.map((value)=>{
            if (value.indexOf(".") === -1) {
                genres.push(value);
            } else {
                switch(value.split(".")[0]){
                    case "minchapter":
                        search.minchapter = value.split(".")[1];
                        break;
                    case "gender":
                        search.gender = value.split(".")[1];
                        break;
                    case "sort":
                        search.sort = value.split(".")[1];
                        break;
                    case "status":
                        search.status = value.split(".")[1];
                        break;
                }
            }
        });
        nottags.forEach((value)=>notgenres.push(value)
        );
        search.genres = (genres ?? []).join(",");
        search.notgenres = (notgenres ?? []).join(",");
        const url = `${NetTruyen_DOMAIN}`;
        const request = createRequestObject({
            url: query.title ? url + "/tim-truyen" : url + "/tim-truyen-nang-cao" + encodeURI(`?keyword=${query.title ?? ""}&genres=${search.genres}&notgenres=${search.notgenres}&gender=${search.gender}&status=${search.status}&minchapter=${search.minchapter}&sort=${search.sort}&page=${page}`),
            method: "GET"
        });
        const data = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(data.data);
        const tiles = this.parser.parseSearchResults($);
        metadata = !isLastPage($) ? {
            page: page + 1
        } : undefined;
        return createPagedResults({
            results: tiles,
            metadata
        });
    }
    async getHomePageSections(sectionCallback) {
        const featured = createHomeSection({
            id: "featured",
            title: "Truy\u1EC7n \u0110\u1EC1 C\u1EED",
            type: external_paperback_extensions_common_.HomeSectionType.featured
        });
        const viewest = createHomeSection({
            id: "viewest",
            title: "Truy\u1EC7n Xem Nhi\u1EC1u Nh\u1EA5t",
            view_more: true
        });
        const hot = createHomeSection({
            id: "hot",
            title: "Truy\u1EC7n Hot Nh\u1EA5t",
            view_more: true
        });
        const newUpdated = createHomeSection({
            id: "new_updated",
            title: "Truy\u1EC7n M\u1EDBi C\u1EADp Nh\u1EADt",
            view_more: true
        });
        const newAdded = createHomeSection({
            id: "new_added",
            title: "Truy\u1EC7n M\u1EDBi Th\xeam G\u1EA7n \u0110\xe2y",
            view_more: true
        });
        const full = createHomeSection({
            id: "full",
            title: "Truy\u1EC7n \u0110\xe3 Ho\xe0n Th\xe0nh",
            view_more: true
        });
        //Load empty sections
        sectionCallback(featured);
        sectionCallback(viewest);
        sectionCallback(hot);
        sectionCallback(newUpdated);
        sectionCallback(newAdded);
        sectionCallback(full);
        ///Get the section data
        //Featured
        let url = `${NetTruyen_DOMAIN}`;
        let request = createRequestObject({
            url: url,
            method: "GET"
        });
        let data = await this.requestManager.schedule(request, 1);
        let $ = this.cheerio.load(data.data);
        featured.items = this.parser.parseFeaturedSection($);
        sectionCallback(featured);
        //View
        url = `${NetTruyen_DOMAIN}tim-truyen?status=-1&sort=10`;
        request = createRequestObject({
            url: url,
            method: "GET"
        });
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        viewest.items = this.parser.parsePopularSection($);
        sectionCallback(viewest);
        //Hot
        url = `${NetTruyen_DOMAIN}hot`;
        request = createRequestObject({
            url: url,
            method: "GET"
        });
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        hot.items = this.parser.parseHotSection($);
        sectionCallback(hot);
        //New Updates
        url = `${NetTruyen_DOMAIN}`;
        request = createRequestObject({
            url: url,
            method: "GET"
        });
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        newUpdated.items = this.parser.parseNewUpdatedSection($);
        sectionCallback(newUpdated);
        //New added
        url = `${NetTruyen_DOMAIN}tim-truyen?status=-1&sort=15`;
        request = createRequestObject({
            url: url,
            method: "GET"
        });
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        newAdded.items = this.parser.parseNewAddedSection($);
        sectionCallback(newAdded);
        //Full
        url = `${NetTruyen_DOMAIN}truyen-full`;
        request = createRequestObject({
            url: url,
            method: "GET"
        });
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        full.items = this.parser.parseFullSection($);
        sectionCallback(full);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        const page = metadata?.page ?? 1;
        let param = "";
        let url = "";
        switch(homepageSectionId){
            case "viewest":
                param = `?status=-1&sort=10&page=${page}`;
                url = `${NetTruyen_DOMAIN}tim-truyen`;
                break;
            case "hot":
                param = `?page=${page}`;
                url = `${NetTruyen_DOMAIN}hot`;
                break;
            case "new_updated":
                param = `?page=${page}`;
                url = NetTruyen_DOMAIN;
                break;
            case "new_added":
                param = `?status=-1&sort=15&page=${page}`;
                url = `${NetTruyen_DOMAIN}tim-truyen`;
                break;
            case "full":
                param = `?page=${page}`;
                url = `${NetTruyen_DOMAIN}truyen-full`;
                break;
            default:
                throw new Error("Requested to getViewMoreItems for a section ID which doesn't exist");
        }
        const request = createRequestObject({
            url,
            method: "GET",
            param
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const manga = this.parser.parseViewMoreItems($);
        metadata = isLastPage($) ? undefined : {
            page: page + 1
        };
        return createPagedResults({
            results: manga,
            metadata
        });
    }
    async getSearchTags() {
        const url = `${NetTruyen_DOMAIN}tim-truyen-nang-cao`;
        const request = createRequestObject({
            url: url,
            method: "GET"
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        return this.parser.parseTags($);
    }
    async filterUpdatedManga(mangaUpdatesFoundCallback, time, ids) {
        const updateManga = [];
        const pages = 10;
        for(let i = 1; i < pages + 1; i++){
            const request = createRequestObject({
                url: NetTruyen_DOMAIN + "?page=" + i,
                method: "GET"
            });
            const response = await this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(response.data);
            // let x = $('time.small').text().trim();
            // let y = x.split("lúc:")[1].replace(']', '').trim().split(' ');
            // let z = y[1].split('/');
            // const timeUpdate = new Date(z[1] + '/' + z[0] + '/' + z[2] + ' ' + y[0]);
            // updateManga.push({
            //     id: item,
            //     time: timeUpdate
            // })
            for (const manga of $("div.item", "div.row").toArray()){
                const id = $("figure.clearfix > div.image > a", manga).attr("href")?.split("/").pop();
                const time = $("figure.clearfix > figcaption > ul > li.chapter:nth-of-type(1) > i", manga).last().text().trim();
                updateManga.push({
                    id: id,
                    time: time
                });
            }
        }
        const returnObject = this.parser.parseUpdatedManga(updateManga, time, ids);
        mangaUpdatesFoundCallback(createMangaUpdates(returnObject));
    }
}


/***/ }),

/***/ 5894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4699);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4870);
/* harmony import */ var _Blogtruyen_Blogtruyen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(381);
/* harmony import */ var _MangaDex_MangaDex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2059);
/* harmony import */ var _NHentai_NHentai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5765);
/* harmony import */ var _NetTruyen_NetTruyen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cheerio__WEBPACK_IMPORTED_MODULE_0__, axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_2__, _MangaDex_MangaDex__WEBPACK_IMPORTED_MODULE_4__]);
([cheerio__WEBPACK_IMPORTED_MODULE_0__, axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_2__, _MangaDex_MangaDex__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CORS_PROXY_URL = "https://services.f-ck.me";
const _global = global;
_global.createRequestManager = (info)=>{
    const instance = (0,axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_2__.setupCache)(axios__WEBPACK_IMPORTED_MODULE_1___default().create());
    instance.interceptors.request.use((config)=>{
        info.interceptor?.interceptRequest(config).then((req)=>Promise.resolve(req)
        );
        return config;
    }, (err)=>Promise.reject(err)
    );
    instance.interceptors.request.use((config)=>{
        if (config.url?.includes("nhentai.net")) {
            config.url = `${CORS_PROXY_URL}/v1/cors/${(0,_utils_url__WEBPACK_IMPORTED_MODULE_7__/* .base64UrlEncode */ .rS)(config.url + (config.params ?? ""))}?source=proxy_cubari_moe`;
        }
        config.headers = {
            ...config.headers
        };
        config.headers["x-requested-with"] = "cubari";
        config.cache = {
            ttl: 60 * 60
        };
        return config;
    });
    // instance.interceptors.response.use(
    //   (config) => {
    //     info.interceptor?.interceptResponse(<Response>config).then((req) => {
    //       return Promise.resolve(req);
    //     });
    //     return config;
    //   },
    //   (err) => {
    //     return Promise.reject(err);
    //   }
    // );
    const result = {
        ...info,
        schedule: async (request, retryCount)=>instance.request(request)
    };
    return result;
};
_global.createSourceStateManager = (info)=>{
    _global.sourceStateManager = {
        enabled_homepage_sections: [
            "popular"
        ]
    };
    const store = async (key, value)=>{
        _global.sourceStateManager[key] = value;
    };
    const retrieve = async (key)=>_global.sourceStateManager[key]
    ;
    const result = {
        ...info,
        keychain: {
            store,
            retrieve
        },
        store: store,
        retrieve: async (key)=>{
            const value = await retrieve(key);
            return value ?? null;
        }
    };
    return result;
};
_global.createHomeSection = (section)=>section
;
_global.createRequestObject = (requestObject)=>requestObject
;
_global.createCookie = (cookie)=>cookie
;
_global.createTag = (tag)=>tag
;
_global.createTagSection = (tagSection)=>tagSection
;
_global.createChapter = (chapter)=>chapter
;
_global.createMangaTile = (mangaTile)=>mangaTile
;
_global.createIconText = (iconText)=>iconText
;
_global.createManga = (info)=>info
;
_global.createMangaInfo = (info)=>info
;
_global.createPagedResults = (update)=>update
;
_global.createChapterDetails = (chapterDetails)=>chapterDetails
;
const blogtruyen = new _Blogtruyen_Blogtruyen__WEBPACK_IMPORTED_MODULE_3__/* .Blogtruyen */ .s(cheerio__WEBPACK_IMPORTED_MODULE_0__["default"]);
const mangadex = new _MangaDex_MangaDex__WEBPACK_IMPORTED_MODULE_4__/* .MangaDex */ .k(cheerio__WEBPACK_IMPORTED_MODULE_0__["default"]);
const nhentai = new _NHentai_NHentai__WEBPACK_IMPORTED_MODULE_5__/* .NHentai */ .K(cheerio__WEBPACK_IMPORTED_MODULE_0__["default"]);
const nettruyen = new _NetTruyen_NetTruyen__WEBPACK_IMPORTED_MODULE_6__/* .NetTruyen */ .R8(cheerio__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    blogtruyen,
    mangadex,
    nhentai,
    nettruyen
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R_": () => (/* binding */ createZenChapter),
/* harmony export */   "VZ": () => (/* binding */ createZenManga),
/* harmony export */   "bp": () => (/* binding */ ZenSource),
/* harmony export */   "fs": () => (/* binding */ createZenMangaTile)
/* harmony export */ });
/* unused harmony export ContentRating */
/* harmony import */ var paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4580);
/* harmony import */ var paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__);

class ZenSource extends paperback_extensions_common__WEBPACK_IMPORTED_MODULE_0__.Source {
    getMangaInternalURL = (mangaId)=>`/${this.id}/${mangaId}`
    ;
    getChapterInternalURL = (mangaId, chapterId)=>`/${this.id}/${mangaId}/${chapterId}`
    ;
}
var ContentRating;
(function(ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating || (ContentRating = {}));
function createZenMangaTile(source, manga) {
    return {
        ...manga,
        internalURL: source.getMangaInternalURL(manga.id),
        externalURL: source.getMangaShareUrl?.(manga.id)
    };
}
function createZenManga(source, manga) {
    if ("mangaInfo" in manga) return {
        ...manga.mangaInfo,
        externalURL: source.getMangaInternalURL(manga.id || ""),
        internalURL: `/${source.id}/${manga.id}`,
        id: manga.id
    };
    else return {
        ...manga,
        externalURL: source.getMangaInternalURL(manga.id || ""),
        internalURL: `/${source.id}/${manga.id}`,
        id: manga.id
    };
}
function createZenChapter(source, chapter) {
    const zenChapter = {
        ...chapter,
        internalURL: source.getChapterInternalURL(chapter.mangaId, chapter.id),
        name: chapter.name || (chapter.volume === 0 && chapter.chapNum === 0 ? "Oneshot" : null) || (chapter.volume ? `Tập ${chapter.volume} ` : "") + `Chương ${chapter.chapNum}`
    };
    return zenChapter;
}


/***/ }),

/***/ 4870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qG": () => (/* binding */ proxyImage),
/* harmony export */   "rS": () => (/* binding */ base64UrlEncode)
/* harmony export */ });
/* unused harmony exports normalizeUrl, extractEncodedUrl, base64UrlDecode, getCacheHeaders, sleep */
const normalizeUrl = (url)=>{
    if (url.startsWith("/")) {
        url = url.slice(1);
    }
    return url.startsWith("http") ? url : `https://${url}`;
};
const extractEncodedUrl = (prefix, path)=>path.replace(prefix, "").split("?")[0]
;
const base64UrlDecode = (string)=>{
    const base64String = string.replace(/-/g, "+").replace(/_/g, "/");
    return Buffer.from(base64String, "base64").toString();
};
const base64UrlEncode = (string)=>{
    const base64String = Buffer.from(string).toString("base64");
    return base64String.replace(/\+/g, "-").replace(/\//g, "_");
};
const getCacheHeaders = (privacy, maxAge, sMaxAge)=>`${privacy}, max-age=${maxAge}, s-maxage=${sMaxAge}`
;
const sleep = (duration)=>new Promise((resolve)=>{
        setTimeout(resolve, duration);
    })
;
const proxyImage = (url, host)=>`https://services.f-ck.me/v1/image/${btoa(url).replace(/\+/g, "-").replace(/\//g, "_")}?host=${host}`
;



/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = JSON.parse('[{"result":"ok","data":{"id":"0234a31e-a729-4e28-9d6a-3f87c4966b9e","type":"tag","attributes":{"name":{"en":"Oneshot"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"07251805-a27e-4d59-b488-f0bfbec15168","type":"tag","attributes":{"name":{"en":"Thriller"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"0a39b5a1-b235-4886-a747-1d05d216532d","type":"tag","attributes":{"name":{"en":"Award Winning"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"0bc90acb-ccc1-44ca-a34a-b9f3a73259d0","type":"tag","attributes":{"name":{"en":"Reincarnation"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"256c8bd9-4904-4360-bf4f-508a76d67183","type":"tag","attributes":{"name":{"en":"Sci-Fi"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"292e862b-2d17-4062-90a2-0356caa4ae27","type":"tag","attributes":{"name":{"en":"Time Travel"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"2bd2e8d0-f146-434a-9b51-fc9ff2c5fe6a","type":"tag","attributes":{"name":{"en":"Genderswap"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"2d1f5d56-a1e5-4d0d-a961-2193588b08ec","type":"tag","attributes":{"name":{"en":"Loli"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"31932a7e-5b8e-49a6-9f12-2afa39dc544c","type":"tag","attributes":{"name":{"en":"Traditional Games"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"320831a8-4026-470b-94f6-8353740e6f04","type":"tag","attributes":{"name":{"en":"Official Colored"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"33771934-028e-4cb3-8744-691e866a923e","type":"tag","attributes":{"name":{"en":"Historical"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"36fd93ea-e8b8-445e-b836-358f02b3d33d","type":"tag","attributes":{"name":{"en":"Monsters"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"391b0423-d847-456f-aff0-8b0cfc03066b","type":"tag","attributes":{"name":{"en":"Action"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"39730448-9a5f-48a2-85b0-a70db87b1233","type":"tag","attributes":{"name":{"en":"Demons"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"3b60b75c-a2d7-4860-ab56-05f391bb889c","type":"tag","attributes":{"name":{"en":"Psychological"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"3bb26d85-09d5-4d2e-880c-c34b974339e9","type":"tag","attributes":{"name":{"en":"Ghosts"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"3de8c75d-8ee3-48ff-98ee-e20a65c86451","type":"tag","attributes":{"name":{"en":"Animals"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"3e2b8dae-350e-4ab8-a8ce-016e844b9f0d","type":"tag","attributes":{"name":{"en":"Long Strip"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"423e2eae-a7a2-4a8b-ac03-a8351462d71d","type":"tag","attributes":{"name":{"en":"Romance"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"489dd859-9b61-4c37-af75-5b18e88daafc","type":"tag","attributes":{"name":{"en":"Ninja"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"4d32cc48-9f00-4cca-9b5a-a839f0764984","type":"tag","attributes":{"name":{"en":"Comedy"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"50880a9d-5440-4732-9afb-8f457127e836","type":"tag","attributes":{"name":{"en":"Mecha"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"51d83883-4103-437c-b4b1-731cb73d786c","type":"tag","attributes":{"name":{"en":"Anthology"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"5920b825-4181-4a17-beeb-9918b0ff7a30","type":"tag","attributes":{"name":{"en":"Boys\' Love"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"5bd0e105-4481-44ca-b6e7-7544da56b1a3","type":"tag","attributes":{"name":{"en":"Incest"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"5ca48985-9a9d-4bd8-be29-80dc0303db72","type":"tag","attributes":{"name":{"en":"Crime"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"5fff9cde-849c-4d78-aab0-0d52b2ee1d25","type":"tag","attributes":{"name":{"en":"Survival"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"631ef465-9aba-4afb-b0fc-ea10efe274a8","type":"tag","attributes":{"name":{"en":"Zombies"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"65761a2a-415e-47f3-bef2-a9dababba7a6","type":"tag","attributes":{"name":{"en":"Reverse Harem"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"69964a64-2f90-4d33-beeb-f3ed2875eb4c","type":"tag","attributes":{"name":{"en":"Sports"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"7064a261-a137-4d3a-8848-2d385de3a99c","type":"tag","attributes":{"name":{"en":"Superhero"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"799c202e-7daa-44eb-9cf7-8a3c0441531e","type":"tag","attributes":{"name":{"en":"Martial Arts"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"7b2ce280-79ef-4c09-9b58-12b7c23a9b78","type":"tag","attributes":{"name":{"en":"Fan Colored"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"81183756-1453-4c81-aa9e-f6e1b63be016","type":"tag","attributes":{"name":{"en":"Samurai"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"81c836c9-914a-4eca-981a-560dad663e73","type":"tag","attributes":{"name":{"en":"Magical Girls"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"85daba54-a71c-4554-8a28-9901a8b0afad","type":"tag","attributes":{"name":{"en":"Mafia"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"87cc87cd-a395-47af-b27a-93258283bbc6","type":"tag","attributes":{"name":{"en":"Adventure"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"891cf039-b895-47f0-9229-bef4c96eccd4","type":"tag","attributes":{"name":{"en":"User Created"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"8c86611e-fab7-4986-9dec-d1a2f44acdd5","type":"tag","attributes":{"name":{"en":"Virtual Reality"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"92d6d951-ca5e-429c-ac78-451071cbf064","type":"tag","attributes":{"name":{"en":"Office Workers"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"9438db5a-7e2a-4ac0-b39e-e0d95a34b8a8","type":"tag","attributes":{"name":{"en":"Video Games"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"9467335a-1b83-4497-9231-765337a00b96","type":"tag","attributes":{"name":{"en":"Post-Apocalyptic"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"97893a4c-12af-4dac-b6be-0dffb353568e","type":"tag","attributes":{"name":{"en":"Sexual Violence"},"description":[],"group":"content","version":1}},"relationships":[]},{"result":"ok","data":{"id":"9ab53f92-3eed-4e9b-903a-917c86035ee3","type":"tag","attributes":{"name":{"en":"Crossdressing"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"a1f53773-c69a-4ce5-8cab-fffcd90b1565","type":"tag","attributes":{"name":{"en":"Magic"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"a3c67850-4684-404e-9b7f-c69850ee5da6","type":"tag","attributes":{"name":{"en":"Girls\' Love"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"aafb99c1-7f60-43fa-b75f-fc9502ce29c7","type":"tag","attributes":{"name":{"en":"Harem"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"ac72833b-c4e9-4878-b9db-6c8a4a99444a","type":"tag","attributes":{"name":{"en":"Military"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"acc803a4-c95a-4c22-86fc-eb6b582d82a2","type":"tag","attributes":{"name":{"en":"Wuxia"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"ace04997-f6bd-436e-b261-779182193d3d","type":"tag","attributes":{"name":{"en":"Isekai"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"b11fda93-8f1d-4bef-b2ed-8803d3733170","type":"tag","attributes":{"name":{"en":"4-Koma"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"b13b2a48-c720-44a9-9c77-39c9979373fb","type":"tag","attributes":{"name":{"en":"Doujinshi"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"b1e97889-25b4-4258-b28b-cd7f4d28ea9b","type":"tag","attributes":{"name":{"en":"Philosophical"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"b29d6a3d-1569-4e7a-8caf-7557bc92cd5d","type":"tag","attributes":{"name":{"en":"Gore"},"description":[],"group":"content","version":1}},"relationships":[]},{"result":"ok","data":{"id":"b9af3a63-f058-46de-a9a0-e0c13906197a","type":"tag","attributes":{"name":{"en":"Drama"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"c8cbe35b-1b2b-4a3f-9c37-db84c4514856","type":"tag","attributes":{"name":{"en":"Medical"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"caaa44eb-cd40-4177-b930-79d3ef2afe87","type":"tag","attributes":{"name":{"en":"School Life"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"cdad7e68-1419-41dd-bdce-27753074a640","type":"tag","attributes":{"name":{"en":"Horror"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"cdc58593-87dd-415e-bbc0-2ec27bf404cc","type":"tag","attributes":{"name":{"en":"Fantasy"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"d14322ac-4d6f-4e9b-afd9-629d5f4d8a41","type":"tag","attributes":{"name":{"en":"Villainess"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"d7d1730f-6eb0-4ba6-9437-602cac38664c","type":"tag","attributes":{"name":{"en":"Vampires"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"da2d50ca-3018-4cc0-ac7a-6b7d472a29ea","type":"tag","attributes":{"name":{"en":"Delinquents"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"dd1f77c5-dea9-4e2b-97ae-224af09caf99","type":"tag","attributes":{"name":{"en":"Monster Girls"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"ddefd648-5140-4e5f-ba18-4eca4071d19b","type":"tag","attributes":{"name":{"en":"Shota"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"df33b754-73a3-4c54-80e6-1a74a8058539","type":"tag","attributes":{"name":{"en":"Police"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"e197df38-d0e7-43b5-9b09-2842d0c326dd","type":"tag","attributes":{"name":{"en":"Web Comic"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"e5301a23-ebd9-49dd-a0cb-2add944c7fe9","type":"tag","attributes":{"name":{"en":"Slice of Life"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"e64f6742-c834-471d-8d72-dd51fc02b835","type":"tag","attributes":{"name":{"en":"Aliens"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"ea2bc92d-1c26-4930-9b7c-d5c0dc1b6869","type":"tag","attributes":{"name":{"en":"Cooking"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"eabc5b4c-6aff-42f3-b657-3e90cbd00b75","type":"tag","attributes":{"name":{"en":"Supernatural"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"ee968100-4191-4968-93d3-f82d72be7e46","type":"tag","attributes":{"name":{"en":"Mystery"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"f4122d1c-3b44-44d0-9936-ff7502c39ad3","type":"tag","attributes":{"name":{"en":"Adaptation"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"f42fbf9e-188a-447b-9fdc-f19dc1e4d685","type":"tag","attributes":{"name":{"en":"Music"},"description":[],"group":"theme","version":1}},"relationships":[]},{"result":"ok","data":{"id":"f5ba408b-0e7a-484d-8d49-4e9125ac96de","type":"tag","attributes":{"name":{"en":"Full Color"},"description":[],"group":"format","version":1}},"relationships":[]},{"result":"ok","data":{"id":"f8f62932-27da-4fe4-8ee1-6779a8c5edba","type":"tag","attributes":{"name":{"en":"Tragedy"},"description":[],"group":"genre","version":1}},"relationships":[]},{"result":"ok","data":{"id":"fad12b5e-68ba-460e-b933-9ae8318f5b65","type":"tag","attributes":{"name":{"en":"Gyaru"},"description":[],"group":"theme","version":1}},"relationships":[]}]');

/***/ })

};
;