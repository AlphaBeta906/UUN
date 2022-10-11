module.exports = {
    content: [
      "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
      "./src/docs/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
      "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
      "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"]
    }
}
  