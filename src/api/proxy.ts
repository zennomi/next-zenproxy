import { ChapterDetails } from 'paperback-extensions-common';
import { ZenChapter, ZenManga, ZenMangaTile } from '../sources/types';
import axios from '../utils/axios';

export const getManga = async (sourceId: string, mangaId: string): Promise<ZenManga> => {
  const { data } = await axios.get(`/proxy/${sourceId}/${mangaId}`);
  return data;
};

export const getSection = async (
  sourceId: string,
  sectionId: string,
  page: number
): Promise<{ results: ZenMangaTile[]; metadata: any }> => {
  const { data } = await axios.get(`/proxy/${sourceId}/sections/${sectionId}?page=${page}`);
  return data;
};

export const getChapters = async (sourceId: string, mangaId: string): Promise<ZenChapter[]> => {
  const { data } = await axios.get(`/proxy/${sourceId}/${mangaId}/chapters`);
  return data;
};

export const getChapter = async (
  sourceId: string,
  mangaId: string,
  chapterId: string
): Promise<ChapterDetails> => {
  const { data } = await axios.get(`/proxy/${sourceId}/${mangaId}/${chapterId}`);
  return data;
};
