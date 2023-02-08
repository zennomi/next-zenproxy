// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
// routes
// theme
import cssStyles from '../../utils/cssStyles';
// components
//
import SourceItem from './SourceItem';
import sources from '../../sources';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    ...cssStyles(theme).bgGradient({
        startColor: alpha(theme.palette.grey[500], 0),
        endColor: alpha(theme.palette.grey[500], 0.12),
    }),
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(15, 0),
    },
}));

// ----------------------------------------------------------------------

export default function HomeSources() {

    return (
        <RootStyle>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 4 }}
                    sx={{
                        textAlign: { xs: 'center', md: 'unset' },
                    }}
                >
                    <Grid item xs={12} md={4}>
                        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                            Các nguồn truyện
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h3">
                            Nguồn truyện từ nhiều nguồn uy tín, đã lọc các bộ Manhwa Mahua đánh đấm...
                        </Typography>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        py: { xs: 8, md: 10 },
                        display: 'grid',
                        rowGap: { xs: 4, md: 5 },
                        columnGap: 4,
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                    }}
                >
                    {Object.values(sources).filter(source => ["nhentai", "mangadex"].includes(source.id)).map((source) => (
                        <SourceItem key={source.name} source={source} />
                    ))}
                </Box>

                {/* <Stack alignItems="center">
                    <NextLink href={Routes.career.sources} passHref>
                        <Button
                            color="inherit"
                            size="large"
                            variant="outlined"
                            endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                        >
                            View All Jobs
                        </Button>
                    </NextLink>
                </Stack> */}
            </Container>
        </RootStyle>
    );
}
