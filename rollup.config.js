
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/api.ts',
        output: [
            {
                file: 'dist/cjs/wap-image.js',
                format: 'cjs'
            },
            {
                file: 'dist/iife/wap-image.js',
                format: 'iife',
                name: 'wapImage'
            },
            {
                file: 'dist/umd/wap-image.js',
                format: 'umd',
                name: 'wap-plugin-image'
            },
            {
                file: 'dist/amd/wap-image.js',
                format: 'amd'
            },
            {
                file: 'dist/es/wap-image.js',
                format: 'es'
            },
            {
                file: 'dist/system/wap-image.js',
                format: 'system'
            }
        ],
        plugins: [
            resolve({
                preferBuiltins: true
            }),
            commonjs(),
            typescript()
        ]
    }
];
