{% extends '../../layouts/_post.twig' %}

{% set title = 'CSS Animated Tooltips' %}
{% set metaTitle = 'CSS Animated Tooltips 💬 Andrew Philpott' %}
{% set date = '02/16/10' %}
{% set excerpt = 'I have worked on a few sites before where I had to develop tooltips. You know what I mean, those little boxes of text that come up when you hover over a link or an image. I used jQuery plugins in the past, but for my site I wanted to try something different. I wanted a solution that used no JavaScript, but still looked good and had some cool effects. Luckily, some pretty standard CSS along with some CSS3 animations were all I needed.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>

	<p>This post is from a previous version of my website, and may not be completely accurate to the design anymore.</p>
</aside>

I have worked on a few sites before where I had to develop tooltips. You know what I mean, those little boxes of text that come up when you hover over a link or an image. I used jQuery plugins in the past, but for my site I wanted to try something different. I wanted a solution that used no JavaScript, but still looked good and had some cool effects. Luckily, some pretty standard CSS along with some CSS3 animations were all I needed.

Before we get started, go hover over one of the pink squares in the calendar to the right of this article. That's what we'll be making. Webkit users, you'll notice the fading in effect (accomplished with a CSS transition). Firefox users probably won't, but I've seen rumors that Firefox is going to add CSS transitions in 3.7, so hopefully that's true.

The code I used for this is actually pretty straightforward: the calendar itself is a table with each day being a table cell, days that have entries associated with them have links in them (the pink boxes) these pink boxes then have a span containing the title inside of them -- this span is the tooltip. The span is then hidden until the link is hovered over.
{% endmarkdown %}

{% endblock %}