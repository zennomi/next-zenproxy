import {
    Source,
    Manga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    PagedResults,
    SourceInfo,
    TagType,
    TagSection,
    ContentRating,
    MangaTile,
    Tag,
    LanguageCode,
    Request,
    Response
} from "paperback-extensions-common";

import tagsArr from './tag.json';

import { parseSearch, isLastPage, parseViewMore } from "./SayHentaiParser";

const DOMAIN = 'https://sayhentai.net/'
const method = 'GET'

export const SayHentaiInfo: SourceInfo = {
    version: '2.0.1',
    name: 'SayHentai',
    icon: 'icon.png',
    author: 'Huynhzip3',
    authorWebsite: 'https://github.com/huynh12345678',
    description: 'Extension that pulls manga from SayHentai',
    websiteBaseURL: `https://sayhentai.net/`,
    contentRating: ContentRating.ADULT,
    sourceTags: [
        {
            text: "18+",
            type: TagType.YELLOW
        }
    ]
}

export class SayHentai extends Source {
    getMangaShareUrl(mangaId: string): string { return `https://sayhentai.net/${mangaId}` };
    requestManager = createRequestManager({
        requestsPerSecond: 5,
        requestTimeout: 20000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {

                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'referer': DOMAIN
                    }
                }

                return request
            },

