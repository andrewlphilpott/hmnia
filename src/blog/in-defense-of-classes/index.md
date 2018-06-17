{% extends '../../layouts/_post.twig' %}

{% set title = 'In Defense of Classes' %}
{% set metaTitle = 'In Defense of Classes 📣 Andrew Philpott' %}
{% set date = '08/23/16' %}
{% set canonical = 'http://blog.elevatorup.com/post/149368866622/in-defense-of-classes' %}
{% set excerpt = 'A few months ago, Tim Baxter wrote a post for A List Apart titled _Meaningful CSS: Style Like You Mean It_. In it, he lays out an argument for avoiding the use of classes in markup and instead favoring things like attributes which make your markup more meaningful and elements as CSS selectors. There are parts of his idea that I like, but overall I don’t think it’s all that practical for many projects other than very small websites or apps.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
<strong class="note_hdg">Note</strong>

This was originally posted on the [Elevator Up blog](http://blog.elevatorup.com/post/149368866622/in-defense-of-classes).
</aside>

A few months ago, Tim Baxter wrote a post for A List Apart titled [_Meaningful CSS: Style Like You Mean It_](http://alistapart.com/article/meaningful-css-style-like-you-mean-it). In it, he lays out an argument for avoiding the use of classes in markup and instead favoring things like attributes which make your markup more meaningful and elements as CSS selectors. There are parts of his idea that I like, but overall I don’t think it’s all that practical for many projects other than very small websites or apps.

## Same Element, Different Use

One of the use cases that Tim mentions in his article is tabs. Rather than using classes like `.tab` to style a tab and `.selected` to mark a tab as selected, he recommends using `[role=tab]` and `[role=tab][aria-selected=true]` as your selectors. I do think it's a good idea to use ARIA attributes where they make sense. If you’re building an app that has multiple styles and uses for tabs, though, you’re probably also going to need to add classes to your tabs anyway (or use a bunch of descendant selectors but then you might take a small performance hit since CSS selectors are evaluated from right to left).

Another suggestion made in the article is applying styles directly to elements (e.g. styling forms with a `form` selector rather than something like `.form`). Off the top of my head, I can’t think of a single project I have worked on that hasn’t had multiple, wildly different looking forms – whether that be a site with a simple contact form, a search form, and a newsletter sign up or something more advanced. Styling elements directly can definitely work well for some things, but I would be careful when doing this. Otherwise, you’ll probably find yourself having to override a lot of styles.

## Potentially Heavier Code

Looking back at the tab example, it’s pretty obvious that `[role=tab][aria-selected=true]` is a longer selector than `.tab.selected`. As a result, that’s going to lead to a larger file size for your CSS file. In that example alone, the longer selector is 17 bytes larger than the shorter one (30B vs 13B). That may not seem like a huge difference, but if you’re using longer selectors frequently in your CSS, it could have a dramatic impact on the size of your file. Add to that the need to either use descendant selectors or additional classes to account for different variations of elements and you could really be looking at some bloat.

## Maintainability

Another issue that could easily come up while using this approach is finding a project more difficult to maintain – especially if it’s a project that’s being worked on by multiple developers. As a developer who has always worked with a team, I know that when making changes or additions to a pre-existing site, it can be difficult to make sure you’re not interfering with other styles. It’s much easier to ensure that you don’t screw something up if you’re using classes because you can very easily check that your classes are unique. Obviously, you should also make sure your classes make sense or use existing classes if you can.

## Takeaways

Tim does touch on some really good points and I think a lot of what he was trying to encourage is writing better code all around – including markup and styles. One of the major lessons I took away from his article was that there is a lot more we can do than just slap a class on every element. Things like ARIA exist for a reason and if you can use those to also provide styling hooks, that’s great. You just need to be smart about when and where you do it so you don’t end up bloating your CSS files or making something that will be a nightmare to maintain.
{% endmarkdown %}

{% endblock %}
