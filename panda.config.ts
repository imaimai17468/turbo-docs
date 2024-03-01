import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: { value: "#333333" },
          background_white: { value: "#efefef" },
          primary: { value: "#252525" },
          accent: { value: "#34d399" },
          accent_hover: { value: "#2ca886" },
          error: { value: "rgb(251 113 133)" },
          text: { value: "#efefef" },
          text_black: { value: "#252525" },
          text_gray: { value: "#5a5a5a" },
          border: { value: "#5a5a5a" },
          object_gray: { value: "#5a5a5a" },
        },
        fontSizes: {
          lg: { value: "1.5rem" },
          md: { value: "1rem" },
          sm: { value: "0.75rem" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
