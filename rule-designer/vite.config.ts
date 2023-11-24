import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), createSvgIconsPlugin({
        // 配置图标路径
        iconDirs: [resolve(process.cwd(), "packages/svg")],
        // 图标id
        symbolId: "icon-[dir]-[name]",
    }),],
})
