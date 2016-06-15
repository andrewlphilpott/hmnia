{% extends '../../layouts/_post.twig' %}

{% set title = 'Using CSS Masks to Create “Transparent” JPGs' %}
{% set metaTitle = 'Using CSS Masks to Create “Transparent” JPGs 😷 Andrew Philpott' %}
{% set date = '06/14/16' %}
{% set canonical = 'http://blog.elevatorup.com/post/145906937252/using-css-masks-to-create-transparent-jpgs' %}
{% set excerpt = 'JPG images are great. They allow us to show photos on the web while keeping the file size relatively small (compared to a photo saved as a PNG, anyway). But what do you do when you need a photo with transparency and you don’t want to sacrifice file size? Enter CSS masks.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

{% markdown %}
<aside class="note">
	<strong class="note_hdg">Note</strong>

	<p>This was originally posted on the [Elevator Up blog](http://blog.elevatorup.com/post/145906937252/using-css-masks-to-create-transparent-jpgs).</p>
</aside>

JPG images are great. They allow us to show photos on the web while keeping the file size relatively small (compared to a photo saved as a PNG, anyway). But what do you do when you need a photo with transparency and you don’t want to sacrifice file size? Enter CSS masks.

CSS masking allows you to define a mask shape which is then applied to the element. Anything outside of the mask shape is cut out, and the rest is displayed. It pretty much works the same as masking in Photoshop. The properties for masks should look familiar, because the majority of them are analogous with the different background properties (attachment, clip, origin, image, repeat, etc.)

There are actually multiple ways to define the mask shape, but we’re just going to look at mask images. the `mask-image` property essentially allows you to load in an image like an SVG or PNG, and use that image’s shape to define the mask.

## An Example

Let’s take a look at a use case. Say we needed to show a group of team member photos, but they need to be cropped as triangles:

![The design](http://elevatorup.com/tumblr-post-images/2016-05-06_css-masks/design.jpg)

You could save each of those photos as PNGs with transparency to acheive the triangle effect, but the file size of each of those would be much larger than if they were JPGs. Saving them as JPGs, on the other hand, means they won’t have any transparency. If you were to just stack them on top of each other, you’d end up with something like this:

<p data-height="266" data-theme-id="light" data-slug-hash="EKraeZ" data-default-tab="result" data-user="andrewlphilpott" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/andrewlphilpott/pen/EKraeZ/">Unmasked</a> by Andrew Philpott (<a href="http://codepen.io/andrewlphilpott">@andrewlphilpott</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Next, you’ll need to apply a mask. The mask essentially just consists of a transparent image of the shape that we want the photos to show up as:

![The design](http://elevatorup.com/tumblr-post-images/2016-05-06_css-masks/mask.png)

Now, you can reference that PNG file as the `mask-image` property for each of the two photos. You’ll also apply `mask-size: cover` to make sure the mask is always the same size as the photo.

Once those changes have been made, you can see that the photos stack and are cropped to the proper shape.

<p data-height="266" data-theme-id="light" data-slug-hash="rePaZL" data-default-tab="result" data-user="andrewlphilpott" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/andrewlphilpott/pen/rePaZL/">Masked</a> by Andrew Philpott (<a href="http://codepen.io/andrewlphilpott">@andrewlphilpott</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Of course, the world isn’t perfect and neither are browsers. As such, this won’t work everywhere. Masking is only supported by Chrome, Safari, and Opera right now, so you’ll need a fallback if you have to support IE, Firefox, or other browsers. One option would be to use JavaScript to test for `mask` support and then fall back to a static version of all of the devices as a single JPG. Unsupported browsers would lose the animation, but they would still benefit from the smaller file size of the JPG as opposed to a PNG.

## Another Example in the Wild

Apple uses masks to great effect on their [iPad Pro](http://www.apple.com/ipad-pro/) page. (It’s actually what gave me the idea for this post.) Each of the different objects in the hero image is actually a separate JPG which then has a mask applied to it to allow the stacking and animations. For browsers that don’t support masks, a static, flattened JPG is used.
{% endmarkdown %}

{% endblock %}
