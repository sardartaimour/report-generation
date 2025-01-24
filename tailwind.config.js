/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366", // Dark navy blue
        secondary: "#88c9f9", // Light blue
      },
	  backgroundColor: {
		primary: "#003366", // Dark navy blue
        secondary: "#88c9f9", // Light blue
	  }
    },
  },
  plugins: [],
};
