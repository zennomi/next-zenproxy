import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Image } from '../../../src/components';
// sections
import sources from '../../../src/sources';
import MangaInfo from '../../../src/sections/@proxy/MangaInfo';
import ChaptersList from '../../../src/sections/@proxy/ChaptersList';
import { useChapters, useManga } from '../../../src/hooks/useProxy';
import { getManga } from '../../../src/api/proxy';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
        paddingTop: HEADER_DESKTOP_HEIGHT,
    },
}));

// ----------------------------------------------------------------------
export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const source = sources[String(context.query.source)];
        if (!source) throw new Error("Not Found Source");
        const mangaId = String(context.query.manga);
        const queryClient = new QueryClient();

        await queryClient.fetchQuery(['manga', { sourceId: source.id, mangaId }], () => getManga(source.id, mangaId));
        
        return {
            props: { sourceId: source.id, dehydratedState: dehydrate(queryClient), mangaId }
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

export default function MangaPage({ sourceId, mangaId }: { sourceId: string, mangaId: string }) {
    const { data: manga } = useManga(sourceId, mangaId);

    if (!sourceId || !manga) {
        return <ErrorScreen />;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: chapters = [] } = useChapters(sourceId, mangaId);
    return (
        <Page title={manga.titles[0] ?? "RomCom iz da bezt..."}>
            <RootStyle>
                <Container
                    sx={{
                        mt: { xs: 8, md: 10 },
                        mb: { xs: 10, md: 15 },
                    }}
                >
                    <Box
                        sx={{
                            alignItems: 'flex-start',
                            display: 'grid',
                            gap: 5,
                            gridTemplateColumns: { md: 'repeat(2, 1fr)' },
                            mb: { xs: 10, md: 15 },
                        }}
                    >
                        <Box sx={{ width: { xs: "80%", md: '100%' }, mx: 'auto' }}>
                            <Image
                                alt="cover"
                                src={manga.image}
                                ratio="3/4"
                                sx={{ borderRadius: 2 }}
                            />
                        </Box>
                        <MangaInfo manga={manga} />
                    </Box>
                    <ChaptersList chapters={chapters} />
                </Container>
            </RootStyle>
        </Page>
    );
}

// ----------------------------------------------------------------------

MangaPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
