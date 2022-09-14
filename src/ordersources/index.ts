import { OrderSource } from '@/@types/ordersource';
import cheerio from 'cheerio';
import { Melonbooks } from "./Melonbooks/Melonbooks";

const melonbooks = new Melonbooks(cheerio);

interface Sources {
    [sourceId: string]: OrderSource;
  }

export default { melonbooks } as Sources;