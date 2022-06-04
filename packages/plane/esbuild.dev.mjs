import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    bundle: true,
    entryPoints: ["src/index.ts"],
    format: "esm",
    outdir: "example",
    sourcemap: true,
    target: ["esnext"],
  },
  {
    root: "example",
    port: 8080,
  }
);
