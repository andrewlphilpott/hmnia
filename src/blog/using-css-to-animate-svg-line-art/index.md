{% extends '../../layouts/_post.twig' %}

{% set title = 'Using CSS to Animate SVG Line Art' %}
{% set metaTitle = 'Using CSS to Animate SVG Line Art 💫 Andrew Philpott' %}
{% set date = '04/14/14' %}
{% set excerpt = 'Turns out, animating inline SVG Line Art with CSS is super easy. Chris Coyier has a great explanation of how it works over on CSS Tricks.' %}

{# In Sublime, insert current date with fn+f5, fn+x #}

{% block body %}

<style type="text/css">
	#bottom-line,#top-line{stroke-dasharray:250;stroke-dashoffset:0}#bottom-line,#inside-border,#outside-border,#speaker,#top-line{stroke-dashoffset:0}svg{display:block;height:300px;margin:0 auto 1.625em;width:auto}#outside-border{stroke-dasharray:1300;-moz-animation:outside-border 3.5s linear;-webkit-animation:outside-border 3.5s linear;animation:outside-border 3.5s linear}@-moz-keyframes outside-border{from{stroke-dashoffset:1300}to{stroke-dashoffset:0}}@-webkit-keyframes outside-border{from{stroke-dashoffset:1300}to{stroke-dashoffset:0}}@keyframes outside-border{from{stroke-dashoffset:1300}to{stroke-dashoffset:0}}#inside-border{stroke-dasharray:1240;-moz-animation:inside-border 3s linear;-webkit-animation:inside-border 3s linear;animation:inside-border 3s linear}@-moz-keyframes inside-border{from{stroke-dashoffset:1240}to{stroke-dashoffset:0}}@-webkit-keyframes inside-border{from{stroke-dashoffset:1240}to{stroke-dashoffset:0}}@keyframes inside-border{from{stroke-dashoffset:1240}to{stroke-dashoffset:0}}#top-line{-moz-animation:border-lines 1s linear;-webkit-animation:border-lines 1s linear;animation:border-lines 1s linear}#bottom-line{-moz-animation:border-lines 1.5s linear;-webkit-animation:border-lines 1.5s linear;animation:border-lines 1.5s linear}@-moz-keyframes border-lines{from{stroke-dashoffset:250}to{stroke-dashoffset:0}}@-webkit-keyframes border-lines{from{stroke-dashoffset:250}to{stroke-dashoffset:0}}@keyframes border-lines{from{stroke-dashoffset:250}to{stroke-dashoffset:0}}#speaker{stroke-dasharray:100;-moz-animation:speaker 2s linear;-webkit-animation:speaker 2s linear;animation:speaker 2s linear}@-moz-keyframes speaker{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}@-webkit-keyframes speaker{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}@keyframes speaker{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}#button-inside,#button-outside{stroke-dasharray:80;stroke-dashoffset:0}#button-outside{-moz-animation:button-outside 2s linear;-webkit-animation:button-outside 2s linear;animation:button-outside 2s linear}#button-inside{-moz-animation:button-outside 1.25s linear;-webkit-animation:button-outside 1.25s linear;animation:button-outside 1.25s linear}@-moz-keyframes button-outside{from{stroke-dashoffset:80}to{stroke-dashoffset:0}}@-webkit-keyframes button-outside{from{stroke-dashoffset:80}to{stroke-dashoffset:0}}@keyframes button-outside{from{stroke-dashoffset:80}to{stroke-dashoffset:0}}
</style>

{% markdown %}
<svg width="239px" height="426px" viewBox="0 0 239 426" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="not-iphone" sketch:type="MSLayerGroup" transform="translate(1.000000, 1.000000)">
            <rect id="outside-border" stroke="#192934" x="4" y="4" width="233" height="420" rx="20"></rect>
            <rect id="inside-border" stroke="#192934" x="9" y="9" width="223" height="410" rx="16"></rect>
            <path id="top-line" stroke="#192934" d="M9.5625,50.0625 L231.841103,50.0625"></path>
            <path id="bottom-line" stroke="#192934" d="M9.5625,377.0625 L231.841103,377.0625"></path>
            <rect id="speaker" stroke="#192934" x="101" y="24" width="40" height="10" rx="5"></rect>
            <circle id="button-outside" stroke="#192934" cx="121" cy="398" r="12"></circle>
            <circle id="button-inside" stroke="#192934" cx="121" cy="398" r="10"></circle>
        </g>
    </g>
</svg>

Turns out, animating inline SVG Line Art with CSS is super easy. Chris Coyier has a [great explanation of how it works](http://css-tricks.com/svg-line-animation-works/) over on CSS Tricks. It's such a simple way to add a bit of visual flare to a page, so I think it could come in pretty handy.

Basically, all you need to do is apply `stroke-dasharray` to an SVG element which gives it a dashed stroke and then use `stroke-dashoffset` to offset the stroke dashes. Offsetting the dashes essentially moves them, and if you use a large enough `stroke-dashoffset` you can completely remove the dashes from view. Then it’s just a matter of animating the `stroke-dashoffset` back to 0.

I had some fun playing around with the technique this morning and made an animation of a very ambiguous smartphone illustration. In my example, I used a keyframe animation, but you could just as easily use a CSS transition if you wanted to apply the animation to a button hover or something like that.

SVG support is [pretty good](http://caniuse.com/#feat=svg), but keyframe animations aren’t supported by older versions of IE (9 and down). If you’re going to use this technique, I would only recommend using it to add a bit of non-essential life to a page and make sure you have an un-animated fallback or something for older browsers.
{% endmarkdown %}

{% endblock %}