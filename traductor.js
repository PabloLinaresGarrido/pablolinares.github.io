// Obtener el idioma seleccionado de la cookie o almacenamiento local
var idiomaSeleccionado = Cookies.get("idiomaSeleccionado") || localStorage.getItem("idiomaSeleccionado");

// Si no hay un idioma seleccionado, establecer el idioma por defecto
if (!idiomaSeleccionado) {
  idiomaSeleccionado = "es";
}

// Definir la función que traducirá el contenido
function traducir(idioma) {
  // Almacenar el idioma seleccionado en la cookie o almacenamiento local
  Cookies.set("idiomaSeleccionado", idioma);
  localStorage.setItem("idiomaSeleccionado", idioma);

  // Obtener todos los elementos que deben ser traducidos
  var elementos = $("[data-traducir]");

  // Llamar a la API de Google Translate para traducir el contenido
  $.each(elementos, function(index, elemento) {
    var texto = $(elemento).html();
    $.ajax({
      url: "https://translate.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: texto,
        target: idioma,
        key: "TU_API_KEY_GOOGLE_TRANSLATE"
      },
      success: function(result) {
        $(elemento).html(result.data.translations[0].translatedText);
      }
    });
  });
}

// Escuchar el evento "click" del botón de cambio de idioma
$(document).on("click", "[data-cambiar-idioma]", function() {
  var idioma = $(this).data("cambiar-idioma");
  traducir(idioma);
});
