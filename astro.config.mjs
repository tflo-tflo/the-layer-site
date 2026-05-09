// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'dngfkfb3',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],

  output: 'server',
  adapter: vercel(),
});