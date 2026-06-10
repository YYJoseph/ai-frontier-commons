export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#2b2118",
        paper: "#f5f0e8",
        accent: "#8a4f2a",
        moss: "#6f715d",
        saffron: "#b66a2c",
        coral: "#a95d43",
        porcelain: "#fbf7ef",
        linen: "#ede4d8",
        clay: "#d8c7b3"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ],
        display: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Songti SC",
          "STSong",
          "serif"
        ]
      }
    }
  },
  plugins: []
};
