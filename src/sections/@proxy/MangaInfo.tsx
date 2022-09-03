import { ReactElement } from 'react';
// icons
import cubeIcon from '@iconify/icons-carbon/cube';
import eventsIcon from '@iconify/icons-carbon/events';
// next
// @mui
import { Typography, Stack, Avatar, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// @utils
// components
import { RatingLabel, TextIconLabel, Iconify } from '../../components';
import { Manga } from 'paperback-extensions-common';
import { fStatus } from '../../utils/manga';
import { useResponsive } from '../../hooks';

// ----------------------------------------------------------------------

type Props = {
  manga: Manga;
};

export default function MangaInfo({ manga }: Props) {
  const { titles, status, desc, tags, lastUpdate, hentai, views, follows, author, artist, rating } = manga;
  const isDesktop = useResponsive('up', 'sm');
  const genres = tags?.find(tag => tag.label.toLowerCase() === 'genres')?.tags.map(t => t.label);
  const mangaTags = tags?.find(tag => tag.label.toLowerCase() === 'tags')?.tags.map(t => t.label);
  return (
    <Stack spacing={5}>
      <Typography variant="h5">{titles[0]}</Typography>
      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Stack spacing={2}>
          {titles[1] && <Typography variant="h6">{titles[1]}</Typography>}
          <RatingLabel ratings={rating ?? 0} reviews={follows} />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minWidth: 100 }}>
          <Avatar src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg" />
          <div>
            <Typography variant="body3" sx={{ color: 'text.disabled' }}>
              Tác giả
            </Typography>
            <Typography variant="subtitle2">{author}</Typography>
          </div>
        </Stack>
      </Stack>
      {
        isDesktop ?
          <Typography variant='body2' sx={{ overflowWrap: 'anywhere' }}>{desc}</Typography> :
          <Accordion>
            <AccordionSummary
              expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Tóm tắt</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body2' sx={{ overflowWrap: 'anywhere' }}>{desc}</Typography>
            </AccordionDetails>
          </Accordion>
      }
      <Stack
        spacing={3}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 2,
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h5">Thông tin</Typography>

        <LineItem icon={<Iconify icon={eventsIcon} />} label="Tình trạng" value={fStatus(status)?.toLocaleUpperCase()} />
        <Divider sx={{ borderStyle: 'dashed' }} />
        {genres && genres.length > 0 && <LineItem icon={<Iconify icon={cubeIcon} />} label="Thể loại" value={genres.join(", ")} />}
        {mangaTags && mangaTags.length > 0 && <LineItem icon={<Iconify icon={cubeIcon} />} label="Thể loại" value={mangaTags.join(", ")} />}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type LineItemProps = {
  icon: ReactElement;
  label: string;
  value: any;
};

function LineItem({ icon, label, value }: LineItemProps) {
  return (
    <TextIconLabel
      icon={icon}
      value={
        <>
          {label}
          <Typography
            variant="subtitle2"
            sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
          >
            {value}
          </Typography>
        </>
      }
      sx={{
        color: 'text.disabled',
        '& svg': { mr: 1, width: 24, height: 24 },
      }}
    />
  );
}
