(function(){
  /* Adding and removing active class for main-nav buttons */
  $(".main-header__navmenu a").on("click", function(e){
    e.preventDefault();

    $(".main-header__navmenu a").removeClass("active");
    this.addClass("active");
  });


  /* Loading menu */
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var $menu = $(".menu__items"),
        json = JSON.parse(this.responseText);

      showMenuItems("starters");

      openMenu("starters");
      openMenu("main-dishes");
      openMenu("desserts");
      openMenu("drinks"); 
    }

    function showMenuItems(menuPart) {
      var $list = $("<ul></ul>"),
        $listItem = null;

      for(var i = 0; i < Object.keys(json[menuPart]).length; i++) {
        $listItem = $("<li class='col-sm-6'></li>");
        $listItem.append("<span class='menu__item'>" + json[menuPart][i].name + "</span>")
          .append("<span class='menu__item-price'>" + json[menuPart][i].price + "</span>")
          .append("<span class='menu__item-ingredients'>" + json[menuPart][i].ingredients + "</span>")
          .appendTo($list);
        $list.appendTo($menu);
      }
    }

    function openMenu(menuPart) {
      $(".menu__" + menuPart).on("click", function(e){
        e.preventDefault();
        $menu.html("");

        if (menuPart === "main-dishes") {
          menuPart = "mainDishes";
        }

        showMenuItems(menuPart);
        $(".menu__nav a").removeClass("active");
        $(".menu__" + menuPart).addClass("active");
      });
    }
  };

    xhttp.open("GET", "../menu.json", true);
    xhttp.send();

    /* Preventing default behavior for submit button in form */
    $(".contact__form").on("submit", function(e){
      e.preventDefault();
    });
})();