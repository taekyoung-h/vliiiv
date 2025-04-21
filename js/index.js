// header 고정
$(window).on('scroll', function () {

  if ($(this).scrollTop() > 0 ) {
    $('header').addClass('on')
  } else {
    $('header').removeClass('on')
  }
});

 
  // top_nav
$('nav .gnb').on('mouseover', () => {
    $('.sub').stop().slideDown();
  });
  $('.sub').on('mouseleave', function () {
    $('.sub').stop().slideUp();
  })
  $('.header_top').on('mouseover', function () {
    $('.sub').stop().slideUp();
  })
 
  // top_swiper
  var mySwiper01 = new Swiper(".mySwiper01", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: 'on'
    },
    autoplay: {
      delay:5000,
    }
  });




  // mid_swiper
    var mySwiper02 = new Swiper(".mySwiper02", {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
        
      },

    });

    // video
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 4,
    direction: 'horizontal',
    /*  thumbs: {
     swiper: new Swiper('.gallery-thumbs'),
   }, */
   thumbs: {
    swiper: galleryThumbs,
  },

  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 5,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper_video_next',
      prevEl: '.swiper_video_prev',
    },
  });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


  // main - tap기능
     
  // 1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
  const tabMenus = document.querySelectorAll('.nav_area > li > a'),
        contents = document.querySelectorAll('.change');

// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
  tabMenus.forEach((menu, index) => {
  // 3. 탭 버튼에 클릭 이벤트를 준다.
  menu.addEventListener("click", (e) => {
    // 4. 버튼을 a 태그에 만들었기 때문에, 
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.
    e.preventDefault(); // a 
    
    // 5. 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    contents.forEach((content) => {
      // 6. 탭 내용 부분들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 7. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    tabMenus.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 9. 탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
    // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
    // active 클래스가 추가된다.
    tabMenus[index].classList.add("active");
    contents[index].classList.add("active");
  });
});         


//footer - top button
const $topbtn = document.querySelector('.go_top');

$('topbtn').on('click', function(){
  window.stop().scrollTo({top:0})
})


  AOS.init({
    delay: 400 
  });


    
