import { useQuery } from '@tanstack/react-query';
import * as api from '../api/imouto';

export const useSection = (sourceId: string, sectionId: string, page: number) => {
    return useQuery(['order-section', { sourceId, sectionId, page }], () =>
        api.getSection(sourceId, sectionId, page)
    );
};
