$(document).ready(function (){

    //  往上拉
   
    $(".top").click(function(e){
      e.preventDefault();
      $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
        scrollTop: 0,
    }, 100)
    })
  })
  $(document).ready(function() {
      $('.showmenu').on('click',  function(e) {
          e.preventDefault();
          $('.menu-list').toggleClass('active');
      });
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination"
    },
      /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      768: {
        slidesPerView: 4
      },
      // /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      // 768: {
      //   slidesPerView: 2
      // },
      //  更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1
      }
    },  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
     
  
    autoplay: {
      delay: 2500,
    //   自動輪播
      stopOnLastSlide:false,
      disableOnInteraction:false,
      pauseOnMouseEnter:true,
      reverseDirection:true,   
    },
    // speed:3000,
    
  });

// 2

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination"
  },
    /* 斷點設定 */
  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    768: {
      slidesPerView: 4
    },
    // /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    // 768: {
    //   slidesPerView: 2
    // },
    //  更小時都顯示 1 欄 */
    0: {
      slidesPerView: 1
    }
  },  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

     speed:3000,
     loop:true,
  autoplay: {
    delay:  50,
    waitForTransition:true,
    stopOnLastSlide:false,
    disableOnInteraction:	true,
    // pauseOnMouseEnter:true,  
    reverseDirection:false,   
  },
 
});

// $(".mySwiper2").mouseenter(function(){
//   swiper.stopAutoplay();
// });
// $(".mySwiper2").mouseleave(function(){
//   swiper.startAutoplay();
// });


  // 錨點

  //設計a href錨點來切換至區塊位置，但因為切換沒有滑動效果，所以需要加再上動畫滾動效果
$(document).ready(function () {
  //要執行回到最上方
  $('.backTop').on('click',function(){
     $("html,body").animate(
      {
        scrollTop:0 //回到第一個區塊
      },
      800
    );   
  })
  //其它連到對應區塊
  $("a").on("click", function (e) {
    var hrefLink = $(this).attr("href");
    // e.preventDefault(); 導致跳轉失敗的
    console.log(hrefLink);
    $("html,body").animate(
      {
        scrollTop: $(hrefLink).offset().top //直接到相對位置
      },
      800
    );
  });
});

// $(document).ready(function () {
//   $("a").on("click", function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash; //抓取網頁#錨點
//       console.log(hash);
//       $("html,body").animate(
//         {
//           scrollTop: $(hash).offset().top
//         },
//         800
//       );
//     }
//   });
// });



// $(document).ready(function() {
//   $('#toggle').click(function() {
//     $('#ulul').toggleClass('open');
//   });
// });

// 點首頁選單會消失
$(document).on('click', function() {
  var header = $(".header");
  if ( header.hasClass('is-open') ) {
      header.fadeOut();
      header.removeClass('is-open');
  }
});

$('.menu-toggle').on('click', function() {
  var header = $(".header");
  if ( !header.hasClass('is-open') ) {
      header.fadeIn();
      header.addClass('is-open');
  } else if ( header.hasClass('is-open') ) {
      header.fadeOut();
      header.removeClass('is-open');
  }
});

// chatbox
// 按鈕消失
// $(document).ready(function() {
//   $(".chat-bar-collapsible").click(function() {
//     $(".collapsible").delay(3000).hide(2000);
//   });
// });

$(document).ready(function (){

// 按鈕消失

      $('#chat-button').on('click',  function(e) {
       
      
          $('.content').show("scale",function(){
            $('.collapsible').hide()
          });
        
      });



  })


  $(document).ready(function (){

    // 按鈕消失
          $('.fa-minus').on('click',  function() {
       
        $('.content').hide(200);
        $('.collapsible').show('.content');
        $('.content').slideUp("scale");
       
    });
       
      })

  

      
$(document).ready(function (){

  // 按鈕消失
  
        $('#js-startbtn').on('click',  function(e) {

          $('#js-startbtn').on('click',function(){
            $('.modal').show('.is-hide');
          });
          $('.js-modal-close').on('click',function(){
            $('.is-hide').hide();
          });
        });
    })
  