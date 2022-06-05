import esbuildServe from 'esbuild-serve';

esbuildServe(
  {
    logLevel: 'info',
    bundle: true,
    entryPoints: ['src/plane.ts', 'src/plane.css'],
    format: 'esm',
    outdir: 'example',
    sourcemap: true,
    target: ['esnext'],
    incremental: true,
  },
  {
    root: 'example',
    port: 8080,
  }
);
