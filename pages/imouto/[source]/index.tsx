import { useRouter } from 'next/router';
import { ReactElement } from 'react';
// layouts
import Layout from '@/layouts';
// components
import { Page } from '@/components';
import SourceHero from '@/sections/@imouto/SourceHero';
import sources from '@/ordersources';
import PageNotFound from '../../404';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter();
  const { source: sourceId } = router.query;
  const source = sources[String(sourceId)];
  return sourceId ? source ? (
    <Page title={source.name}>
      <SourceHero source={source} />
    </Page>
  ) : (<PageNotFound />) : (<></>);
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader simpleFooter>{page}</Layout>;
};
