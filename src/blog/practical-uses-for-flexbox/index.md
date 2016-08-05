{% extends '../../layouts/_post.twig' %}

{% set title = 'Practical Uses for Flexbox' %}
{% set metaTitle = 'Practical Uses for Flexbox 📦 Andrew Philpott' %}
{% set date = '08/02/16' %}
{% set canonical = 'http://blog.elevatorup.com/post/148346993297/practical-uses-for-flexbox' %}
{% set excerpt = 'If you’ve been developing for the web in the past couple of years, you have most likely heard of CSS’s Flexible box layout module (also known as flexbox). Maybe you’ve used it, or maybe you’ve shied away from it in favor of more familiar layout methods. I’ve been using flexbox fairly regularly for the past few months and I have to say, it’s pretty amazing. Here are some practical uses that I have found.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>

	<p>This was originally posted on the [Elevator Up blog](http://blog.elevatorup.com/post/148346993297/practical-uses-for-flexbox).</p>
</aside>

If you’ve been developing for the web in the past couple of years, you have most likely heard of CSS’s [Flexible box layout module](http://www.w3.org/TR/css-flexbox-1/) (also known as flexbox). Maybe you’ve used it, or maybe you’ve shied away from it in favor of more familiar layout methods. I’ve been using flexbox fairly regularly for the past few months and I have to say, it’s pretty amazing. Here are some practical uses that I have found.

## Site Headers

I tend to use flexbox a lot for header layouts. It really lends itself to a lot of the common designs that I see in headers (i.e. a logo on the left, some navigation on the right, maybe a search form, and everything centered vertically). Not only does flexbox allow you to easily lay elements out horizontally, it also makes centering things vertically super easy.

<p data-height="265" data-theme-id="light" data-slug-hash="oLvmNO" data-default-tab="result" data-user="andrewlphilpott" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/andrewlphilpott/pen/oLvmNO/">Flexbox Header</a> by Andrew Philpott (<a href="http://codepen.io/andrewlphilpott">@andrewlphilpott</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Grid Layouts

Grid layouts are common in web design, so we already have several methods for laying them out. You can `float`, you can use `inline-block`, I guess you can use `position: absolute` if you’re a masochist, you can use things like [Isotope](http://isotope.metafizzy.co), the list goes on. But what if you don’t want to worry about clearing your floats, dealing with the whitespace added by inline-block elements, or messing with absolute positioning or JavaScript plugins? Well, then flexbox is just what you need. You can even accomplish things like making all grid items the same height without resorting to calculating heights with JavaScript.

<p data-height="882" data-theme-id="light" data-slug-hash="YWzzMe" data-default-tab="result" data-user="andrewlphilpott" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/andrewlphilpott/pen/YWzzMe/">Flexbox Grid</a> by Andrew Philpott (<a href="http://codepen.io/andrewlphilpott">@andrewlphilpott</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Complex Grids

Let’s say you need to build a photo collage which has two columns and two rows with the second column spanning both rows. Also you’re not allowed to use a table, because it’s not tabular data. What do you do? Write a bunch of weird floats and some JS? Use absolute positioning? Use a ton of divs and style them somehow? Nope. Just use flexbox.

<p data-height="453" data-theme-id="light" data-slug-hash="WxNbbV" data-default-tab="result" data-user="andrewlphilpott" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/andrewlphilpott/pen/WxNbbV/">Flexbox Collage</a> by Andrew Philpott (<a href="http://codepen.io/andrewlphilpott">@andrewlphilpott</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Browser Issues

Here’s the part where I tell you that flexbox isn’t fully supported in all browsers (sorry if you’re reading this article in an older browser). The nice thing is, it works pretty well in modern browsers. So far, I haven’t found much need to write fallbacks or workarounds aside from fixing a few small things in IE. Details below.

### Flex Basis

I’ve found that when specifying a `flex-basis`, IE tends to ignore it. You can work around this by also adding a `max-width` that matches the `flex-basis`. It’s a little annoying, but it has worked fine in my experience.

### Display None

Another slightly annoying quirk in IE is that it won’t ignore flex children that are hidden with `display: none;`. Even though they are visually hidden, they still have an impact on the layout of your flexbox. I’ve only run into this once and I was able to work around the issue by changing the order of my markup and using absolute positioning to move the hidden element out of the box.

## Moving Forward

In my opinion, flexbox is at the point where it’s supported widely enough to be a good option. I mostly use it for grids and complex layouts that would be difficult or impossible to create with traditional layout methods. The issues that I’ve come across are small enough that they’re easy to work around. If you find yourself needing to support browsers older than IE10, though, you might want to reconsider.

For those of you who are ready to make the move to flexbox, I came across an excellent list of common flexbox bugs along with workarounds called [Flexbugs](https://github.com/philipwalton/flexbugs) that you can reference if you find yourself running into any trouble. It’s set up as a Git repo and seems to be pretty actively updated.
{% endmarkdown %}

{% endblock %}
