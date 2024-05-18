/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
    screens:{
      sm:"200px",
    },
      colors: {
      ngreen:"#0FA958",
      greent:"#C1E5D2",
      gg:"#E0F7E6",
      greentop:"#61CE95",
      dashboard:"#8AA07C",
      dbhover:"#768c67"
      
      },
      
    },
  },
  plugins: [],
};
