// docs/.vitepress/config.mts

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Matrix-Wiki/', // <--- ADICIONE ESTA LINHA (com barras no início e no fim)
  title: "Matrix Wiki",
  description: "Desde 17 de abril de 2018",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    // ... restante da configuração
  }
})
