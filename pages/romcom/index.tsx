import { Box, Container, Grid, Pagination, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Breadcrumbs, Page } from "../../src/components";
import { TYPE_OPTION } from "../../src/constants";
import { ReactElement, useRef } from "react";
import Layout, { RootStyle } from "../../src/layouts";
import { useTitles } from "../../src/hooks/useRomcom";
import { useRouter } from "next/router";
import { ParsedUrlQuery, stringify } from "querystring";
import TitleCardSkeleton from "../../src/components/TitleCardSkeleton";
import TitleCard from "../../src/components/TitleCard";
import EmptyContent from "../../src/components/EmptyContent";

export default function RomcomPage() {
    const toggleButtonRef = useRef(null);
    const { query, push } = useRouter();
    const { data, isLoading, error } = useTitles(stringify(query));

    const handlePageChange = (event: any, page: number) => {
        updateQuery({ ...query, page: page.toString() })
    }

    const handleTypeClick = (event: any, _type: string) => {
        if (!_type) updateQuery({ type: undefined, page: '1' });
        else updateQuery({ type: _type, page: '1' });
    }

    const updateQuery = (query: ParsedUrlQuery) => {
        for (const key of Object.keys(query)) {
            if (!query[key]) delete query[key]
        }
        push({ query })
    }

    return (
        <Page title="Thư viện RomCom của Zennomi">
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
                        sx={{ mb: 3 }}
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
                    <Grid container spacing={3}>
                        {
                            isLoading ? Array(24).fill(
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
        </Page>
    )
}

RomcomPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout transparentHeader simpleFooter>{page}</Layout>;
};