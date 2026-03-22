// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  experimental: {
      queuedRendering: {
          enabled: true,
          poolSize: 100,
          contentCache: true
      }
  },

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [playformInline()]
});