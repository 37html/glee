$(function () {

  $('.productlist1-content__filter-btn').on('click', function () {
    $('.productlist1-content__filter-btn').removeClass('productlist1-content__filter-btn--active');
    $(this).addClass('productlist1-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.productlist1-content__item').addClass('productlist1-content__item--list');
  })

  $('.button-grid').on('click', function () {
    $('.productlist1-content__item').removeClass('productlist1-content__item--list');
  })




  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true
  });

  $(".productlist1-content__star").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true
  });


});