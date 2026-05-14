/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        archiBlue: '#5266e9',
        archiBlueDark: '#3346d8',
        archiBg: '#efede6',
        archiCream: '#f7f5ee',
        archiBlack: '#000000',
        archiDark: '#050608',
        archiPanel: '#11131a',
        archiLine: '#232633',
        archiWhite: '#ffffff',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(82, 102, 233, 0.28)',
        card: '0 24px 80px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'archi-radial': 'radial-gradient(circle at top left, rgba(82,102,233,.38), transparent 34%), radial-gradient(circle at bottom right, rgba(82,102,233,.18), transparent 30%)',
      },
    },
  },
  plugins: [],
};
