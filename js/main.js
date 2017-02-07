new WOW().init();

console.log("%cHi there, thanks for looking further into my work.. give me a call and lets chat!",
"background-color: gainsboro;font-size: 15px; color: dodgerblue;");
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// wow = new WOW({
//   boxClass:       'wow',
//   animationClass: 'animated',
//   offset:         0,
//   mobile:         true,
//   live:           true,
// })wow.init();
