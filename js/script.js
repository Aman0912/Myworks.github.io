$(document).ready(function(){


$(".chart").circlechart({


}
);

$(".team-profile").owlCarousel({

"items":3,
"itemsDesktop":[991,3],
"autoPlay":true,



});

var mixer= mixitup(".contained")



$(window).scroll(function(){


$("nav").toggleClass("scrolled",$(this).scrollTop()>20);

} );

} );
