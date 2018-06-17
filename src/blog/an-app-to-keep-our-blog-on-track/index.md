{% extends '../../layouts/_post.twig' %}

{% set title = 'An App to Keep Our Blog on Track' %}
{% set metaTitle = 'An App to Keep Our Blog on Track 📝 Andrew Philpott' %}
{% set date = '05/03/16' %}
{% set canonical = 'http://blog.elevatorup.com/post/143790219652/an-app-to-keep-our-blog-on-track' %}
{% set excerpt = 'I had a bit of downtime at work, so I used Firebase to create an app to keep track of our team blog schedule.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
<strong class="note_hdg">Note</strong>

This was originally posted on the [Elevator Up blog](http://blog.elevatorup.com/post/143790219652/an-app-to-keep-our-blog-on-track).
</aside>

At Elevator Up, we take blogging seriously. We’ve got a spreadsheet of due dates for everybody and each team member is expected to turn in their posts on time or face [dire consequences](http://d.pr/i/TJ4H). (Just kidding, but we seriously like it when people write their posts on schedule.)

The problem with our spreadsheet is that someone has to manually update the data every time a team member writes a new blog post and then everybody has to go find the file in Dropbox to see when they’re due – until now, that is. I recently worked with Tori to figure out how we could make this better and ended up putting together a simple blog schedule app which is readily viewable for all team members and can be easily updated.

## Building the App

I used this as an opportunity to test out [Firebase](http://firebase.com), which I had been wanting to try for quite a while. Firebase provides you with a database and a JavaScript SDK for reading from and writing to that database. It also provides ways to implement things like authentication and customizable security rules. This sounded perfect to me because I wanted to build something quickly without having to mess with any back end development.

It worked out great. I was able to very quickly set up some simple data which is, in essence, just some JSON with records for each blog author and some relevant data. Here's what an author looks like in Firebase:

```
author {
  fname: 'Chim',
  lname: 'Richalds',
  registered: 1432785600000,
  last: 1459828800000,
  days: 35,
  remaining: 0
}
```

Broken down, what we're looking at is an author record which has a first name, a last name, a registration date (stored as a Unix timestamp), the date of their last blog post (also a Unix timestamp), the number of days in their blog cycle, and the number of days they had remaining the last time they submitted a post.

On the front end, we pull in all of that data, check the _last_ value and the _days_ value, get the current date, and then do some math to figure out how many days they have left. We also add to their _days_ if they had any remaining days the last time they submitted a post.

That last part is important. We want authors to be able to submit posts whenever they are ready and build up a silo of extra time if they want. So if an author had 30 days left before their next post was due and they decided to submit a post early, they would get 30 added to their next cycle. It works the other way, too. If an author was 5 days overdue when they made a submission, they would have 5 days removed from their next cycle.

## Designing the App

It’s weird to talk about the design after the development, right? Well, I’m not a designer. With that said, I do enjoy designing things and I had a lot of fun designing this app. I took a different approach than I think most would. In the initial planning stage, I threw together a quick wireframe and showed it to Tori. After confirming that we were on the same page, I jumped into development and designed the app in-browser while developing.

Like I said, I'm not a designer. Even so, I’m pretty happy with the way things turned out. I think it achieves the goal of being easy to quickly look at and see who has posts coming up and who is past due.

![A screenshot of the blog schedule](/assets/img/blog/schedule.png)

Updating submission dates is simple, too. As long as you’re logged in, you can just click on a team member, pick a date from the calendar, and submit it.

![A screenshot of the date picker](/assets/img/blog/datepicker.png)

The nice thing about designing while developing was that it allowed me to actually see how things worked and felt in a browser as opposed to looking at static mockups and imagining how things would feel. It also gave me a chance to play around with animations like [this loading graphic](http://codepen.io/andrewlphilpott/details/pydExN/) in real-time.

## Takeaways

I really enjoyed having this opportunity to try out a new technology and to tackle some design. I would definitely recommend Firebase to anybody looking for an easy-to-use back end platform. I know I’ll use it again. If you’ve got anything you have built with it, we’d love to hear about it!
{% endmarkdown %}

{% endblock %}
