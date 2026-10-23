/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require('./next-i18next.config');

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://dreamcodesoft.neetocal.com https://cdn.neetocal.com https://schedule.dreamcodesoft.com https://www.google.com https://ad.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://jnn-pa.googleapis.com https://aplo-evnt.com https://assets.apollo.io https://vitals.vercel-insights.com",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://dreamcodesoft.neetocal.com https://assets.apollo.io https://va.vercel-scripts.com https://www.google.com https://vercel.live https://www.gstatic.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://static.doubleclick.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com https://dreamcodesoft.neetocal.com",
  "font-src 'self' https://fonts.gstatic.com https://vercel.live data:",
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://dreamcodesoft.neetocal.com https://cdn.neetocal.com https://schedule.dreamcodesoft.com https://vercel.live https://www.googletagmanager.com",
  "media-src 'self' https://dreamcodesoft.neetocal.com",
].join('; ');

const nextConfig = {
  i18n,
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: csp
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig