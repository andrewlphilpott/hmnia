{% extends '../../layouts/_post.twig' %}

{% set title = 'My Transition from iOS to Android' %}
{% set metaTitle = 'My Transition from iOS to Android 💧 Andrew Philpott' %}
{% set date = '01/05/17' %}
{% set canonical = 'http://blog.elevatorup.com/post/155437522242/my-transition-from-ios-to-android' %}
{% set excerpt = 'I’ve been an iOS fan for a long time. I was a poor college student when the original iPhone came out, and that was still the case with the 3G and 3GS, but after that I had an iPhone 4, 5, and 6. Despite all of this, I recently started feeling like I wanted to try something different.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
<strong class="note_hdg">Note</strong>

This was originally posted on the [Elevator Up blog](http://blog.elevatorup.com/post/155437522242/my-transition-from-ios-to-android).
</aside>

I’ve been an iOS fan for a long time. I was a poor college student when the original iPhone came out, and that was still the case with the 3G and 3GS, but after that I had an iPhone 4, 5, and 6. I have also owned an iPad Mini, an Apple Watch, and several MacBook Pros. I’ve always really liked the tight integration of Apple devices. All of my messages were routed to all of my devices, notifications from my iPhone could be sent to my Watch, and I could even use my Watch to unlock my Mac.

Despite all of this, I recently started feeling like I wanted to try something different. I had always been pretty resistant to switching to Android because of past experiences using older Android-based testing devices. With the announcement of the Google Pixel, though, I decided it was time to take the plunge. About a week after the Pixel was announced, I preordered one and started the process of migrating over to Android. Here’s a bit of my takeaway.

## iMessage

First things first, let’s talk about iMessage. This was my main concern and it almost made me decide not to get a Pixel. A couple years ago, a friend of mine bought a Nexus phone and forgot to deactivate iMessage which made it impossible to text him for a while. Having seen that, I’ve always been a little scared that I would miss messages if I did make the switch.

I’m happy to say that I didn’t have any iMessage-related issues when I got my new Android phone. It was actually a pretty painless process and I can’t say that I miss iMessage all that much.

As a precaution, I actually deactivated iMessage on all of my devices (iMac, MacBook Pro, iPhone, etc.) a few days before my Pixel was delivered. This allowed me to make sure I was able to receive messages via SMS beforehand and it also helped me get used to not having iMessage for a few days before my new phone came.

Another thing I was worried about was no longer having the ability to communicate via iMessage from my Mac. I’ve always used iMessage a lot to talk to my wife throughout the work day and I didn’t want to have to pick up my phone every time I message her. Luckily, there are several Android apps that allow you to route SMS to your computer via a browser extension. The one that I’m using right now is called [Pushbullet](https://www.pushbullet.com/) and I like it a lot. You can send and receive text messages right in your browser (they have extensions for all major browsers) which is exactly what I was looking for. There are also options to receive notifications from other apps, but I haven’t played with that much. Pushbullet does limit you to 100 SMS per month unless you pay $5, so I’m not sure if I will stick with this solution for the long term or not.

## Apps

Another concern for me going into Android was app support. I wanted to be sure that all of my most frequently used iOS apps were available and reliable on Android.

Before I even ordered my Pixel, I did a bit of research into which apps are and are not available on Android and I was happy to find that pretty much everything I use regularly is supported. There were a few exceptions (for example, I had to stop using [Twitterrific](http://twitterrific.com/ios)), but for the most part I have everything I want in terms of apps. I even have access now to apps that I always wished I could have on iOS, like Game Boy emulators.

I have noticed that some apps aren’t as stable as their iOS counterparts, but those instances are pretty few and far between. The only app that comes to mind immediately is [1Password](https://1password.com/) which I’ve found crashes pretty often unless you use it in a very specific way. That’s okay, though, because most of my accounts are saved in Chrome anyway.

## Android Auto

I was a big user of [Apple CarPlay](http://www.apple.com/ios/carplay/) and I was really excited to see how [Android Auto](https://www.android.com/auto/) compares. I have always found CarPlay to be slightly buggy (details can be found in [this post I wrote about my first impressions of CarPlay](https://himynameisandrew.com/blog/apple-carplay-first-impressions/)) and I was hopeful that Android Auto would be more stable. I was also really looking forward to having Google Maps in my car as opposed to CarPlay’s Apple Maps.

At the time of this writing, I’ve only had about two weeks to experience Android Auto, but I have to say I love it. So far it has been a lot more stable than CarPlay was in my experience. I am able to start Android Auto when I start my car and then use my car’s rear-view camera without any issues which is something I could never say for CarPlay. The interface is also a lot nicer in my opinion.

Android Auto does have one frustrating limitation, though. For safety purposes, it has a limit on the number of interactions a user can make within a given app while the car is in motion. This means that if you have a very large library in an app like Spotify, you’re unable to browse through the entire thing while you’re driving. After scrolling a few times, you get a message that says you need to be in park to continue browsing and scrolling gets disabled. It sounds like there are ways to get around this by rooting your device and installing some third-party software, but I’m hopeful that the limitation will just get removed in future updates.

## Project Fi

One of the cool things about owning a Pixel (or a Nexus 6P or 5X) means that you can use Google’s [Project Fi](https://fi.google.com/about/). If you’re not familiar with Fi, it’s Google’s take on cell phone service. It uses several different networks in addition to Wifi to provide coverage and you only get charged for data that you actually use. That means if you’re signed up for 3GB per month and you only use 1GB in a month, you’ll get a credit for the 2GB that you didn’t use.

I had the option to include a free Fi SIM card when I ordered my phone, so I had them throw it in just in case. I had been with AT&T for years and I knew that features like VoLTE and Wifi calling wouldn’t work on my Pixel since AT&T doesn’t sell the phone.

I actually ended up switching to Fi about two weeks after I got my Pixel. AT&T’s lack of VoLTE meant that my call quality wasn’t very good and I decided to switch when my wife told me she couldn’t understand anything I was saying.

So far, Fi seems really nice. The process of moving my phone number over and activating service was painless and took less than an hour. Also, I’m going to be saving money since I never actually used all of the data I was paying for with AT&T, so I’m looking forward to that.

## Overall Thoughts

All things considered, I’m very happy with my switch to Android. The flexibility that Android allows in terms of customization is something that I had always heard touted as one of the major selling points and I can now say that I understand why. My initial fears of moving away from the Apple ecosystem have all been put to rest and at this point I don’t know if I will go back to iOS — unless Apple does something absolutely amazing with the iPhone 8.

## Any questions?

Are you on the fence about switching from iOS to Android? Reach out with any questions and I’d be happy to provide more insight from my switch. Have you made the switch from one to the other? Let me know in the comments!
{% endmarkdown %}

{% endblock %}
