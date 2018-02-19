'use strict'

//hide all tabs first
$('.mich_info__content').hide();
//show the first tab content
$('#mich_info__content-4').show();

$('.mich_info__radio').change(function () {
 var dropdown = $(this).val();
  //first hide all tabs again when a new option is selected
  $('.mich_info__content').hide();
  //then show the tab content of whatever option value was selected
  $('#' + "mich_info__content-" + dropdown).show();
    //go to #id link
  if(window.innerWidth <= 800) {
    window.location.href = `#mich_info__content-${dropdown}`;
  }
});
