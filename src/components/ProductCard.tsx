import { m } from 'framer-motion';
// @mui
import { Typography, Box } from '@mui/material';
// components
import { Image, BgOverlay, TextMaxLine } from '.';
import { varHover, varTranHover } from './animate';
import { Product } from '../@types/product';

// ----------------------------------------------------------------------

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { id, titles, images } = product;

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
                    />
                </BgOverlay>

                <m.div variants={varHover(1.15)} transition={varTranHover()}>
                    <Image src={images[0]} alt={id} ratio="3/4" />
                </m.div>
            </Box>

            <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
                <TextMaxLine line={2} persistent>
                    {titles[0]}
                </TextMaxLine>
            </Typography>
        </div>
    );
}