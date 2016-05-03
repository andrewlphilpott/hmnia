{% extends '../../layouts/_post.twig' %}

{% set title = 'List of Ridiculous Browser Bugs' %}
{% set metaTitle = 'List of Ridiculous Browser Bugs 🐜 Andrew Philpott' %}
{% set date = '07/11/14' %}
{% set canonical = 'false' %}
{% set excerpt = 'I am starting a list of common and ridiculous bugs that I’ve found in different browsers along with quick fixes if I know of them. It will most likely grow over time as I find and remember more idiotic bugs.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
I am starting a list of common and ridiculous bugs that I’ve found in different browsers along with quick fixes if I know of them. It will most likely grow over time as I find and remember more idiotic bugs.

## IE 8

* `console.log()` causes JS errors

## IE 10 & 11 (and maybe 9)

* I think CSS `calc()` works, but it doesn't seem to work if you do something like `transform: translateY(calc(100% - 50px));` which works in other browsers

## Android 2 Stock Browser

*(2.3.4 anyway, but really who even uses Android 2 anymore?)*

* Can’t use CSS transforms on pseudo elements (`::before` and `::after`)
* Fixed positioning works like crap
* `overflow: scroll` doesn’t work

## Mobile Safari

* Don’t even think about transitioning `visibility` on something that you're hiding and showing with `opacity: 0; visibility: hidden;` because if you do, it will always remain hidden…

## Desktop Safari

* Maybe it’s just me, but I feel like Safari 8 is just a huge pile of junk. Seriously, like 50 times a day it refuses to load a page and says the server cannot be found only to load it correctly if I refresh.

## Chrome

* Tables apparently ignore `max-width`. I’m not sure if this is actually a bug, though, because it sounds like maybe Chrome does what the CSS spec says it should. Either way, it’s annoying and dumb.
* I’ve also noticed a lot of jankiness if you try to use fixed backgrounds in Chrome, especially if you’re on a retina Mac.
{% endmarkdown %}

{% endblock %}
