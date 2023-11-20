/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': `var(--primary-color)`,
        'secondary-color': `var(--secondary-color)`,
        'accent-color': `var(--accent-color)`,
        'background-color': `var(--background-color)`,
        'text-color': `var(--text-color)`,
        'negative-accent-color': `var(--negative-accent-color)`,
      }
    },
  },
  plugins: [],
}

