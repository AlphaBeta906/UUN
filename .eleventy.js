const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const fs = require("fs");
let markdownIt = require("markdown-it");
let markdownItFootnote = require("markdown-it-footnote");

module.exports = config => {
    let options = {
        html: true, // Enable HTML tags in source
        breaks: true,  // Convert '\n' in paragraphs into <br>
        linkify: true // Autoconvert URL-like text to links
    };

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

    let markdownLib =  markdownIt(options).use(markdownItFootnote);
    config.setLibrary("md", markdownLib);

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