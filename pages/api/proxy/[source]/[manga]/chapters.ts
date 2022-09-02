import type { NextApiRequest, NextApiResponse } from 'next';
import SOURCES from '@/sources';
import { createZenChapter } from '../../../../../src/sources/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = <string>req.query.source;
  const mangaId = <string>req.query.manga;
  const source = SOURCES[query];
  const data = await source.getChapters(mangaId);
  return res.send(data.map(chapter => createZenChapter(source, chapter)));
}
