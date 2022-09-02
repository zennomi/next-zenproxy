import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// hooks
import { useHoverParallax } from '../../hooks';
// components
import { SvgIconStyle, Image } from '../../components';
// pattern
import { Icon, Label, Character, Pattern01, Pattern02 } from '../pattern';
import sources from '../../sources';

// ----------------------------------------------------------------------

const styleIcon = {
  width: 40,
  height: 40,
  color: 'common.black',
};

const RootStyle = styled(Box)(() => ({
  width: 564,
  height: 564,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

// ----------------------------------------------------------------------

function CareerHeroIllustration({ ...other }: BoxProps) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  const BLUE = theme.palette.info.main;
  const GREEN = theme.palette.success.main;
  const YELLOW = theme.palette.warning.main;

  return (
    <RootStyle
      component={m.div}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      {...other}
    >
      <>
        <Character front sx={{ position: 'absolute', bottom: 16, zIndex: 10, width: 300 }} />
        {/* Accounting */}
        <Box
          sx={{
            top: 170,
            zIndex: 9,
            position: 'absolute',
            transform: 'translateX(-125px) rotate(-15deg)',
          }}
        >
          <m.div style={{ y: offsetY(-50) }}>
            <Label
              text="Nhentai"
              icon={
                <Image
                  alt="Nhentai"
                  src={`/logo/${sources.nhentai.icon}`}
                  sx={{ width: 48, height: 48 }}
                />
              }
            />
          </m.div>
        </Box>
        <Character sx={{ position: 'absolute', bottom: 16, zIndex: 8, width: 300 }} />
      </>

      {/* Banking */}
      <Box sx={{ position: 'absolute', transform: 'translate(175px, 90px) rotate(15deg)' }}>
        <m.div style={{ x: offsetX(80), y: offsetY(80) }}>
          <Label
            text="BlogTruyen"
            icon={
              <Image
                alt="BlogTruyen"
                src={`/logo/${sources.blogtruyen.icon}`}
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Health Care */}
      <Box sx={{ position: 'absolute', transform: 'translate(170px, -110px) rotate(15deg)' }}>
        <m.div style={{ y: offsetY(80) }}>
          <Label
            text="NátTruyen"
            icon={
              <Image
                alt="NátTruyen"
                src={`/logo/${sources.nettruyen.icon}`}
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Software */}
      <Box
        sx={{
          zIndex: 10,
          bottom: 160,
          position: 'absolute',
          transform: 'translateX(-110px)',
        }}
      >
        <m.div style={{ y: offsetY(-60) }}>
          <Label
            text="MangaDex"
            icon={
              <Image
                alt="MangaDex"
                src={`/logo/${sources.mangadex.icon}`}
                sx={{ width: 48, height: 48 }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', top: 16, transform: 'translateX(20px)' }}>
        <m.div style={{ x: offsetX(50), y: offsetY(50) }}>
          <Icon
            color={YELLOW}
            content={
              <SvgIconStyle
                src="https://zone-assets-api.vercel.app/assets/icons/ic_creativity.svg"
                sx={{ ...styleIcon }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', bottom: 16, transform: 'translateX(40px)' }}>
        <m.div style={{ x: offsetX(-60), y: offsetY(60) }}>
          <Icon
            color={GREEN}
            content={
              <SvgIconStyle
                src="https://zone-assets-api.vercel.app/assets/icons/ic_marketing_bullhorn.svg"
                sx={{ ...styleIcon }}
              />
            }
          />
        </m.div>
      </Box>

      {/* Icon */}
      <Box sx={{ position: 'absolute', bottom: 220, transform: 'translateX(-220px)' }}>
        <m.div style={{ x: offsetX(70), y: offsetY(70) }}>
          <Icon
            color={BLUE}
            content={
              <SvgIconStyle
                src="https://zone-assets-api.vercel.app/assets/icons/ic_customer_service.svg"
                sx={{ ...styleIcon }}
              />
            }
          />
        </m.div>
      </Box>

      <Pattern01 />
      <Pattern02 />
    </RootStyle>
  );
}

export default memo(CareerHeroIllustration);