            interceptResponse: async (response: Response): Promise<Response> => {
                return response
            }
        }
    })

    async getMangaDetails(mangaId: string): Promise<Manga> {
        const url = `https://sayhentai.net/${mangaId}`;
        const request = createRequestObject({
            url: url,
            method: "GET",
        });
        const data = await this.requestManager.schedule(request, 1);
        let $ = this.cheerio.load(data.data);
        let tags: Tag[] = [];
        let creator = '';
        let status = 1; //completed, 1 = Ongoing
        let desc = $('.detail-content > p').text();
        for (const t of $('.list01.li03 > a.genner-block').toArray()) {
            const genre = $(t).text().trim()
            const id = $(t).attr('href') ?? genre
            tags.push(createTag({ label: genre, id }));
        }
        creator = $('.list-info > li:nth-child(1)').text().split(":")[1].trim();
        status = $('.list-info > li:nth-child(2) > b').text().toLowerCase().includes("đang") ? 1 : 0;
        const image = $('.wrap-content-image > img').attr('src');
        return createManga({
            id: mangaId,
            author: creator,
            artist: creator,
            desc: desc,
            titles: [$('.wrap-content-info > h1').text().trim()],
            image: image?.includes('http') ? image : (image?.includes('//') ? ('https:' + image.replace('//st.truyenchon.com', '//st.imageinstant.net')) : ('https://sayhentai.net/' + image)),
            status,
            // rating: parseFloat($('span[itemprop="ratingValue"]').text()),
            hentai: true,
            tags: [createTagSection({ label: "genres", tags: tags, id: '0' })]
        });

    }
    async getChapters(mangaId: string): Promise<Chapter[]> {
        const request = createRequestObject({
            url: `https://sayhentai.net/${mangaId}`,
            method,
        });

        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const chapters: Chapter[] = [];
        var i = 0;
        for (const obj of $("#list-chapter > li.chap-item").toArray().reverse()) {
            var chapNum = parseFloat($('a', obj).text().trim().split(' ')[1]);
            i++;
            chapters.push(createChapter(<Chapter>{
                id: $('a', obj).first().attr('href'),
                chapNum: isNaN(chapNum) ? i : chapNum,
                name: $('span', obj).text().trim(),
                mangaId: mangaId,
                langCode: LanguageCode.VIETNAMESE,
            }));
        }

        return chapters;
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        const request = createRequestObject({
            url: `https://sayhentai.net/${chapterId}`,
            method
        });

        const response = await this.requestManager.schedule(request, 1);
        let $ = this.cheerio.load(response.data);
        const pages: string[] = [];
        for (let obj of $('#lst_content > img').toArray()) {
            if (!obj.attribs['data-src']) continue;
            let link = obj.attribs['data-src'].includes('http') ?
                (obj.attribs['data-src']).trim() : ('https://sayhentai.net/' + obj.attribs['data-src']).trim();
            pages.push(encodeURI(link));
        }

        const chapterDetails = createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages,
            longStrip: false
        });
        return chapterDetails;
    }

    async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        let hot: HomeSection = createHomeSection({
            id: 'hot',
            title: "Top Trong Ngày",
            view_more: true,
        });
        let newUpdated: HomeSection = createHomeSection({
            id: 'new_updated',
            title: "Mới Cập Nhật",
            view_more: true,
        });
        let newAdded: HomeSection = createHomeSection({
            id: 'new_added',
            title: "Truyện Mới",
            view_more: true,
        });

        //Load empty sections
        sectionCallback(hot);
        sectionCallback(newUpdated);
        sectionCallback(newAdded);

        ///Get the section data
        //Hot
        let url = '';
        let request = createRequestObject({
            url: 'https://sayhentai.net/',
            method: "GET",
        });
        let hotItems: MangaTile[] = [];
        let data = await this.requestManager.schedule(request, 1);
        let $ = this.cheerio.load(data.data);
        for (let obj of $('li', '#main-content > .wrap-content-part:nth-of-type(1) > .body-content-part > ul').toArray()) {
            let title = $(`.info-bottom > a`, obj).text().trim();
            let subtitle = $(`.info-bottom > span`, obj).text().split(":")[0].trim();
            const image = $(`a > img`, obj).attr('src');
            let id = $(`.info-bottom > a`, obj).attr("href") ?? title;
            // if (!id || !subtitle) continue;
            hotItems.push(createMangaTile({
                id: id,
                image: image?.includes('http') ? image : (image?.includes('//') ? ('https:' + image.replace('//st.truyenchon.com', '//st.imageinstant.net')) : ('https://sayhentai.net/' + image)),
                title: createIconText({
                    text: title,
                }),
                subtitleText: createIconText({
                    text: subtitle,
                }),
            }))
        }
        hot.items = hotItems;
        sectionCallback(hot);

        //New Updates
        url = '';
        request = createRequestObject({
            url: 'https://sayhentai.net/',
            method: "GET",
        });
        let newUpdatedItems: MangaTile[] = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (let obj of $('li', '#main-content > .wrap-content-part:nth-of-type(3) > .body-content-part > ul').toArray().splice(0, 15)) {
            let title = $(`.info-bottom > a`, obj).text().trim();
            let subtitle = $(`.info-bottom > span`, obj).text().split(":")[0].trim();
            const image = $(`a > img`, obj).attr('src');
            let id = $(`.info-bottom > a`, obj).attr("href") ?? title;
            // if (!id || !subtitle) continue;
            newUpdatedItems.push(createMangaTile({
                id: id,
                image: image?.includes('http') ? image : (image?.includes('//') ? ('https:' + image.replace('//st.truyenchon.com', '//st.imageinstant.net')) : ('https://sayhentai.net/' + image)),
                title: createIconText({
                    text: title,
                }),
                subtitleText: createIconText({
                    text: subtitle,
                }),
            }))
        }
        newUpdated.items = newUpdatedItems;
        sectionCallback(newUpdated);

        //New Added
        url = DOMAIN
        request = createRequestObject({
            url: 'https://sayhentai.net/',
            method: "GET",
        });
        let newAddItems: MangaTile[] = [];
        data = await this.requestManager.schedule(request, 1);
        $ = this.cheerio.load(data.data);
        for (let obj of $('li', '#main-content > .wrap-content-part:nth-of-type(5) > .body-content-part > ul').toArray()) {
            let title = $(`.info-bottom > a`, obj).text().trim();
            let subtitle = $(`.info-bottom > span`, obj).text().split(":")[0].trim();
            const image = $(`a > img`, obj).attr('src');
            let id = $(`.info-bottom > a`, obj).attr("href") ?? title;
            // if (!id || !subtitle) continue;
            newAddItems.push(createMangaTile({
                id: id,
                image: image?.includes('http') ? image : (image?.includes('//') ? ('https:' + image.replace('//st.truyenchon.com', '//st.imageinstant.net')) : ('https://sayhentai.net/' + image)),
                title: createIconText({
                    text: title,
                }),
                subtitleText: createIconText({
                    text: subtitle,
                }),
            }))
        }
        newAdded.items = newAddItems;
        sectionCallback(newAdded);
    }

    async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        let page: number = metadata?.page ?? 1;
        let param = '';
        let url = '';
        switch (homepageSectionId) {
            case "hot":
                url = `https://sayhentai.net/danh-sach-truyen.html?status=0&sort=views&page=${page}`;
                break;
            case "new_updated":
                url = `https://sayhentai.net/danh-sach-truyen.html?page=${page}`;
                break;
            case "new_added":
                url = `https://sayhentai.net/danh-sach-truyen.html?status=0&sort=id&page=${page}`;
                break;
            default:
                return Promise.resolve(createPagedResults({ results: [] }))
        }

        const request = createRequestObject({
            url,
            method,
            param
        });

        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);

        const manga = parseViewMore($);
        metadata = !isLastPage($) ? { page: page + 1 } : undefined;
        return createPagedResults({
            results: manga,
            metadata,
        });
    }

    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        let page = metadata?.page ?? 1;
        const tags = query.includedTags?.map(tag => tag.id) ?? [];
        const search = {
            genres: '',
            status: "0",
            sort: "last_update",
            name: query.title ?? ''
        };
        tags.map((value) => {
            if (value.indexOf('.') === -1) {
                search.genres = value;
            } else {
                switch (value.split(".")[0]) {
                    case 'sort':
                        search.sort = (value.split(".")[1]);
                        break
                    case 'status':
                        search.status = (value.split(".")[1]);
                        break
                }
            }
        })
        const request = createRequestObject({
            url: (tags[0] === 'all' ? 'https://sayhentai.net/danh-sach-truyen.html?' : encodeURI(`https://sayhentai.net/danh-sach-truyen.html?status=${search.status}&name=${search.name}&genre=${search.genres}&sort=${search.sort}`)),
            method: "GET",
            param: encodeURI(`&page=${page}`)
        });

        const data = await this.requestManager.schedule(request, 1);
        let $ = this.cheerio.load(data.data);
        const tiles = parseSearch($);

        metadata = !isLastPage($) ? { page: page + 1 } : undefined;

        return createPagedResults({
            results: tiles,
            metadata
        });
    }

    async getSearchTags(): Promise<TagSection[]> {
        const tags: Tag[] = tagsArr;
        const tags1: Tag[] = [
            {
                "id": "status.0",
                "label": "Tất Cả"
            },
            {
                "id": "status.2",
                "label": "Đang Tiến Hành"
            },
            {
                "id": "status.1",
                "label": "Đã Hoàn Thành"
            }
        ]

        const tags2: Tag[] = [
            {
                "id": "sort.name",
                "label": "Tên Truyện"
            },
            {
                "id": "sort.views",
                "label": "Lượt Xem"
            },
            {
                "id": "sort.last_update",
                "label": "Ngày Cập Nhật"
            },
            {
                "id": "sort.id",
                "label": "Truyện Mới"
            }
        ]

        const tagSections: TagSection[] = [
            createTagSection({ id: '0', label: 'Thể Loại', tags: tags.map(x => createTag(x)) }),
            createTagSection({ id: '1', label: 'Trạng Thái', tags: tags1.map(x => createTag(x)) }),
            createTagSection({ id: '2', label: 'Xếp Theo', tags: tags2.map(x => createTag(x)) }),
        ]
        return tagSections;
    }
}