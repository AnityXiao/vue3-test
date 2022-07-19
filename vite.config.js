import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, {
  ElementPlusResolver
} from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //按需导入element-plus组件
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    //按需导入element-plus的css样式
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: name => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
      }]
    }),
  ],
  server: {
    // 指定服务器监听的ip地址
    // host: '127.0.0.1',
    // 指定开发服务器端口
    // port: 8080,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    // strictPort: false,
    https: false,
    open: true,
    // 为开发服务器配置CORS
    cors: true,
    // 自定义代理规则
    proxy: {
      "/api": {
        target: 'http://9.123.134.156',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})