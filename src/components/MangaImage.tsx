import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
// @mui
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  sx?: SxProps<Theme>;
  disabledEffect?: boolean;
  fullWidth?: boolean
}

export default function MangaImage({
  disabledEffect = false,
  effect = 'blur',
  fullWidth,
  sx,
  ...other
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        minHeight: loaded ? "auto" : "100vh",
        '& .wrapper': { width: fullWidth ? 1 : 'auto', height: 1, backgroundSize: 'cover !important' },
        ...sx,
      }}
    >
      <Box
        component={LazyLoadImage}
        wrapperClassName="wrapper"
        effect={disabledEffect ? undefined : effect}
        placeholderSrc={"https://zone-assets-api.vercel.app/assets/img_placeholder.svg"}
        sx={{ width: 1, height: 1, objectFit: 'cover' }}
        afterLoad={() => setLoaded(true)}
        {...other}
      />
    </Box>
  );
}
