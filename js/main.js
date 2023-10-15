const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: "slider",
    // initialSlide: 2,
   
    // freeMode: true,
    slidesPerView: 2,
    centeredSlides: true,
  
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