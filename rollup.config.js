import css from "rollup-plugin-import-css";
//import gzipPlugin from "rollup-plugin-gzip";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const devMode = process.env.NODE_ENV === "dev";
const watch = process.env.ROLLUP_WATCH;

console.log(`${devMode ? "development" : "production"} mode bundle`);

export default [
  {
    input: "./src/app.js",
    //preserveModules: true,
    output: [
      {
        //        file: "./dist/sgt-demo-iife.min.js",
        format: "iife",
        entryFileNames: "sgt-demo-[format].min.js",
        //sourcemap: devMode ? "inline" : false,
        name: "SGTDemo",
        plugins: [
          terser({
            ecma: 2020,
            mangle: { toplevel: true },
            compress: {
              module: true,
              toplevel: true,
              unsafe_arrows: true,
              drop_console: !devMode,
              drop_debugger: !devMode,
            },
            output: { quote_style: 1 },
          }),
          //gzipPlugin(),
        ],
      },
      {
        //file: "./dist/sgt-demo-iife.js",
        entryFileNames: "sgt-demo-[format].js",
        format: "iife",
        name: "SGTDemo",
      },
    ],
    plugins: [
      css(),
      image(),
      json(),
      watch &&
        serve({
          contentBase: "dist",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }),
      watch && livereload(),
    ],
  },
];
