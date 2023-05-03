import { useState } from 'react';
// icons
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Link } from '@mui/material';
// routes
import Routes from '../../routes';
import { ZenSource } from '../../sources/types';
// components
import {
  Image,
  Label,
  TextMaxLine,
  FavoriteButton,
} from '../../components';
import { ContentRating } from 'paperback-extensions-common';

// ----------------------------------------------------------------------

type Props = {
  source: ZenSource;
};

export default function SourceItem({ source }: Props) {
  const {
    id, name, icon, description, websiteBaseURL, contentRating
  } = source;

  const [favorite, setFavorite] = useState(false);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card
      sx={{
        boxShadow: (theme) => theme.customShadows.z8,
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <FavoriteButton
        checked={favorite}
        onChange={handleChangeFavorite}
        sx={{ position: 'absolute', right: 16, top: 16 }}
      />

      <Stack sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Image
            alt={name}
            src={`/logo/${icon}`}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />
          {contentRating === ContentRating.ADULT && <Label color="error">R18</Label>}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <NextLink as={Routes.proxy.source(id)} href={Routes.proxy.source('[source]')} passHref>
            <TextMaxLine variant="h6" asLink line={1}>
              {name}
            </TextMaxLine>
          </NextLink>

          <Link variant="body3" sx={{ color: 'secondary.main' }}  href={websiteBaseURL} target="_blank" rel="noopener">
            {websiteBaseURL}
          </Link>

          {/* <TextIconLabel
            icon={<Iconify icon={locationIcon} sx={{ mr: 0.5, width: 18, height: 18 }} />}
            value={location}
            sx={{ typography: 'body3', color: 'text.secondary' }}
          /> */}
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {description}
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      {/* <Grid
        container
        spacing={1.5}
        sx={{
          p: 3,
          pt: 0,
          typography: 'body3',
          color: 'text.secondary',
          textTransform: 'capitalize',
        }}
      >
        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={increaseLevel} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={`${experience} year exp`}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={timeIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={type}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={moneyIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={typeof salary === 'number' ? fCurrency(salary) : salary}
          />
        </Grid>

        <Grid item xs={6}>
          <TextIconLabel
            icon={<Iconify icon={userIcon} sx={{ width: 20, height: 20, mr: 1 }} />}
            value={level}
          />
        </Grid>
      </Grid> */}
    </Card>
  );
}
