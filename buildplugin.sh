#!/usr/bin/env bash

set -x

outfile=out.js

npx tsc --noEmit
npx esbuild --bundle src/app.ts --tree-shaking=true --format=esm --target=es2020 --outfile=$outfile

javy_cmd=$(command -v javy || echo "./javy")
$javy_cmd build $outfile -o ./plugin.wasm
