/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-bg':     '#FFFDF5',
        'neo-black':  '#000000',
        'neo-red':    '#FF6B6B',
        'neo-yellow': '#FFD93D',
        'neo-violet': '#C4B5FD',
        'neo-green':  '#6BCB77',
        'neo-orange': '#FF9843',
        'neo-white':  '#FFFFFF',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'neo-sm':     '4px 4px 0px 0px #000',
        'neo-md':     '8px 8px 0px 0px #000',
        'neo-lg':     '12px 12px 0px 0px #000',
        'neo-xl':     '16px 16px 0px 0px #000',
        'neo-yellow': '8px 8px 0px 0px #FFD93D',
        'neo-red-s':  '12px 12px 0px 0px #FF6B6B',
        'neo-violet-s':'12px 12px 0px 0px #C4B5FD',
        'neo-sm-y':   '4px 4px 0px 0px #FFD93D',
      },
      borderWidth: {
        '6': '6px',
        '8': '8px',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'marquee':   'marquee 25s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
