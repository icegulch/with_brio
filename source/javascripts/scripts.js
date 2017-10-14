// = require "jquery-3.2.1"


$.noConflict();
jQuery( document ).ready(function( $ ) {

  jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 0) {
         jQuery('body').addClass('scrolled');
      } else {
         jQuery('body').removeClass('scrolled');
      }
  });

});


