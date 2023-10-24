import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".vue"],
    alias: {
      index: "/src/index.ts",
      components: "/src/components",
      utils: "/src/utils",
      pages: "/src/pages",
      api: "/src/api",
      assets: "/src/assets",
      controllers: "/src/controllers",
      core: "/src/core",
      mockData: "/src/mockData",
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  rules: [
    {
      test: /\.ts?$/,
      exclude: /(node_modules)/,
      use: "ts-loader",
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
      test: /\.scss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
  ],
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      overlay: {
        initialIsOpen: false,
      },
    }),
  ],
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
});
