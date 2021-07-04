var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

$(document).ready(function(){
  $(".slider").owlCarousel({
   items: 7,
   loop: true,

  });
});

$(window).scroll(function(){
  if($(this).scrollTop() > 150)
  {
    $(".scrollup").show()
  }
  else
  {
    $("scrollup").hide()
  }
})