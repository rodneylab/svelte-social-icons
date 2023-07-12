import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sveld from 'sveld';
import preprocess from 'svelte-preprocess';
import pkg from './package.json';

function typeCheck() {
  return {
    writeBundle() {
      require('child_process').spawn('svelte-check', {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });
    },
  };
}

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'SocialIcons' },
  ],
  plugins: [
    typeCheck(),
    svelte({ preprocess: preprocess() }),
    typescript({ sourceMap: false }),
    resolve(),
    sveld(),
  ],
};
