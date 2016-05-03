{% extends '../../layouts/_post.twig' %}

{% set title = 'AEA San Francisco 2011 Notes' %}
{% set metaTitle = 'AEA San Francisco 2011 Notes 📓 Andrew Philpott' %}
{% set date = '12/12/11' %}
{% set canonical = 'false' %}
{% set excerpt = 'I was posting my AEA notes live.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
I am currently posting my AEA notes live here: [AEA San Francisco 2011 Notes](https://dl.dropboxusercontent.com/u/575400/notes/aea-sf/index.html).

They're almost completely unstyled right now, but I'll try to get a design finished before the end of the conference.
{% endmarkdown %}

{% endblock %}
