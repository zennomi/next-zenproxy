import { CheerioAPI } from "cheerio";
import { Product } from "./product";
import { OrderSection } from "./ordersection";

export abstract class OrderSource {
    cheerio: CheerioAPI;
    constructor(cheerio: CheerioAPI) {
        this.cheerio = cheerio;
    };
    abstract id: string;
    abstract name: string;
    abstract websiteBaseURL: string;
    abstract icon: string;
    abstract sections: OrderSection[];
    abstract getSection(id: string, page: number): Promise<Product[]>
}