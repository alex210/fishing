$(function() {

	$('#my-menu').mmenu({
		navbar: {
			title: '<img class="nav-bar" src="../img/logo.svg"></img>'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('#my-menu a, #footer-menu a').mPageScroll2id();
	$("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset:50
	});

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServiceMax();
			carouselServiceHeight();
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			800: {
				items: 3
			},
			1100: {
				items: 4
			}
		}	
	});

	var maxHeight = 0;
	function carouselServiceMax() {
		$('.carousel-services-item').each(function() {
			var heightImg = $(this).find('.carousel-services-image').outerHeight();
			if (maxHeight < heightImg) {
				maxHeight = heightImg
			}
		})
	};

	function carouselServiceHeight() {
		$('.carousel-services-item').each(function() {
			var heightImg = $(this).find('.carousel-services-image').outerHeight();
			if (maxHeight == heightImg) {
				$(this).find('.carousel-services-content').css('height', 50);
			} else {
				$(this).find('.carousel-services-content').css('height', (maxHeight - heightImg + 50));
			}
		})
	};

	window.onresize = function() {
		var maxHeight = 0;
		setTimeout(function() {
			carouselServiceMax();
			carouselServiceHeight();
		}, 50);
	};

	$('section .h2').each(function() {
		$(this).html($(this).html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$(window).scroll(function() {
		if( $(this).scrollTop() > $(this).height() ) {
			$('.top').addClass('active');	
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('.callback').submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
      url: "mail.php", //Change
      data: $(this).serialize()
    }).done(function() {
    	$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
    	setTimeout(function() {
    		$(th).find('.success').removeClass('active').fadeOut();
    		$(th).trigger("reset");
    	}, 3000);
    });
    return false;
  });

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});

	$(window).on('load', function() {
		$('.preloader').delay(1000).fadeOut('slow');
	});

});