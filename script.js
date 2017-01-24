'use strict';
console.log('JS connected');

$(() => {
  // set landing page to height of window
  const windowHeight = $(window).height();
  $('.land').css('height', windowHeight - 50);
  $('#scroll-div').css('padding-top', windowHeight - 140);

  // after name and title come in, header will slide in from top
  const header = $('.header');
  setTimeout(() => {
    header[0].classList.add('slideIn');
  }, 1000);

  // when header is clicked, page will scroll back to the top
  header.click(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  const github = $('#github-logo');
  const email = $('#email-logo');
  const linkedIn = $('#linked-in');
  const scroll = $('#scroll-div');
  const scrollIcon = $('#scroll');

  // Icons will fadein up one by one
  setTimeout(() => {
    email.addClass('animated2 fadeInUp');
  }, 1200);
  setTimeout(() => {
    github.addClass('animated2 fadeInUp');
  }, 1400);
  setTimeout(() => {
    linkedIn.addClass('animated2 fadeInUp');
  }, 1600);
  setTimeout(() => {
    scroll.addClass('animated fadeInUpScroll');
  }, 2000);
  setTimeout(() => {
    scrollIcon.addClass('animated infinite bounce')
  }, 3000);

  // add animations to icons on mouseenter
  email.on('mouseenter', function() {
    email.css({
      'opacity': '0.6',
      'transform': 'none'
    });
    email.removeClass('animated2 fadeInUp');
    email.addClass('animated rubberBand')
  })
  email.on('mouseout', function() {
    email.removeClass('animated');
    email.removeClass('rubberBand')
  })

  github.on('mouseenter', function() {
    github.css({
      'opacity': '0.6',
      'transform': 'none'
    });
    github.removeClass('animated2 fadeInUp');
    github.addClass('animated bounce');
  })
  github.on('mouseout', function() {
    github.removeClass('animated');
    github.removeClass('bounce')
  })

  linkedIn.on('mouseenter', function() {
    linkedIn.css({
      'opacity': '0.6',
      'transform': 'none'
    });
    linkedIn.removeClass('animated2 fadeInUp');
    linkedIn.addClass('animated jello')
  })
  linkedIn.on('mouseout', function() {
    linkedIn.removeClass('animated');
    linkedIn.removeClass('jello')
  })

  // Init ScrollMagic
  const controller = new ScrollMagic.Controller();

  // build a new scence to fade out landing info
  const landingFadeOut =  new ScrollMagic.Scene({
    triggerElement: '.icons',
    triggerHook: 0.2
  })
  .setClassToggle('.land', 'fade-out')
  .addTo(controller);

  // build a new scene to fade in about me
  const aboutMeFade = new ScrollMagic.Scene({
    triggerElement: '.aboutme p',
    duration: '60%',
    triggerHook: 0.8
  })
  .setClassToggle('.aboutme', 'fade-in')
  .addTo(controller);

  // parallax
  // const parallaxTl = new TimelineMax();
  // parallaxTl
  //   .from('#content1', 0.5, {autoAlpha: 0, ease: Power0.easeNone}, 0.5)
  //   .from('#image1', 2, {y: '-50%', ease: Power0.easeNone}, 0);

  $('.parallax').each(function() {
    const slideParallaxScence = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(TweenMax.from(this.children[1], 2, {y: '-50%', ease: Power0.easeNone}, 0))
    .addTo(controller);
  })

  // loop from each project-info element and create a scene for each container
  $('.project-info').each(function() {
    const projectsFadeIn = new ScrollMagic.Scene({
      triggerElement: this
    })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
  });

  // Code attributed to Wes Bos' 30 Days of JS Tutorials Day 13
  // function debounce(func, wait = 10, immediate = true) {
  //   var timeout;
  //   return function() {
  //     var context = this, args = arguments;
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  // when page is scrolled down, landing div and about me will gradually fade away to transparent
  // function fadeOnScroll() {
  //   const aboutme = $('.aboutme');
  //   const scrollY = window.scrollY;
  //   const windowHeight = window.innerHeight/1.4;
  //   const aboutmeOffset = aboutme.offset().top;

  //   let opacityLanding = 0.95 - (scrollY / windowHeight);
  //   // let opacityAboutme = Math.round(((scrollY - aboutmeOffset) / windowHeight));

  //   // console.log(opacityAboutme)
  //   $('.land').css('opacity', opacityLanding);
  //   // if (scrollY >= aboutmeOffset) {
  //   //   let opacityAboutme =
  //   // }
  // }

  // $(window).scroll(debounce(fadeOnScroll));


})

