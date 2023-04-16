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
		<li><b>Communication-04</b></li>
    </ul>
</nav>
<div class="text-center"><h1>Communication-04</h1></div>
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

<div class="pl-[15px] pr-[15px]">
Do not respond to this message. (x4)<br>
Hello, this is the Broken Arrow. We expect you to meet our demands.<br>
Do not respond to this message (x4)<br>
Hello, this is the Broken Arrow.<br>
We have warned you, and have told you what you needed to do, and you have failed to meet our demands. <br>
We will now commit our resources against you.<br>
You have been warned.<br>
Do not respond to this message (x4)
</div>
{% endslottedComponent %}