import { useMemo, useEffect } from 'react';

import * as Yup from 'yup';
// import { useSnackbar } from 'notistack';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    Autocomplete,
    Chip,
    Stack,
    TextField,
    Drawer,
    Tooltip,
    Container,
    Grid,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { IconButtonAnimate, Iconify } from '../../components';
import { TYPE_OPTION, STATUS_OPTION, GENRE_OPTION, TAG_OPTION } from '../../constants';
import { useResponsive } from '../../hooks';
import { useRouter } from 'next/router';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField } from '../../components/hook-form';

const SORT_OPTION = [
    { name: 'Điểm xếp hạng', value: 'score:desc' },
    { name: 'Ngày thêm', value: 'createdAt:desc' },
    { name: 'Tựa đề', value: 'titles.0:asc' },
]

type Filter = {
    genres?: string[];
    tags?: string[];
    excludedGenres?: string[];
    excludedTags?: string[];
    query?: string;
    isLisensed?: boolean;
    hasViLink?: boolean;
    author?: string[];
    artist?: string[];
    status?: string;
    type?: string;
    sortBy?: string;
}

export default function TitleFilterDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: VoidFunction }) {
    const isDesktop = useResponsive('up', 'sm');
    // const { enqueueSnackbar } = useSnackbar();
    const { query, push } = useRouter();
    const currentFilter: Filter = { ...query };
    if (query.genres) currentFilter.genres = (query.genres as string).split(",");
    if (query.tags) currentFilter.tags = (query.tags as string).split(",");
    if (query.excludedGenres) currentFilter.excludedGenres = (query.excludedGenres as string).split(",");
    if (query.excludedTags) currentFilter.excludedTags = (query.excludedTags as string).split(",");
    const defaultValues = useMemo(
        () => ({
            query: currentFilter?.query || '',
            genres: currentFilter?.genres || [],
            tags: currentFilter?.tags || [],
            excludedGenres: currentFilter?.excludedGenres || [],
            excludedTags: currentFilter?.excludedTags || [],
            isLisensed: currentFilter?.isLisensed || false,
            hasViLink: currentFilter?.hasViLink || false,
            author: currentFilter?.author || [],
            artist: currentFilter?.artist || [],
            status: currentFilter?.status || 'all',
            type: currentFilter?.type || 'all',
            sortBy: currentFilter?.sortBy || 'score:desc',
        }),
        [query]
    );

    const FilterSchema = Yup.object().shape({

    });

    const methods = useForm<Filter>({
        resolver: yupResolver(FilterSchema),
        defaultValues,
    });

    const {
        reset,
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    useEffect(() => {
        reset(defaultValues);
    }, [query]);

    const onSubmit = async (filter: Filter) => {
        const newQuery: any = { ...filter }
        if (filter.genres && filter.genres.length > 0) newQuery.genres = filter.genres.join(",");
        if (filter.tags && filter.tags.length > 0) newQuery.tags = filter.tags.join(",");
        if (filter.excludedGenres && filter.excludedGenres.length > 0) newQuery.excludedGenres = filter.excludedGenres.join(",");
        if (filter.excludedTags && filter.excludedTags.length > 0) newQuery.excludedTags = filter.excludedTags.join(",");
        // enqueueSnackbar('Áp dụng bộ lọc!');
        Object.keys(newQuery).forEach(key => {
            if (newQuery[key] === null || newQuery[key] === 'all' || newQuery[key] === '' || !newQuery[key]) delete newQuery[key];
        });
        push({ query: newQuery })
        onClose();
    };

    return (
        <Drawer open={isOpen} onClose={onClose} anchor="right" PaperProps={{ sx: { width: { xs: 1, sm: 480 }, py: 5 } }}>
            <Container>
                {!isDesktop && (
                    <>
                        <Tooltip title="Back">
                            <IconButtonAnimate onClick={onClose} sx={{ mr: 1 }}>
                                <Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />
                            </IconButtonAnimate>
                        </Tooltip>
                    </>
                )}
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={1}>
                        <RHFTextField name="query" label="Tựa đề chứa cụm từ" />
                        <div>
                            <Grid container spacing={0.5}>
                                <Grid item xs={6}><RHFSelect name="type" label="Hình thức">
                                    {[...TYPE_OPTION, 'all'].map((status) => (
                                        <option key={status}>{status}</option>
                                    ))}
                                </RHFSelect></Grid>
                                <Grid item xs={6}><RHFSelect name="status" label="Trạng thái">
                                    {[...STATUS_OPTION, 'all'].map((status) => (
                                        <option key={status}>{status}</option>
                                    ))}
                                </RHFSelect></Grid>
                            </Grid>
                        </div>
                        <Controller
                            name="genres"
                            control={control}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    freeSolo
                                    onChange={(event, newValue) => field.onChange(newValue)}
                                    options={GENRE_OPTION.map((option: string) => option)}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip color="success" {...getTagProps({ index })} key={option} size="small" label={option} />
                                        ))
                                    }
                                    renderInput={(params) => <TextField label="Có thể loại" {...params} />}
                                />
                            )}
                        />
                        <Controller
                            name="tags"
                            control={control}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    freeSolo
                                    onChange={(event, newValue) => field.onChange(newValue)}
                                    options={TAG_OPTION.map((option: string) => option)}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip color="success" {...getTagProps({ index })} key={option} size="small" label={option} />
                                        ))
                                    }
                                    renderInput={(params) => <TextField label="Có tag" {...params} />}
                                />
                            )}
                        />
                        <Controller
                            name="excludedGenres"
                            control={control}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    freeSolo
                                    onChange={(event, newValue) => field.onChange(newValue)}
                                    options={GENRE_OPTION.map((option) => option)}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip color="error" {...getTagProps({ index })} key={option} size="small" label={option} />
                                        ))
                                    }
                                    renderInput={(params) => <TextField label="Loại trừ thể loại" {...params} />}
                                />
                            )}
                        />
                        <Controller
                            name="excludedTags"
                            control={control}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    freeSolo
                                    onChange={(event, newValue) => field.onChange(newValue)}
                                    options={TAG_OPTION.map((option: string) => option)}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip color="error" {...getTagProps({ index })} key={option} size="small" label={option} />
                                        ))
                                    }
                                    renderInput={(params) => <TextField label="Loại trừ tag" {...params} />}
                                />
                            )}
                        />
                        <RHFSelect name="sortBy" label="Xếp theo">
                            {SORT_OPTION.map(({ name, value }) => (
                                <option key={value} value={value}>{name}</option>
                            ))}
                        </RHFSelect>
                        <div>
                            <Grid container spacing={0.5}>
                                <Grid item xs={6}>
                                    <RHFSwitch name="isLisensed" label="Có bản quyền" />
                                </Grid>
                                <Grid item xs={6}>
                                    <RHFSwitch name="hasViLink" label="Có link tiếng Việt" />
                                </Grid>
                            </Grid>
                        </div>
                        <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
                            {"Lọc & Sắp xếp"}
                        </LoadingButton>
                    </Stack>
                </FormProvider>
            </Container>
        </Drawer>
    )
}