const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: "flip",
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 1000,
    // }
  });