<script>
    import { flip } from 'svelte/animate';

    let nations = {
        "Akail": {
            img: "Unknown.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Alphadonia": {
            img: "Alphadonia.png",
            world: "Aztrax",
            date: "August 27th, 1979"
        },
        "Atelia": {
            img: "Unknown.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Bornia": {
            img: "Unknown.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Cornia": {
            img: "Cornia.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Emirate, Empire of": {
            img: "Emirate.jpg",
            world: "Aztrax",
            date: "August 27th, 1979"
        },
        "Mawbol": {
            img: "Mawbol.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Neuster": {
            img: "Unknown.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Neuver": {
            img: "Neuver.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Romanov": {
            img: "Romanov.png",
            world: "Werbia",
            date: "August 27th, 1979"
        },
        "Sundir": {
            img: "Unknown.png",
            world: "Werbia",
            date: "August 27th, 1979"
        }
    }

    // Create items array
    var items = Object.keys(nations).map(function(key) {
        return [key, nations[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    function reverse() {
        items = items.reverse()
    }
</script>

<center>
    <button on:click={reverse} class="btn mb-5 md:btn-lg text-black dark:text-white">
        Reverse
    </button>
</center>

<div class="grid grid-cols-3 gap-20">
    {#each items as [key, value] (key)}
        <div animate:flip={{ delay: 250, duration: 500 }} class="card w-100 sm:w-70 bg-base-300 shadow-xl text-black dark:text-white">
            <div class="card-body text-xs md:text-base">
                <h2 class="card-title p-0 pb-2"><img src={`/flags/${value["img"]}`} alt='Flag for a nation' class="md:h-[22.5px]" /> <span class="hidden md:block">{key}</span></h2>
                <p class="italic">
                    <span class="block md:hidden font-bold">{key}</span><br><br>

                    <b>World of Origin</b>: {value["world"]}<br>
                    <b>Date of Admission</b>: {value["date"]}
                </p>
            </div>
        </div>
    {/each}
</div>