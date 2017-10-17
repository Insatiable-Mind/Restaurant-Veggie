/*** HEADER ***/
/* Adding and removing active class for nav links */
$('.top-header__navmenu a').on('click', function(e){
  $('.top-header__navmenu a').removeClass('active');
  $(this).addClass('active');
});


/**
 * Changing the top nav bar presentation
 * (function code is not written by myself, I've just changed it slightly
 * for this site)
 */
let header = '.top-header__navmenu-row';
let headerTop = $(header).offset().top;
let headerEdge = headerTop + 30;

$(window).scroll(function(){
  if ($(window).scrollTop() > headerTop) {
    if ($(window).scrollTop() > headerEdge) {
      $(header).css({background:'#f7f7f8'});
      $('.top-header__navmenu').css({paddingTop: '1rem', paddingBottom: '.5rem'});
    } else {
      $('.top-header__navmenu').css({paddingTop: '5.5rem', paddingBottom: '0'});
    }
  } else {
    $(header).css({background:'none'});
  }
});

/*
 * Smooth scrolling to sections of the site from the top menu
 * (function smoothScroll code is not written by myself, I've just changed it slightly
 * for this site)
 */
smoothScroll('#home');
smoothScroll('#specials');
smoothScroll('#about');
smoothScroll('#menu');
smoothScroll('#contact');

function smoothScroll(target) {
  $('a[href^="' + target + '"]').bind('click.smoothscroll', function (e) {
   e.preventDefault();
  let target = this.hash,
   $target = $(target);
  $('html, body').stop().animate({
   'scrollTop': $target.offset().top
   }, 1000, 'swing', function () {
   window.location.hash = target;
   });
});
}


/*** MENU ***/
/* Adding and removing active class for nav links */
$('.menu__list a').on('click', function(e){
  e.preventDefault();
  $('.menu__list a').removeClass('active');
  $(this).addClass('active');
});

let navItem = '.menu__nav-item_';
let starters = 'starters';
let mainDishes = 'main-dishes';
let desserts = 'desserts';
let drinks = 'drinks';

$(navItem + starters).on('click', function() {
  showMenuItem(starters);
});
$(navItem + mainDishes).on('click', function() {
  showMenuItem(mainDishes);
});
$(navItem + desserts).on('click', function() {
  showMenuItem(desserts);
});
$(navItem + drinks).on('click', function() {
  showMenuItem(drinks);
});

function showMenuItem(item) {
  let menuSection = 'menu__section_';
  let menuSections = $('.menu__section');
  for (let i = 0; i < menuSections.length; i += 1) {
    $(menuSections[i]).removeClass(menuSection + 'active');
  }
  $('.' + menuSection + item).addClass(menuSection + 'active');
}


/*** FORM ***/
/* Preventing default behavior for submit button in form */
$('.contact__form').on('submit', function(e){
  e.preventDefault();
});
