<script context="module">
    export let hydrate = "";
    export let dark = "";
</script>

<script>
    var text1 = "Username";
    var text2 = "Passcode";

    var d2 = "hidden";
    var dc = "hidden";
    var da = "block"
    var db = "hidden"

    function passcode() {
        text1 = "Username autofilled.";
        d2 = "block";
    }

    function myFunction() {
        text2 = "Passcode autofilled.";
        db = "block";
    }

    function finalforsureaaaa() {
        da = "hidden"
        dc = "block"
    }
</script>

<div class="alert shadow-lg mb-4 {da}">
    <div>
        <span>
            This page is only available for Level 3 security clearance holders;
            please enter valid credentials to access the page.

            <div class="m-2.5">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="h-[3rem] w-full max-w-xs shrink rounded-lg border border-base-300 pl-4 pr-4 text-black shadow-lg dark:text-white flex bg-base-100"
                    on:click={passcode}
                >
                    <span class="my-auto">{text1}</span>
                </div>
            </div>
            <div class="m-2.5 {d2}">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="h-[3rem] w-full max-w-xs shrink rounded-lg border border-base-300 pl-4 pr-4 text-black shadow-lg dark:text-white flex bg-base-100"
                    on:click={myFunction}
                >
                    <span class="my-auto">{text2}</span>
                </div>
            </div>

            <div class="{db} m-2.5 mt-3.5">
                <button class="btn btn-primary" on:click={finalforsureaaaa}>Submit</button>
            </div>
        </span>
    </div>
</div>

<div class="{dc}">
    <p class="font-bold">
        Welcome, <span class="censored">-ACheesyNameHere-</span>!
    </p>
    <div class="divider"></div> 
    <slot />
</div>
