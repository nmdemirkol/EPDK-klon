

/** slider **/

$(document).ready(function () {

    $("#accordian a").click(function () {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function () {
            if (++count == closest_ul.find("ul").length)
                parallel_active_links.removeClass("active");
        });

        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    })


    $("#accordian2 a").click(function () {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function () {
            if (++count == closest_ul.find("ul").length)
                parallel_active_links.removeClass("active");
        });

        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    })

    //sss
    var acc = document.getElementsByClassName("accordionsss");
    var z;

    for (z = 0; z < acc.length; z++) {
        acc[z].addEventListener("click", function () {
            this.classList.toggle("activesss");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }





    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen2").click();

    var owl = $('#owl-carousel1');
    owl.owlCarousel({
        margin: 10,
        nav: true, 
        loop: true,
        autoplay:true,
        autoplayTimeout:12000,
        //autoplayHoverPause:true,
        navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }

        }
    })
    var owl = $('#owl-carousel1');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-carousel h4').removeClass('animated').hide();
        $('.owl-carousel p').removeClass('animated').hide();
        $('.owl-carousel .boxed-btn').removeClass('animated').hide();
    })

    owl.on('translated.owl.carousel', function (event) {
        $('.owl-carousel h4').addClass('animated fadeInUp').show();
        $('.owl-carousel p').addClass('animated fadeInDown').show();
        $('.owl-carousel .boxed-btn').addClass('animated fadeInDown').show();
    })

    var owl2 = $('#owl-carousel2');
    owl2.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 12000,
        //autoplayHoverPause:true,
        navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }

        }
    })

  




})


$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow'),
    nextArrow: $('.bottom-arrow'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]

});



$('.slick-carousel2').slick({
    infinite: true,
    slidesToShow:6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow2'),
    nextArrow: $('.bottom-arrow2'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]

});

$('.slick-carousel3').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow3'),
    nextArrow: $('.bottom-arrow3'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]

});

$('.slick-carousel4').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow4'),
    nextArrow: $('.bottom-arrow4'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]

});


$('.slick-carousel5').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow5'),
    nextArrow: $('.bottom-arrow5'),
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]
});


$('.slick-carousel6').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow6'),
    nextArrow: $('.bottom-arrow6'),
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]
});


$('.slick-carousel7').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow7'),
    nextArrow: $('.bottom-arrow7'),
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]
});


$('.slick-carousel8').slick({
    infinite: true,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow8'),
    nextArrow: $('.bottom-arrow8'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
}
    ]

});


$('.slick-carousel9').slick({
    infinite: true,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow9'),
    nextArrow: $('.bottom-arrow9'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow:2,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
}
    ]

});
$('.slick-carousel10').slick({
    infinite: true,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow10'),
    nextArrow: $('.bottom-arrow10'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
    }
    ]


});

$('.slick-carousel11').slick({
    infinite: true,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow11'),
    nextArrow: $('.bottom-arrow11'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
}
    ]

});

$('.slick-carousel12').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow12'),
    nextArrow: $('.bottom-arrow12'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow:3,
    }
}
    ]

});

$('.slick-carousel13').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow13'),
    nextArrow: $('.bottom-arrow13'),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
{
    breakpoint: 768,
    settings: {
        slidesToShow: 4,
    }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 3,
    }
}
    ]

});

$('.slick-carousel14').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow14'),
    nextArrow: $('.bottom-arrow14'),
    autoplay: true,
    autoplaySpeed: 1500,


});

$('.slick-carousel15').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow15'),
    nextArrow: $('.bottom-arrow15'),
    autoplay: true,
    autoplaySpeed: 1500,


});

$('.slick-carousel16').slick({
    infinite: true,
    slidesToShow: 6,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    prevArrow: $('.top-arrow16'),
    nextArrow: $('.bottom-arrow16'),
    autoplay: true,
    autoplaySpeed: 1500,


});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function openCity2(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}










function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

particlesJS(
  "dots", {
      "particles": {
          "number": {
              "value": 180
          },
          "color": {
              "value": "#eee"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5,
              "random": true,
              "anim": {
                  "enable": false
              }
          },
          "size": {
              "value": 15,
              "random": true,
              "anim": {
                  "enable": false,
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "enable": true,
              "speed": 4,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out"
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": false
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "push": {
                  "particles_nb": 10
              }
          }
      },
      "retina_detect": true
  });



