// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Grid, Paper, Box, Button } from '@mui/material';
// @types
// components
import { Iconify, TextMaxLine } from '../../components';
import { Chapter } from 'paperback-extensions-common';
import { fToNow } from '../../utils/formatTime';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ZenChapter } from '../../sources/types';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
  chapters: ZenChapter[];
};

export default function ChaptersList({ chapters }: Props) {
  const [currentChapters, setChapters] = useState<ZenChapter[]>([]);

  useEffect(() => {
    setChapters(chapters);
  }, [chapters])

  return (
    <div>
      <Stack direction="row" sx={{ mb: 1 }}>
        <Button startIcon={<Iconify icon="fa:sort" />} onClick={() => { console.log('click'); setChapters(prev => [...prev].reverse()) }}>Sắp xếp</Button>
      </Stack>
      <Grid item xs={12} lg={7}>
        <Box
          sx={{
            display: 'grid',
            gap: { md: 3, xs: 1 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {currentChapters.map((chapter) => (
            <ChapterItem key={chapter.id} chapter={chapter} />
          ))}
        </Box>
      </Grid>
    </div>
  );
}

// ----------------------------------------------------------------------

type ChapterItemProps = {
  chapter: ZenChapter;
};

function ChapterItem({ chapter }: ChapterItemProps) {
  return (
    <Link key={chapter.id} href={chapter.internalURL}>
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 1.5,
          cursor: 'pointer',
          bgcolor: 'transparent',
          transition: (theme) =>
            theme.transitions.create('all', {
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
            '& h6': {
              color: 'primary.main',
            },
          },
        }}
      >
        <TextMaxLine variant="h6" line={2} persistent gutterBottom>
          <Iconify icon={`circle-flags:${chapter.langCode || 'gb'}`} />
          {' '}
          {chapter.name}
        </TextMaxLine>

        <Typography variant="body3" sx={{ color: 'text.disabled' }}>
          {fToNow(chapter.time ?? new Date(), {})}
        </Typography>
      </Paper>
    </Link>
  );
}
