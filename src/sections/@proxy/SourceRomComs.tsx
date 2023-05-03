// @mui
import { styled } from '@mui/material/styles';
import { Typography, Box, Container, Stack } from '@mui/material';
//
import MangaTileCard from '../../components/MangaTileCard';
import { MangaTile } from 'paperback-extensions-common';
import { useRouter } from 'next/router';
import { useSection } from '../../hooks/useProxy';
import { MangaTileSkeleton } from '@/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(8, 0),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(15, 0),
    },
}));

// ----------------------------------------------------------------------

export default function SourceRomComs() {
    const router = useRouter();
    const { source: sourceId } = router.query;
    const { data } = useSection(String(sourceId), 'new_romcom', 1);
    const { results: mangas } = data ?? { results: [] };
    return (
        <RootStyle>
            <Container>
                <Stack
                    spacing={3}
                    sx={{
                        mx: 'auto',
                        maxWidth: 480,
                        textAlign: 'center',
                        mb: { xs: 8, md: 10 },
                    }}
                >
                    <Typography variant="h2">Kiếm RomCom</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Loại hết rác...
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: 'grid',
                        rowGap: { xs: 2, md: 5 },
                        columnGap: 3,
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            // sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                    }}
                >
                    {mangas.length === 0 ?
                        [...Array(10)].map((_, index) => <MangaTileSkeleton key={index} />)
                        : mangas.map((manga: MangaTile) => (
                            <MangaTileCard key={manga.id} manga={manga} />
                        ))
                    }
                </Box>
            </Container>
        </RootStyle>
    );
}
