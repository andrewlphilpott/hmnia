{% extends '../../layouts/_post.twig' %}

{% set title = 'Getting Symbolset to Work on Android' %}
{% set metaTitle = 'Getting Symbolset to Work on Android 🍫 Andrew Philpott' %}
{% set date = '01/07/14' %}
{% set canonical = 'false' %}
{% set excerpt = 'I have noticed on a couple of recent projects that I’ve built, that Symbolset’s keyword replacement doesn’t work as expected on Android devices (specifically, Android version 4.3, but it may affect other versions as well). I don’t think I ever came across any documented fixes for this issue, which I assume is because Symbolset’s website says that keyword replacement works on Android.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>
	<p>I’m sure this isn’t the only fix for this issue. If you have another fix that you think is better, let me know. Hopefully newer versions of Symbolset and Android will work better together.</p>
</aside>

I have noticed on a couple of recent projects that I’ve built, that Symbolset’s keyword replacement doesn’t work as expected on Android devices (specifically, Android version 4.3, but it may affect other versions as well). I don’t think I ever came across any documented fixes for this issue, which I assume is because Symbolset’s website says that keyword replacement works on Android.

Hopefully this post will be helpful to others in my situation, but in all honesty, I’m writing this mainly for myself because I always forget how I’ve worked around the problem in the past. So here is the fix that I’ve found:

## Text Rendering

Symbolset has `text-rendering: optimizeLegibility;` in the default CSS files, which seems to be part of the issue. The first step is to override this style for Android. You can do it however you want, but I typically just add a UA sniffing line in my JavaScript and add the class “android” to the html element of the page. Then, I simply add the following code (change out the classes to match whichever Symbolset fonts you’re using):

<pre><code>.android .ss-standard,
.android .ss-social,
.android [class*="ss-"]:before,
.android [class*="ss-"].right:after {
	text-rendering: auto;
}</code></pre>

## Modify the Symbolset JavaScript

The next (and final) step is to modify each individual Symbolset font’s corresponding JavaScript file. This is a pretty simple process, because all you need to do is change one character. The first line of the file is a conditional that checks the browser’s user agent. Simply change `Android [1-2]` to `Android [1-4]` to include Android version 4. You’ll obviously have to include the JavaScript file on your page, but I assume you’re already doing that for legacy browser support.
{% endmarkdown %}

{% endblock %}
