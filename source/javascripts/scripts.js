//= require "jquery-1.11.1"
//= require "waypoints"

    $(function() {

      // waypoints
      jQuery('.page-section-work').waypoint(function() {
        jQuery('.bobbles').toggleClass('animated bounce');
      }, { offset: '50%' });


      // waypoints
      jQuery('.page-section-periodic-header').waypoint(function() {
        jQuery('.jack').toggleClass('animated rotateIn');
      }, { offset: '20%' });


    });

