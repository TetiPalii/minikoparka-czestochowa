/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  experimental: {
    legacyBrowsers: false, // WYŁĄCZA IE11
  },
};

export default config;
