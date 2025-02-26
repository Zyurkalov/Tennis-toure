import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react-swc'
// import Inspect from 'vite-plugin-inspect'
// import path from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/Tennis-toure/',
//   esbuild: {
//     jsxFactory: 'h',
//     jsxFragment: 'Fragment',
//   },
//   build: {
//     outDir: 'dist',
//     assetsDir: '',
//     manifest: true,
//     target: 'es2018',
//     // minify: false,
//     modulePreload: true,
//     rollupOptions: {
//       input: {
//         default: path.resolve(__dirname, 'index.html')
//         // указываем все страницы для сборки
//         // больше на https://www.youtube.com/watch?v=qdr7y2T2FBQ&list=PL-FhWbGlJPfZg649Ukk5vPa4nUjHhQ6o3&index=17
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src/components')
//       // '../../components/sideMenu/SideMenu' => '@/sideMenu/SideMenu' - работает, но линтер указывает на ошибки
//     }
//   },
//   plugins: [react(), Inspect()],
// })

export default defineConfig({
    base: '/Tennis-toure/',
    plugins: [react()],
    build: {
        outDir: 'dist',
        target: 'es2018',
        // добавлено:
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]; // Группировка зависимостей
                    }
                },
            },
        },
        //
    },
    server: {
        cors: false,
    },
});
