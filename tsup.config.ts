import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    target: 'es2018',
    external: ['react', 'react-dom'],
    // Copy CSS files to the dist folder
    onSuccess: 'cp -r src/**/*.css dist/ 2>/dev/null || true',
    // Alternative for Windows users:
    // onSuccess: 'xcopy /s /y "src\\**\\*.css" "dist\\" 2>nul || (exit 0)',
});