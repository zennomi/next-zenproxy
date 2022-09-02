import type { NextApiRequest, NextApiResponse } from 'next';
import SOURCES from '@/sources';
import { PagedResults } from 'paperback-extensions-common';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const query = <string>req.query.source;
  const sectionIds = req.body.sections || (<string>req.query.sections)?.split(',') || [];
  const metadata = req.body.metadata || { page: req.query.page || 1 };
  const source = SOURCES[query];
  interface IData {
    [sectionId: string]: PagedResults | undefined;
  }
  try {
    let data: IData = {};
    for (const sectionId of sectionIds) {
      data[sectionId as keyof Object] = await source.getViewMoreItems?.(sectionId, metadata);
    }
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
}
