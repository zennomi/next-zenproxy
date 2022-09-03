import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { Typography, Box, Stack, IconButton, alpha, Link } from '@mui/material';
// components
import { Image, BgOverlay, Iconify, TextMaxLine } from '.';
import { varHover, varTranHover } from './animate';
import { ZenMangaTile } from '../sources/types';

// ----------------------------------------------------------------------

type Props = {
  manga: ZenMangaTile;
};

export default function MangaTileCard({ manga }: Props) {
  const { id, title, image, subtitleText, internalURL, externalURL } = manga;

  return (
    <div>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
        transition={varTranHover()}
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
      >
        <BgOverlay
          sx={{
            opacity: 0,
            transition: (theme) =>
              theme.transitions.create('opacity', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short,
              }),
            '&:hover': { opacity: 1 },
          }}
        >
          <Box
            sx={{
              width: 1,
              zIndex: 9,
              bottom: 24,
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
            }}
          >
            <Stack direction="row" flexWrap="wrap" alignItems="center">
              {internalURL &&
                <LinkButton path={`${internalURL}/newest`} icon="eva:eye-outline" />
              }
              {internalURL &&
                <LinkButton path={internalURL} icon="eva:list-outline" />
              }
              {externalURL &&
                <LinkButton path={externalURL} icon="eva:external-link-outline" external />
              }
            </Stack>
          </Box>
        </BgOverlay>

        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          <Image src={image} alt={id} ratio="3/4" />
        </m.div>
      </Box>

      <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
        <TextMaxLine line={2} persistent>
          {title.text}
        </TextMaxLine>
      </Typography>
      <Typography variant="body3" sx={{ color: 'text.disabled', textAlign: 'center' }}>
        <TextMaxLine line={1} persistent>
          {subtitleText?.text}
        </TextMaxLine>
      </Typography>
    </div>
  );
}

interface LinkButtonProps {
  path: string,
  icon: string,
  external?: boolean
}

function LinkButton({ path, icon, external }: LinkButtonProps) {
  return (
    external ?
      (
        <Link href={path} target="_blank">
          <IconButton
            color="inherit"
            sx={{
              color: (theme) => theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme => alpha(theme.palette.primary.main, 0.4),
              },
            }}
          >
            <Iconify icon={icon} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
          </IconButton>
        </Link>
      ) :
      (
        <NextLink href={path}>
          <Link >
            <IconButton
              color="inherit"
              sx={(theme) => ({
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.4),
                },
              })}
            >
              <Iconify icon={icon} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
            </IconButton>
          </Link>
        </NextLink>
      )
  )
}