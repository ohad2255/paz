new Swiper('.main-gallery-container', {

	direction: 'horizontal',
	loop: true,
	speed: 1000,

	pagination: {
		el: '.main-pagination.swiper-pagination',
	},

	navigation: {
		nextEl: '.main-next.swiper-button-next',
		prevEl: '.main-prev.swiper-button-prev',
	},

})

new Swiper('#mishpatiot-slider', {

	direction: 'horizontal',
	loop: true,
	speed: 900,

	pagination: {
		el: '.fraction-pagination.swiper-pagination',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.swiper-button-prev.mishpatiot-prev',
		prevEl: '.swiper-button-next.mishpatiot-next',
	},
})

new Swiper('#logo-swiper', {
      slidesPerView: 5,
      spaceBetween: 10,

      pagination: {
        el: '.swiper-pagination.logos-pagination',
        clickable: true,
      },
      navigation: {
	      nextEl: '.swiper-button-next.logos-next',
	      prevEl: '.swiper-button-prev.logos-prev',
  	  },
	    breakpoints: {
		    1200: {
		      slidesPerView: 4,
		      spaceBetween: 20,
		    },

		    992: {
		      slidesPerView: 3,
		      spaceBetween: 20,
		    },

		    576: {
		      slidesPerView: 3,
		      spaceBetween: 20,
		    },
		}
})

$('.dropdown-toggle').dropdown();
$('.pazomat-mobile-menu-trigger.dropdown-toggle').dropdown();