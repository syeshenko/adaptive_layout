$('.toggle-menu').on('click', function(){
  $('.nav__list').toggleClass('nav__list_active');  
  $(this).toggleClass('toggle-bar_active');
});
