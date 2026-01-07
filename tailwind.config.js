/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617", // Slate 950 - Deep Dark Background
        secondary: "#0f172a", // Slate 900 - Secondary Background
        accent: "#3b82f6", // Blue 500 - Primary Neon Accent
        "accent-purple": "#8b5cf6", // Violet 500 - Secondary Neon Accent
        "accent-pink": "#ec4899", // Pink 500 - Tertiary Accent
        text: "#f8fafc", // Slate 50 - Light Text
        "text-muted": "#94a3b8", // Slate 400 - Muted Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
