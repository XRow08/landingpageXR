/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/images/header.webp')",
        'headerMedium': "url('/images/headerM.webp')",
        'mobileHeader': "url('/mobileAssets/headerMobile.png')",
        'page': "url('/images/backgroundPage.png')",
        'murilao': "url('/images/murilao.webp')",
        'services': "url('/images/servicos.png')",
        'benefits': "url('/images/diferenciais.png')",
        'brands': "url('/images/empresas.png')",
        'depositions': "url('/images/depoimentos.png')",
        'process': "url('/images/processo.png')",
      },
      fontFamily: {
        'helvetica': ['var(--font-helvetica)'],
        'microTecni': ['var(--font-microTecni)']
      },
      colors: {
        'red': '#FF0000',
        'redStroke': '#A5160C',
        'green': '#09FF12',
        'button': '#AC0000',
      },
    },
  },
  plugins: [],
}