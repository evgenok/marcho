$(function () {

   // GRID-LINE

   $('.shop__content-filter__btn').on('click', function () {
      $('.shop__content-filter__btn').removeClass('shop__content-filter__btn--active');
      $(this).addClass('shop__content-filter__btn--active');
   });

   $('.button-list').on('click', function(){
      $('.products__item').addClass('products__item--list')
   });

   $('.button-grid').on('click', function(){
      $('.products__item').removeClass('products__item--list')
   });

   // SELECTMENU

   $('.select-style').styler();

   // RANGESLIDER

   $(".filter__price-input").ionRangeSlider({
      type: "double",
      min: 0,
      max: 999,
      from: 200,
      to: 800,
      grid: false,
      onStart: function (data) {
         $('.filter__price-from').text(data.from);
         $('.filter__price-to').text(data.to);
      },
      onChange: function (data) {
         $('.filter__price-from').text(data.from);
         $('.filter__price-to').text(data.to);
      },
   });

   // SLIDER

   $('.top__slider-inner').slick({
      autoplay: true,
      dots: true,
      arrows: false,
      autoplaySpeed: 2000
   });

   // RATING

   $(".star").rateYo({
      starWidth: "17px",
      ratedFill: "#ffc35b",
      normalFill: "#ccccce",
      readOnly: true
   });

   // TIMER

   function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function initializeClock(id, endtime) {
      var clock = document.querySelector('.promo__clock');
      var daysSpan = clock.querySelector('.promo__days');
      var hoursSpan = clock.querySelector('.promo__hours');
      var minutesSpan = clock.querySelector('.promo__minutes');
      var secondsSpan = clock.querySelector('.promo__seconds');

      function updateClock() {
         var t = getTimeRemaining(endtime);

         daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
            clearInterval(timeinterval);
         }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
   }

   // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
   // changed date to Nov 8, 2016
   var deadline = $('.promo__clock').attr('data-time');
   initializeClock('promo__clock', deadline);

})  