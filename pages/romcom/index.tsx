import { Box, Button, Container, Grid, Pagination, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Breadcrumbs, Iconify, Page } from "../../src/components";
import { TYPE_OPTION } from "../../src/constants";
import { ReactElement, useRef, useState } from "react";
import Layout, { RootStyle } from "../../src/layouts";
import { useTitles } from "../../src/hooks/useRomcom";
import { useRouter } from "next/router";
import { ParsedUrlQuery, stringify } from "querystring";
import TitleCardSkeleton from "../../src/components/TitleCardSkeleton";
import TitleCard from "../../src/components/TitleCard";
import EmptyContent from "../../src/components/EmptyContent";
import TitleFilterDrawer from "../../src/sections/romcom/TitleFilterDrawer";

export default function RomcomPage() {
    const toggleButtonRef = useRef(null);
    const { query, push, isReady } = useRouter();
    const { data, isLoading, error, isRefetching } = useTitles(stringify(query), isReady);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handlePageChange = (event: any, page: number) => {
        updateQuery({ ...query, page: page.toString() })
    }

    const handleTypeClick = (event: any, _type: string) => {
        if (!_type) updateQuery({ type: undefined, page: '1' });
        else updateQuery({ ...query, type: _type, page: '1' });
    }

    const updateQuery = (query: ParsedUrlQuery) => {
        for (const key of Object.keys(query)) {
            if (!query[key]) delete query[key]
        }
        push({ query })
    }

    return (
        <Page title="Thư viện RomCom của Zennomi"
            meta={
                <>
                    <meta property="og:title" content="Thư viện RomCom" />
                    <meta property="og:image" content="https://telegraph-image-bak.pages.dev/file/005019a5b28c88d1a013e.jpg" />
                    <meta property="og:url" content="https://zenno.moe/romcom/" />
                    <meta property="og:description" content="Anh em có thể tìm kiếm romcom theo sở thích tại đây..." />
                </>
            }
        >
            <RootStyle>
                <Container sx={{ py: 2 }}>
                    <Breadcrumbs links={[
                        { href: "/", name: "Trang chủ" },
                        { href: "/romcom", name: "Thư viện RomCom" }
                    ]} />
                    <ToggleButtonGroup
                        ref={toggleButtonRef}
                        color="primary"
                        value={query?.type}
                        exclusive
                        onChange={handleTypeClick}
                        fullWidth
                        sx={{ my: 2 }}
                    >
                        {
                            TYPE_OPTION.map(_type => (
                                <ToggleButton
                                    value={_type}
                                    key={_type}
                                >
                                    {_type.toUpperCase()}
                                </ToggleButton>
                            ))
                        }
                    </ToggleButtonGroup>
                    <Box sx={{ display: 'flex', justifyContent: "end", mb: 2 }}>
                        <Button size="small" startIcon={<Iconify icon="ic:round-filter-list" />} onClick={() => setIsFilterOpen(true)}>Bộ lọc</Button>
                    </Box>
                    <Grid container spacing={3}>
                        {
                            (isLoading || isRefetching) ? Array(24).fill(
                                <Grid item xs={4} md={2}>
                                    <TitleCardSkeleton />
                                </Grid>
                            )
                                : error ? <EmptyContent title={""} />
                                    : data?.results.map(title =>
                                        <Grid item xs={4} md={2} key={title._id}>
                                            <TitleCard title={title} />
                                        </Grid>
                                    )
                        }
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        <Pagination sx={{ my: 2 }} count={data?.totalPages || 5} page={Number(query?.page || 1)} onChange={handlePageChange} />
                    </Box>
                </Container>
            </RootStyle>
            {isReady && <TitleFilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />}
        </Page>
    )
}

RomcomPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout transparentHeader simpleFooter>{page}</Layout>;
};