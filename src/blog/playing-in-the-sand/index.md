{% extends '../../layouts/_post.twig' %}

{% set title = 'Playing In The Sand' %}
{% set metaTitle = 'Playing In The Sand 🌴 Andrew Philpott' %}
{% set date = '03/08/10' %}
{% set excerpt = 'This weekend I really wanted to design a quick site and try out some new CSS techniques I’ve been learning, so I made a sandbox site. What’s a sandbox? Basically it’s a place where I’ll post my experiments and little projects that I’ve been playing around with.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>

	<p>This post is very old and the sandbox site referenced is no longer around.</aside>
</aside>

This weekend I really wanted to design a quick site and try out some new CSS techniques I've been learning, so I made a sandbox site. What's a sandbox? Basically it's a place where I'll post my experiments and little projects that I've been playing around with.

## Experimental Design

Since the site itself is a home for experiments, I figured the design should reflect that spirit of exploration. I made the site using a lot of CSS3 transitions (sorry, Safari and Chrome haters, they only work with webkit so far).

Also, I used a cool new technique to make a letterpress effect on the main headline and some of the other text on the site. It's done using two different text shadows, one of which extends above the text and is darker. The other one extends below the text and is a lighter color. IE users, you're out of luck (maybe certain browser makers should get on the ball and start adding CSS3 properties).

## Social Experiment

I even added a little social experiment to the site. The headline of the landing page says "andrew philpott's sandbox is" in ginormous text. Next to the headline there's a little input field that says "Have your say..." which you can enter text in and then submit. Whatever you submit will be added after the headline and to the title of the site.

I though this would be a fun way to see what people think of the things I'm working on. So far some of the comments have included "rad", "full of cool" and "dope." There were also a couple of other comments that said things like "hello" because I was stupid and labeled the input field as "Say hello..." at first.

You can view all of the comments by clicking the little + link next to the last comment.

## Spam Experiment

I also threw in a little test spam catcher, so we'll see if that actually works. Any person (or spambot) who triggers the spam catcher will get redirected to [this picture](http://images.encyclopediadramatica.com/images/0/02/DONOTWANT_doggy2.jpg) and the comment won't be submitted.

Oh, one last thing: I like the Konami Code.
{% endmarkdown %}

{% endblock %}