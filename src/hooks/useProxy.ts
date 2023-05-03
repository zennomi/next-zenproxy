import { useQuery } from '@tanstack/react-query';
import * as api from '../api/proxy';

export const useSection = (sourceId: string, sectionId: string, page: number) => useQuery(['section', { sourceId, sectionId, page }], () =>
    api.getSection(sourceId, sectionId, page)
  );

export const useManga = (sourceId: string, mangaId: string) => useQuery(['manga', { sourceId, mangaId }], () => api.getManga(sourceId, mangaId));

export const useChapters = (sourceId: string, mangaId: string) => useQuery(['chapters', { sourceId, mangaId }], () => api.getChapters(sourceId, mangaId));

export const useChapter = (sourceId: string, mangaId: string, chapterId: string) => useQuery(['chapter', { sourceId, mangaId, chapterId }], () =>
    api.getChapter(sourceId, mangaId, chapterId)
  );
