// scroll bar
import 'simplebar/src/simplebar.css';

// lightbox
import 'react-image-lightbox/style.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

// ----------------------------------------------------------------------

import { ReactElement, ReactNode } from 'react';
// next
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
// reactjs
import { useState } from 'react';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
// react-query
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// contexts
import { SettingsProvider } from '../src/contexts/SettingsContext';
// theme
import ThemeProvider from '../src/theme';
// components
// import Settings from '../src/components/settings';
import RtlLayout from '../src/components/RtlLayout';
import ProgressBar from '../src/components/ProgressBar';
import ThemeColorPresets from '../src/components/ThemeColorPresets';
import MotionLazyContainer from '../src/components/animate/MotionLazyContainer';
import { reactQueryConfig } from '../src/config';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  pageProps: any
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient(reactQueryConfig))
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="referrer" content="same-origin" />
      </Head>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <ThemeProvider>
            <ThemeColorPresets>
              <MotionLazyContainer>
                <RtlLayout>
                  <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                      {/* <Settings /> */}
                      <ProgressBar />
                      {getLayout(<Component {...pageProps} />)}
                    </Hydrate>
                  </QueryClientProvider>
                </RtlLayout>
              </MotionLazyContainer>
            </ThemeColorPresets>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </>
  );
}
