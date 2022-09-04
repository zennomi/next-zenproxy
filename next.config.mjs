// ----------------------------------------------------------------------

const nextConfig = {
  trailingSlash: true,
  env: {
    DEV_API: 'http://localhost:8888/api',
    PRODUCTION_API: 'https://zenno.moe/api',
    GOOGLE_API: '',
  },
  images: {
    domains: ['flagcdn.com'],
  },
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
