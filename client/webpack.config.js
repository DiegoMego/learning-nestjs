/* eslint-disable @typescript-eslint/no-var-requires */
// import path from 'path';
// import Dotenv from 'dotenv-webpack';
// import autoprefixer from 'autoprefixer';
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.html', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins() {
                return [
                  // eslint-disable-next-line global-require
                  require('autoprefixer'),
                ];
              },
            },
          },
        },
        {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node-modules/',
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
};

// export const entry = './src/index.tsx';
// export const mode = 'development';
// export const output = {
//   filename: 'bundle.js',
//   path: path.resolve('dist'),
// };
// export const module = {
//   rules: [
//     {
//       test: /\.(js|jsx)$/,
//       use: 'babel-loader',
//     },
//     {
//       test: /\.scss$/,
//       use: [{
//         loader: 'style-loader',
//       },
//       {
//         loader: 'css-loader',
//       },
//       {
//         loader: 'postcss-loader',
//         options: {
//           postcssOptions: {
//             plugins: function plugins() {
//               return [
//                 autoprefixer,
//               ];
//             },
//           },
//         },
//       },
//       {
//         loader: 'sass-loader',
//       }],
//     },
//     {
//       test: /\.(woff|woff2|eot|ttf|otf)$/i,
//       type: 'asset/resource',
//     },
//     {
//       test: /\.tsx?$/,
//       use: 'ts-loader',
//       exclude: '/node-modules/',
//     },
//   ],
// };
// export const resolve = {
//   extensions: ['.tsx', '.ts', '.js'],
// };
// export const plugins = [
//   new Dotenv(),
// ];
