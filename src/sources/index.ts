import cheerio from 'cheerio';
import {
  RequestManager,
  RequestManagerInfo,
  SourceStateManagerInfo,
  PagedResults,
  Request,
  HomeSection,
  Cookie,
  Tag,
  TagSection,
  Chapter,
  MangaTile,
  IconText,
  Manga,
  ChapterDetails,
} from 'paperback-extensions-common';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { setupCache } from 'axios-cache-interceptor';

import { ZenSource } from './types';

import { base64UrlEncode } from '../utils/url';

import { Blogtruyen } from './Blogtruyen/Blogtruyen';
import { MangaDex } from './MangaDex/MangaDex';
import { NHentai } from './NHentai/NHentai';
import { NetTruyen } from './NetTruyen/NetTruyen';

const CORS_PROXY_URL = 'https://services.f-ck.me';

const _global = global as any;

_global.createRequestManager = (info: RequestManagerInfo) => {
  const instance = setupCache(axios.create());
  instance.interceptors.request.use(
    (config) => {
      info.interceptor?.interceptRequest(<Request>config).then((req) => {
        return Promise.resolve(req);
      });
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.request.use((config) => {
    if (config.url?.includes('nhentai.net')) {
      config.url = `${CORS_PROXY_URL}/v1/cors/${base64UrlEncode(
        config.url + (config.params ?? '')
      )}?source=proxy_cubari_moe`;
    }
    config.headers = { ...config.headers };
    config.headers['x-requested-with' as keyof AxiosRequestHeaders] = 'cubari';
    config.cache = { ttl: 60 * 60 };
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

  const result: RequestManager = {
    ...info,
    schedule: async (request: Request, retryCount: number) => {
      return instance.request(<AxiosRequestConfig>request);
    },
  };
  return result;
};

_global.createSourceStateManager = (info: SourceStateManagerInfo) => {
  _global.sourceStateManager = {
    enabled_homepage_sections: ['popular'],
  };
  const store = async (key: string, value: unknown) => {
    _global.sourceStateManager[key] = value;
  };
  const retrieve = async (key: string) => {
    return _global.sourceStateManager[key];
  };
  const result: SourceStateManagerInfo = {
    ...info,
    keychain: {
      store,
      retrieve,
    },
    store: store,
    retrieve: async (key: string) => {
      const value = await retrieve(key);
      return value ?? null;
    },
  };
  return result;
};

_global.createHomeSection = (section: HomeSection) => section;
_global.createRequestObject = (requestObject: Request) => requestObject;
_global.createCookie = (cookie: Cookie) => cookie;
_global.createTag = (tag: Tag) => tag;
_global.createTagSection = (tagSection: TagSection) => tagSection;
_global.createChapter = (chapter: Chapter) => chapter;
_global.createMangaTile = (mangaTile: MangaTile) => mangaTile;
_global.createIconText = (iconText: IconText) => iconText;
_global.createManga = (
  info: {
    id: string;
  } & Manga
) => info;
_global.createMangaInfo = (info: Manga) => info;
_global.createPagedResults = (update: PagedResults) => update;
_global.createChapterDetails = (chapterDetails: ChapterDetails) => chapterDetails;

const blogtruyen = new Blogtruyen(cheerio);
const mangadex = new MangaDex(cheerio);
const nhentai = new NHentai(cheerio);
const nettruyen = new NetTruyen(cheerio);

interface Sources {
  [sourceId: string]: ZenSource;
}

export default { blogtruyen, mangadex, nhentai, nettruyen } as Sources;
