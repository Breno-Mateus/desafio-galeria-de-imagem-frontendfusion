/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1F2935',
        secondaryColor: '#3B4951',
        cardColor: '#111827',
        textColor: '#fff',
        linkColor: '#2D3943',
        startColor: '#F3D500',
      }
    },
  },
  plugins: [],
}

