
  AOS.init();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


    $(".pricing-box-inner ul").slimScroll({
        height: "220px",
        color: "#fa8100"
    }), 0 != $(".scroll").length && $(".scroll").slimScroll({
        height: "220px",
        size: "6px",
        color: "#ef3c82",
        alwaysVisible: !0,
        distance: "12px",
        railVisible: !0,
        railColor: " rgb(209, 0, 29)",
        railOpacity: 1,
        railBorderRadius: "0px",
        wheelStep: 10,
        disableFadeOut: !1
    });


    $(".pkg_list ul").slimScroll({height:"230px",color:"#ffb900"}),

$('.ct-carousel-inner').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    
    responsive: [
        {
        breakpoint: 1080,
        settings: {
            arrows: true,
            slidesToShow: 3
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: true,
            slidesToShow: 1
        }
        }
    ]

    });

    $('.ct-testimonial').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        
        responsive: [
            {
            breakpoint: 999,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
            },
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
            }
        ]
    
        });


        $('.package_slider .row').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            centerPadding: '0px',
            
            responsive: [
                {
                breakpoint: 999,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
                },
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
                }
            ]
        
            });


$('[data-targetit]').on('click', function(e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).fadeIn();
    $('.package_slider .row').slick('setPosition');
});        


const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


if($(window).width() <= 768){

    
    $('.counterlist').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
  
      });

      
    //   $('.porfolio-dv').not('.slick-initialized').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     arrows: false,
  
    //   });


  }


   // document.getElementById('vid').play();

  
