import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Stack } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// hooks
import { useBoundingClientRect } from '../../hooks';
// components
import { CarouselArrows, CarouselDots, MangaTileSkeleton } from '../../components';
// 
import { ProductCard } from '../../components';
import { useSection } from '../../hooks/useImouto';
import { OrderSource } from '@/@types/ordersource';
import { Product } from '@/@types/product';
// 

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    padding: theme.spacing(10, 0),
    ...cssStyles(theme).bgImage(),
    [theme.breakpoints.up('md')]: {
        position: 'relative',
        padding: theme.spacing(20, 0),
    },
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
    position: 'relative',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
        left: 0,
        right: 0,
        marginBottom: 0,
        position: 'absolute',
        height: 'calc(100% - 320px)',
    },
}));

const CarouselArrowsStyle = styled(CarouselArrows)(({ theme }) => ({
    display: 'none',
    '& button': {
        borderRadius: '50%',
        color: theme.palette.primary.main,
        border: `solid 1px ${alpha(theme.palette.primary.main, 0.24)}`,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: 0,
        display: 'block',
    },
}));

// ----------------------------------------------------------------------

type Props = {
    source: OrderSource;
};

export default function HomeTopProjects({ source }: Props) {
    const theme = useTheme();

    const carouselRef = useRef<Slider | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const container = useBoundingClientRect(containerRef);

    const { data: products = [] } = useSection(source.id, 'special_novel', 1);

    const offsetLeft = container?.left;

    const carouselSettings = {
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: Boolean(theme.direction === 'rtl'),
        ...CarouselDots({
            sx: {
                mt: 8,
                display: { md: 'none' },
            },
        }),
        responsive: [
            {
                breakpoint: theme.breakpoints.values.xl,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: theme.breakpoints.values.lg,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <RootStyle>
            <ContainerStyle>
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Stack sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
                            <Typography variant="overline" sx={{ color: 'grey.600' }}>
                                {source.id}
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 2, mb: 3, color: 'primary.main' }}>
                                {source.name}
                            </Typography>
                            <Typography sx={{ color: 'common.white' }}>
                                {source.websiteBaseURL}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box ref={containerRef} />
                    </Grid>
                </Grid>

                <CarouselArrowsStyle onNext={handleNext} onPrevious={handlePrevious} />
            </ContainerStyle>

            <Box
                sx={{
                    pl: `${offsetLeft}px`,
                    width: { md: `calc(100% + 120px)` },
                }}
            >
                <Slider ref={carouselRef} {...carouselSettings}>
                    {
                        products.length === 0 ?
                            [...Array(5)].map((_, index) =>
                                <Box
                                    key={index}
                                    sx={{
                                        ml: '-1px',
                                        pl: { xs: 2, md: 4 },
                                        pr: { xs: 2, md: 0 },
                                        color: 'common.white',
                                    }}
                                >
                                    <MangaTileSkeleton />
                                </Box>
                            )
                            :
                            products.slice(0, 10).map((product: Product) => (
                                <Box
                                    key={product.id}
                                    sx={{
                                        ml: '-1px',
                                        pl: { xs: 2, md: 4 },
                                        pr: { xs: 2, md: 0 },
                                        color: 'common.white',
                                    }}
                                >
                                    <ProductCard product={product} />
                                </Box>
                            ))}
                </Slider>
            </Box>
        </RootStyle>
    );
}
