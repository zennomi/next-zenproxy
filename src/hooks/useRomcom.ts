import { useQuery } from '@tanstack/react-query';
import { getTitle, getTitles } from '../api/romcom';

export const useTitles = (queryString: string, enabled: boolean) => useQuery(['romcom-titles', queryString], () => getTitles(queryString), { keepPreviousData: true, staleTime: 5 * 60 * 1000, enabled })

export const useTitle = (id: string) => useQuery(['romcom-title', id], () => getTitle(id))