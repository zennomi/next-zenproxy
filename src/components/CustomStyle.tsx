import { styled } from '@mui/material';
import { ReactNode } from 'react';

const MARGIN = {
    marginTop: 24,
    marginBottom: 16,
};

const RootStyle = styled("div")(({ theme }) => ({
    '& a': {
        color: theme.palette.primary.main
    },
    // Heading
    '& h1': { ...MARGIN, ...theme.typography.h1 },
    '& h2': { ...MARGIN, ...theme.typography.h2 },
    '& h3': { ...MARGIN, ...theme.typography.h3 },
    '& h4': { ...MARGIN, ...theme.typography.h4 },
    '& h5': { ...MARGIN, ...theme.typography.h5 },
    '& h6': { ...MARGIN, ...theme.typography.h6 },
    '& p': { marginBottom: theme.spacing(2) },

    // Code
    '& code': {
        color: theme.palette.secondary.main,
    },
    '& pre': {
        margin: theme.spacing(5, 0),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 900 : 800],
        '& > pre': {
            overflow: 'auto',
            padding: theme.spacing(3, 3, 0, 3),
        },
    },

    // List
    '& ul, & ol': {
        marginBottom: theme.spacing(2),
        '& li': {
            lineHeight: 2,
        },
    },
}))

export default function CustomStyle({ children }: {
    children: ReactNode;
}) {
    return <RootStyle>{children}</RootStyle>
}