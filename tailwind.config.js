/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fdfee8',
          100: '#fbfdc3',
          200: '#f8fb8a',
          300: '#f3f755',
          400: '#ecfc3a',
          500: '#d4e415',
          600: '#b8c800',
          700: '#9aaa00',
          800: '#7d8b00',
          900: '#626d00',
        },
        teal: {
          50:  '#f0fdfc',
          100: '#ccfbf5',
          200: '#99f6ed',
          300: '#5eead8',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card:  '0 4px 24px -4px rgba(154,170,0,0.15)',
        glow:  '0 0 32px 4px rgba(236,252,58,0.25)',
        soft:  '0 8px 48px -8px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #fdfee8 0%, #f0fdfc 50%, #fff 100%)',
        'cta-gradient':  'linear-gradient(135deg, #9aaa00 0%, #ecfc3a 100%)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'shimmer':  'shimmer 2s linear infinite',
        'fade-up':  'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-16px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        fadeUp:  { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
