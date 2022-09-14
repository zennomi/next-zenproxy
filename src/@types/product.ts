export enum Category {
    LIGHT_NOVEL,
    MANGA,
    DOUJINSHI,
    ARTBOOK,
    UNKNOWN
}

export enum Currency {
    JPY,
    VND,
    USD
}

export interface Product {
    id: string,
    titles: string[],
    images: string[],
    originalPrice: number,
    currency?: Currency,
    categories?: Category[],
    tags?: string[]
}