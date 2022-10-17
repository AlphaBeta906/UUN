---
title: World of Shittery
layout: layouts/index.njk
tags:
    - World
---
<nav class="text-sm breadcrumbs pb-5">
    <ul>
        <li><a href="/docs">Documents</a></li>
        <li><a href="/docs/world">Worlds</a></li>
        <li><b>Shittery</b></li>
    </ul>
</nav>

{% slottedComponent '/components/passcode.svelte' 'hydrate' true %}
<div class="grid gap-4">
<div class="alert alert-error shadow-lg">
    <div>
        {% include "warning.njk" %}
        <span>
            This page is protected under C/RES/0002, which is the Research Espionage Act. Any attempt to release this document to anyone outside of the UUN, will result in termination.
        </span>
    </div>
</div>

<div class="alert shadow-lg">
    <div>
        {% include "info.njk" %}
        <span>
        <b>Classification:</b> <span class="text-red-800">Stage 0a - Hazardous</span><br>
        <b>Frequency:</b> <span class="censored">091.8871</span>
        </span>
    </div>
</div>
</div>

{% renderTemplate 'md' %}
## Abstract

The **World of Shitery** is a hazardous world in the <span class="censored">A8</span> Cluster. The beings from the world have multiple forms depending on the viewer. Some assume that the beings are blobs with flags and two eyes, known as "countryballs." Others view them as national personifications.<br><br>

The World of Shittery due to it's "psychedelic abstract-ness" caused researchers to breakdown into depression, anxiety and in some causes suicide. Because of this, in October 27th, 1996, the UUN has decided to end all operations in the World of Shittery, due to hazardous conditions.<br><br>

On May 3rd, 2002, the UUN decided that a swarm of audio-receiving mechanical flies would be released to the World of Shittery to monitor the different "nations."
{% endrenderTemplate %}
{% endslottedComponent %}