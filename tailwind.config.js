module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,svelte}",
  ],
  plugins: [
    require("daisyui")
  ],
  important: true,
  darkMode: 'class',
  daisyui: {
    themes: [
      "light",
      "dark"
    ]
  }
}
