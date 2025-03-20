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
        foreground: 'var(--foreground)',  
        primary: 'var(--primary)',       
        secondary: 'var(--secondary)',   
        tertiary: 'var(--tertiary)',     
        offWhite: 'var(--offWhite)',     
        offBlack: 'var(--offBlack)',      
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
