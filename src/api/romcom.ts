import axios from 'axios';
import { QueryResult, Title } from '../@types/romcom';
import { ROMCOM_API } from '../config';

const axiosInstance = axios.create({
    baseURL: ROMCOM_API
})

export const getTitles = async (queryString: string): Promise<QueryResult<Title>> => {
    const { data } = await axiosInstance({ url: `/v1/titles?${queryString}` })
    return data;
}

export const getTitle = async (id: string): Promise<Title> => {
    const { data } = await axiosInstance({ url: `/v1/titles/${id}` })
    return data
}