import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

const manifest = {
  short_name: "TV Residency",
  name: "Temple View Residency",
  icons: [
    {
      src: "favicon.png",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "icon192.png",
      type: "image/png",
      sizes: "192x192",
      purpose: "any"
    },
    {
      src: "icon512.png",
      type: "image/png",
      sizes: "512x512",
      purpose: "any"
    }
  ],
  start_url: ".",
  display: "standalone",
  theme_color: "#c2700f",
  background_color: "#fbf8ef"
}

export default defineConfig({
  plugins: [viteCommonjs(), react(), VitePWA({ manifest: manifest })],
  build: {
    outDir: 'build',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-s3'])],
    },
  }
})