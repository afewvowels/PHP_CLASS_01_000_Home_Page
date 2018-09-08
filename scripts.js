window.addEventListener('load',function() {
  document.getElementById('main_menu_icon').addEventListener('click',animateMenuIcon);
  document.getElementById('menu_item_1').addEventListener('click',csis_1570_animate_in);
  document.getElementById('menu_item_2').addEventListener('click',csis_3726_animate_in);
  document.getElementById('menu_item_3').addEventListener('click',csis_3760_animate_in);
});

function animateMenuIcon() {
  main_menu.classList.toggle('change');
}

function resetEventListeners() {
  var old_element = document.getElementById('menu_item_1');
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element,old_element);

  var old_element = document.getElementById('menu_item_2');
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element,old_element);

  var old_element = document.getElementById('menu_item_3');
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element,old_element);
}

function csis_1570_animate_in() {
  animateMenuIcon();
  welcome.classList.add('welcome');
  csis_1570.classList.remove('animate_out');
  csis_1570.classList.remove('animate_reset');
  document.getElementById('csis_1570_wrapper').style.zIndex = '10';
  csis_1570.classList.add('animate_in');
  setTimeout(function(){
    main_menu.classList.add('color_1570');
  }, 1000);

  resetEventListeners();
  
  document.getElementById('menu_item_2').addEventListener('click',csis_1570_animate_out);
  document.getElementById('menu_item_2').addEventListener('click',csis_3726_animate_in);
  document.getElementById('menu_item_3').addEventListener('click',csis_1570_animate_out);
  document.getElementById('menu_item_3').addEventListener('click',csis_3760_animate_in);
}

function csis_1570_animate_out() {
  welcome.classList.add('welcome');
  document.getElementById('csis_1570_wrapper').style.zIndex = '-999';
  csis_1570.classList.add('animate_out');
  setTimeout(function(){
    main_menu.classList.remove('color_1570');
    csis_1570.classList.add('animate_reset');
    csis_1570.classList.remove('animate_in');
  }, 1000);
}

function csis_3726_animate_in() {
  main_menu.classList.toggle('change');
  welcome.classList.add('welcome');
  csis_3726.classList.remove('animate_out');
  csis_3726.classList.remove('animate_reset');
  document.getElementById('csis_3726_wrapper').style.zIndex = '10';
  csis_3726.classList.add('animate_in');
  setTimeout(function(){
    main_menu.classList.add('color_3726');
  }, 1000);

  resetEventListeners();

  document.getElementById('menu_item_1').addEventListener('click',csis_3726_animate_out);
  document.getElementById('menu_item_1').addEventListener('click',csis_1570_animate_in);
  document.getElementById('menu_item_3').addEventListener('click',csis_3726_animate_out);
  document.getElementById('menu_item_3').addEventListener('click',csis_3760_animate_in);
}

function csis_3726_animate_out() {
  welcome.classList.add('welcome');
  document.getElementById('csis_3726_wrapper').style.zIndex = '-999';
  csis_3726.classList.add('animate_out');
  setTimeout(function(){
    main_menu.classList.remove('color_3726');
    csis_3726.classList.add('animate_reset');
    csis_3726.classList.remove('animate_in');
  }, 1000);
}

function csis_3760_animate_in() {
  main_menu.classList.toggle('change');
  welcome.classList.add('welcome');
  csis_3760.classList.remove('animate_out');
  csis_3760.classList.remove('animate_reset');
  document.getElementById('csis_3760_wrapper').style.zIndex = '10';
  csis_3760.classList.add('animate_in');
  setTimeout(function(){
    main_menu.classList.add('color_3760');
  }, 1000);

  resetEventListeners();

  document.getElementById('menu_item_1').addEventListener('click',csis_3760_animate_out);
  document.getElementById('menu_item_1').addEventListener('click',csis_1570_animate_in);
  document.getElementById('menu_item_2').addEventListener('click',csis_3760_animate_out);
  document.getElementById('menu_item_2').addEventListener('click',csis_3726_animate_in);
}

function csis_3760_animate_out() {
  welcome.classList.add('welcome');
  document.getElementById('csis_3760_wrapper').style.zIndex = '-999';
  csis_3760.classList.add('animate_out');
  setTimeout(function(){
    main_menu.classList.remove('color_3760');
    csis_3760.classList.add('animate_reset');
    csis_3760.classList.remove('animate_in');
  }, 1000);
}

// function csis_3726_animate() {
//   main_menu.classList.toggle('change');
//   welcome.classList.add('welcome');
//   csis_3726.classList.remove('animate_out');
//   csis_3726.classList.remove('animate_reset');
//   document.getElementById('csis_1570_wrapper').style.zIndex = '-999';
//   document.getElementById('csis_3726_wrapper').style.zIndex = '10';
//   csis_1570.classList.add('animate_out');
//   csis_3726.classList.add('animate_in');
//   setTimeout(function(){
//     main_menu.classList.remove('color_1570');
//     csis_1570.classList.add('animate_reset');
//     csis_1570.classList.remove('animate_in');
//     main_menu.classList.add('color_3726');
//   }, 1000);
