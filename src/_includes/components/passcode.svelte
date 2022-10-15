<script context="module">
    export let hydrate = "";
    export let dark = "";
</script>

<script>
    var text1 = "Username";
    var text2 = "Passcode";

    var d2 = "none";
    var dc = "none";

    function passcode() {
        text1 = "Username autofilled.";
        d2 = "block";
    }

    function myFunction() {
        text2 = "Passcode autofilled.";
        dc = "block";
    }
</script>

<div class="alert shadow-lg mb-4">
    <div>
        <span>
            This page is only available for Level 3 security clearance holders;
            please enter valid credentials to access the page.

            <div class="font-extrabold m-2.5">
                <div
                    class="rounded-lg p-[5px] w-[25%] text-black dark:text-white border-yellow-500 border-4 shadow-lg bg-transparent"
                    on:click={passcode}
                    on:keydown={passcode}
                    on:keyup={passcode}
                    on:keypress={passcode}
                >
                    {text1}
                </div>
            </div>
            <div class="font-extrabold m-2.5" style="display: {d2};">
                <div
                    class="rounded-lg p-[5px] w-[25%] text-black dark:text-white border-yellow-500 border-4 shadow-lg bg-transparent"
                    on:click={myFunction}
                    on:keydown={myFunction}
                    on:keyup={myFunction}
                    on:keypress={myFunction}
                >
                    {text2}
                </div>
            </div>
        </span>
    </div>
</div>

<div style="display: {dc};">
    <p style="font-weight: bold;">
        Welcome, <span class="censored">-ACheesyNameHere-</span>!
    </p>
    <hr />
    <slot />
</div>
