const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["'./src/**/*.{js,jsx,ts,tsx}'"],
  theme: {
    extend: {
      colors: {
        primary: "#1F1D75",
        secondary: "#2DBDEF",
        bg: "#FFFFFF",
        shadow: "#E5E7EB",
        black: "#282D32",
        dark: "#444950",
        success: "#4B7BEC",
        error: "#ff6b81",
        disabled: "#B7C0CF",
      },
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      sm: [
        "13px",
        {
          lineHeight: "17px",
        },
      ],
      md: [
        "14px",
        {
          lineHeight: "18px",
        },
      ],
      lg: [
        "16px",
        {
          lineHeight: "20px",
        },
      ],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        "flex-center": "flex-1 justify-center items-center",
        "col-center": "flex-col justify-center items-center",
        "row-center": "flex-row justify-center items-center",
        "row-start": "flex-row justify-start items-center",
        "row-reverse": "flex-row-reverse justify-start items-center",
        "transition-300": "transition-all duration-300",
        "resize-contain": {
          resizeMode: `contain`,
        },
      });
    }),
  ],
};
