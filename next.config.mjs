// ----------------------------------------------------------------------

const nextConfig = {
  trailingSlash: true,
  env: {
    DEV_API: 'http://localhost:8888/api',
    PRODUCTION_API: 'https://zenno.moe/api',
    GOOGLE_API: '',
    CUUTROM_API: 'http://localhost:3000',
    ROMCOM_API: 'https://backend.zenno.moe',
  },
  images: {
    domains: ['flagcdn.com'],
  },
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
