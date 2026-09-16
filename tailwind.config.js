/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        primary: '#3b82f6',
        secondary: '#1e293b',
        accent: '#8b5cf6',
      },
      fontFamily: {
        sans: ["'Space Grotesk'", 'sans-serif'],
        heading: ["'Space Grotesk'", 'sans-serif'],
        grotesk: ["'Space Grotesk'", 'sans-serif'],
        cursive: ["'Caveat'", 'cursive'],
      },
    },
  },
  plugins: [],
}
