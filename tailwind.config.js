module.exports = {
  // purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tm': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      grey: {
        100: '#F2F2F2',
        200: '#C1C1C1'
      },
      red: '#ff0000',
      purple: {
        200: '#F5D4DE',
        light: 'rgba(204,42,93,.1)',
        DEFAULT: ' #CC2A5D',
        dark: '#7D0D31',
      }
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    fontSize: {
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '13': '13px',
      '15': '15px',
      '18': '18px',
      '22': '22px',
      '26': '26px',
      '31': '31px',
      '38': '38px',
      '45': '45px',
      '55': '55px',
      '66': '66px',
      '79': '79px',
      '95': '95px',
      '114': '114px',
      '136': '136px',
      '164': '164px',
    },
    lineHeight: {
      'title': '1.2',
      'paragraph': '1.61',
    },
    spacing: {
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '13': '13px',
      '15': '15px',
      '18': '18px',
      '22': '22px',
      '26': '26px',
      '31': '31px',
      '38': '38px',
      '45': '45px',
      '55': '55px',
      '66': '66px',
      '79': '79px',
      '95': '95px',
      '114': '114px',
      '136': '136px',
      '164': '164px',
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '.5rem',
      'medium': '1rem',
      '50': '50%',
      'full': '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}