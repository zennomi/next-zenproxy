import { m } from 'framer-motion';
// @mui
import { Skeleton, Stack, Card, Divider, Box, CardProps, BoxProps } from '@mui/material';
// components
import { varHover, varTranHover } from '../animate';
import { Image, BgOverlay, Iconify, TextMaxLine } from '..';

export default function MangaTileSkeleton() {
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
                    ></Box>
                </BgOverlay>
                <m.div variants={varHover(1.15)} transition={varTranHover()}>
                    <Image src={""} alt={"skeleton"} ratio="3/4" />
                </m.div>

            </Box>
            <Skeleton variant="text" sx={{ mt: 2.5, textAlign: 'center' }} />
            <Skeleton variant="text" sx={{ mb: 0.5, textAlign: 'center' }} />
            <Skeleton variant="text" sx={{ color: 'text.disabled', textAlign: 'center' }} />
        </div>
    )
}