
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);






  document.getElementById("formulario").addEventListener("submit", function(event) {
    const telefono = document.getElementById("telefono");
    const regex = /^\+1\s?(809|829|849)\s?\d{3}[-\s]?\d{4}$/;

    if (!regex.test(telefono.value)) {
      alert("Por favor, ingresa un número de teléfono fijo válido.");
      event.preventDefault();
    }
  });
