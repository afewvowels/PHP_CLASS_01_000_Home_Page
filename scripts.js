window.addEventListener('load', function() {
  document.getElementById('icon').addEventListener('click', myFunction);
})

function myFunction() {
    document.getElementById('menu').classList.toggle('change');
    menu_icon.classList.toggle('change');
    // document.getElementById('menu_icon_wrapper').classList.toggle('change');
}
