const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './source/cli.tsx',
  output: { path: path.join(__dirname, 'build'), filename: 'index.js' },
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
    },
  },
  // node: { fs: 'empty' },
  // devServer: { contentBase: path.join(__dirname, 'src') },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, 'src', 'index.html'),
  //   }),
  // ],
};

// module.exports = {
//   entry: './source/cli.tsx',

//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-react',
//               [
//                 '@babel/preset-env',
//                 {
//                   targets: {
//                     node: true,
//                   },
//                 },
//               ],
//             ],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

// fallback: {
//   fs: false,
//   tls: false,
//   net: false,
//   path: false,
//   zlib: false,
//   http: false,
//   https: false,
//   stream: false,
//   crypto: false,
// },
