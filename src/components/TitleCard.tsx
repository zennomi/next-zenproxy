import RouterLink from 'next/link';
import parse from 'html-react-parser';

// @mui
import { styled, alpha } from '@mui/material/styles';

import { Typography, Card, CardActionArea, Chip, Rating, Box } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { Title } from "../@types/romcom";
import TextMaxLine from './TextMaxLine';
import CustomStyle from './CustomStyle';
import Image from './Image';
import Label from './Label';
import resizeImage from '../utils/resizeImage';
import Routes from '../routes';

export default function TitleCard({ title }: { title: Title }) {
    return (
        <StyledTooltip
            title={<TitleTooltip title={title} />}
            placement="right-start"
        >
            <Card sx={{ borderRadius: { xs: 0.5, md: 1 } }}>
                <RouterLink href={Routes.romcom.viewTitle(title._id)}>
                    <CardActionArea >
                        <Image src={resizeImage(title.coverArt[0], 300)} alt={title?.name} ratio='4/6' />
                        <OverlayStyle />
                        <CaptionStyle>
                            <TextMaxLine line={2} lineHeight={1.25}>
                                <span>{title?.name}</span>
                                {
                                    title?.altTitle &&
                                    <span style={{ opacity: 0.72 }}>
                                        {` - ${title?.altTitle}`}
                                    </span>
                                }
                            </TextMaxLine>
                        </CaptionStyle>
                        <Chip
                            label={title.type}
                            color="primary"
                            size="small"
                            sx={theme => ({
                                position: 'absolute',
                                top: theme.spacing(0.5),
                                left: theme.spacing(0.5),
                                opacity: 0.9,
                                [theme.breakpoints.down('md')]: {
                                    fontSize: 12,
                                    borderRadius: 0.5,
                                }
                            })} />
                    </CardActionArea>
                </RouterLink>
            </Card>
        </StyledTooltip>
    )
}

const OverlayStyle = styled('div')(({ theme }) => ({
    top: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(theme.palette.grey[900], 0)} 50%)`,
}));

const CaptionStyle = styled(CardActionArea)(({ theme }) => ({
    // ...cssStyles().bgBlur({ blur: 2, color: theme.palette.grey[900] }),
    bottom: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    color: theme.palette.common.white,
    padding: theme.spacing(1),
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2),
    },
}));

const TitleTooltip = ({ title }: { title: Title }) => (
    <>
        <Rating readOnly max={5} value={title.score / 100 * 5} />
        <Typography variant="body2" sx={{ mb: 2 }}>
            <TextMaxLine line={5}>
                <CustomStyle>
                    {parse(title.description || '')}
                </CustomStyle>
            </TextMaxLine>
        </Typography>
        <TextMaxLine line={3}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {title?.genres.map(genre => <Label key={genre} color='primary' sx={{ m: 0.2 }} >{genre}</Label>)}
                {title?.tags.map(tag => <Label key={tag} color='primary' variant='outlined' sx={{ m: 0.2 }} >{tag}</Label>)}
            </Box>
        </TextMaxLine>
    </>
)