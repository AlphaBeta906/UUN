module.exports = {
    content: [
      "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,svelte}",
      "./src/docs/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,svelte}",
      "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,svelte}",
      "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,svelte}",
    ],
    plugins: [
      require("daisyui")
    ],
    important: true,
    daisyui: {
      themes: ["light", "dark"]
    }
}
  