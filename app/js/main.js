$(function () {
   $('.top__slider-inner').slick({
      autoplay: true,
      dots: true,
      arrows: false,
      autoplaySpeed: 2000
   });

   $(".star").rateYo({
      starWidth: "17px",
      ratedFill: "#ffc35b",
      normalFill: "#ccccce",
      readOnly: true
   });

})  