import type { NextApiRequest, NextApiResponse } from 'next';
import SOURCES from '@/sources';
import { createZenManga } from '../../../../../src/sources/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = <string>req.query.source;
  console.log(query);
  const source = SOURCES[query];
  if (!source) return res.status(404).send("not found source");
  const data = await source.getMangaDetails(<string>req.query.manga);
  return res.send(createZenManga(source, data));
}
