import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { ivi } from "@ivi/rollup-plugin";
import terser from "@rollup/plugin-terser";

const TERSER_OPTIONS = {
  compress: {
    inline: 0,
    passes: 2,
    keep_infinity: true,
  },
  toplevel: true,
  module: true,
};

const name = 'main';

export default [
  {
    input: `./src/${name}.ts`,
    output: {
      file: `./dist/${name}.js`,
      format: "es",
      strict: true,
      sourcemap: true,
    },
    watch: {
      clearScreen: false,
    },
    plugins: [nodeResolve(), typescript(), ivi({}), terser(TERSER_OPTIONS)],
  },
];