{% extends '../../layouts/_post.twig' %}

{% set title = 'Is Chanel Being Good?' %}
{% set metaTitle = 'Is Chanel Being Good? 🎭 Andrew Philpott' %}
{% set date = '04/27/10' %}
{% set canonical = 'false' %}
{% set excerpt = 'About three weeks ago, my fiancée (Emily) and I bought a puppy and named it Chanel. She’s probably the cutest dog that has ever lived, but she is also a huge pain. She poops everywhere, chews everything, and barks constantly. I decided to make an iPhone app called “Is Chanel Being Good?” so that I can let Emily see what she’s missing out on while she’s gone.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>

	<p>This post is quite old and the app referenced is no longer live.</p>
</aside>

About three weeks ago, my fiancée (Emily) and I bought a puppy and named it Chanel. She’s probably the cutest dog that has ever lived, but she is also a huge pain. She poops everywhere, chews everything, and barks constantly.

<img src="/assets/img/blog/icbg-good.jpg" alt="A screenshot of the Is Chanel Being Good web app" />

Lucky for me (I’m being totally sarcastic), Emily is going to be living in Flint for a couple months this summer which means that I get to take care of Chanel on my own. I decided to make an iPhone app called Is Chanel Being Good? so that I can let Emily see what she’s missing out on while she’s gone.

It’s a pretty simple app. You launch it and it loads the current status and styles the page differently depending on if Chanel is being good or bad. Then it shows a little sentence explaining what she’s been doing.

I highly doubt anybody will ever use my app other than Emily. It was really fun to make, though, and it only took me a few hours. If you have an iPhone and you do want to download it, though, you won’t find it in the App Store. Instead, just visit the page in Safari on your phone and save it to your home screen.
{% endmarkdown %}

{% endblock %}
