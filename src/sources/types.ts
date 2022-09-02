import {
  PagedResults,
  Source,
  Manga,
  Chapter,
  MangaTile,
  SourceManga,
} from 'paperback-extensions-common';

export abstract class ZenSource extends Source {
  abstract id: string;
  abstract name: string;
  abstract icon: string;
  abstract description: string;
  abstract websiteBaseURL: string;
  abstract language?: string;
  abstract contentRating: ContentRating;
  getMangaInternalURL = (mangaId: string) => {
    return `/${this.id}/${mangaId}`;
  };
  getChapterInternalURL = (mangaId: string, chapterId: string) => {
    return `/${this.id}/${mangaId}/${chapterId}`;
  };
  abstract getSection?(sectionId: string, page: number): Promise<PagedResults | undefined>;
}

export interface ZenMangaTile extends MangaTile {
  internalURL?: string;
  externalURL?: string;
}

export interface ZenManga extends Manga {
  id?: string;
  internalURL?: string;
  externalURL?: string;
}

export interface ZenChapter extends Chapter {
  internalURL: string;
  nextChapterId?: string;
  prevChapterId?: string;
}

export enum ContentRating {
  EVERYONE = 'EVERYONE',
  MATURE = 'MATURE',
  ADULT = 'ADULT',
}

export function createZenMangaTile(source: ZenSource, manga: MangaTile) {
  return <ZenMangaTile>{
    ...manga,
    internalURL: source.getMangaInternalURL(manga.id),
    externalURL: source.getMangaShareUrl?.(manga.id),
  };
}

export function createZenManga(source: ZenSource, manga: ZenManga | SourceManga) {
  if ('mangaInfo' in manga)
    return <ZenManga>{
      ...manga.mangaInfo,
      externalURL: source.getMangaInternalURL(manga.id || ''),
      internalURL: `/${source.id}/${manga.id}`,
      id: manga.id,
    };
  else
    return <ZenManga>{
      ...manga,
      externalURL: source.getMangaInternalURL(manga.id || ''),
      internalURL: `/${source.id}/${manga.id}`,
      id: manga.id,
    };
}

export function createZenChapter(source: ZenSource, chapter: Chapter) {
  const zenChapter: ZenChapter = {
    ...chapter,
    internalURL: source.getChapterInternalURL(chapter.mangaId, chapter.id),
    name:
      chapter.name ||
      (chapter.volume === 0 && chapter.chapNum === 0 ? 'Oneshot' : null) ||
      (chapter.volume ? `Tập ${chapter.volume} ` : '') + `Chương ${chapter.chapNum}`,
  };
  return zenChapter;
}
