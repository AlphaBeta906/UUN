const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
    var index = elasticlunr(function () {
        this.addField("title");
        this.addField("content");
        this.addField("tags");
        this.setRef("id");
    });

    collection.forEach(page => {
        index.addDoc({
            id: page.url,
            title: page.template.frontMatter.data.title,
            content: page.templateContent.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
            tags: page.template.frontMatter.data.tags
        });
    });

    return index.toJSON();
};