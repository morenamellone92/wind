var menu= "close";

smooth[0].click(function() {
   $('html, body').animate({
      scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top -smooth[1]
   }, smooth[2]);
   return false;
});


function MenuMobile(){
  var mobile_menu = document.getElementById("mobile_navbar");
  var iconmenu = document.getElementById("iconmenu");

if(menu == "close"){
  mobile_menu.style.width="100%";
  menu='open';
  iconmenu.src = "assets/img/icon/menu_close.svg";
}

else
{
  mobile_menu.style.width="0%";
  menu = "close";
  iconmenu.src = "assets/img/icon/menu.svg";
}
}
