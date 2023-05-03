// routes
import Routes from '../../routes';
// _data
import sources from '../../sources';

// ----------------------------------------------------------------------
export const PageLinks = Object.values(sources).filter(s => ['mangadex', 'nhentai'].includes(s.id)).map((source, index) => ({
  order: index,
  subheader: source.id,
  cover: `/logo/${source.icon}`,
  items: [{ title: 'Top RomCom', path: Routes.proxy.source(source.id) }],
}));

export const navConfig = [
  { title: 'Trang chủ', path: '/' },
  { title: 'Thư viện', path: Routes.romcom.titles },
  {
    title: 'Các nguồn',
    path: Routes.proxy.source('[source]'),
    children: PageLinks,
  },
  { title: 'Imouto Store', path: '/imouto' },
];
