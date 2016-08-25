{% extends '../../layouts/_post.twig' %}

{% set title = 'No Man’s Sky Log' %}
{% set metaTitle = 'No Man’s Sky Log 📓 Andrew Philpott' %}
{% set date = '08/25/16' %}
{% set canonical = 'false' %}
{% set excerpt = 'I was geeking out about No Man’s Sky so much before it came out that I decided to make a digital log to keep track of what I encounter in the game. It’s got this real neat glitchy text effect on it.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
I was geeking out about No Man’s Sky so much before it came out that I decided to make a digital log to keep track of what I encounter in the game. It’s got this real neat glitchy text effect on it.

<img class="screenshot" src="https://dl.dropboxusercontent.com/u/575400/blog/glitch.gif" alt="Glitchy text" />

I’ll probably post a more detailed description of some of the effects that I made on the site later on. For now, I just wanted to post a link to it. It can be found at http://nms.alp.onl.
{% endmarkdown %}

{% endblock %}
