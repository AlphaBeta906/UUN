---
title: Communication-04
layout: layouts/index.njk
tags:
    - Document
---
<nav class="text-sm breadcrumbs mb-5">
    <ul>
        <li><a href="/docs">Documents</a></li>
        <li><a href="/docs/world">Worlds</a></li>
        <li><a href="/docs/world/shaglas" class="censored text-base-content hover:text-base-content">Shattered Glass</a></li>
		<li><b>Communication-05</b></li>
    </ul>
</nav>
<div class="text-center"><h1>Communication-05</h1></div>
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
            This page is protected under C/RES/0002, which is the Research Espionage Act. Any attempt to release this document to anyone outside of the UUN, will result in termination.
        </span>
    </div>
</div>
</div>

<b>NOTE</b>: Text written in <i>italics</i> are deciphered by code-breakers.<br><br>

<div class="pl-[15px] pr-[15px]">
{% renderTemplate 'md' %}
Hello, this is the Broken Arrow. Do not respond to this message. (x4).
Hello. This is the Broken Arrow. A Notification has been sent by the Supreme Undying Leader that you should Worship. Failure to comply with our demands will lead to the destruction of the ports at *Yibble, Samarin, and Divore in Kelais*
We have warned you enough. 
{% endrenderTemplate %}
</div>
{% endslottedComponent %}