## Build a React + TypeScript + Webpack project from scratch

> ❤️ Do not use creat-react-app, Diy it.

- Write React Component
  - Uniform Style (use Class Component or Function Component )
  - React Hook ( Function Component )
- Basic
  - hot-reload
    - webpack-dev-server
  - config alias
  - add index.d.ts file
  - automatic inject builded js files and generate html file
    - html-webpack-plugin
- Loaders
  - parse ts file
    - ts-loader ( or you can choose @babel-loader )
  - parse css file
    - open css modules
    - style-loader
    - css-loader
  - parse image file 
    - url-loader
    - file-loader
- Optimization
  - Separate code
    - splitChunks
  - webpack-dev-server
    - hot reload
  - html-webpack-plugin
    - inject css

## reference

[TypeScript React Conversion Guide
](https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide)