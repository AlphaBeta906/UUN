<script>
    import elasticlunr from 'elasticlunr';

    let searchQuery = "";
    let world = true;
    let post = true;
    let protocol = true;
    let navigation = true;
    let searchResults = [];

    const search = () => {
        const e = document.getElementById("searchField").value;

        /* Filtering the results based on the checkboxes. */
        const results = window.searchIndex
            .search(e, {
                bool: "OR",
                expand: true,
            })
            .filter(function (e) {
                const world = document.getElementById("world").checked;
                const navigation =
                    document.getElementById("navigation").checked;
                const protocol = document.getElementById("protocol").checked;
                const post = document.getElementById("post").checked;

                var not_allowed = [];

                if (world === false) {
                    not_allowed.push("World");
                }
                if (navigation === false) {
                    not_allowed.push("Navigation");
                }
                if (protocol === false) {
                    not_allowed.push("Protocol");
                }
                if (post === false) {
                    not_allowed.push("Post");
                }

                if (
                    e.doc.tags.filter((tag) => !not_allowed.includes(tag))
                        .length !== 0
                ) {
                    return true;
                }
            });

        const resEl = document.getElementById("searchResults");
        const noResultsEl = document.getElementById("noResultsFound");

        resEl.innerHTML = "";

        if (results.length !== 0 || e.trim() === "") {
            noResultsEl.style.display = "none";
            results.map((r) => {
                const { id, title, tags } = r.doc;
                const el = document.createElement("li");
                resEl.appendChild(el);

                const h3 = document.createElement("h3");
                el.appendChild(h3);

                const a = document.createElement("a");
                a.setAttribute("href", id);
                a.textContent = title;
                h3.appendChild(a);

                tags.map((tag) => {
                    const tagBadge = document.createElement("div");
                    tagBadge.classList.add("badge");
                    tagBadge.classList.add("font-extrabold");

                    switch (tag) {
                        case "World":
                            tagBadge.textContent = "🌍 Worlds";
                            tagBadge.classList.add("badge-success");
                            break;
                        case "Post":
                            tagBadge.textContent = "💬 Posts / Documents";
                            break;
                        case "Navigation":
                            tagBadge.textContent = "🧭 Navigation";
                            tagBadge.classList.add("badge-info");
                            break;
                        case "Protocol":
                            tagBadge.textContent = "❗️ Protocols";
                            tagBadge.classList.add("badge-warning");
                            break;
                    }

                    h3.appendChild(document.createTextNode(" "));
                    h3.appendChild(tagBadge);
                });
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
</script>

<div class="text-center">
    <h1>Search</h1>
</div>

<div class="form-control w-full max-w-xs">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
        <span class="label-text">Search</span>
    </label>
    <input
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
        bind:value={searchQuery}
        id="searchField"
    />
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
        <span class="label-text-alt"
            >Powered by <a
                class="text-red-500"
                href="https://www.npmjs.com/package/elasticlunr"
                >AlphaSearch by AlphaCorp.</a
            ></span
        >
    </label>
    <label class="label cursor-pointer">
        <span class="label-text"
            ><div class="badge badge-success font-extrabold">
                🌍 Worlds
            </div></span
        >
        <input type="checkbox" class="toggle" bind:checked={world} id="world" />
    </label>
    <label class="label cursor-pointer">
        <span class="label-text"
            ><div class="badge font-extrabold">💬 Posts / Documents</div></span
        >
        <input type="checkbox" class="toggle" bind:checked={post} id="post" />
    </label>
    <label class="label cursor-pointer">
        <span class="label-text"
            ><div class="badge badge-warning font-extrabold">
                ❗️ Protocols
            </div></span
        >
        <input
            type="checkbox"
            class="toggle"
            bind:checked={protocol}
            id="protocol"
        />
    </label>
    <label class="label cursor-pointer">
        <span class="label-text"
            ><div class="badge badge-info font-extrabold">
                🧭 Navigation
            </div></span
        >
        <input
            type="checkbox"
            class="toggle"
            bind:checked={navigation}
            id="navigation"
        />
    </label>
</div>

<div class="divider" />

<ol class="list-decimal" id="searchResults">
    {#each searchResults as result}
        <li>{result.title}</li>
    {/each}
</ol>

<div id="noResultsFound" style="display: none">
    <p>No results found.</p>
</div>
