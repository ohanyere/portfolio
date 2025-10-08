/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Taewoon CSX'", "Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          50: "#EBF3FF",
          100: "#D8E9FF",
          300: "#80AEEB",
          500: "#2B5EA8", // primary calm blue
          700: "#1D3F73",
        },
        neutralGray: "#F4F6F8",
        charcoal: "#1B1F24"
      },
      boxShadow: {
        subtle: "0 6px 20px rgba(27,31,36,0.06)",
      }
    },
  },
  plugins: [],
};
