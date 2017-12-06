  new Swiper ('.main-gallery-container', {
   
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

  new Swiper ('#mishpatiot-slider', {
   
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

  new Swiper ('#logo-swiper', {
   
    direction: 'horizontal',
    loop: true,
    speed: 900,


    navigation: {
      nextEl: '.swiper-button-next.logos-next',
      prevEl: '.swiper-button-prev.logos-prev',
    },
  })
