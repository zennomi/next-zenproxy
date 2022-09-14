import { Product } from '../@types/product';
import axios from '../utils/axios';

export const getSection = async (
    sourceId: string,
    sectionId: string,
    page: number
): Promise<Product[]> => {
    const { data } = await axios.get(`/imouto/${sourceId}/sections/${sectionId}?page=${page}`);
    return data;
};