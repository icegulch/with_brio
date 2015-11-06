//= require "jquery-2.1.4"
//= require "isotope.min"
//= require "imagesloaded.pkgd.min"


    $(document).ready( function() {
      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });
      // layout Isotope after each image loads
      $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
      });  


      $('.grid-nav').on( 'click', '.grid-nav-filter', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        $('.grid-nav-filter').removeClass('current');
        $(this).addClass('current');
      });


    });



