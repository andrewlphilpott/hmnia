{% extends '../../layouts/_post.twig' %}

{% set title = 'Should Designers Code?' %}
{% set metaTitle = 'Should Designers Code? ⚙ Andrew Philpott' %}
{% set date = '02/19/10' %}
{% set excerpt = 'A couple of days ago Elliot Jay Stocks posted a tweet about his feelings on web designers who can’t write code. Since then, the web design community has erupted into a debate on whether or not designers should be able to code. I can see valid points on both sides of the argument and I must admit I’m not totally sure where I stand on this subject.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
A couple of days ago [Elliot Jay Stocks](http://www.elliotjaystocks.com) posted a [tweet](http://twitter.com/elliotjaystocks/status/9227592793) about his feelings on web designers who can’t write code. Since then, the web design community has erupted into a debate on whether or not designers should be able to code. I can see valid points on both sides of the argument and I must admit I’m not totally sure where I stand on this subject.

There’s one part of [Elliot’s argument](http://elliotjaystocks.com/blog/web-designers-who-cant-code/) that really stuck out in my mind. In his blog post on the subject, Mr. Stocks wrote the following:

>That’s right: writing HTML and CSS is so easy, that there’s actually no excuse not to learn how.

## Is Writing Good Code Easy?

This is where I start to differ with Elliot. I’ll admit that writing HTML and CSS is pretty easy, but in the same way that drawing a picture is easy. It’s one thing to do it, but it’s a completely different thing to actually do it well. Just because I can put a pen to a piece of paper, that doesn’t mean I’m a good illustrator. The same thing goes for writing code -- just because you can write code, doesn’t mean you are necessarily good at it. Writing good code takes skill. There’s an [art & science](http://www.sitepoint.com/books/cssdesign1/?SID=1b5d45509056d5c534f11e7f76930258) to writing CSS and writing semantic HTML can take a lot of thought.

Sure, anybody can learn HTML and CSS and put a site together. But in my opinion it takes dedication and determination to write well thought out, semantic HTML and then style that with well formatted CSS. I’ve only been working in the web industry for less than a year, but in my time on the job I have come across some pretty poorly written code. I’ve seen paragraph tags used as horizontal rules (they were even given the class "hr"). I’ve seen secondary content put before primary content in HTML simply because the secondary content appears on the left in the design. And I’ve certainly seen things like paragraphs and spans being used when ordered or unordered lists would make more sense semantically.

To me, the argument shouldn’t be so much about whether or not someone who designs a site knows how to write the code to construct it. Instead, we should worry about how well the code is actually written. If a designer knows how to write some HTML and a little bit of CSS but there is a developer who can do a better job and who can write code that makes more sense, the developer should write the code.

## Where I Agree

Don’t get me wrong. I love Elliot’s work. I’m a big fan of his and enjoy reading his books and blog and I’m really excited to see what he has in store with his upcoming 8 Faces project. I’ve only glanced at his code, but it looks great. And I agreed with every point that [Mike Kus](http://www.thethingswemake.co.uk) made in [his recent post](http://carsonified.com/blog/uncategorized/5-good-reasons-why-designers-should-code/) on Carsonified’s blog. I think it’s really important for designers to know (or at least have a strong understanding of) code. There’s no way that learning to write HTML and CSS could hurt a designer’s potential, so there really is no excuse not to do it.

## Closing Thoughts

I have to admit, I find it pretty surprising that a lot of people who design for the web don’t know how to actually implement their designs. Part of me (okay most of me) thinks that if you’re involved in designing the front end of a site and you have a passion for your craft, you would logically have a desire to know how to build what you designed. But if you’re a designer and you decide that you’re going to start learning how to code, you should learn it well. Don’t just learn enough to get by (believe me, that was how I first started out learning and code can get really ugly really fast). If you want to start writing HTML you should strive for the cleanest, most semantic code you can write.
{% endmarkdown %}

{% endblock %}