/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    fontFamily: {
      // NunitoSans: ["sans", ""],
      nunitoSans: ["Nunito-Sans", "sans-serif"],
      AlbertSans: ["Albert-Sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black:"#232528",
        whiteSky: "#1479FF14",
        sky:"#1479FF",
        grayLight :"#F7F7F7",
        gray: "#858E9A",
        whiteLight: "#F8F9FC",
        BorderColor:"#dee2e6",
        grayText:"#858E9A",
        offwhite:"#F5F6F8",
        offsky:"#1479FF",
        offyellow:"#FFF9E6",
        offgreen:"#F0F8F1",
        offred:"#FFF1F1",
        borderwhite:"#EFEFEF",
        bgwrape:"#abacad",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [],
};
