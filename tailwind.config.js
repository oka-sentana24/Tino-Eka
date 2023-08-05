module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    fontFamily: {
      title: ["Great Vibes"],
      body: [""]
    },
    colors: {
      white: "#FFFFFF",
      brownLight: "#825B48",
      brownDark: "#6D4A24",
      greenLight: "#A5C0B5",
      greenDark: "#6F8E7E",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 4s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
