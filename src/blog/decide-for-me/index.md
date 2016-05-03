{% extends '../../layouts/_post.twig' %}

{% set title = 'Decide For Me' %}
{% set metaTitle = 'Decide For Me 🔮 Andrew Philpott' %}
{% set date = '06/12/15' %}
{% set canonical = 'false' %}
{% set excerpt = 'It’s been a good six or seven months and I totally forgot to write about this, but I made a super simple little web app called Decide For Me. Basically, it’s a pro/con list which allows you to give each item on the list a weight.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
It’s been a good six or seven months and I totally forgot to write about this, but I made a super simple little web app called [Decide For Me](http://de.cidefor.me). Basically, it’s a pro/con list which allows you to give each item on the list a weight. It will then add up the weights of your pros and your cons and tell you whether or not you should do what you’re trying to decide. I recently used the app to help decide whether or not my wife and I should purchase a new home (which we did).

<img src="/assets/img/blog/decideforme.png" class="screenshot" alt="A preview of Decide For Me " />

I had a lot of fun building this little app. It uses HTML5 Local Storage so that you can create a list and reference it later (as long as you don’t do something silly like clear your cache). If you save it to your home screen on iOS, you don’t need to worry about clearing your cache because it will still keep all of your data stored. I’m also using GitHub Pages to host the app, which I had no idea was even a thing until it came to the point of figuring out where to host it. It’s a pretty awesome and easy thing to use. I don’t remember all the details, but basically I just had to buy a domain — I bought cidefor.me and added a subdomain of ‘de’. Get it? — and push my repo to GitHub and then do some other easy stuff to get the domain pointing to the repo. You should definitely [check it out](https://pages.github.com).
{% endmarkdown %}

{% endblock %}
