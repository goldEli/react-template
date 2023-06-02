import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import lessToJS from "less-vars-to-js";
// import fs from "fs";
// import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, "./src/config/variables.less"), "utf8")
// );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // 重写 less 变量，定制样式
      // modifyVars: themeVariables
    },
  },
});
