export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%), radial-gradient(circle at 20% 70%, rgba(59, 130, 246, 0.12), transparent 20%)',
      },
      colors: {
        midnight: '#040d1c',
        navy: '#071322',
        teal: '#58b1ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
