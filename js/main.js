const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: "coverflow",
   
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
  });

  
  
  const gallary = new Swiper('.gallary', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  
    navigation: {
      nextEl: '.btn-next"',
      prevEl: '.btn-prev',
    },
  });