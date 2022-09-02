import type { NextApiRequest, NextApiResponse } from 'next';
import SOURCES from '@/sources';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = <string>req.query.source;
  const mangaId = <string>req.query.manga;
  const chapterId = <string>req.query.chapter;
  const source = SOURCES[query];
  const data = await source.getChapterDetails(mangaId, chapterId);
  return res.send(data);
}
