$(function () {

   // TABS 

   $('.products__tabs-top__item').on('click', function (e) {
      e.preventDefault();
      $('.products__tabs-top__item').removeClass('products__tabs-top__item--active');
      $(this).addClass('products__tabs-top__item--active');

      $('.products__tabs-content__item').removeClass('products__tabs-content__item--active');
      $($(this).attr('href')).addClass('products__tabs-content__item--active');
   });

   // SLIDER

   $('.products__slide-thumb').slick({
      asNavFor: '.products__slide-big',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
   });
   $('.products__slide-big').slick({
      asNavFor: '.products__slide-thumb',
      draggable: false,
      arrows: false,
      fade: true
   });

   // GRID-LINE

   $('.shop__content-filter__btn').on('click', function () {
      $('.shop__content-filter__btn').removeClass('shop__content-filter__btn--active');
      $(this).addClass('shop__content-filter__btn--active');
   });

   $('.button-list').on('click', function () {
      $('.products__item').addClass('products__item--list')
   });

   $('.button-grid').on('click', function () {
      $('.products__item').removeClass('products__item--list')
   });

   // SELECTMENU

   $('.select-style, .products__filter-num').styler();

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

   $('.blog__page-slider').slick({
      autoplay: false,
      dots: false,
      arrows: true,
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 4.969 9.97"><path id="angle_left" class="cls-1" d="M973.64,3013.16a0.745,0.745,0,0,1,.178-0.49l3.741-4.28a0.548,0.548,0,0,1,.863,0,0.762,0.762,0,0,1,0,.98l-3.311,3.79,3.31,3.79a0.776,0.776,0,0,1,0,.99,0.56,0.56,0,0,1-.862,0l-3.741-4.28a0.772,0.772,0,0,1-.178-0.5h0Zm0,0" transform="translate(-973.625 -3008.19)" /></svg ></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 5 10"><path id="angle_right" class="cls-1" d="M1347,3013.18a0.816,0.816,0,0,0-.17-0.5l-3.77-4.29a0.556,0.556,0,0,0-.87,0,0.771,0.771,0,0,0,0,.99l3.33,3.8-3.33,3.8a0.771,0.771,0,0,0,0,.99,0.568,0.568,0,0,0,.87,0l3.77-4.3a0.715,0.715,0,0,0,.17-0.49h0Zm0,0" transform="translate(-1342 -3008.19)" /></svg ></button>'
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