<script context="module">
    export let hydrate = "";
</script>

<script>
    import { onMount } from 'svelte';

    const client = import.meta.env.VITE_CLIENT;
    const slot = import.meta.env.VITE_SLOT;

    onMount(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
</script>

<ins
    class="adsbygoogle pb-6 block"
    data-ad-client={client}
    data-ad-slot={slot}
    data-ad-format="horizontal"
    data-full-width-responsive="true"
/>