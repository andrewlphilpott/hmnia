{% extends '../../layouts/_post.twig' %}

{% set title = 'Helvetica, Arial, & Font Stacks' %}
{% set metaTitle = 'Helvetica, Arial, & Font Stacks 🔠 Andrew Philpott' %}
{% set date = '01/22/10' %}
{% set excerpt = 'About a year ago I watched Helvetica. It had a really big impact on the way that I look at the world. I became obsessed with identifying the type face in the wild. One thing that I started to notice, though, was that a lot of websites used Arial as their primary font. I started to look into it more and found that many of these sites put Arial before Helvetica in their font stacks. I was (and still am) really confused by this.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
About a year ago I watched _Helvetica_. It had a really big impact on the way that I look at the world. I became obsessed with identifying the type face in the wild. One thing that I started to notice, though, was that a lot of websites used Arial as their primary font. I started to look into it more and found that many of these sites put Arial before Helvetica in their font stacks. I was (and still am) really confused by this.

## About Font Stacks

For those of you who don't know, a font stack is a common practice in web design. Basically, it's a line in a CSS file that lists what font the designer wants the user to see, followed by an ordered list of alternatives in case the user doesn't have that font on their system.  For example, here's a font stack that lists Helvetica as the primary font, Arial as a substitute font and a generic sans-serif font as a last resort:

<pre><code>font-family: 'Helvetica', 'Arial', sans-serif;</code></pre>

## The Problem

As you can see, font stacks give designers a great way to choose a preferred font and then give users who don't have that font some alternative version. The thing is, _everybody_ has Arial. Okay maybe not everybody, people might have it disabled or something, but it's safe to say that the majority of internet users have Arial on their computers. Not everybody has Helvetica, though, and that's the whole point of font stacks. Not all users have the font that the designer wants them to see, so backups are put in place.

So what's the point in even using a font stack if you're going to start it out with a font that nearly everybody has? I can't really see any benefit, unless the people who design these sites come from the school of thought that says that websites need to look exactly the same in every browser for every user. It's time to let go of that belief, though. Certain browsers (mostly ones that start with an "I" and end in an "nternet Explorer") are not capable of the kinds of things that modern browsers are. Trying to make websites look the same for everybody does nothing but hold back the possibilities of web design, and doing something like putting Arial before Helvetica is one of the first steps down that road.
{% endmarkdown %}

{% endblock %}