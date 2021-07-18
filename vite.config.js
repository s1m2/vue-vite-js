import Vue from "@vitejs/plugin-vue";
import path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'node_modules')
        }
    },
    plugins: [Vue()]
})