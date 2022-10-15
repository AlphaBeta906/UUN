<script context="module">
    export const frontMatter = {
        renderWithoutSSR: true,
    };
</script>

<script>
    var text1 = "Username";
    var text2 = "Passcode";

    var b1 = "#e1e1e1";
    var b2 = "#e1e1e1";

    var d2 = "none";
    var dc = "none";

    function passcode() {
        text1 = "Username autofilled.";
        b1 = "#c1c1c1";
        d2 = "block";
    }

    function myFunction() {
        text2 = "Passcode autofilled.";
        b2 = "#c1c1c1";
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
                    class="rounded-lg p-[5px] w-[25%] text-slate-500 border-slate-700 border-4 shadow-lg"
                    style="background: {b1};"
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
                    class="rounded-lg p-[5px] w-[25%] text-slate-500 border-slate-700 border-4 shadow-lg"
                    style="background: {b2};"
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
