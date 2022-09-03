// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, AppBar, Divider, Container, IconButton, Box } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// routes
import Routes from '../../routes';
// components
import { Iconify, Logo } from '../../components';
//

import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import SettingMode from '../../components/settings/SettingMode';

// ----------------------------------------------------------------------

export default function ChapterBottomNav() {
  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters scrolling={isScrolling} sx={{ px: 2 }}>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" />}
            spacing={2.5}
          >
            <Box sx={{ minWidth: '115px' }}>
              <SettingMode />
            </Box>
          </Stack>
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}
