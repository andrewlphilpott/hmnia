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

			var bannerBg = document.querySelector('.banner_bg');
			var bannerContent = document.querySelector('.banner_content');
			var test = document.querySelector('.test');

			scrollInt = setInterval(function(){
				var doc = document.documentElement;
				var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

				bannerBg.style.transform = 'translateY(' + Math.round(scrollTop / 3) + 'px)';
				// bannerContent.style.transform = 'translateY(' + Math.round(scrollTop / 6) + 'px)'
			}, 10);

			window.addEventListener('devicemotion', function(event) {
				var xShift = event.accelerationIncludingGravity.x;
				var yShift = event.accelerationIncludingGravity.y;

				bannerBg.style.marginLeft = (xShift * 3) + 'px';
				bannerBg.style.marginTop = (yShift * -3) + 'px';
				bannerContent.style.transform = 'translateX(' + (xShift * -1) + 'px) translateY(' + (yShift * 1) + 'px)';
				// bannerContent.style.textShadow = event.accelerationIncludingGravity.x+'px 1px 0 rgba(0, 0, 0, .1)';

				test.innerHTML = yShift;
				console.log(event.rotationRate);
			}, true);
		}
	};

	HMNIA.init();
})( window, document );
