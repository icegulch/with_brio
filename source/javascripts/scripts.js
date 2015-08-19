//= require "jquery-1.11.1"
//= require "waypoints"

    $(function() {

      // waypoints


      // Telepherique on Home
      jQuery('.page-section-featured').waypoint(function() {
        jQuery('.telepherique').toggleClass('animated bounceInLeft');
      }, { offset: '70%' });


      // Ornaments on Work Page
      jQuery('.page-section-work').waypoint(function() {
        jQuery('.bobbles').toggleClass('animated bounce');
      }, { offset: '50%' });


      // Jack on Periodic Page
      jQuery('.page-section-periodic').waypoint(function() {
        jQuery('.jack').toggleClass('animated rotateIn');
      }, { offset: '20%' });


      // Travel Tag on Passport Page
      jQuery('.page-section-passport').waypoint(function() {
        jQuery('.passport').toggleClass('animated swing');
      }, { offset: '20%' });

    });

