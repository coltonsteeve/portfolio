jQuery(document).ready(function () {

    jQuery('#projectshide').hide();
  
    jQuery('#projects').click(function () {
  
      jQuery('#projectshide').slideToggle();
  
    });
  
    jQuery('#aboutmep').hide();
  
    jQuery('#aboutme').click(function () {
  
      jQuery('#aboutmep').slideToggle();
  
    });
});