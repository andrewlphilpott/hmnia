;(function( window, document ) {
	window.HMNIA = window.HMNIA || {};

	HMNIA.init = function() {

		// Initialize Utility and Common functions
		HMNIA.common.init();

		// Add "data-page" to body tag to trigger page-specific function
		var page = document.body.getAttribute( "data-page" );

		if (HMNIA[page] && typeof HMNIA[page]["init"] === "function") {
			HMNIA[page]["init"]();
		}
	};

	/*
	 * Common/Site-Wide
	 */
	HMNIA.common = {
		init: function() {
			var _this = this;;

			// Get banner elements
			var bannerBg = document.querySelector('.banner_bg');
			var bannerContent = document.querySelector('.banner_content');

			// Get "paginated" posts
			var posts = document.querySelectorAll('.posts > li');

			// Get collage images
			var collage01 = document.querySelector('.collage_01');
			var collage02 = document.querySelector('.collage_02');
			var collage03 = document.querySelector('.collage_03');

			// Scroll handler
			scrollInt = setInterval(function(){
				var doc = document.documentElement;
				var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

				// Banner scroll effects
				bannerBg.style.transform = 'translateY(' + Math.round(scrollTop / 3) + 'px)';
				// bannerContent.style.transform = 'translateY(' + Math.round(scrollTop / 6) + 'px)'

				// Show blog posts when they are in view
				for(i = 0; i < posts.length; i++) {
					if(inView(posts[i]) && !posts[i].classList.contains('visible')) {
						posts[i].className += ' visible';
					}
				}

				// Photo collage scroll effects
				collage01.style.transform = 'translateY(-' + Math.round(scrollTop / 3.5) + 'px)';
				collage02.style.transform = 'translateY(-' + Math.round(scrollTop / 3) + 'px)';
				collage03.style.transform = 'translateY(-' + Math.round(scrollTop / 4) + 'px)';
			}, 10);

			window.addEventListener('devicemotion', function(event) {
				var xShift = event.accelerationIncludingGravity.x;
				var yShift = event.accelerationIncludingGravity.y;

				bannerBg.style.marginLeft = xShift + 'px';
				bannerBg.style.marginTop = (yShift * -1) + 'px';
				bannerContent.style.transform = 'translateX(' + (xShift * -1) + 'px) translateY(' + yShift + 'px)';
				// bannerContent.style.textShadow = event.accelerationIncludingGravity.x+'px 1px 0 rgba(0, 0, 0, .1)';

				test.innerHTML = yShift;
				console.log(event.rotationRate);
			}, true);

			// Function to check if elements are in view
			function inView(el) {
				var rect = el.getBoundingClientRect();
				return (
					rect.top <= (window.innerHeight - 100 || document.documentElement.clientHeight)
				);
			}
		}
	};

	HMNIA.init();
})( window, document );
