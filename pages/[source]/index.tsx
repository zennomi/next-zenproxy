import { ReactElement } from 'react';
// _data
import { _pricingHome } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
import {
  SourceHero,
  SourceRomComs,
} from '../../src/sections/@proxy';
import { useRouter } from 'next/router';
import sources from '../../src/sources';
import PageNotFound from '../404';
// 

// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter();
  const { source: sourceId } = router.query;
  const source = sources[sourceId as keyof Object];
  return sourceId ? source ? (
    <Page title={source.name}>
      <SourceHero source={source} />
      <SourceRomComs />
    </Page>
  ) : (<PageNotFound />) : (<></>);
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader simpleFooter>{page}</Layout>;
};
