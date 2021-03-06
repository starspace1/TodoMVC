// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {

  $("#todo-list").on("click", '.toggle', function(){
    $(this).parent().submit();
  });

  $('#toggle-all').click(function() {
    $(this).parent().submit();
  });

  $('#filters').on("click",'a', function(){
   
   if ($(this).hasClass('selected')) { return false; }

   var filter = $(this).html();

   console.log(filter)
   
   switch (filter)
   {
    case 'All':
      $('#todo-list').find('li').show();
      break;
    case 'Active':
      $('#todo-list').find('li').show();
      $('#todo-list').find('.completed').hide();
      break; 
    case 'Completed':
      $('#todo-list').find('li').hide();
      $('#todo-list').find('.completed').show();
      break;
    }

    event.preventDefault();

    $('#filters a').removeClass('selected');
    $(this).addClass('selected');
  });

  $('#todo-list').on('dblclick', 'a', function(){
    $(this).parents('li').addClass('editing');
  });

});
