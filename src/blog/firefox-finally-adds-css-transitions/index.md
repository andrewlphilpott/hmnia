{% extends '../../layouts/_post.twig' %}

{% set title = 'Firefox Finally Adds CSS Transitions' %}
{% set metaTitle = 'Firefox Finally Adds CSS Transitions 🐺 Andrew Philpott' %}
{% set date = '11/08/10' %}
{% set canonical = 'false' %}
{% set excerpt = 'This is just a short note to say that it looks like Firefox will finally be supporting CSS transitions in their next release. I downloaded the beta release of Firefox 4 the other day and was very happy to see that my -moz-transition styles were working.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
This is just a short note to say that it looks like Firefox will finally be supporting CSS transitions in their next release. I downloaded the beta release of Firefox 4 the other day and was very happy to see that my `-moz-transition` styles were working. The implementation leaves something to be desired, though. I've noticed that a lot of the transitions that are super smooth in Webkit are pretty sketchy in Firefox. Hopefully this is something that will be worked out before the official release.

## My only complaint

One other thing I was disappointed with was Firefox's rendering of `border-radius` which _still_ can't be applied directly to images. (Well, it can, but it won't do anything). Mozilla has been supporting border radius for a long, long time and they still haven't fixed this issue which I find extremely irritating. Maybe they think that's not the way that `border-radius` should work; if they do, they are _completely_ wrong.

Border-radius should definitely be a style that can be applied to images, especially when you consider content management systems built for clients who don't have the knowledge or ability to apply rounded corners to an image on their own. So get with the program, Firefox! I'm tired of using jQuery to create workarounds for rounded corners on images. I wouldn't even bother if it were only IE that didn't behave, but since Firefox still doesn't have its act together, that causes issues.
{% endmarkdown %}

{% endblock %}
