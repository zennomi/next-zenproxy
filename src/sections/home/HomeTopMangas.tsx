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
import { CarouselArrows, CarouselDots } from '../../components';
//
import MangaTileCard from '../../components/MangaTileCard';
import { MangaTile } from 'paperback-extensions-common';
import { useSection } from '../../hooks/useProxy';
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

export default function HomeTopProjects() {
  const theme = useTheme();

  const carouselRef = useRef<Slider | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const container = useBoundingClientRect(containerRef);

  const { data, error, isLoading } = useSection('mangadex', 'top_romcom', 1);
  const { results: mangas } = data ?? { results: [] };

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
                RomCom
              </Typography>
              <Typography variant="h2" sx={{ mt: 2, mb: 3, color: 'primary.main' }}>
                Top RomCom
              </Typography>
              <Typography sx={{ color: 'common.white' }}>
                Top RomCom nên đọc dù bé lớn già trẻ
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
          {mangas.slice(0, 10).map((manga: MangaTile) => (
            <Box
              key={manga.id}
              sx={{
                ml: '-1px',
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <MangaTileCard manga={manga} />
            </Box>
          ))}
        </Slider>
      </Box>
    </RootStyle>
  );
}
