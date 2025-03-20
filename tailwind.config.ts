module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'backgorun-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',

        foreground: 'var(--foreground)',  

        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--prrimary-dark)',

        secondary: 'var(--secondary)', 
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': '(var--secondary-dark)',

        tertiary: 'var(--tertiary)', 
        'tertiary-light': 'var(--tertiary-light)',
        'tertiary-dark': 'var(--tertiary-dark)',

        offWhite: 'var(--offWhite)', 
        'offWhite-light': 'var(--offWhite-light)',
        'offWhite-dark': 'var(--offWhite-light)',

        offBlack: 'var(--offBlack)',    
        'offBlack-light': 'var(--offBlack-light)',
        'offBlack-dark': 'var(--offBlack-dark)',
          
        menuForeground: 'var(--menuForeground)',
        hoverColor: 'var(--hoverColor)',
      },
      fontFamily: {
        default: ['var(--font-comfortaa)', 'sans-serif'],
        kanit: ['var(--font-kanit)', 'sans serif'],
      },
    },
  },
  plugins: [],
};
