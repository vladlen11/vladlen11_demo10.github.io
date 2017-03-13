$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// SLIDER

	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 100,
		slidesToShow: 1,
		adaptiveHeight: true
		// autoplay: true,
  // 		autoplaySpeed: 2000
	});
	// slider 2
	$(".product-slider").slick({

		autoplay: false,
		dots: true,
		arrows: false,
		customPaging : function(slider, i) {
	    	var thumb = $(slider.$slides[i]).data('thumb');
	    	return '<a><img src="'+thumb+'"></a>';
		},

		responsive: [{ 
			breakpoint: 500,
			settings: {
				dots: false,
				arrows: false,
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 2
			} 
		}]
	});
	// mixup
	$("#featured__grid").mixItUp();

	$(".featured li").click(function() {
		$(".featured li").removeClass("active");
		$(this).addClass("active");
	});

	$(".featured_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	// Mixitup 2
	$("#trending-products_grid").mixItUp();

	$(".controls li").click(function() {
		$(".controls li").removeClass("active");
		$(this).addClass("active");
	});


	$(".products_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	// POPUP
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	// NAV
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

});

