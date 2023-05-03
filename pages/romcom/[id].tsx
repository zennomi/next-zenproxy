import { GetServerSideProps } from 'next';
import { ReactElement, useRef, useState } from 'react';
import RouterLink from 'next/link';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import Slider from 'react-slick';
import {
    Container, Grid, Typography, Card, Box, Skeleton, Stack, Divider, Rating,
    Link, styled
} from '@mui/material';
import parse from 'html-react-parser';
import { getTitle } from '../../src/api/romcom';
import Layout, { RootStyle } from '../../src/layouts';
import { useTitle } from '../../src/hooks/useRomcom';
import { Page, Image, Label, CarouselDots, CarouselArrows, Breadcrumbs } from '../../src/components';
import { ColorSchema } from '../../src/theme/palette';
import CustomStyle from '../../src/components/CustomStyle';
import Routes from '../../src/routes';
import TitleLinks from '../../src/sections/romcom/TitleLinks';
import PageNotFound from '../404';

const regexForStripHTML = /(<([^>]+)>)/ig;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    const id = context.query.id as string;
    await queryClient.prefetchQuery(['romcom-title', id], () => getTitle(id))

    return {
        props: {
            titleId: id,
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default function RomComTitlePage({ titleId }: { titleId: string }) {
    const { data: title, error } = useTitle(titleId);
    const carouselRef = useRef<Slider | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        speed: 800,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        ...CarouselDots({
            zIndex: 9,
            top: 24,
            left: 24,
            position: 'absolute',
        }),
    };

    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    if (error) return <PageNotFound />

    return (
        <Page title={title?.name || "Manga RomCom"}
            meta={
                <>
                    <meta property="og:title" content={title?.name || "Manga RomCom"} />
                    <meta property="og:type" content="article" />
                    <meta property="og:image" content={title?.coverArt?.[0] || "https://telegraph-image-bak.pages.dev/file/005019a5b28c88d1a013e.jpg"} />
                    <meta property="og:url" content={`https://zenno.moe/romcom/${title?._id || ""}`} />
                    <meta property="og:description" content={title?.description?.replaceAll(regexForStripHTML, '') || "Thông tin về bộ romcom này"} />
                </>
            }
        >
            <RootStyle>
                <Container>
                    <Breadcrumbs links={[
                        { name: "Trang chủ", href: "/" },
                        { name: "Thư viện RomCom", href: Routes.romcom.titles },
                        { name: title?.name || "Manga RomCom" }
                    ]} />
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={12} md={3}>
                            <CardSlider sx={{ mx: 'auto', mb: 2 }}>
                                <Slider ref={carouselRef} {...settings}>
                                    {title?.coverArt ?
                                        title.coverArt.map((cover, index) => (
                                            <CarouselItem key={index} coverArt={cover} />
                                        )) :
                                        <CarouselItem coverArt={""} />
                                    }
                                </Slider>
                                <CarouselArrows
                                    onNext={handleNext}
                                    onPrevious={handlePrevious}
                                    spacing={0}
                                    sx={{
                                        top: 16,
                                        right: 16,
                                        position: 'absolute',
                                        '& .arrow': {
                                            p: 0,
                                            width: 32,
                                            height: 32,
                                            opacity: 0.48,
                                            color: 'common.white',
                                            '&:hover': { color: 'common.white', opacity: 1 },
                                        },
                                    }}
                                />
                            </CardSlider>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Stack direction='row' spacing={0.5}>
                                <Label color='error' variant='filled'>{title?.type.toUpperCase()}</Label>
                                <StatusLabel status={title?.status} />
                            </Stack>
                            <Typography variant='h3'>
                                {title?.name?.toUpperCase() || <Skeleton />}{"  "}
                                {title?.score && <Rating value={title.score / 100 * 5} precision={0.5} readOnly />}
                            </Typography>
                            <Typography variant='body2' sx={{ opacity: 0.72 }}>
                                {title?.altTitle?.toUpperCase()}
                            </Typography>
                            {
                                title && title.staff.map(a => <Label sx={{ m: 0.5 }} variant='filled' key={a}>{a}</Label>)
                            }
                            {
                                title?.description &&
                                <CustomStyle>
                                    <Typography variant='body1'>
                                        {parse(title.description)}
                                    </Typography>
                                </CustomStyle>
                            }
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                                {title?.genres.map(genre =>
                                    <Label key={genre} color='primary' sx={{ m: 0.2 }} >
                                        <RouterLink href={`${Routes.romcom.titles}?genres=${genre}`}>
                                            <Link href={`${Routes.romcom.titles}?genres=${genre}`}>{genre}</Link>
                                        </RouterLink>
                                    </Label>
                                )
                                }
                                {title?.tags.map(tag =>
                                    <Label key={tag} color='primary' variant='outlined' sx={{ m: 0.2 }} >
                                        <RouterLink href={`${Routes.romcom.titles}?tags=${tag}`}>
                                            <Link>{tag}</Link>
                                        </RouterLink>
                                    </Label>
                                )
                                }
                            </Box>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TitleLinks links={title?.links} />
                        </Grid>
                    </Grid>
                </Container>
            </RootStyle>
        </Page>
    )
}

RomComTitlePage.getLayout = function getLayout(page: ReactElement) {
    return <Layout simpleFooter>{page}</Layout>;
};

function CarouselItem({ coverArt }: { coverArt: string }) {
    return (
        <Box sx={{ position: 'relative' }}>
            <Image src={coverArt} ratio="4/6" />
        </Box>
    );
}

function StatusLabel({ status = 'ongoing' }) {
    let color: ColorSchema;
    if (status === 'ongoing') color = 'info';
    else if (status === 'completed') color = 'success';
    else if (status === 'hiatus') color = 'warning';
    else color = 'error';
    return (<Label color={color} variant='filled'>{status.toUpperCase()}</Label>)
}

const CardSlider = styled(Card)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        width: '70%',
    },
}))