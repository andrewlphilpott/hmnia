{% extends '../../layouts/_post.twig' %}

{% set title = 'A Month (or so) With Amazon Echo' %}
{% set metaTitle = 'A Month (or so) With Amazon Echo 👍 Andrew Philpott' %}
{% set date = '02/05/16' %}
{% set canonical = 'false' %}
{% set excerpt = 'I asked for an Amazon Echo for Christmas, mainly because I wanted a reliable way to control my Wink-connected lights with my voice. I had pretty high expectations, but I’ve found that the Echo is even better than I expected; and it keeps on getting better.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>
	<p>In the time since I wrote this post, Amazon has announced even more new features like thermostat control through Wink and new hardware like the Echo Dot and Echo Tap (both things I want to check out).</p>
</aside>

I asked for an Amazon Echo for Christmas, mainly because I wanted a reliable way to control my Wink-connected lights with my voice. I had pretty high expectations, but I’ve found that the Echo is even better than I expected; and it keeps on getting better.

## Smart Home Made Smarter

Right off the bat, I connected my Echo to my Wink account so that I could control my lights. Turning lights on and off and setting specific brightness levels works flawlessly. I don’t think I’ve encountered any issues with light control not working (aside from the times that I mumble and Alexa doesn’t understand me).

I started wondering what else I could do to make my house even smarter. After a bit of searching, I found the answer – [IFTTT](http://ifttt.com). Since IFTTT has services for both Wink and Amazon Echo, there’s a lot that you can do. Specifically, I have found the Wink Shortcuts service to be really handy. Using, it I’ve set up voice triggers for common shortcuts that I have set up in the Wink app. For example:

1. “Alexa, trigger movie time” - This triggers Alexa to send the movie time command to IFTTT which then sends the command to my Wink and sets the lights in my living room to my preferred brightness level for watching movies.
2. “Alexa, trigger bedtime” - I use this command every night when I head upstairs to go to bed. When it runs, all of the lights on the first floor get turned off and several different door and motion sensor alarms are turned on.

## Other IFTTT Uses

The Echo/IFTTT integration goes a lot further than just Wink, too. Basically anything you would trigger using your phone and IFTTT can be triggered with Echo. One of my favorite uses so far is having Alexa call my phone when I ask her “Where my phone at?” (You can even customize the message that IFTTT plays with its robotic voice when you answer the phone).

## It Keeps Getting Better

Just this week, Amazon announced that they added support for movie times, Spotify, Domino’s Pizza voice ordering, and Uber. While I probably won’t get much use out of those last two, movie times and Spotify are huge.

I’m honestly kind of surprised that Amazon even elected to add Spotify support since it removes the incentive to switch to Prime Music (which was supported from the start), but I’m glad they did. Now when I want to listen to my [Awesome](https://open.spotify.com/user/andrewlphilpott/playlist/7kc0sQo2F997EieUHrpLhJ) playlist, all I have to do is ask Alexa to play it.

In addition to all these new services, I keep discovering more things that Alexa understands that I don’t expect. The other day when I had Pandora playing, I got sick of it and yelled “Alexa, shut up!” and the music immediately stopped playing. After trying a few more similar commands, I can confirm that Alexa will also stop if you throw insults into the mix (i.e. “Alexa, shut up, you stupid douche!”).
{% endmarkdown %}

{% endblock %}
