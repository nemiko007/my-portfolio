// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/server'; // Import the Vercel adapter

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Set output to server
  adapter: vercel(), // Use the Vercel adapter
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});