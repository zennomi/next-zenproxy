import { Button, Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Iconify, LoadingScreen, MangaImage, Page } from "../../../../../src/components";
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from "../../../../../src/config";
import useCuuTromChapter from "../../../../../src/hooks/useCuuTromChapter";
import Layout from "../../../../../src/layouts";
import Page500 from "../../../../500";

ChapterPage.getLayout = (page: any) => <Layout transparentHeader disabledFooter>{page}</Layout>

export default function ChapterPage() {
    const router = useRouter()
    const { query } = router
    const [path, setPath,] = useState<string>("")
    const { data, isLoading, error } = useCuuTromChapter(path)

    useEffect(() => {
        if (!query.mangaId || !query.chapterId) return;
        setPath(`/mangas/${query.mangaId}/chapters/${query.chapterId}`)
    }, [query])

    const handleBackClick = () => {
        if (window.history.state && window.history.state.idx > 0)
            router.back();
        else {
            router.push('/cuutrom')
        }
    }

    if (isLoading) return <LoadingScreen />

    if (error) return <Page500 />

    return (
        <Page title={data?.chapter?.name || data?.chapter?.manga?.name}>
            <Container sx={{ pt: { xs: HEADER_MOBILE_HEIGHT + 'px', md: HEADER_DESKTOP_HEIGHT + 'px' } }}>
                {
                    data.chapter &&
                    <Stack spacing={2}>
                        <Button onClick={handleBackClick} startIcon={<Iconify icon="eva:arrow-circle-left-fill" />}>Trở lại</Button>
                        {
                            data.chapter.pages.map((page: any) =>
                                <MangaImage src={page.image_url} key={page._id} sx={{ mx: 'auto !important' }} />
                            )
                        }
                        <Button onClick={handleBackClick} startIcon={<Iconify icon="eva:arrow-circle-left-fill" />}>Trở lại</Button>
                    </Stack>
                }
            </Container>
        </Page>
    )
}