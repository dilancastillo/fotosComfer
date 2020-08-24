// MDB Lightbox Init
 $(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

//Barra lateral
$(document).ready(function () {
  $('.menu .category_item[category="all"]').addClass(".ct_item_active");

  //Filtrando productos
  $(".category_item").click(function () {
    var catProduct = $(this).attr("category");
    console.log(catProduct);

    //Agregando clase active al enlace seleccionado
    $(".category_item").removeClass("ct_item_active");
    $(this).addClass("ct_item_active");

    //Ocultando productos
    $(".item").css("transform", "scale(0)");
    function hideProduct() {
      $(".item").hide();
    }
    setTimeout(hideProduct, 400);

    //Mostrando productos
    function showProduct() {
      $('.item[category="' + catProduct + '"]').css("transform", "scale(1)");
      $('.item[category="' + catProduct + '"]').show();
    }
    setTimeout(showProduct, 400);
  });

  //Mostrando todos los productos
  $('.category_item[category="all"]').click(function () {
    function showAll() {
      $(".item").show();
      $(".item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });
});

//Buscador de contenido
$(".search-item").search(function () {});


