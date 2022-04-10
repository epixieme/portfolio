/*
	Polaris by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/
let menuItem = document.querySelectorAll('#nav li')
menuItem.forEach(item=>item.addEventListener('click',addActive))

function addActive(event){
return event.target.classList.add('active')


}



(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:     [ '1081px',  '1280px' ],
			narrow:     [ '821px',   '1080px' ],
			narrower:   [ '737px',   '820px'  ],
			mobile:     [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -20,
			mode: 'fade',
			noOpenerFade: true
		});

	// Nav Panel.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);