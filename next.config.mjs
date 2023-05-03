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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
