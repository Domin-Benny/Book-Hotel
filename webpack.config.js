const path = require('path');

module.exports = {
  entry: './hotel/app/home/Home.tsx', // Adjust the entry point to your main TypeScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'development' // Add this line to set the mode
};
