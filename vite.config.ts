import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Obtendo o equivalente do __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components']
      }
    })
  ],
  
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@actions': resolve(__dirname, './src/actions'),
      '@assets': resolve(__dirname, './src/assets'),
      '@routes': resolve(__dirname, './src/routes'),
      '@styles': resolve(__dirname, './src/styles'),
      '@stores': resolve(__dirname, './src/stores'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@pages': resolve(__dirname, './src/pages'),
      '@services': resolve(__dirname, './src/services'),
      '@shared': resolve(__dirname, './src/shared'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
  
  build: {
    chunkSizeWarningLimit: 500,
    
    minify: 'esbuild',   
    sourcemap: false,
    
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
        entryFileNames: 'assets/entries/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash].[ext]`;
          }
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/woff2?|ttf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash].[ext]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash].[ext]`;
          }
          return `assets/[ext]/[name]-[hash].[ext]`;
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('styled-components')) {
              return 'vendor-styled';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('zustand') || id.includes('axios')) {
              return 'vendor-utils';
            }
            return 'vendor-others';
          }
          
          if (id.includes('/src/components/common/')) {
            return 'components-common';
          }
          
          if (id.includes('/src/utils/') || id.includes('/src/hooks/')) {
            return 'utils-hooks';
          }  
          if (id.includes('/src/styles/')) {
            return 'styles-themes';
          }
        },
      },
    },
    
    cssCodeSplit: true,
    target: 'es2020', 
    reportCompressedSize: true, 
    assetsInlineLimit: 4096,
  },
  
  esbuild: {
    drop: ['console', 'debugger'],
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components',
      'zustand',
      'axios',
    ],
  },
  
  publicDir: 'public',
});