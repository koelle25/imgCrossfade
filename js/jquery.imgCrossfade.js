(function ( $ ) {
	
	$.fn.imgCrossfade = function( options ) {
		
		function injectStyles() {
			var styles =
"<style>\
	.cf-container { position: relative; }\n\
	.cf-container img.cf {\n\
		position: absolute;\n\
		top: 0;\n\
		left: 0;\n\
		z-index: 1;\n\
		max-width: 100%;\n\
		max-height: 100%;\n\
		display: block;\n\
	}\n\
	.cf-container img.cf.cf-base {\n\
		position: static;\n\
		z-index: -1;\n\
		visibility: hidden;\n\
	}\n\
	.cf-container img.cf.cf-active {\n\
		z-index: 3;\n\
	}\n\
</style>";
		$('head').append(styles);
		}
		
		var settings = $.extend({
			fading: 'medium',
			interval: 7000
		}, options);
		
		settings.fading = ( $.isNumeric(settings.fading) ? settings.fading : settings.fading == 'fast' ? 750 : settings.fading == 'slow' ? 2500 : 1500 );
		if ( settings.interval < settings.fading ) settings.interval = settings.fading;
		
		injectStyles();
		
		return this.each(function() {
			var cycler = $(this);
			cycler.addClass('cf-container');
			cycler.find('img.cf:first').clone().prependTo(this).addClass('cf-base');
			cycler.find('img.cf:nth-child(2)').addClass('cf-active');

			window.setInterval(function() {
				var active = cycler.find('.cf-active');
				var next = (active.next(':not(.cf-base)').length > 0 ? active.next(':not(.cf-base)') : cycler.find('img.cf:not(.cf-base)').first());
				next.css('z-index', 2); // move the next image up the pile
				active.fadeOut(settings.fading, function() { // fade out the top image
					active.css('z-index', 1).show().removeClass('cf-active'); //reset the z-index and unhide the image
					next.css('z-index', 3).addClass('cf-active'); // make the next image the top one
				});
			}, settings.interval);
		});
	}
	
	$.fn.bgimgCrossfade = function( options ) {
		
		function injectStyles( fading ) {
			
			var styles =
"<style>\n\
	.cf-bg-container {\n\
		-webkit-transition: background-image " + fading + "ms ease-in;\n\
		-moz-transition: background-image " + fading + "ms ease-in;\n\
		-o-transition: background-image " + fading + "ms ease-in;\n\
		transition: background-image " + fading + "ms ease-in;\n\
	}\n\
	.cf-bg-container img.cf-bg {\n\
		display: none;\n\
	}\n\
</style>";
			$('head').append(styles);
		}
		
		var settings = $.extend({
			fading: 'medium',
			interval: 7000
		}, options);
		
		settings.fading = ( $.isNumeric(settings.fading) ? settings.fading : settings.fading == 'fast' ? 750 : settings.fading == 'slow' ? 2500 : 1500 );
		if ( settings.interval < settings.fading ) settings.interval = settings.fading;
		
		injectStyles( settings.fading );
		
		return this.each(function() {
			var cycler = $(this);
			cycler.addClass('cf-bg-container');
			cycler.find('img.cf-bg:first').addClass('cf-active');

			window.setInterval(function() {
				var active = cycler.find('.cf-active');
				var next = (active.next('img.cf-bg').length > 0 ? active.next('img.cf-bg') : cycler.find('img.cf-bg').first());
				var src = 'url(' + next.prop('src') + ')';
				cycler.css('background-image', src); // set the next image as background-image
				active.removeClass('cf-active');
				next.addClass('cf-active');
			}, settings.interval);
		});
	}
	
}( jQuery ));