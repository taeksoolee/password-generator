const path = require('path');
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: process.env.NODE_ENV === 'development',
        runtimeInjection: true, // 개발 환경일 때 사용한다.
        // CHECKME: injection 아닐때는?
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: { 
          '@/*': [path.join(__dirname, '*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      },
    ],
  ],
};