/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2e',
        text: '#cdd6f4',
        accent: '#89b4fa',
        accentLight: '#cce4ff',
        surface: '#313244',
        surfaceHover: '#45475a',
      },
      fontFamily: {
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}
