<script context="module">
    export let hydrate = "";

    const google = import.meta.env.GOOGLE;
    const client = import.meta.env.CLIENT;
</script>
<svelte:head>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${google}`}></script>
    <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossorigin="anonymous"></script>
</svelte:head>
<script>
    import { onMount } from 'svelte';

    onMount(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', google);
    })
</script>