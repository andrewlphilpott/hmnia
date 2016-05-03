{% extends '../../layouts/_post.twig' %}

{% set title = 'New Blog, New Goals, & New Adventures' %}
{% set metaTitle = 'New Blog, New Goals, & New Adventures 💂 Andrew Philpott' %}
{% set date = '02/19/13' %}
{% set canonical = 'false' %}
{% set excerpt = 'It has been too long since I blogged. A lot has happened in the past few months. I redesigned my blog, we had a great “2013 Goals” meeting at Mighty, and my wife and I even had the chance to go to England for a week so that I could go to New Adventures.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
It has been too long since I blogged. A lot has happened in the past few months. I redesigned my blog, we had a great “2013 Goals” meeting at Mighty, and my wife and I even had the chance to go to England for a week so that I could go to New Adventures.

## New Blog

It’s been in the works for a while, and I have finally finished redesigning and building my blog. Since the last version of my blog, my design and development process has changed a lot. The last version of my blog was my first attempt at responsive design, and it really shows when you look at the code. Since then, I’ve learned a lot about RWD. One of the main changes is that I have moved to a mobile first approach which has been great.

The thing that I’m most excited about is the fact that my site is now running on [Statamic](http://statamic.com) rather than ExpressionEngine. So far, Statamic has been really easy to use and it’s great to have my site running without a database.

## New Goals

As I mentioned earlier, we had a 2013 Goals meeting at the beginning of the year at [Mighty](http://mightyinthemidwest.com). The idea was that everybody had to come up with 3 personal goals, 3 professional goals, and 3 goals for the company.

I’ve never made a resolution before, but taking some time to think of things in my life that I could improve was a nice exercise. One of my personal goals was to finish redesigning my blog (check) and to start blogging more regularly. I’m going to try to start blogging at least once a month, which is a huge increase from what I used to do.

## New Adventures

Probably the most exciting part of the new year was my trip to England to go to [New Adventures](http://naconf.com). Before the trip I had never been overseas, so it was a big change.

My wife and I spent a few days in London before the conference which was in Nottingham. It was great to explore such a huge city, and we both had a really good time. We even got to spend some time at Abbey Road with [Andrew Possehl](http://poss.cc).

Hopefully I’ll get a chance to write some more about my time in England and post some pictures, but for now I’ll just say that England and New Adventures were both awesome.

I’ve got some [notes from the conference available here](https://dl.dropboxusercontent.com/u/575400/notes/naconf/index.html). I didn’t get a chance to take notes on all of the talks, but the entire conference was full of great information and inspiration.
{% endmarkdown %}

{% endblock %}
