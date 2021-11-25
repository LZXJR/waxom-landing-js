$(document).ready(function() {

    /*Fixed Header*/

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let scrollPoss = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let headerH = header.innerHeight();


    checkScroll(scrollPos, introH);
    checkScrollm(scrollPos, headerH );
    
    
    
    $("#search__img").on("click", function() {

        $("#d1").toggleClass("d1--display");
   
  });
    

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();

            
        checkScroll(scrollPos, introH);
    });


    function checkScroll(scrollPos, introH) {
        if( scrollPos >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };



    /*Smoth Scroll*/

    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffSet = $(blockId).offset().top;

        
        nav.removeClass("show");

        console.log(blockOffSet);

        $("html, body").animate( {
            scrollTop: blockOffSet - 60
        }, 700);
        
    });


    /* Nav Toggle */

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })


    /* Slider:https://kenwheeler.github.io/slick/ */

    let slider = $("#introSlider");

    slider.slick( {
        
        infinite: true,
        fade: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        
        
    });

    /* Modal */

    let  modal = $("#modal__inner");
    let  modalC = $("#modal__inner-curs");
    let backpack = $("#backpack");

    backpack.on("click", function() {
        modal.fadeIn();
        modalC.addClass("disable");
    })


    
    let closed = $("#modal__closed");

    closed.on("click", function() {
        modal.fadeOut();
    });


    /* Slider Posts */


    let posts = $("#posts--slick");
    
        posts.slick( {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            
      });

      
      
  $(window).on('resize', function() { // запускаем при каждом ресайзе окна
    checkMedia2();
    checkMedia();

    
  });

  function checkMedia() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
      
        $('#posts--slick').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: false
            
          });

    }
  };

  function checkMedia2() {
    if (window.matchMedia('(max-width: 777px)').matches) {
      
        $('#posts--slick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
            
          });

    }
  };


  


  $(window).on("scroll", function() {
    let headerH  = header.innerHeight();
        scrollPoss = $(this).scrollTop();

        
    checkScrollm(scrollPoss, headerH );
});


function checkScrollm(scrollPoss, headerH ) {
    if( scrollPoss >= headerH  ) {
        $("#d1").removeClass("d1--display");
    };
};
  
  

});
      

      




