const esbuild = require('esbuild');

esbuild.build({
  bundle: true,
  entryPoints: ['src/plane.ts', 'src/plane.css'],
  external: ['./node_modules/*'],
  format: 'esm',
  minify: true,
  outdir: 'dist',
  sourcemap: true,
  splitting: true,
  target: ['esnext'],
});
