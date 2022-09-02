import { ReactElement } from 'react';
// _data
import { _pricingHome } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { PricingHome } from '../src/sections/pricing';
import {
  HomeHero,
  HomeTopProjects,
  HomeSources,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
} from '../src/sections/home';
// 

// ----------------------------------------------------------------------

export default function HomePage() {

  return (
    <Page title="RomCom Is Da Best">
      <HomeHero />

      <HomeSources />

      <HomeTopProjects />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeCombination />

      <HomeAdvertisement />
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader simpleFooter>{page}</Layout>;
};
