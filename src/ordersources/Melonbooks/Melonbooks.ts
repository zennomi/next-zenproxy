import { OrderSource } from "../../@types/ordersource";
import { Product } from "../../@types/product";

import axios from 'axios';
import { OrderSection } from "@/@types/ordersection";

export class Melonbooks extends OrderSource {
    id = "melonbooks";
    icon = "Melonbooks.png";
    sections: OrderSection[] = [{
        id: "special_novel",
        title: "Light Novel bản đặc biệt",
    }]
    name = "Melonbooks";
    websiteBaseURL = "https://www.melonbooks.co.jp";
    getSection = async (id: string, page: number) => {
        let data;
        const results: Product[] = [];
        switch (id) {
            case 'special_novel':
                data = (await axios.get(`${this.websiteBaseURL}/tags/index.php?tag=${encodeURIComponent("メロン限定版")}%28${encodeURIComponent("ノベル")}%29`)).data;
                break;
        }
        const $ = this.cheerio.load(data);
        for (const productEle of $(".product").toArray()) {
            let id = $(".thumb a", productEle).attr("href")?.slice(30) || "";
            let imgEle = $(".thumb img", productEle);
            let imageURL = imgEle.attr("data-src") || "";
            if (!imageURL?.startsWith("https:")) imageURL = "https:" + imageURL;
            imageURL = imageURL.replace("214", "900").replace("151", "650");
            const title = imgEle.attr("alt") || "";
            let price = $(".price em", productEle).text();
            if (price?.startsWith("¥")) price = price.slice(1);
            price = price.replace(",", "");
            results.push({ id, titles: [title], originalPrice: Number(price), images: [imageURL], });
        }
        return results;
    }
}