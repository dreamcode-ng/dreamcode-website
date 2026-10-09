/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require('./next-i18next.config');

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
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://dreamcodesoft.neetocal.com https://cdn.neetocal.com https://va.vercel-scripts.com https://assets.apollo.io https://googleads.g.doubleclick.net https://static.doubleclick.net https://www.google.com https://vercel.live https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://dreamcodesoft.neetocal.com https://cdn.neetocal.com https://schedule.dreamcodesoft.com https://www.google.com https://ad.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://jnn-pa.googleapis.com https://aplo-evnt.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://dreamcodesoft.neetocal.com https://cdn.neetocal.com https://schedule.dreamcodesoft.com https://vercel.live; object-src 'none'; base-uri 'self';"
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig