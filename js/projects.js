$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    $('.clsf-btn-all').bind( "click", function() {
  		  $('.clsf-architecture').css({'display' : 'block'});	
       	$('.clsf-interiors').css({'display' : 'block'});	
  	});

	  $('.clsf-btn-arch').bind( "click", function() {
  		  $('.clsf-architecture').css({'display' : 'block'});  
        $('.clsf-interiors').css({'display' : 'none'});
  	});

	  $('.clsf-btn-inter').bind( "click", function() {
  		  $('.clsf-architecture').css({'display' : 'none'});	
       	$('.clsf-interiors').css({'display' : 'block'});
  	});

    $( ".thumbnail" ).hover(
      function() {
        
        $(this).next().css({'transition' : '1s',
                           'opacity' : '1'});
      }, function() {
        $(this).next().css({'transition' : '1s',
                           'opacity' : '0'});
      });
 
});
