;(function( window, document ) {
	window.HMNIA = window.HMNIA || {};

	HMNIA.init = function() {

		// Initialize Utility and Common functions
		HMNIA.util.init();
		HMNIA.common.init();

		// Add "data-page" to body tag to trigger page-specific function
		var page = document.body.getAttribute( "data-page" );

		if (HMNIA[page] && typeof HMNIA[page]["init"] === "function") {
			HMNIA[page]["init"]();
		}
	};

	/*
	 * Utility/Helper
	 */
	HMNIA.util = {
		init: function() {
			var _this = this;
		}
	};

	/*
	 * Common/Site-Wide
	 */
	HMNIA.common = {
		init: function() {
			var _this = this;

			scrollInt = setInterval(function(){
				var doc = document.documentElement;
				var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

				var banner = document.querySelector('.banner_bg');
				banner.style.transform = 'translateY(' + Math.round(scrollTop / 3) + 'px)'
			}, 10);
		}
	};

	/*
	 * Page-Specific
	 */
	HMNIA.home = {
		init: function() {
			var _this = this;
		}
	};

	HMNIA.init();
})( window, document );