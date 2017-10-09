javascript: (function(){
	var v = "1.10.2";

	var done = false;
	var script = document.createElement("script");
	script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
	script.onload = script.onreadystatechange = function(){
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
			initUnfixify();
		}
	};
	document.getElementsByTagName("head")[0].appendChild(script);

	function initUnfixify() {
		$('*').each(function() {
			if($(this).css('position') == 'fixed') {
				$(this).css('position', 'absolute');
			}
		});
	}
})();