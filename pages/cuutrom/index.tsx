import { Link } from "@mui/material";
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, OutlinedInput, styled, Typography } from "@mui/material";
import NextLink from "next/link";
import { ReactElement, useState } from "react";
import { Image, Page } from "../../src/components";
import useCuuTromChapter from "../../src/hooks/useCuuTromChapter";
import Layout from "../../src/layouts";

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(15, 2.5),
    [theme.breakpoints.up('sm')]: {
        height: '100vh',
    },
    '& > div': {
        marginBottom: '10px'
    }
}));

export default function CuuTromPage() {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [path, setPath] = useState<string>("")

    const { data, isLoading, fetchStatus } = useCuuTromChapter(path)

    const handleChange = async (event: any) => {
        setValue((event.target.value))
        setError("")
    }

    const handleClick = async () => {
        try {
            const url = new URL(value)
            if (!/mangas\/\d{1,}\/chapters\/\d{1,}/.test(url.pathname)) throw new Error('Link không hợp lệ')
            setPath(url.pathname)
        } catch (error) {
            setError('Link không hợp lệ')
        }
    }

    return (
        <Page title="Cứu Trộm">
            <RootStyle>
                <Typography>
                    Link chương cuutruyen.net, ID truyện,...
                </Typography>
                <OutlinedInput
                    value={value}
                    onChange={handleChange}
                    fullWidth
                    endAdornment={
                        <Button variant="contained" onClick={handleClick}>
                            Crawl
                        </Button>}
                    error={!!error}
                    sx={{ maxWidth: 500 }}
                />
                {error && <Typography color="error.main">{error}</Typography>}
                <Box>
                    {
                        isLoading ?
                            fetchStatus !== 'idle' ?
                                <>
                                    <CircularProgress />
                                    <Typography>Đang đi trộm, vui lòng đợi...</Typography>
                                </>
                                : <></>
                            : data?.chapter && <Card sx={{ width: "300px" }}>
                                <Image ratio="3/4" src={data.chapter.manga.cover_url} />
                                <CardHeader title={data.chapter.name || data.chapter.manga.name} />
                                <CardContent>
                                    <NextLink href={`/cuutrom/${path}`} passHref>
                                        <Link>Chương {data.chapter.number} - {data.chapter.pages.length} trang</Link>
                                    </NextLink>
                                </CardContent>
                            </Card>
                    }
                </Box>
            </RootStyle>
        </Page>
    )
}

CuuTromPage.getLayout = (page: ReactElement) => <Layout disabledFooter>{page}</Layout>