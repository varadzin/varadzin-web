// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.varadzin.com',
  // Every existing URL on the WordPress site ends with a slash (e.g. /privacy-policy-vitrio/),
  // and App Store Connect / Google Play point at those exact URLs.
  trailingSlash: 'always',
});
