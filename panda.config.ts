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
          primary: { value: "#252525" },
          accent: { value: "#34d399" },
          accent_hover: { value: "#2ca886" },
          text: { value: "#efefef" },
          border: { value: "#5a5a5a" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
