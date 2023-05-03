// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Grid, Divider } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
import { fShortenNumber } from '../../utils/formatNumber';
// assets
import { CareerHeroIllustration } from '../../assets';
// components

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  ...cssStyles(theme).bgImage(),
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(15),
  },
}));

const BarStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      height: '48px !important',
      backgroundColor: 'transparent !important',
    },
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function CareerLandingHero() {

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Bố đọc{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    RomCom
                  </Box>{' '}
                  OK?
                </Typography>
                <Typography sx={{ color: 'grey.500' }}>
                  From Zenlỏmi - Loser đọc romcom số 1 Việt Nam
                </Typography>
              </Stack>

              {/* <BarStyle spacing={{ xs: 1, md: 0 }}>
                <CareerJobKeywordFilter
                  filterKeyword={filters.filterKeyword}
                  onChangeKeyword={handleChangeKeyword}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    height: 24,
                    display: { xs: 'none', md: 'block' },
                  }}
                />
                <CareerJobLocationsFilter
                  filterLocation={filters.filterLocation}
                  onChangeLocation={handleChangeLocation}
                />
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    px: 0,
                    minWidth: { xs: 1, md: 48 },
                  }}
                >
                  <Iconify icon={searchIcon} sx={{ width: 24, height: 24 }} />
                </Button>
              </BarStyle> */}

              {/* <BrandsSection /> */}
              {/* <SummarySection /> */}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ display: 'block' }}>
            <CareerHeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

const DividerStyle = <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />;

// ----------------------------------------------------------------------

function SummaryItem(total: number, label: string) {
  return (
    <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
      <Typography variant="h4">{fShortenNumber(total)}+</Typography>
      <Typography variant="body2" sx={{ opacity: 0.48 }}>
        {label}
      </Typography>
    </Stack>
  );
}
