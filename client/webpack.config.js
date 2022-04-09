import path from 'path';
import Dotenv from 'dotenv-webpack';
import autoprefixer from 'autoprefixer';

export const entry = './src/index.tsx';
export const mode = 'development';
export const output = {
  filename: 'bundle.js',
  path: path.resolve('dist'),
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
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
            plugins: function plugins() {
              return [
                autoprefixer,
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
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
};
export const plugins = [
  new Dotenv(),
];
