$(function(){
    $("nav .menu").on({
        mouseover:function(){
            $(".submenu",this).stop().slideDown();
        },
        mouseout:function(){
            $(".submenu",this).stop().slideUp();
        }
    });

    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1200,
      });
});

