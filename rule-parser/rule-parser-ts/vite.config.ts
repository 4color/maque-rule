import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    build: {
        minify: true,
        sourcemap: true,
        outDir: 'dist',
        lib: { // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。

            entry: "src/rule-parser-ts.ts",  // entry是必需的，因为库不能使用HTML作为入口。
            name: 'RuleParser', // 暴露的全局变量
            fileName: 'rule-parser', // 输出的包文件名，默认是package.json的name选项
            formats: ["es", "umd"]
        },
        rollupOptions: { // 自定义底层的Rollup打包配置
            // https://rollupjs.org/configuration-options/
            // 确保外部化处理那些你不想打包进库的依赖
            external: [],
            output: {
                // format: 'es', // 默认es，可选 'amd' 'cjs' 'es' 'iife' 'umd' 'system'
                exports: 'named', // https://rollupjs.org/configuration-options/#output-exports
                //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {}
            }
        },
    }
})
