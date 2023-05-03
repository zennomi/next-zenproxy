/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  PagedResults,
  Source,
  Manga,
  Chapter,
  ChapterDetails,
  HomeSection,
  SearchRequest,
  SourceInfo,
  LanguageCode,
  TagType,
  MangaStatus,
  MangaTile,
  Tag,
  ContentRating,
  TagSection,
  Section,
  HomeSectionType,
  MangaUpdates,
} from 'paperback-extensions-common';

import * as entities from 'entities';

import {
  contentSettings,
  getLanguages,
  getRatings,
  thumbnailSettings,
  getHomepageThumbnail,
  getSearchThumbnail,
  getMangaThumbnail,
  resetSettings,
  getDataSaver,
  getSkipSameChapter,
  homepageSettings,
  getEnabledRecommendations,
  getEnabledHomePageSections,
  accountSettings,
  getAccessToken,
  authEndpointRequest,
  saveAccessToken,
} from './MangaDexSettings';
import { requestMetadata, MDLanguages, URLBuilder, MDImageQuality } from './MangaDexHelper';
import { addRecommendedId, getRecommendedIds } from './MangaDexSimilarManga';
import tagJSON from './external/tag.json';
import { parseChapterList, parseMangaList } from './MangaDexParser';
import { ZenSource } from '../types';

const MANGADEX_DOMAIN = 'https://mangadex.org';
const MANGADEX_API = 'https://api.mangadex.org';
const COVER_BASE_URL = 'https://uploads.mangadex.org/covers';

// Titles recommendations are shown on the homepage when enabled in source settings.
// Recommendations are made using https://github.com/Similar-Manga
const RECOMMENDATION_URL = 'https://framboisepi.github.io/SimilarData';

export const MangaDexInfo: SourceInfo = {
  author: 'nar1n',
  description: 'Extension that pulls manga from MangaDex',
  icon: 'icon.png',
  name: 'MangaDex',
  version: '2.1.9',
  authorWebsite: 'https://github.com/nar1n',
  websiteBaseURL: MANGADEX_DOMAIN,
  contentRating: ContentRating.EVERYONE,
  language: LanguageCode.ENGLISH,
  sourceTags: [
    {
      text: 'Notifications',
      type: TagType.GREEN,
    },
  ],
};

export class MangaDex extends ZenSource {
  id = 'mangadex';
  description = 'Lọc manga romcom mới được cập nhật trên Mangadex';
  icon = 'MangaDex.png';
  name = 'mangadex';
  websiteBaseURL = 'https://mangadex.org';
  contentRating = ContentRating.EVERYONE;
  language = LanguageCode.ENGLISH;

