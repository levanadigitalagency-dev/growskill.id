// next-sitemap.config.js - place this in root
const config = {
  siteUrl: 'https://growskill.id',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/private'],
      },
    ],
    additionalSitemaps: ['https://growskill.id/sitemap.xml'],
  },
};

export default config;
