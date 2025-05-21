import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    target: 'es2016',
    external: ['react', 'react-dom', 'next', 'tailwindcss'],
});