  getSection = async (sectionId: string, page: number) => {
    const offset = page * 100 - 100;
    const includedTags: Tag[] = [{ id: '423e2eae-a7a2-4a8b-ac03-a8351462d71d', label: 'romance' }];
    const excludedTags: Tag[] =
      '3b60b75c-a2d7-4860-ab56-05f391bb889c,3b60b75c-a2d7-4860-ab56-05f391bb889c,5920b825-4181-4a17-beeb-9918b0ff7a30,a3c67850-4684-404e-9b7f-c69850ee5da6,acc803a4-c95a-4c22-86fc-eb6b582d82a2,f8f62932-27da-4fe4-8ee1-6779a8c5edba,2bd2e8d0-f146-434a-9b51-fc9ff2c5fe6a,2d1f5d56-a1e5-4d0d-a961-2193588b08ec,5bd0e105-4481-44ca-b6e7-7544da56b1a3,65761a2a-415e-47f3-bef2-a9dababba7a6,9ab53f92-3eed-4e9b-903a-917c86035ee3,aafb99c1-7f60-43fa-b75f-fc9502ce29c7'
        .split(',')
        .map((id) => ({ id, label: '' }));
    const languages = ['en', 'vi'];
    let url = '';
    switch (sectionId) {
      case 'top':
        return this.getViewMoreItems('popular', { offset });
      case 'top_romcom':
        url = new URLBuilder(this.MANGADEX_API)
          .addPathComponent('manga')
          .addQueryParameter('limit', 100)
          .addQueryParameter('order', { followedCount: 'desc' })
          .addQueryParameter('offset', offset)
          .addQueryParameter('includes', ['cover_art'])
          .addQueryParameter(
            'includedTags',
            includedTags?.map((x) => x.id)
          )
          .addQueryParameter(
            'excludedTags',
            excludedTags?.map((x) => x.id)
          )
          .addQueryParameter('order', { rating: 'desc' })
          .addQueryParameter('availableTranslatedLanguage', languages)
          .addQueryParameter('originalLanguage', ['ja'])
          .addQueryParameter('hasAvailableChapters', true)
          .buildUrl();
        break; 
      case 'new_romcom':
        url = new URLBuilder(this.MANGADEX_API)
          .addPathComponent('manga')
          .addQueryParameter('limit', 100)
          .addQueryParameter('order', { followedCount: 'desc' })
          .addQueryParameter('offset', offset)
          .addQueryParameter('includes', ['cover_art'])
          .addQueryParameter(
            'includedTags',
            includedTags?.map((x) => x.id)
          )
          .addQueryParameter(
            'excludedTags',
            excludedTags?.map((x) => x.id)
          )
          .addQueryParameter('order', { createdAt: 'desc' })
          .addQueryParameter('availableTranslatedLanguage', languages)
          .addQueryParameter('originalLanguage', ['ja'])
          .addQueryParameter('hasAvailableChapters', true)
          .buildUrl();
        break;
      default:
        return await this.getViewMoreItems(sectionId, { offset: page * 100 - 100 });
    }
    const request = createRequestObject({
      url,
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    if (json.data === undefined)
      throw new Error('Failed to parse json results for getViewMoreItems');
    const results = await parseMangaList(json.data, this, getHomepageThumbnail);
    return createPagedResults({
      results,
      metadata: { offset: offset + 100 },
    });
  };

  MANGADEX_DOMAIN = MANGADEX_DOMAIN;
  MANGADEX_API = MANGADEX_API;
  COVER_BASE_URL = COVER_BASE_URL;

  requestManager = createRequestManager({
    requestsPerSecond: 4,
    requestTimeout: 15000,
    interceptor: {
      interceptRequest: async (request) => {
        // Impossible to have undefined headers, ensured by the app
        request.headers = {
          ...request.headers,
          referer: `${this.MANGADEX_DOMAIN}/`,
        };

        let accessToken = await getAccessToken(this.stateManager);

        if (request.url.includes('auth/') || !accessToken) return request;

        // Padding 60 secs to make sure it wont expire in-transit if the connection is really bad
        if (Number(accessToken.tokenBody.exp) <= Date.now() / 1000 - 60) {
          try {
            const response = await authEndpointRequest(this.requestManager, 'refresh', {
              token: accessToken.refreshToken,
            });

            accessToken = await saveAccessToken(
              this.stateManager,
              response.token.session,
              response.token.refresh
            );
            if (!accessToken) return request;
          } catch {
            return request;
          }
        }

        // Impossible to have undefined headers, ensured by the app
        request.headers = {
          ...request.headers,
          authorization: 'Bearer ' + accessToken.accessToken,
        };

        return request;
      },
      interceptResponse: async (x) => x,
    },
  });

  stateManager = createSourceStateManager({});

  override async getSourceMenu(): Promise<Section> {
    return Promise.resolve(
      createSection({
        id: 'main',
        header: 'Source Settings',
        rows: async () => [
          await accountSettings(this.stateManager, this.requestManager),
          contentSettings(this.stateManager),
          thumbnailSettings(this.stateManager),
          homepageSettings(this.stateManager),
          resetSettings(this.stateManager),
        ],
      })
    );
  }

  override getMangaShareUrl(mangaId: string): string {
    return `${this.MANGADEX_DOMAIN}/title/${mangaId}`;
  }

  override async getSearchTags(): Promise<TagSection[]> {
    const sections: Record<string, TagSection> = {};

    for (const tag of tagJSON) {
      const group = tag.data.attributes.group;

      if (sections[group] == null) {
        sections[group] = createTagSection({
          id: group,
          label: group.charAt(0).toUpperCase() + group.slice(1),
          tags: [],
        });
      }
      const tagObject = createTag({ id: tag.data.id, label: tag.data.attributes.name.en });
      // Since we already know that a section for the group has to exist, eslint is complaining
      // for no reason at all.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      sections[group]!.tags = [...(sections[group]?.tags ?? []), tagObject];
    }

    return Object.values(sections);
  }

  override async supportsSearchOperators(): Promise<boolean> {
    return true;
  }

  override async supportsTagExclusion(): Promise<boolean> {
    return true;
  }

  async getCustomListRequestURL(listId: string, ratings: string[]): Promise<string> {
    const request = createRequestObject({
      url: `${this.MANGADEX_API}/list/${listId}`,
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    return new URLBuilder(this.MANGADEX_API)
      .addPathComponent('manga')
      .addQueryParameter('limit', 100)
      .addQueryParameter('contentRating', ratings)
      .addQueryParameter('includes', ['cover_art'])
      .addQueryParameter(
        'ids',
        json.data.relationships.filter((x: any) => x.type == 'manga').map((x: any) => x.id)
      )
      .buildUrl();
  }

  async getCoversMapping(mangaIds: string[], ratings: string[]): Promise<{ [id: string]: string }> {
    const mapping: { [id: string]: string } = {};

    const request = createRequestObject({
      url: new URLBuilder(this.MANGADEX_API)
        .addPathComponent('manga')
        .addQueryParameter('limit', 100)
        .addQueryParameter('contentRating', ratings)
        .addQueryParameter('ids', mangaIds)
        .addQueryParameter('includes', ['cover_art'])
        .buildUrl(),
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    for (const manga of json.data) {
      const mangaId = manga.id;
      const coverFileName = manga.relationships
        .filter((x: any) => x.type == 'cover_art')
        .map((x: any) => x.attributes?.fileName)[0];

      if (!mangaId || !coverFileName) continue;

      mapping[mangaId] = coverFileName;
    }

    return mapping;
  }

  async getMangaDetails(mangaId: string): Promise<Manga> {
    if (!mangaId.includes('-')) {
      // Legacy Id
      console.log('OLD ID: PLEASE MIGRATE');
      throw new Error('OLD ID: PLEASE MIGRATE');
    }

    const request = createRequestObject({
      url: new URLBuilder(this.MANGADEX_API)
        .addPathComponent('manga')
        .addPathComponent(mangaId)
        .addQueryParameter('includes', ['author', 'artist', 'cover_art'])
        .buildUrl(),
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    const mangaDetails = json.data.attributes;
    const titles = <string[]>(
      [
        ...Object.values(mangaDetails.title),
        ...mangaDetails.altTitles.flatMap((x: never) => Object.values(x)),
      ]
        .map((x: string) => this.decodeHTMLEntity(x))
        .filter((x) => x)
    );
    const desc = this.decodeHTMLEntity(mangaDetails.description.en)?.replace(/\[\/?[bus]]/g, ''); // Get rid of BBcode tags

    let status = MangaStatus.COMPLETED;
    if (mangaDetails.status == 'ongoing') {
      status = MangaStatus.ONGOING;
    }
    const tags: Tag[] = [];
    for (const tag of mangaDetails.tags) {
      const tagName: { [index: string]: string } = tag.attributes.name;
      tags.push(
        createTag({
          id: tag.id,
          label: Object.keys(tagName).map((keys) => tagName[keys])[0] ?? 'Unknown',
        })
      );
    }

    const author = json.data.relationships
      .filter((x: any) => x.type == 'author')
      .map((x: any) => x.attributes.name)
      .join(', ');
    const artist = json.data.relationships
      .filter((x: any) => x.type == 'artist')
      .map((x: any) => x.attributes.name)
      .join(', ');

    const coverFileName = json.data.relationships
      .filter((x: any) => x.type == 'cover_art')
      .map((x: any) => x.attributes?.fileName)[0];
    let image: string;
    if (coverFileName) {
      image = `${this.COVER_BASE_URL}/${mangaId}/${coverFileName}${MDImageQuality.getEnding(
        await getMangaThumbnail(this.stateManager)
      )}`;
    } else {
      image = 'https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg';
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
          id: 'tags',
          label: 'Tags',
          tags: tags,
        }),
      ],
    });
  }

  async getChapters(mangaId: string): Promise<Chapter[]> {
    if (!mangaId.includes('-')) {
      // Legacy Id
      console.log('OLD ID: PLEASE MIGRATE');
      throw new Error('OLD ID: PLEASE MIGRATE');
    }

    const languages: string[] = await getLanguages(this.stateManager);
    const skipSameChapter = await getSkipSameChapter(this.stateManager);
    const ratings: string[] = await getRatings(this.stateManager);
    const collectedChapters: string[] = [];

    const chapters: Chapter[] = [];
    let offset = 0;
    let sortingIndex = 0;

    let hasResults = true;
    while (hasResults) {
      const request = createRequestObject({
        url: new URLBuilder(this.MANGADEX_API)
          .addPathComponent('manga')
          .addPathComponent(mangaId)
          .addPathComponent('feed')
          .addQueryParameter('limit', 500)
          .addQueryParameter('offset', offset)
          .addQueryParameter('includes', ['scanlation_group'])
          .addQueryParameter('translatedLanguage', languages)
          .addQueryParameter('order', { volume: 'desc', chapter: 'desc', publishAt: 'desc' })
          .addQueryParameter('contentRating', ratings)
          .addQueryParameter('includeFutureUpdates', '0')
          .buildUrl(),
        method: 'GET',
      });
      const response = await this.requestManager.schedule(request, 1);
      const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
      offset += 500;

      if (json.data === undefined) throw new Error(`Failed to parse json results for ${mangaId}`);

      for (const chapter of json.data) {
        const chapterId = chapter.id;
        const chapterDetails = chapter.attributes;
        const name = this.decodeHTMLEntity(chapterDetails.title);
        const chapNum = Number(chapterDetails?.chapter);
        const volume = Number(chapterDetails?.volume);
        const langCode: any = MDLanguages.getPBCode(chapterDetails.translatedLanguage);
        const time = new Date(chapterDetails.publishAt);
        const group = chapter.relationships
          .filter((x: any) => x.type == 'scanlation_group')
          .map((x: any) => x.attributes.name)
          .join(', ');
        const pages = Number(chapterDetails.pages);

        const identifier = `${volume}-${chapNum}-${chapterDetails.translatedLanguage}`;
        if ((!collectedChapters.includes(identifier) || !skipSameChapter) && pages > 0) {
          chapters.push(
            createChapter({
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
              sortingIndex,
            })
          );

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

  async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
    if (!chapterId.includes('-')) {
      // Numeric ID
      console.log('OLD ID: PLEASE MIGRATE');
      throw new Error('OLD ID: PLEASE REFRESH AND CLEAR ORPHANED CHAPTERS');
    }

    const dataSaver = await getDataSaver(this.stateManager);

    const request = createRequestObject({
      url: `${this.MANGADEX_API}/at-home/server/${chapterId}`,
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    const serverUrl = json.baseUrl;
    const chapterDetails = json.chapter;

    let pages: string[];
    if (dataSaver) {
      pages = chapterDetails.dataSaver.map(
        (x: string) => `${serverUrl}/data-saver/${chapterDetails.hash}/${x}`
      );
    } else {
      pages = chapterDetails.data.map(
        (x: string) => `${serverUrl}/data/${chapterDetails.hash}/${x}`
      );
    }

    // The chapter is being read, add the mangaId to the recommendation list
    addRecommendedId(this.stateManager, mangaId);

    return createChapterDetails({
      id: chapterId,
      mangaId: mangaId,
      pages,
      longStrip: false,
    });
  }

  async getSearchResults(query: SearchRequest, metadata: requestMetadata): Promise<PagedResults> {
    const ratings: string[] = await getRatings(this.stateManager);
    const offset: number = metadata?.offset ?? 0;
    let results: MangaTile[] = [];
    const searchType = query.title?.match(
      /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
    )
      ? 'ids[]'
      : 'title';

    const url = new URLBuilder(this.MANGADEX_API)
      .addPathComponent('manga')
      // Since we already know that a title must exist, we can ignore this.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .addQueryParameter(
        searchType,
        (query.title?.length ?? 0) > 0 ? encodeURIComponent(query.title!) : undefined
      )
      .addQueryParameter('limit', 100)
      .addQueryParameter('offset', offset)
      .addQueryParameter('contentRating', ratings)
      .addQueryParameter('includes', ['cover_art'])
      .addQueryParameter(
        'includedTags',
        query.includedTags?.map((x) => x.id)
      )
      .addQueryParameter('includedTagsMode', query.includeOperator)
      .addQueryParameter(
        'excludedTags',
        query.excludedTags?.map((x) => x.id)
      )
      .addQueryParameter('excludedTagsMode', query.excludeOperator)
      .buildUrl();

    const request = createRequestObject({
      url: url,
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    if (response.status != 200) {
      return createPagedResults({ results });
    }

    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    if (json.data === undefined) {
      throw new Error('Failed to parse json for the given search');
    }

    results = await parseMangaList(json.data, this, getSearchThumbnail);

    return createPagedResults({
      results,
      metadata: { offset: offset + 100 },
    });
  }

  override async getHomePageSections(
    sectionCallback: (section: HomeSection) => void
  ): Promise<void> {
    const ratings: string[] = await getRatings(this.stateManager);
    const languages: string[] = await getLanguages(this.stateManager);

    const promises: Promise<void>[] = [];

    // On the homepage we only show sections enabled in source settings:
    // enabled_homepage_sections and recommended titles sections
    const enabled_homepage_sections = await getEnabledHomePageSections(this.stateManager);

    const sections = [
      {
        request: createRequestObject({
          url: await this.getCustomListRequestURL('ff210dec-862b-4c17-8608-0e7f97c70488', ratings),
          method: 'GET',
        }),
        section: createHomeSection({
          id: 'seasonal',
          title: 'Seasonal',
          type: HomeSectionType.featured,
        }),
      },
      {
        request: createRequestObject({
          url: new URLBuilder(this.MANGADEX_API)
            .addPathComponent('manga')
            .addQueryParameter('limit', 20)
            .addQueryParameter('order', { followedCount: 'desc' })
            .addQueryParameter('contentRating', ratings)
            .addQueryParameter('includes', ['cover_art'])
            .buildUrl(),
          method: 'GET',
        }),
        section: createHomeSection({
          id: 'popular',
          title: 'Popular',
          view_more: true,
        }),
      },
      {
        request: createRequestObject({
          url: new URLBuilder(this.MANGADEX_API)
            .addPathComponent('chapter')
            .addQueryParameter('limit', 100)
            .addQueryParameter('order', { publishAt: 'desc' })
            .addQueryParameter('translatedLanguage', languages)
            .addQueryParameter('includes', ['manga'])
            .addQueryParameter('includeFutureUpdates', '0')
            .buildUrl(),
          method: 'GET',
        }),
        section: createHomeSection({
          id: 'latest_updates',
          title: 'Latest Updates',
          view_more: true,
        }),
      },
    ];

    for (const section of sections) {
      // We only add the section if it is requested by the user in settings
      if (enabled_homepage_sections.includes(section.section.id)) {
        // Let the app load empty sections
        sectionCallback(section.section);

        // Get the section data
        promises.push(
          this.requestManager.schedule(section.request, 1).then(async (response) => {
            const json =
              typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

            if (json.data === undefined)
              throw new Error(`Failed to parse json results for section ${section.section.title}`);

            switch (section.section.id) {
              case 'latest_updates': {
                const coversMapping = await this.getCoversMapping(
                  json.data.map((x: any) => x.relationships
                      .filter((x: any) => x.type == 'manga')
                      .map((x: any) => x.id)[0]),
                  ratings
                );
                section.section.items = await parseChapterList(
                  json.data,
                  coversMapping,
                  this,
                  getHomepageThumbnail,
                  ratings
                );
                break;
              }
              default:
                section.section.items = await parseMangaList(json.data, this, getHomepageThumbnail);
            }
            sectionCallback(section.section);
          })
        );
      }
    }

    // If the user want to see recommendations on the homepage, we process them
    if (await getEnabledRecommendations(this.stateManager)) {
      const recommendedIds = await getRecommendedIds(this.stateManager);

      for (const recommendedId of recommendedIds) {
        // First we fetch similar titles
        const similarRequest = createRequestObject({
          url: `${RECOMMENDATION_URL}/similar/${recommendedId}.json`,
          method: 'GET',
        });
        promises.push(
          this.requestManager.schedule(similarRequest, 1).then(async (similarResponse) => {
            // We should only process if the response is valid
            // We won't throw an error but silently pass as an error can occurre with
            // titles unsupported by SimilarManga (new titles for example)
            if (similarResponse.status !== 200) {
              console.log(
                `Could not fetch similar titles for id: ${recommendedId}, request failed with status ${similarResponse.status}`
              );
            } else {
              const similarJson =
                typeof similarResponse.data === 'string'
                  ? JSON.parse(similarResponse.data)
                  : similarResponse.data;

              // We should only process if the result is valid
              // We won't throw an error but silently pass as an error can occurre with
              // titles unsupported by SimilarManga (new titles for example)
              if (similarJson.id === undefined) {
                console.log(
                  'Could not fetch similar titles for id: ' + recommendedId + ', json is invalid'
                );
              } else {
                // We know the title of the recommended manga, we can thus create the homepage section
                const section = createHomeSection({
                  id: recommendedId,
                  // Can titles be html encoded?
                  title: 'More like ' + this.decodeHTMLEntity(similarJson.title.en),
                  view_more: false,
                });
                // Let the app load empty sections
                sectionCallback(section);

                // Generate the MangaTiles list, sorted by decreasing similarity
                const results = [];

                // We first add the title used for the recommendation
                let image: string;
                if (similarJson.coverFileName === 'unknown') {
                  image = 'https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg';
                } else {
                  image = `${COVER_BASE_URL}/${recommendedId}/${
                    similarJson.coverFileName
                  }${MDImageQuality.getEnding(await getMangaThumbnail(this.stateManager))}`;
                }
                results.push(
                  createMangaTile({
                    id: recommendedId,
                    title: createIconText({
                      text: this.decodeHTMLEntity(similarJson.title.en) ?? 'No Title',
                    }),
                    image,
                  })
                );

                // We then add similar titles, ordered by decreasing similarity
                for (const manga of similarJson.matches) {
                  // We should only add the title if its rating is enabled
                  if (ratings.includes(manga.contentRating)) {
                    // The similar api contains the coverFileName or 'unknown'
                    let image: string;
                    if (manga.coverFileName === 'unknown') {
                      image = 'https://mangadex.org/_nuxt/img/cover-placeholder.d12c3c5.jpg';
                    } else {
                      image = `${COVER_BASE_URL}/${manga.id}/${
                        manga.coverFileName
                      }${MDImageQuality.getEnding(await getMangaThumbnail(this.stateManager))}`;
                    }

                    results.push(
                      createMangaTile({
                        id: manga.id,
                        title: createIconText({
                          text: this.decodeHTMLEntity(manga.title.en) ?? 'No Title',
                        }),
                        subtitleText: createIconText({
                          text: `Similarity ${manga.score.toFixed(2)}`,
                        }),
                        image,
                      })
                    );
                  }
                }

                section.items = results;
                sectionCallback(section);
              }
            }
          })
        );
      }
    }

    // Make sure the function completes
    await Promise.all(promises);
  }

  override async getViewMoreItems(
    homepageSectionId: string,
    metadata: requestMetadata
  ): Promise<PagedResults> {
    const offset: number = metadata?.offset ?? 0;
    const collectedIds: string[] = metadata?.collectedIds ?? [];
    let results: MangaTile[] = [];
    const ratings: string[] = await getRatings(this.stateManager);
    const languages: string[] = await getLanguages(this.stateManager);
    let url = '';

    switch (homepageSectionId) {
      case 'popular': {
        url = new URLBuilder(this.MANGADEX_API)
          .addPathComponent('manga')
          .addQueryParameter('limit', 100)
          .addQueryParameter('order', { followedCount: 'desc' })
          .addQueryParameter('offset', offset)
          .addQueryParameter('contentRating', ratings)
          .addQueryParameter('includes', ['cover_art'])
          .buildUrl();
        break;
      }
      case 'latest_updates': {
        url = new URLBuilder(this.MANGADEX_API)
          .addPathComponent('chapter')
          .addQueryParameter('limit', 100)
          .addQueryParameter('offset', offset)
          .addQueryParameter('order', { publishAt: 'desc' })
          .addQueryParameter('translatedLanguage', languages)
          .addQueryParameter('includes', ['manga'])
          .addQueryParameter('includeFutureUpdates', '0')
          .buildUrl();
        break;
      }
    }

    const request = createRequestObject({
      url,
      method: 'GET',
    });

    const response = await this.requestManager.schedule(request, 1);
    const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

    if (json.data === undefined)
      throw new Error('Failed to parse json results for getViewMoreItems');

    switch (homepageSectionId) {
      case 'latest_updates': {
        const coversMapping = await this.getCoversMapping(
          json.data.map(
            (x: any) =>
              x.relationships.filter((x: any) => x.type == 'manga').map((x: any) => x.id)[0]
          ),
          ratings
        );
        results = await parseChapterList(
          json.data,
          coversMapping,
          this,
          getHomepageThumbnail,
          ratings
        );
        break;
      }
      default:
        results = await parseMangaList(json.data, this, getHomepageThumbnail);
    }

    return createPagedResults({
      results,
      metadata: { offset: offset + 100, collectedIds },
    });
  }

  override async filterUpdatedManga(
    mangaUpdatesFoundCallback: (updates: MangaUpdates) => void,
    time: Date,
    ids: string[]
  ): Promise<void> {
    let offset = 0;
    const maxRequests = 100;
    let loadNextPage = true;
    const updatedManga: string[] = [];
    const updatedAt = time.toISOString().split('.')[0]; // They support a weirdly truncated version of an ISO timestamp
    const languages: string[] = await getLanguages(this.stateManager);

    while (loadNextPage) {
      const request = createRequestObject({
        url: new URLBuilder(this.MANGADEX_API)
          .addPathComponent('chapter')
          .addQueryParameter('limit', 100)
          .addQueryParameter('offset', offset)
          .addQueryParameter('publishAtSince', updatedAt)
          .addQueryParameter('order', { publishAt: 'desc' })
          .addQueryParameter('translatedLanguage', languages)
          .addQueryParameter('includeFutureUpdates', '0')
          .buildUrl(),
        method: 'GET',
      });

      const response = await this.requestManager.schedule(request, 1);

      // If we have no content, there are no updates available
      if (response.status == 204) {
        return;
      }

      const json = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

      if (json.data === undefined) {
        // Log this, no need to throw.
        console.log(
          `Failed to parse JSON results for filterUpdatedManga using the date ${updatedAt} and the offset ${offset}`
        );
        return;
      }

      const mangaToUpdate: string[] = [];
      for (const chapter of json.data) {
        const mangaId = chapter.relationships.filter((x: any) => x.type == 'manga')[0]?.id;

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
        mangaUpdatesFoundCallback(
          createMangaUpdates({
            ids: mangaToUpdate,
          })
        );
      }
    }
    mangaUpdatesFoundCallback(createMangaUpdates({ ids: [] }));
  }

  decodeHTMLEntity(str: string | undefined): string | undefined {
    if (str == undefined) return undefined;
    return entities.decodeHTML(str);
  }
}
