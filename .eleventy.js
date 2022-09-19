const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {
    config.addPlugin(eleventyNavigationPlugin);

    config.addPassthroughCopy('./src/assets/')

    return {
        dir: {
            input: 'src',
            output: '_site',
            
        }
    };
};