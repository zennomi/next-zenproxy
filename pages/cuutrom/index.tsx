import { Link } from "@mui/material";
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, OutlinedInput, styled, Typography } from "@mui/material";
import axios from "axios";
import NextLink from "next/link";
import { ReactElement, useState } from "react";
import { Image, Page } from "../../src/components";
import * as config from "../../src/config";
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
    const [loading, setLoading] = useState<boolean>(false)
    const [chapter, setChapter] = useState<any>()
    console.log(chapter)
    const handleChange = async (event: any) => {
        setValue((event.target.value))
        setError("")
    }

    const handleClick = async () => {
        const url = new URL(value)
        const path = url.pathname;
        if (/mangas\/\d{1,}\/chapters\/\d{1,}/.test(path)) {
            setLoading(true)
            const { data } = await axios({
                method: "get",
                url: `${config.CUUTROM_API}${path}`
            })
            setLoading(false)
            if (data.error) {
                setError(data.messgae)
            } else {
                setChapter(data.chapter)
            }
        } else {
            setError("Link không hợp lệ")
        }
    }

    return (
        <Page title="Cứu Trộm">
            <RootStyle>
                <Typography>
                    Link truyện cuutrom, ID truyện,...
                </Typography>
                <div>
                    <OutlinedInput
                        value={value}
                        onChange={handleChange}
                        fullWidth
                        endAdornment={
                            <Button variant="contained" onClick={handleClick}>
                                Crawl
                            </Button>} />
                </div>
                <Box>
                    {
                        loading ?
                            <CircularProgress />
                            : chapter && <Card sx={{ width: "300px" }}>
                                <Image ratio="3/4" src={chapter.manga.cover_url} />
                                <CardHeader title={chapter.name || chapter.manga.name}/>
                                <CardContent>
                                    <NextLink href={`/cuutrom/${value}`} passHref>
                                        <Link>Chương {chapter.number} - {chapter.pages.length} trang</Link>
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