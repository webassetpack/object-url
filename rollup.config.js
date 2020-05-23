
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/api.ts',
        output: [
            {
                file: 'dist/cjs/wap-object-url.js',
                format: 'cjs',
                name: 'wapObjectUrl',
                exports: 'named'
            },
            {
                file: 'dist/iife/wap-object-url.js',
                format: 'iife',
                name: 'wapObjectUrl',
                exports: 'named'
            },
            {
                file: 'dist/umd/wap-object-url.js',
                format: 'umd',
                name: 'wap-plugin-object-url',
                exports: 'named'
            },
            {
                file: 'dist/amd/wap-object-url.js',
                format: 'amd',
                name: 'wapObjectUrl',
                exports: 'named'
            },
            {
                file: 'dist/es/wap-object-url.js',
                format: 'es',
                name: 'wapObjectUrl',
                exports: 'named'
            },
            {
                file: 'dist/system/wap-object-url.js',
                format: 'system',
                name: 'wapObjectUrl',
                exports: 'named'
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
