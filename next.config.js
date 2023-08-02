/**
 * @Description - This generates the Content Security Policy header values
 * @Nonce - https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 * @Reference - https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
 **/
function getContentSecurityPolicy() {
  let contentSecurityPolicy = ``;
  contentSecurityPolicy += `base-uri 'self';`;
  contentSecurityPolicy += `object-src 'none';`;
  contentSecurityPolicy += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline' data:;`; // NextJS requires 'unsafe-inline'
  contentSecurityPolicy += `frame-ancestors 'self';`;
  contentSecurityPolicy += `worker-src blob: ;`;

  return contentSecurityPolicy;
}

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=15552000; includeSubDomains; preload',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: getContentSecurityPolicy(),
  },
];

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ja', 'es'],
    defaultLocale: 'en',
  },
  transpilePackages: ['shared-components', 'lang', 'mui-theme', 'utils'],
  output: 'standalone',
  headers() {
    return [
      {
        headers: securityHeaders,
        source: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
