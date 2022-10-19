(function (window, document) {
    "use strict";

    const search = () => {
        const e = document.getElementById("searchField").value

        const results = window.searchIndex.search(e, {
            bool: "OR",
            expand: true,
        }).filter(function (e) {
            const world = document.getElementById("world").checked
            const navigation = document.getElementById("navigation").checked
            const protocol = document.getElementById("protocol").checked
            const post = document.getElementById("post").checked

            var not_allowed = []

            if (world === false) { not_allowed.push("World") }
            if (navigation === false) { not_allowed.push("Navigation") }
            if (protocol === false) { not_allowed.push("Protocol") }
            if (post === false) { not_allowed.push("Post") }

            console.log(not_allowed)

            if (e.doc.tags.filter(tag => !(not_allowed.includes(tag))).length !== 0) {
                return true
            }
        });

        const resEl = document.getElementById("searchResults");
        const noResultsEl = document.getElementById("noResultsFound");

        resEl.innerHTML = "";

        if (results.length !== 0 || e.trim() === "") {
            noResultsEl.style.display = "none";
            results.map((r) => {
                const { id, title, description } = r.doc;
                const el = document.createElement("li");
                resEl.appendChild(el);

                const h3 = document.createElement("h3");
                el.appendChild(h3);

                const a = document.createElement("a");
                a.setAttribute("href", id);
                a.textContent = title;
                h3.appendChild(a);

                const p = document.createElement("p");
                p.textContent = description;
                el.appendChild(p);
            });
        } else {
            noResultsEl.style.display = "block";
        }
    };

    fetch("/search-index.json").then((response) =>
        response.json().then((rawIndex) => {
            window.searchIndex = elasticlunr.Index.load(rawIndex);
            document.getElementById("searchField").addEventListener("input", search);
            document.getElementById("world").addEventListener("change", search);
            document.getElementById("post").addEventListener("change", search);
            document.getElementById("protocol").addEventListener("change", search);
            document.getElementById("navigation").addEventListener("change", search);
        })
    );
})(window, document);