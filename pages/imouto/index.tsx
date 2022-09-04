import { Container } from '@mui/material';
// components
import Page from '@/components/Page';
// sections
import Tool from '@/sections/imouto/Tool';
// ----------------------------------------------------------------------

export default function Imouto() {
    return (
        <Page
            title="Imouto Store - Con gì wibu chúng mình đều có"
            meta={
                <meta />
            }
        >
            <Container sx={{ py: 5 }}>
                <Tool />
            </Container>
        </Page>
    );
}
