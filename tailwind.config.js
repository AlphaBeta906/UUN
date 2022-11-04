module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,svelte}",
    ],
    plugins: [
        require("daisyui")
    ],
    important: true,
    darkMode: ['class', '[data-theme="dark"]'],
    daisyui: {
        themes: [
            "light",
            "dark"
        ]
    }
}