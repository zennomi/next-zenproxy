import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
// @mui
// config
// layouts
// components
import { Page, ErrorScreen, MangaImage } from '@/components';
// sections
import { ZenChapter } from '@/sources/types';
import { useChapter, useChapters, useManga } from '@/hooks/useProxy';
import { getChapters } from '@/api/proxy';
import PageNotFound from '../../../404';
import ChapterBottomNav from '@/sections/@proxy/ChapterBottomNav';
import ChapterTopNav from '@/sections/@proxy/ChapterTopNav';
import { useRouter } from 'next/router';
import Routes from '@/routes';
import { styled } from '@mui/material';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../../src/config';

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    paddingBottom: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
        paddingBottom: HEADER_DESKTOP_HEIGHT,
        paddingTop: HEADER_DESKTOP_HEIGHT,
    },
}));

// ----------------------------------------------------------------------
export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const sourceId = String(context.query.source);
        const mangaId = String(context.query.manga);
        const chapterId = String(context.query.chapter);
        const queryClient = new QueryClient();
        await queryClient.fetchQuery(['chapters', { sourceId, mangaId }], () => getChapters(sourceId, mangaId));

        return {
            props: { sourceId, mangaId, chapterId, dehydratedState: dehydrate(queryClient) }
        };
    } catch (error) {
        console.log(error);
    }
    return {
        props: {
            sourceId: null, mangaId: null
        }
    }
}

export default function MangaPage({ sourceId, mangaId, chapterId }: { sourceId: string, mangaId: string, chapterId: string }) {
    if (!sourceId || !mangaId) {
        return <ErrorScreen />;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: chapters } = useChapters(sourceId, mangaId);
    if (!chapters || chapters.length === 0) return <PageNotFound />
    let currentChapterId = router.query.chapter || chapterId;
    if (currentChapterId === "newest") currentChapterId = chapters[0].id;
    if (currentChapterId === "oldest") currentChapterId = chapters[0].id;
    const chapterIndex = chapters.findIndex((chapter: ZenChapter) => chapter.id === currentChapterId);

    if (chapterIndex < 0) return <PageNotFound />;
    const chapter = chapters[chapterIndex];
    chapter.prevChapterId = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1].id : undefined;
    chapter.nextChapterId = chapterIndex > 0 ? chapters[chapterIndex - 1].id : undefined;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: manga } = useManga(sourceId, mangaId);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: chapterDetails } = useChapter(sourceId, mangaId, chapter.id);

    const handleChapterChange = (newChapterId: string) => {
        if (!router) return;
        router.push({
            pathname: Routes.proxy.chapter('[source]', '[manga]', '[chapter]'),
            query: {
                source: sourceId,
                manga: mangaId,
                chapter: newChapterId
            },
        }, undefined,
            {
                shallow: true,
                scroll: true
            }
        )
    };

    return (
        <Page title={chapter.name + ' - ' + (manga?.titles[0] || '')}>
            <RootStyle>
                <ChapterTopNav />
                {
                    chapterDetails?.pages.map(page =>
                        <MangaImage src={page} key={page} sx={{ textAlign: 'center' }} visibleByDefault={true}/>
                    )
                }
                <ChapterBottomNav manga={manga} chapters={chapters} chapter={chapter} handleChapterChange={handleChapterChange} />
            </RootStyle>
        </Page>
    );
}
