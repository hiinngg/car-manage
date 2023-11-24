import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import postCssPxToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    postcss:{
      plugins:[
        postCssPxToRem({
             rootValue: 75, // 75表示750设计稿，37.5表示375设计稿
             propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
             selectorBlackList: [".van"], // 过滤掉van-开头的class，不进行rem转换
             exclude: "/node_modules", // 忽略包文件转换rem
        })
      ]
    }
  }

})
