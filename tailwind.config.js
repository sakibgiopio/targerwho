/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1290px'
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.75rem',    
        sm: '2rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      boxShadow: {
        'one': '0px 5px 40px 0px #0000001A', 
      },
      backgroundImage: {
        'nav-drop': "url('/assets/images/nav-drop-bg.svg')", 
      },
      fontFamily: {
        'worksan': ['Work Sans', 'sans-serif'], 
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'], 
        'manrope': ['Manrope', 'sans-serif'], 
        'nunito': ['Nunito', 'sans-serif'],   
      },
      backgroundColor: {
        'first': '#009688', 
        'second': '#E0F2F1', 
        'third': '#F8F8F8', 
        'danger': '#F04438', 
      },
      borderColor: {
        'first' : '#E9EAEC', 
      },
      colors: {
        'first': '#323B49', 
        'second': '#A0AEC0', 
        'third': '#009688', 
        'four': '#344054', 
      },
    },
  },
  plugins: [],
}

