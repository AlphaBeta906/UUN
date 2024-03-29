---
title: World 008
layout: layouts/index.njk
tags:
    - Document
---
<nav class="text-sm breadcrumbs mb-5">
    <ul>
        <li><a href="/docs">Documents</a></li>
        <li><a href="/docs/world">Worlds</a></li>
        <li><b class="censored">Shattered Glass</b></li>
    </ul>
</nav>
<div class="text-center"><h1>World of <span class="censored">Shattered Glass</span></h1></div>

{% slottedComponent '/components/passcode.svelte' 'hydrate' true %}
<div class="grid gap-5 mb-5">
<div class="alert alert-error shadow-lg">
    <div>
        {% include "warning.njk" %}
        <span>
        This page has been shadow-hidden for safety purposes. Please share this page on your own risk.
        </span>
    </div>
</div>

<div class="alert alert-error shadow-lg">
    <div>
        {% include "warning.njk" %}
        <span>
            This page is protected under C/RES/0002, which is the Research Espionage Act. Any attempt to release this document to anyone outside of your research team, your <a href="/docs/protocol/clearance" class="text-black">clearance level</a> or the UUN, will result in your immediate termination.
        </span>
    </div>
</div>

<div class="alert shadow-lg slate-color">
    <div>
        {% include "info.njk" %}
        <span>
        <b>Classification:</b> <span class="text-slate-500">Gone</span><br>
        <b>Frequency:</b> <span class="censored">297.5661</span>
        </span>
    </div>
</div>
</div>

{% renderTemplate 'md' %}
The **World of <span class="censored">Shattered Glass</span>**, more commonly reffered to as the **World of 008**, is a world in the <span class="censored">B8</span> Cluster. The World was revealed to exist on December 4th, 2004, when Jona Hatchenson of Lavillcia, who was a governmental agent, received a strange phone call from a supposed group called “The Broken Arrow”. Research was soon developed on the world that the Broken Arrow called <span class="censored">Shattered Glass</span>, however researchers could not discover where the world was or what cluster it was. The only thing certain about the world was its name, the fact that it had multiple countries, and the phone number of The Broken Arrow, <span class="censored">B17-483-592-5019</span>.<br><br>

Researchers however would soon make a breakthrough, when a team of code-breakers would manage to discover The Senate’s phone number, which did specify a lot of things. First off, The Senate revealed that the world took place in the future, as well as hinting that they should learn more from the transcripts. On February 5th, 2005, <a href="/docs/world/shaglas/comms-04/">Communication-04</a> otherwise known as the Subway Transcript, was received by Boris L. Karskovsky, research director of Kelais, while on a worldport from Yibble to Drivore. The transcript, which was referring to non-existent demands. The United Universal Nations tried to follow up the Broken Arrow by sending a phone call to the aforementioned phone number, but all they heard was static.<br><br>

On March 17th, 2005, multiple United Universal Nations-affiliated researchers received <a href="/docs/world/shaglas/comms-05/">Communication-05</a>, which a threat of bombing the worldports at a location. The location was deciphered by code-breakers, and was revealed to be Yibble, Samarin and Drivore. The United Universal Nations is on high alert and in coordination with the governments of Mastistan and Cynetia <a href="/docs/world/kelais/transcript-7">placed travel-restrictions on the worldports of Yibble, Samarin and Drivore</a>.
{% endrenderTemplate %}
{% endslottedComponent %}