// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
 export default [
    {
        input: './src/index.ts',
        output: [
          {
            file: pkg.main,
            format: 'cjs',
          },
          {
            file: pkg.module,
            format: 'es',
          },
        ],
        external: [
          ...Object.keys(pkg.dependencies || {}),
          ...Object.keys(pkg.peerDependencies || {}),
        ],
      plugins: [
          typescript(),
        ],
      },
      {
        input: './src/index.ts',
        output: [
          {
            name: "ApplicationInsightsMezzurite",
            file: "./browser/applicationInsight.mezzurite.umd.js",
            format: 'umd',
          }
        ],
        external: [
          ...Object.keys(pkg.dependencies || {}),
          ...Object.keys(pkg.peerDependencies || {}),
        ],
      plugins: [
          typescript({
            tsconfigOverride: {
                compilerOptions: {
                    declaration: false
                }
            }
          }),
        ],
      }
]
