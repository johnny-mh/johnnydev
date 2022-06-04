const esbuild = require("esbuild");

esbuild
  .build({
    bundle: true,
    entryPoints: ["src/index.ts"],
    external: ["./node_modules/*"],
    format: "esm",
    minify: true,
    outdir: "dist",
    sourcemap: true,
    splitting: true,
    target: ["esnext"],
  })
  .catch(() => process.exit(1));
