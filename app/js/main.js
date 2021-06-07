$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });


  $('.productlist1__filter-btn').on('click', function () {
    $('.productlist1__filters').slideToggle();
  });


  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });



  $('.product-one__item-num').styler();

    $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false

  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 881,
        settings: {
          draggable: true,
        }
      }
    ]
  });

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

  $('.related-products__items').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    dots: false,
    arrows: true,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000
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

  $(".product-one__item-star").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true
  });

  
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

});