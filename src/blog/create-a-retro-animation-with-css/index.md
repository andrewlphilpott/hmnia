{% extends '../../layouts/_post.twig' %}

{% set title = 'Create A Retro Animation With CSS' %}
{% set metaTitle = 'Create A Retro Animation With CSS 👾 Andrew Philpott' %}
{% set date = '02/01/10' %}
{% set canonical = 'false' %}
{% set excerpt = 'There has been a lot of excitement about CSS animation lately, and I’ve been playing around with it. In this tutorial, I’ll show you how to use CSS Animation to make an old video game style website.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
There has been a lot of excitement about CSS animation lately, and I've been playing around with it. In this tutorial, I'll show you how to use CSS Animation to make an old video game style website.

First things first: some of the CSS we'll be using in this tutorial _will not_ work in all browsers. Right now, only webkit supports CSS animation properties, so Chrome and Safari will render the page correctly. Firefox will work aside from the animations, and IE will probably find ways to screw everything up.

## 1. Creating the cloud animation

One of the core pieces of CSS that we'll be using throughout this tutorial is keyframes. Basically, keyframes allow you to create an animation by giving it a name and then defining different CSS properties for different parts of the animation. To make the clouds move, we'll use this code:

<pre><code>@-webkit-keyframes cloudsMove {
	from {
		background-position: 0 bottom;
	}
	50% {
		background-position: -2000px bottom;
	}
	to {
		background-position: 0 bottom;
	}
}</code></pre>

Taking a closer look at this, we can see that the animation (called "cloudsMove") starts with a background-position of 0 bottom which then moves to -2000px bottom at 50% and then goes back to 0 bottom.

Next, we need to assign cloudsMove to an element. On the demo site, I've given the content div a cloud background, so I'll apply the animation to that div:

<pre><code>#content {
	-webkit-animation-name: cloudsMove;
	-webkit-animation-duration: 60s;
	-webkit-animation-iteration-count: infinite;
}</code></pre>

We're doing a few things here. First, we're telling the browser to assign the cloudsMove animation to our content div. Next we tell the browser that the animation should last 60 seconds. And finally, we state that the animation should iterate infinitely.

## 2. Creating the sunset animation

The sunset animation is very similar to the cloud animation, only this time you can see that I added a rule at 40% and 90% so that there is no actual change in the CSS until later in each iteration:

<pre><code>@-webkit-keyframes skyChange {
	from {
		background-position: center bottom;
	}
	40% {
		background-position: center bottom;
	}
	50% {
		background-position: center top;
	}
	90% {
		background-position: center top;
	}
	to {
		background-position: center bottom;
	}
}</code></pre>

The skyChange animation is applied to the wrapper div:

<pre><code>#wrapper {
	-webkit-animation-name: skyChange;
	-webkit-animation-duration: 50s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}</code></pre>

I've used an additional rule here -- "-webkit-animation-timing-function: linear" -- which makes it so that the animation doesn't ease in or out. Instead, the speed of the animation is consistent throughout each iteration.

## 3. Creating the walking animations

The two people that walk around at the bottom of the window are both created with animated gifs which each have their own animations applied to them.

For the girl, I used:

<pre><code>@-webkit-keyframes womanWalk {
	from {
		right: 0;
		-webkit-transform: scaleX(-1);
	}
	49.9% {
		right: 1000px;
		-webkit-transform: scaleX(-1);
	}
	50% {
		right: 1000px;
		-webkit-transform: scaleX(1);
	}
	99.9% {
		right: 0;
		-webkit-transform: scaleX(1);
	}
	to {
		right: 0;
		-webkit-transform: scaleX(-1);
	}
}

#emily {
	-webkit-animation-name: womanWalk;
	-webkit-animation-duration: 20s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}</code></pre>

And for the guy I used:

<pre><code>@-webkit-keyframes manWalk {
	from {
		left: 100px;
		-webkit-transform: scaleX(1);
	}
	49.9% {
		left: 1100px;
		-webkit-transform: scaleX(1);
	}
	50% {
		left: 1100px;
		-webkit-transform: scaleX(-1);
	}
	99.9% {
		left: 100px;
		-webkit-transform: scaleX(-1);
	}
	to {
		left: 100px;
		-webkit-transform: scaleX(1);
	}
}

#me {
	-webkit-animation-name: manWalk;
	-webkit-animation-duration: 20s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}</code></pre>

Each of the keyframe animations for these two elements uses another new CSS property – `-webkit-transform: scaleX()` – which, in this case, is used to flip the people horizontally depending on which way they are walking.

## 4. Using jQuery to add functionality

To give this site more of a video game feel, I decided to use jQuery to add some functionality. First, I made it so the users can stop and restart the cloud and sky animations using links at the bottom of the page. This works by using a simple jQuery toggle function to remove the animation name from the element's css or add the animation name back into it depending on whether you are starting or stopping the animation. Second, I added sound effects to various parts of the page -- when the navigation links are clicked, when the animations are started or stopped, and when the people are hovered over. I won't go over the start/stop buttons, but I'll show how the sound effects work, because I found quite a few people asking around the internet about how to use jQuery for sound effects.

### Sound effects

When the navigation links on the demo site are clicked, a sound effect is played. In order to accomplish this, I came up with a pretty simple jQuery solution:

<pre><code>$('#nav a').click(function(){
	$('embed').remove();
	$('body').append('<embed src="sound.wav" autostart="true" hidden="true" loop="false">');
});</code></pre>

All this does is removes any embed elements, and then creates a new one with the file we want to play and autostart set to true. The next time a nav link is clicked (or any other sound effect is triggered) the embed that was just created will be removed and a new one will be created.
{% endmarkdown %}

{% endblock %}
