import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor:{
      "purple":" hsla(274, 55%, 44%, 1)",
       "white" :"#fff",
       "gray" :"hsla(200, 13%, 95%, 1)",
    },
    border:{
      "brown" :"hsla(210, 88%, 16%, 0.1)",
      "purple" : " hsla(274, 55%, 44%, 1)",
      "gray" : "hsla(200, 13%, 95%, 1)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'radial-gradient': 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 55.89%, rgba(255, 255, 255, 0) 100%)', // Custom radial gradient
      },

      // fontFamily: {
      //   'dm-serif': ['DM Serif Text', 'serif'], // Custom font family
      // },
      textColor:{
        "purple" :" hsla(274, 55%, 44%, 1)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 300s linear infinite',
        marqueeReverse: 'marquee 300s linear infinite reverse',

      },
      
    },
  },
  plugins: [],
};
export default config;
