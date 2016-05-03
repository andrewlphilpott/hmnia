{% extends '../../layouts/_post.twig' %}

{% set title = 'Fun With Web Standards' %}
{% set metaTitle = 'Fun With Web Standards 🎉 Andrew Philpott' %}
{% set date = '11/10/10' %}
{% set canonical = 'false' %}
{% set excerpt = 'I recently finished a major redesign of my site. I had a lot of fun designing and building this new version and got a chance to experiment a ton with new things. A few of the changes that I made include using CSS3 instead of images, the addition of media queries, and simplifying the entire site to focus more on my blog.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>

	<p>This post is from a previous version of my website, and may not be completely accurate to the design anymore.</p>
</aside>

I recently finished a major redesign of my site. I had a lot of fun designing and building this new version and got a chance to experiment a ton with new things.

## Goodbye, Images

One thing that I'm thrilled about is the very small number of images that are used in the design. Instead, almost everything (aside from a couple of backgrounds and some icons) is made using CSS3. This has a couple of benefits, one being that there are less images to load. Secondly, I don't have to worry about how my images look on hi-res devices like my iPhone 4.

## @media

Speaking of iPhones, my site is now using `@media` queries to change the layout based on the size of your browser window. I first heard [Ethan Marcotte](http://unstoppablerobotninja.com) talk about using media queries to create a "responsive" website that adjusts its design to suit any sized screen.

They're actually _really_ easy to use. Say, for example, I wanted my site to have a black background if the viewport was less than 500 pixels. All I would have to do is enter this code into the CSS:

<pre><code>@media screen and (max-width: 499px) {
	body {
		background-color: #000;
	}
}</code></pre>

It's that easy. Before, I had considered creating a completely different stylesheet for mobile browsers. I have to say, though, using `@media` is _a lot_ easier. It also works for desktop-based browsers, which is awesome.

## Refocused

On top of some of the new visual changes to the site, I've also shifted the design so that the focus is more on my blog. I stripped away a lot of the more social-related things (like links in the footer) and gave the site a more consistent feel throughout to make it feel more like a blog.

Also, on top of traditional commenting, I've added another way for visitors to provide feedback more quickly. I added little heart buttons to each post which you can click to let me know you like a post. I have to admit, these were inspired by Facebook's like buttons.

## Check it out

Go ahead and check out the rest of the site. I'm very happy with the way it turned out. Any feedback is always welcome.
{% endmarkdown %}

{% endblock %}
