import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import process from 'process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente com base no modo (dev, prod)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@services': path.resolve(__dirname, 'src/services/'),
        '@pages': path.resolve(__dirname, 'src/pages/')
      }
    },
    define: {
      'import.meta.env.VITE_PORT': JSON.stringify(env.VITE_PORT),
      'import.meta.env.VITE_FB_ACCESS_TOKEN': JSON.stringify(env.VITE_FB_ACCESS_TOKEN),
      'import.meta.env.VITE_FB_PHONE_NUMBER': JSON.stringify(env.VITE_FB_PHONE_NUMBER),
      'import.meta.env.VITE_FB_API_URL': JSON.stringify(env.VITE_FB_API_URL),
      'import.meta.env.VITE_BFF_API_URL': JSON.stringify(env.VITE_BFF_API_URL)
    }
  }
})
