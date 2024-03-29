// @mui
import {
    Box,
    Card,
    Table,
    Avatar,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    Typography,
    TableContainer,
    Link,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { TitleLink } from '../../@types/romcom';

const lanCodeToIcon: Record<string, string> = {
    vi: "vietnam",
    en: "united-kingdom",
    ja: "japan",
    zh: "china",
    ko: "south-korea"
};

// ----------------------------------------------------------------------

export default function TitleLinks({ links = [] }: { links: TitleLink[] | undefined}) {
    return (
        <Card>
            <Scrollbar sx={{ maxHeight: 500, my: 1 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Site</TableCell>
                                <TableCell align='center'>Ngôn ngữ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {links.map((row) => (
                                <Row key={row.link} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Scrollbar>
        </Card>
    );
}

function LinkIcon({ site }: { site: string }) {
    if (site === 'BLOGTRUYEN.VN') return <img width={32} src='/icons/ic_blogtruyen.png' />
    else if (site === 'MANGADEX.ORG') return <img src='/icons/ic_mangadex.svg' />
    else if (site === 'HAKO.RE' || site === 'DOCLN.NET') return <img width={32} src='/icons/ic_hako.png' />
    else if (site === 'FACEBOOK.COM') return <Iconify icon='logos:facebook' />
    else if (site === 'GOOGLE-SENSEI') return <Iconify icon={'flat-color-icons:google'} />
    else if (site === 'TWITTER.COM') return <Iconify icon={'logos:twitter'} />
    else return <Iconify icon='fa-solid:link' />
}

function Row({ row }: { row: TitleLink }) {
    return (
        <TableRow key={row.link}>
            <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar color='primary'><LinkIcon site={row.site} /></Avatar>
                    <Box sx={{ ml: 2, maxWidth: { xs: 100, md: 200, xl: 400 } }}>
                        <Typography variant="subtitle2"> {row.site}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                            <Link href={row.link} target="_blank">{row.link}</Link>
                        </Typography>
                    </Box>
                </Box>
            </TableCell>
            <TableCell align='center' sx={{ minWidth: 50 }}>
                <Iconify icon={`emojione-v1:flag-for-${lanCodeToIcon[row.language] || "japan"}`} sx={{ width: 32, height: 32 }} />
            </TableCell>
        </TableRow>)
}