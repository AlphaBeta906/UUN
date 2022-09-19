const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const fs = require("fs");

module.exports = config => {
    config.addPlugin(eleventyNavigationPlugin);

    config.addPassthroughCopy('./src/assets/')

    // for --serve
    config.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, browserSync) {
                const content_404 = fs.readFileSync('_site/404.html');

                browserSync.addMiddleware("*", (req, res) => {
                    // Provides the 404 content without redirect.
                    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
                    res.write(content_404);
                    res.end();
                });
            },
        },
        ui: false,
        ghostMode: false
    });

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],

        dir: {
            input: 'src',
            output: '_site',
        }
    };
};