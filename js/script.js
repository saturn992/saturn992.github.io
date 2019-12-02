$(document).ready(function(){
    $('.catalog__carousel').slick({
        slidesToShow: 1,
        // infinite: false,
        autoplaySpeed: 2000,
        dots: true,
        draggable: true,
        prevArrow: '<button type="button" class="slick-prev"><img  data-src="img/left.png" src="img/left.png" ></button>',   
        nextArrow: '<button type="button" class="slick-next"><img  data-src="img/right.png" src="img/right.png" ></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
               }
            }
        ]
    });
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('div.tabs')
        .find('div.tabs__content')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
    });
    $( "#accordion" ).accordion({
      collapsible: true
      });
      //планое прокручивание якоря на сайте
      $("#menu__main").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
          verticalFit: false
      }
    });
    // hamburger menu
    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.header__menu-list'),
      menuItem = document.querySelectorAll('.header__menu-item'),
      hamburger = document.querySelector('.hamburger');
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('menu_active');
          })
      })
  })
      const images = document.querySelectorAll('img');
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }
  
    // youtube video, lazy load + poster
    $(function() { 
      var videos  = $(".video");
  
          videos.on("click", function(){
              var elm = $(this),
                  conts   = elm.contents(),
                  le      = conts.length,
                  ifr     = null;
  
              for(var i = 0; i<le; i++){
                if(conts[i].nodeType == 8) ifr = conts[i].textContent;
              }
  
              elm.addClass("player").html(ifr);
              elm.off("click");
          });
      }); 
      // yandex-map
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1800) {
            $('.map__yandex').fadeIn();
        } 
        // else {
        //     $('.map__yandex').fadeOut();
        //   }
    });
  });

  
