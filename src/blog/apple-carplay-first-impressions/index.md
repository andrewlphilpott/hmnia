{% extends '../../layouts/_post.twig' %}

{% set title = 'Apple CarPlay: First Impressions' %}
{% set metaTitle = 'Apple CarPlay: First Impressions 🚗 Andrew Philpott' %}
{% set date = '05/31/16' %}
{% set canonical = 'false' %}
{% set excerpt = 'A little over a week ago, I got a new car which came equipped with Apple CarPlay. If you’re not familiar with CarPlay, it’s essentially a platform that allows you to replace your car’s built-in user interface with an interface that runs off your iPhone. I’ve spent some time with it and wanted to share some of my initial thoughts.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
A little over a week ago, I got a new car which came equipped with [Apple CarPlay](http://www.apple.com/ios/carplay/). If you’re not familiar with CarPlay, it’s essentially a platform that allows you to replace your car’s built-in user interface with an interface that runs off your iPhone. I’ve spent some time with it and wanted to share some of my initial thoughts.

## It’s Buggy

CarPlay has been around since 2014, but it seems like it’s taking a while for it to gain any traction. I haven’t personally talked to anybody else who has even used it. From my experience, it still feels very much like a new technology. In all honesty, some of the bugs I’ve seen have made me feel like it should still be in beta.

Here are a couple issues that I’ve noticed. (To be fair, I’m not sure whether some of the bugs are CarPlay’s fault or if they’re an issue with my car’s built in software.)

### Black Screen of Death

This is a big one and it happens to me all the time. It’s also the bug that I would most suspect to be caused by my car and not necessarily by CarPlay. This is what happens:

1. I start my car and plug in my phone. After a couple of seconds, CarPlay launches and everything looks fine.
2. I put my car in reverse. The backup camera takes over the screen.
3. I shift into drive. After the camera stops displaying on the screen, everything goes black.
4. I have to unplug my phone and then plug it back in to get CarPlay working again.

So far I haven’t been able to find a fix that doesn’t involve that last step. It’s also worth nothing that this happens literally every time. Like I said, I’m not sure if this is an issue with Apple’s software or my car’s software, but it’s something that I hope gets fixed soon.

### Audio Doesn’t Always Play

Another pretty common bug that I’ve noticed is that when you select an app that you want to play audio from – let’s say Spotify – it doesn’t always work. Lots of times, you’ll just get a grey screen with the play/pause and seek buttons. This one is a little bit more difficult to fix, but some things that I’ve had success with include quitting the app in quesiton on my phone and relaunching it or unplugging my phone and plugging it back in. Again, this is pretty irritating.

## It’s Really Handy

Despite the bugs I’ve mentioned, CarPlay is quite handy. Siri comes built-in which means that doing things like dictating text messages and asking for directions is really easy. I use CarPlay for sending messages a lot and it’s much better than actually writing a text on my phone which I’ll admit I’ve been known to do.

It’s also really nice to see on your screen when a new call or message is coming in. No more having to dig your phone out of your pocket and risk getting in an accident.

## No Google Maps

So here’s a big negative (or not depending on your stance): you can’t use Google Maps. Well, [technically you can](http://www.carplaylife.com/how-to/how-to-enable-google-maps-navigation-on-apple-carplay/), but you won’t actually see the map on your screen. You can, of course, use Apple Maps which feels like it has improved a lot over the years.

Like a lot of other people, I ditched Apple Maps pretty much right after it came out. Google Maps was just better. Apple Maps has come a long way, though, and I haven’t had any problems with it since switching back when I got my new car. It shows traffic conditions, gives you an ETA, offers alternate routes, and does a lot of what I’m used to from using Google Maps. I can’t say that I would stick with Apple if Google Maps suddenly became available for CarPlay, but so far it’s been fine.

## A Few Wishes

There are a few things I would change about CarPlay if I could.

First off, I would like a way to reorganize my home screen. CarPlay comes with Music, Podcast, and Audiobooks apps on the home screen and I pretty much never use any of those apps. Instead I use Spotify and Stitcher. Both of those apps are available for CarPlay, but there’s no way to move them to more prominent positions on the home screen.

Second, it would be nice if there was a way to turn up the scroll speed for non-touch devices. If your car has a touch screen, this probabaly isn’t a problem. My car doesn’t have touch, so I have to navigate through CarPlay with a knob. It works fine, but when you’re scrolling through long lists, it takes _forever_. I don’t think I’ve ever even scrolled to the bottom of my Spotify library simply because it takes so long. It would be nice if the speed could be increased or even if scrolling would switch to a jump-to-letter type functionality when you’re scrolling quickly.

Third – and I write this knowing it will never happen – I would love a way to play Netflix or Hulu through CarPlay. Not while I’m driving, obviously, but if I could plug my phone in and watch something on my car’s screen while parked, that would be great.
{% endmarkdown %}

{% endblock %}
