import { ReactElement } from 'react';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
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

      {/* <HomeFlexibleComponents /> */}

      {/* <HomeFeatureHighlights /> */}

      <HomeForDesigner />

      {/* <HomeCombination /> */}

      {/* <HomeAdvertisement /> */}
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout simpleFooter>{page}</Layout>;
};
