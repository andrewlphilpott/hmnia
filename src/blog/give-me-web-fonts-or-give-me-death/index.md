{% extends '../../layouts/_post.twig' %}

{% set title = 'Give Me Web Fonts, Or Give Me Death' %}
{% set metaTitle = 'Give Me Web Fonts, Or Give Me Death 🔫 Andrew Philpott' %}
{% set date = '05/06/09' %}
{% set excerpt = 'Most web designers know that typographic options on the web are… well, lacking. The list of fonts that are available on all computers is a short one. Luckily, though, we have CSS font stacks. This allows us to specify the font that we want, and then provide a list of backup fonts in case a visitor to our website doesn’t have the one we intended. Font stacking is all well and good, but imagine how great it would be if we could ensure that every visitor to our website saw the font that we wanted them to see every time. How great would that be? No more Arial in place of Helvetica. No more Georgia instead of Hoefler Text.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
Most web designers know that typographic options on the web are… well, lacking.  The list of fonts that are available on all computers is a short one.  Luckily, though, we have CSS font stacks.  This allows us to specify the font that we want, and then provide a list of backup fonts in case a visitor to our website doesn’t have the one we intended.  Font stacking is all well and good, but imagine how great it would be if we could ensure that every visitor to our website saw the font that we wanted them to see every time.  How great would that be?  No more Arial in place of Helvetica.  No more Georgia instead of Hoefler Text.

## Current Options

Well, there are currently ways to accomplish this.  The two most common methods have got to be sIFR—which uses a combination of Flash and JavaScript to make uncommon fonts available to visitors—and CSS image replacement—which uses CSS to hide text and instead show an image of the text.  These two methods work great for the most part.

sIFR is a breeze to use and makes it possible to use any font even on text that will be changed frequently.  The main problem I have with sIFR, though, is that it doesn’t work for people who have JavaScript disabled.  Additionally, not everybody has a copy of Flash sitting around to create the files needed to use sIFR.

Image replacement, on the other hand, requires the designer (or content manager or some other unlucky person) to create a new image each and every time the piece of text is updated.

## @font-face

Sure, these techniques have gotten us by, but what if we don’t want to have to rely on JavaScript to provide our fonts?  What if we don’t have the time to make a new image every time we change some text?  That’s where @font-face comes in.

@font-face is an easy to implement CSS property that enables the designer to target a specific font file located on their server.  This makes it possible to use any font without having to resort to things like sIFR, image replacement, or font stacks.  Simply put, the right font will be displayed every time (I’m sure IE will find a way to screw it up, though).

## Problems With Web Fonts

Sounds great, right?  Well, there are a couple of problems.  To start, not all browsers support @font-face; no surprise there, more browsers will implement it as time passes.  The main problem is more of a legal one.

People are resisting the web font movement because it will make it possible for people to download fonts from website servers without actually purchasing them.  Until a couple of days ago, I saw this argument as the sole reason to not use @font-face.  After listening to the most recent SitePoint Podcast, though, my opinion has been changed.

The point was made that the way things are now, people can steal stock photography from sites that purchased the images.  This doesn’t stop stock photo sites from allowing web designers to use their images, though.  The same could easily be applied to the font debate.  What makes people more likely to steal a licensed font than a licensed image?

Besides, there aren’t a lot of people who purchase fonts anyway.  Most people are completely satisfied with the fonts they already have, and if they want anything new they’ll find a free one.  I doubt that web fonts will take much (if any) business away from font designers.

## Bring On The Fonts

It may still be a while till we can actually use the @font-face property, but hopefully the time will come sooner rather than later.  For more on web fonts, check out Håkon Wium Lie’s A List Apart article.
{% endmarkdown %}

{% endblock %}