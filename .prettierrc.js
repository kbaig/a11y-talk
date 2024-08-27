// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  experimentalTernaries: true,
};

export default config;
