import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  // 確保 build 時會進行 CSS code-splitting 並輸出獨立的 CSS 檔案
  build: {
    cssCodeSplit: true,
    // 自訂輸出：把 CSS 輸出到固定路徑 `css / style.css`，其餘資產維持 hash 命名
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        member1: resolve(__dirname, 'member1.html'),
        member2: resolve(__dirname, 'member2.html'),
        member3: resolve(__dirname, 'member3.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/style.css';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
