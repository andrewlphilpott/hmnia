{% extends '../../layouts/_post.twig' %}

{% set title = 'Unfixify' %}
{% set metaTitle = 'Unfixify 💥 Andrew Philpott' %}
{% set date = '12/24/14' %}
{% set excerpt = 'Unfixify is a neat little bookmarklet that looks for elements with `position: fixed;` and converts that to `position: absolute;`. It will almost certainly break some styles somewhere and make a page look silly, but at least there won’t be any fixed elements anymore.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
Let’s face it: fixed headers and footers are really annoying. And us web designers, we’re abusing the crap out of them. So, without further adieu, let me introduce Unfixify™®©.

Unfixify is a neat little bookmarklet that looks for elements with `position: fixed;` and converts that to `position: absolute;`. It will almost certainly break some styles somewhere and make a page look silly, but at least there won’t be any fixed elements anymore.

I created Unfixify this morning while shopping online. I got super sick of having like 200px of my viewport taken up by navigation. Honestly, I think sticking navigation to the top of the viewport is kind of insulting. I mean, how lazy do you think I am? Like I can't just hit cmd+up to reach the navigation?

If you want to use Unfixify (which you obviously do), all you have to do is drag this here link <a title="Seriously, you should do this." href="javascript:(function()%7B%09document.body.appendChild(document.createElement('script')).src='http://himynameisandrew.com/unfixify/unfixify.js';%7D)();">Unfixify</a> into your bookmarks bar or whatever. (I didn’t bother confirming that’s how it works in Chrome and stuff, so if it doesn’t work that way, I’m sure you can figure it out.) Oh and then you've got to click the thing when you want to use it.

![Looking at the Unfixify logo is like staring into the eyes of the most beautiful rainbow](/assets/img/blog/unfixify_cute_logo_QT.png)

<p><marquee>This is the logo that I designed for Unfixify using Photoshop CS5. I think it’s really cute and simple.</marquee></p>

## Check out this totally realistic testimonial:

> I was using the internet one time and there was this website and it had this navigatory element and it wouldn’t go away and it made me really frustrated and I said a swear word. Then I found out about Unfixify and I have never said a bad word since then.
<cite>**Dick Jibbler** – President and CEO of that one company that everybody really loves</cite>
{% endmarkdown %}

x<code>x</code>

{% endblock %}