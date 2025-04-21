/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./src/**/*.{vue,js,ts}",
     "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "2rem"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

