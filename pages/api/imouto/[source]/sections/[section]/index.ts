import type { NextApiRequest, NextApiResponse } from 'next';
import SOURCES from '@/ordersources';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { source: sourceId, section: sectionId } = req.query;
  const page = (req.query.page) ? Number(req.query.page) : 1;
  const source = SOURCES[<string>sourceId];
  try {
    const data = await source.getSection?.(<string>sectionId, page);
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
}