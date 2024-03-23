import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sidebar: '#1E293B',
        background: '#E5E7EB',
        topbar: '#FFFFFF',
        primary: {
          'base' : '#FFC107'
        },
        hover: {
          'base' : '#EAB308'
        },
        secondary: {
          'base': '#CCCCF5'
        },
        tertiary: {
          'base' : '#E7F6FD',
        },
        accents: {
          'yellow': '#FFB836',
          'green' : '#56CDAD',
          'red'   : '#FF6550',
          'blue'  : '#26A4FF',
          'purple': '#7B61FF',
        },
        neutrals: {
          100: '#F8F8FD',
          200: '#F9FAFC',
          300: '#E4E5E7',
          400: '#A8ADB7',
          500: '#7C8493',
          600: '#515B6F',
          700: '#25324B',
        },
        dark: {
          100: '#F6F7F8',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2A37',
          900: '#111928',
        },
        yellow: {
          100: '#FFFBEB',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FCD34D',
          500: '#FBBF24',
          600: '#F59E0B',
          700: '#D97706',
          800: '#B46509',
          900: '#92550E',
        },
        red: {
          100: '#FEF3F3',
          200: '#FEEBEB',
          300: '#FDD8D8',
          400: '#FBC0C0',
          500: '#F89090',
          600: '#F56060',
          700: '#F23030',
          800: '#E10E0E',
          900: '#CA0B0B',
        },
        green: {
          100: '#DAF8E6',
          200: '#C2F3D6',
          300: '#ACEFC8',
          400: '#82E6AC',
          500: '#57DE8F',
          600: '#2CD673',
          700: '#22AD5C',
          800: '#1A8245',
          900: '#196238',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#DEE2E6',
          500: '#CED4DA',
          600: '#C0C9D0',
          700: '#A2ADB8',
          800: '#8B97A6',
          900: '#7A8596',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [

    require('tailwindcss-animate'),
  ],
} satisfies Config;
