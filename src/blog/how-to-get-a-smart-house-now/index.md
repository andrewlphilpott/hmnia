{% extends '../../layouts/_post.twig' %}

{% set title = 'How to Get a Smart House Now' %}
{% set metaTitle = 'How to Get a Smart House Now 🏠 Andrew Philpott' %}
{% set date = '11/29/16' %}
{% set canonical = 'http://blog.elevatorup.com/post/155437522242/my-transition-from-ios-to-android' %}
{% set excerpt = 'My favorite Disney Channel movie when I was a kid was Smart House. I loved watching Smart House and seeing all the crazy things that the Cooper’s house could do. Ever since first seeing the movie, I have been really into the idea of automation.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
<strong class="note_hdg">Note</strong>

This was originally posted on the [Elevator Up blog](http://blog.elevatorup.com/post/155437522242/my-transition-from-ios-to-android).
</aside>

My favorite Disney Channel movie when I was a kid was [Smart House](http://www.imdb.com/title/tt0192618/). For those who haven’t seen it, Smart House is about a boy named Ben Cooper who wins a fully automated house in a sweepstakes. I loved watching Smart House and seeing all the crazy things that the Cooper’s house could do. Ever since first seeing the movie, I have been really into the idea of automation. We’re starting to enter a time when home automation is no longer a dream, and it can be fairly budget-friendly to add some simple automation to your home today (if you add things slowly). Here are some of the simple things that you can do to make your house a little smarter today.

## Smart Thermostat

Smart thermostats like the [Nest](https://nest.com) and the [Ecobee](https://www.ecobee.com) have been around for a few years now. They are, essentially, thermostats that can connect to your home wifi network so that you can control them from your computer or phone. I personally have a Nest, but I have heard good things about Ecobee.

These thermostats can also provide other great features. They can do things like sense when nobody is home and change the temperature to save energy and automatically set a schedule based on your preferences. Some of them can also integrate with other connected home products to provide additional functionality.

## Connected Lighting

One of my favorite home automation products that I have used so far is connected lighting (i.e. wifi-connected light bulbs). There are lots of options available—[Philips Hue](http://www2.meethue.com/en-us/), [GE Link](http://www.gelinkbulbs.com), [OSRAM Lightify](https://www.osram.com/osram_com/tools-and-services/tools/lightify---smart-connected-light/), etc.—and prices can range pretty widely. I’ve added three GE Link bulbs, two OSRAM Lightify multi-color bulbs, and some OSRAM Lightify flexible multi-color LED strips to my house and have had great results.

Depending on what type of hub you use to connect your lights to your house (I use [Wink](http://wink.com)), you can do things like turn your lights on and off from your phone, have your lights automatically turn on when the sun sets or when you get home, set your multi-color lights to certain colors at certain times of day, and more.

## Voice Control

Controlling your lights from your phone is pretty cool, but you know what’s even cooler? Controlling your lights with your voice. There are a couple of options available for voice control, the most widely known probably being [Amazon Echo](https://amzn.com/B00X4WHP5E). Google has also recently entered the voice control game with the introduction of the new [Google Home](https://madeby.google.com/home/), and Siri can also be used to control your connected home items (although from my experience, setting up a way for Siri to connect to your home can be a bit of a pain).

Adding a voice controller to your smart home setup can give you some really nice basic functions like turning lights on and off with your voice and changing the brightness of your lights with a command. It can also make things even more interesting. Again, depending on your hub of choice, it’s possible to set up shortcuts to do things like change your multi-color lights to a specific color when you give a voice command and more. You can see [a video of some of my home’s voice controlled lighting here](https://dl.dropboxusercontent.com/u/575400/blog/lights.mp4).

Voice control isn’t just limited to playing with your lights, either. If you have a connected thermostat like a Nest, you can also control the temperature of your house using your voice. I’ve even set up a way to turn on my TV and open the built-in Netflix app using my voice.

## Smart Locks &amp; Garage Door Openers

I’ll be honest. I haven’t tried any connected locks or garage door openers. My main reason for shying away from these is that I’m a little uneasy about the security of these devices. If my lights or my Echo were to get hacked, it would mostly be an inconvenience. On the other hand, if I had a smart lock and it got hacked, it could be a big problem. I haven’t really done any research into how secure smart locks and garage door openers are, but for now I’m fine without them.

## A Couple Nitpicks

Connected home devices are still pretty young, and as a result there are some issues. One problem that I have noticed is the fact that a lot of devices are somewhat closed off. There are a lot of options for smart home hubs, and while competition is definitely a good thing, I could see it becoming a problem if you invest heavily into a certain hub and it ends up closing up shop. You would essentially end up with a bricked hub and none of your devices would work. You may be able to find another hub that supports some or all of your devices, but even so it would be a nuisance.

Another problem that I see is the complicated nature of current smart home setups. Don’t get me wrong, from my experience it’s really easy to add new devices to my Wink setup. Things can start to get complicated, though, when you start trying to extend the functionality of your setup. For example, I mentioned earlier that I can have my TV turn on by giving a voice command. The way that that particular command works is my Echo sends a command to [IFTTT](http://ifttt.com) which then sends a command to a [Harmony Hub](http://www.logitech.com/en-us/product/harmony-hub) which then turns on the TV. This setup is prone to problems. First off, I found the Harmony app extremely confusing to use. Secondly, IFTTT is prone to going down which can lead to commands not being sent until minutes (sometimes hours) after you try to send them.

## Try it Yourself!

I could go on about this stuff for days. Do you have any connected home devices that you love? Have you been thinking about checking some out? Have some information about the security of smart locks? Feel free to reach out to me. I would love to talk more about my setup and the experiences that I have had.
{% endmarkdown %}

{% endblock %}
