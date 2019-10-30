if (window.frameCacheVars !== undefined)
    BX.addCustomEvent("onFrameDataReceived" , (json) => {
    	loadScripts();
    });
// else if (BX)
//     BX.ready(() => {
//     	loadScripts();
//     })
else
	$(() => {
		loadScripts();
	})

var log = (str) => {
	console.log(str)
},
loadScripts = () => {

	var top = 0;

	$("body").on("click", ".fancybox", function(){
        top = $(window).scrollTop();
    });

	$(".fancybox").fancybox({

		beforeShow (){
			$("body").addClass("fancy-active")
		},
		afterClose (){
			$("body").removeClass("fancy-active")
			if ($(window).width() < 667)
				window.scrollTo(0, top);

		}

	});


	$(".main-slider").slick({
		slide: ".main-slider__slide",
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 400,
		autoplay: true,
		autoplaySpeed: 7000,
		fade: true,
		cssEase: 'linear'
	});

	



	if($(window).width() > 750){
		$(window).on("load", function() {
			setTimeout(function(){
				$("body").removeClass("loading");
			}, 3000);
			

			// Cookies.set('LOADING-SHOWED', true, { expires: 7 });
		});

		
	}

	$(window).resize(function(){
	  console.log(1);
	});

	setTimeout(function(){
			$(".mobile-menu").addClass("visual");
		}, 500);


	if($(window).width() < 750) {
		$('.main-block__menu .main-block__menu--right').click(function(){
			var $this = $(this);
			$this.closest('.main-block__menu').find('.main-block__menu--left').slideToggle("slow");
		});

		$('.menu__photo-left .photo-left').click(function(){
			var $this = $(this);
			$this.closest('.menu__photo-left').find('.menu__list').slideToggle("slow");
		});

		$('.menu__photo-right .photo-right').click(function(){
			var $this = $(this);
			$this.closest('.menu__photo-right').find('.menu__list, .info-dop').slideToggle("slow");
		});
		$('#menyu-napitkov .wr-img').click(function(){
			var $this = $(this);
			$this.closest('#menyu-napitkov').find('.menu-title, .menu__list, .info-dop').slideToggle("slow");
		});


		var zakuski = $('#osnovnye-blyuda .menu__price:nth-child(3)').clone();
		$('.menu .wrapper').append('<div class="js__zakuski">\
				<div class="menu-title">Закуски</div>\
			</div>');
		$('.menu .js__zakuski').prepend('<div class="js__zakuski__img">\
				<img src="../local/templates/polza2017/img/zakuski.jpg">\
			</div>');
		$('.menu .js__zakuski').append(zakuski);

		$('.js__zakuski__img').click(function(){
			var $this = $(this);
			$this.closest('.js__zakuski').find('.menu-title, .menu__price').slideToggle("slow");
		});

	}



	




	if($(window).width() < 768){
		$(".index-video").css("display", "none");
		$(".main-slider__cont").css("display", "block");
		// $("body .loading").css("display", "none");
	}

	$('.burger').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass("mobile-menu--open");

		// setTimeout(function(){
		// 	$('body').toggleClass('fixed')
		// }, 500)

		
	});

	if($(window).width() < 750) {
		$(".text-page table").wrap('<div class="table-wrap"></div>');
	}
	
	
	if($('body').find('index-video')){
		var videoEl = document.getElementsByTagName('video')[0];

		setTimeout(function(){
			videoEl.play();
		}, 3000);
	}



	var scrollTop = 0;

	$("body").on("click", ".burger", function(){
		scrollTop = $(window).scrollTop();
	});

	$(window).on("load scroll touchmove", function(){
		// if ($(window).scrollTop() > 800){
		// 	$(".scroll-top").fadeIn(300);
		// }else{
		// 	$(".scroll-top").fadeOut(300);
		// };

		if($(window).width() < 660) {




			// if($(window).scrollTop()>0 && !$("body").hasClass('mobile-menu--open')){
			// 	$('.mobile-menu').addClass('fixed');
			// }else {
			// 	$('.mobile-menu').removeClass('fixed');
			// }
		}

		
	});

}