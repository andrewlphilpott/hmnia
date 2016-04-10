{% extends '../../layouts/_post.twig' %}

{% set title = 'AEA Seattle' %}
{% set metaTitle = 'AEA Seattle 💧 Andrew Philpott' %}
{% set date = '04/15/10' %}
{% set excerpt = 'Last week I had the opportunity to attend An Event Apart Seattle. The conference itself was two days long, followed by a one day workshop on HTML5 and CSS3. I got to hear from experts like Jeffrey Zeldman, Dan Cederholm, Jeremy Keith, Andy Clarke and a lot more. I even got to meet and talk to Andy Clarke at lunch.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
Last week I had the opportunity to attend [An Event Apart Seattle](http://aneventapart.com/2010/seattle/). The conference itself was two days long, followed by a one day workshop on HTML5 and CSS3. I got to hear from experts like [Jeffrey Zeldman](http://zeldman.com/), [Dan Cederholm](http://simplebits.com/), [Jeremy Keith](http://adactio.com/), [Andy Clarke](http://malarkey.co.uk/) and a lot more.

This was only my second web conference (the first one being [SXSW 2010](http://sxsw.com/)) and it was an awesome learning experience. While SXSW seemed like a social gathering first and a place to learn second, AEA was all about inspirational talks packed with information. I took a huge amount of notes that I'm sure I'll come back to from time to time. I also got a chance to eat lunch and chat with Andy Clarke on the first day, which was really cool.

On the first day of the conference, I decided I'd take my notes in HTML (HTML5 no less) format. I figured it would be easier for me to understand them if I marked them up since I tend to dislike using Pages or Word. Not only did this decision make my note taking process a lot easier for me, it also gave me a chance to style my notes and use some of the CSS3 techniques that I've been experimenting with for a while and that people like Dan Cederholm were talking about at the conference. You can [find my notes from the conference here](https://dl.dropboxusercontent.com/u/575400/notes/aea-seattle/index.html).
{% endmarkdown %}

{% endblock %}