//= require "jquery-1.11.1"
//= require "waypoints"

    $(function() {
      // waypoints
      jQuery('.page-section-work').waypoint(function() {
        jQuery('.bobbles').toggleClass('animated bounce');
      }, { offset: '70%' });

    });

