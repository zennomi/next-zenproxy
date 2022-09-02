// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, AppBar, Divider, Container, FormControl, InputLabel, MenuItem, Select, Button, Box, InputBase, styled, alpha } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';

import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import { ZenChapter } from '../../sources/types';
import { useResponsive } from '../../hooks';
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

type Props = {
    chapters: ZenChapter[];
    chapter: ZenChapter;
    handleChapterChange: Function
};

export default function ChapterBottomNav({ chapters, chapter, handleChapterChange }: Props) {
    const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);
    const isDesktop = useResponsive('up', 'md');

    return (
        <AppBar sx={{ boxShadow: 0, bottom: 0, top: 'auto' }} position="fixed">
            <ToolbarStyle disableGutters scrolling={isScrolling} sx={{ height: 'unset' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: "100%",
                        columnGap: 2
                    }}
                >
                    {
                        isDesktop ?
                            <BootstrapButton sx={{ borderRadius: '5px 0px 0px 5px', }} variant='outlined' disabled={!chapter.prevChapterId} onClick={() => handleChapterChange(chapter.prevChapterId)}>Chương trước</BootstrapButton> :
                            <BootstrapButton sx={{ borderRadius: '5px 0px 0px 5px', }} variant='outlined' disabled={!chapter.prevChapterId} onClick={() => handleChapterChange(chapter.prevChapterId)}><Iconify icon="eva:arrow-left-fill" /></BootstrapButton>
                    }
                    <FormControl size="small" sx={{ maxWidth: "50%" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={chapter.id}
                            onChange={(event) => handleChapterChange(event.target.value)}
                            input={<BootstrapInput />}
                        >
                            {
                                Object.values(chapters).map(chapter =>
                                    <MenuItem value={chapter.id}>{chapter.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    {
                        isDesktop ?
                            <BootstrapButton sx={{ borderRadius: '0px 5px 5px 0px', }} variant='outlined' disabled={!chapter.nextChapterId} onClick={() => handleChapterChange(chapter.nextChapterId)}>Chương sau</BootstrapButton> :
                            <BootstrapButton sx={{ borderRadius: '0px 5px 5px 0px', }} variant='outlined' disabled={!chapter.nextChapterId} onClick={() => handleChapterChange(chapter.nextChapterId)}><Iconify icon="eva:arrow-right-fill" /></BootstrapButton>
                    }
                </Box>
            </ToolbarStyle>

            {isScrolling && <ToolbarShadowStyle />}
        </AppBar>
    );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid ' + theme.palette.primary.main,
        color: theme.palette.primary.main,
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        [theme.breakpoints.down('md')]: {
            fontSize: 13,
            padding: '5px 13px 5px 10px',
        },
        '&:hover': {
            borderRadius: 0,
            color: theme.palette.background.paper,
            backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
            borderRadius: 0,
        },
        '&:focus': {
            borderRadius: 0,
        },
    },
    '& .MuiSelect-icon': {
        color: theme.palette.primary.main,
    }
}));

const BootstrapButton = styled(Button)(({ theme }) => ({
    fontSize: 16,
    height: '45px',
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
        fontSize: 16,
        padding: '5px 6px',
        height: '35px',
    },
    padding: '10px 12px',
    border: '1px solid ' + theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        color: theme.palette.background.paper,
        backgroundColor: theme.palette.primary.main,
    },
    '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, 0.5),
        boxShadow: 'none',
        outline: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem ' + alpha(theme.palette.primary.main, 0.5),
    },
}));