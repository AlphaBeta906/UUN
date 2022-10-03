const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const fs = require("fs");
let markdownIt = require("markdown-it");
let markdownItFootnote = require("markdown-it-footnote");
let markdownItAnchor = require("markdown-it-anchor");
let markdownItTOC = require("markdown-it-table-of-contents");
const outdent = require('outdent');
const slinkity = require('slinkity')
const svelte = require('@slinkity/renderer-svelte')

const searchFilter = require("./src/filters/searchFilter");

module.exports = config => {
    let options = {
        html: true, // Enable HTML tags in source
        breaks: true,  // Convert '\n' in paragraphs into <br>
        linkify: true // Autoconvert URL-like text to links
    };

    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(EleventyRenderPlugin);
    config.addPlugin(slinkity.plugin, slinkity.defineConfig({
        renderers: [svelte],
    }))

    config.addPassthroughCopy('./src/assets/')
    config.addPassthroughCopy('./src/js/')

    config.addFilter("search", searchFilter);

    config.addCollection("docs", collection => {
        return [...collection.getFilteredByGlob("./src/docs/**/*.md")];
    });

    config.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
    
    config.addFilter("search", searchFilter);

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

    let markdownLib =  markdownIt(options)
        .use(markdownItFootnote)
        .use(markdownItAnchor.default)
        .use(markdownItTOC, {
            "containerHeaderHtml": '<div class="toc-container-header">Contents</div>',
            "includeLevel": [2,3,4]
        });

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