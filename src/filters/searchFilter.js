const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
    var index = elasticlunr(function () {
        this.addField("title");
        this.addField("excerpt");
        this.addField("tags");
        this.setRef("id");
    });

    collection.forEach(page => {
        index.addDoc({
            id: page.url,
            title: page.template.frontMatter.data.title,
            excerpt: page.template.frontMatter.data.excerpt,
            tags: page.template.frontMatter.data.tags
        });
    });

    return index.toJSON();
};