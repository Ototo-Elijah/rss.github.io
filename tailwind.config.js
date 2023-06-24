/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: "true",
      },

      padding:{
        p20: "0.8rem",
      },

      colors:{
        /* PRIMARY COLOR */
        LightRed: "hsl(0, 100%, 67%)",
        OrangeYello: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)", 

        /* GRADIENTS*/ 
        LightSlateBlue: "hsl(252, 100%, 67%)",
        LightRoyalBlue: "hsl(241, 81%, 54%)",
        VioletBlueBgCircle: "hsla(256, 72%, 46%, 1)",
        PersianBlueBgCircle: "hsla(241, 72%, 46%, 0)",

        /* NEUTRAL */ 
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
}
