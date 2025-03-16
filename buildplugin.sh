#!/usr/bin/env bash

outfile=out.js

npx tsc --noEmit
npx esbuild --bundle src/app.ts --tree-shaking=true --format=esm --target=es2020 --outfile=$outfile

javy compile $outfile -o examples/plugin.wasm
