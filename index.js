

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Event listener para cerrar el panel cuando se hace clic en cualquier lugar de la pantalla
document.addEventListener('click', (event) => {
  if (event.target.closest('.menu-icon') === null && event.target.closest('nav') === null) {
    nav.classList.remove('open');
  }
});

               
               
                
                

                const isDarkMode = true; // cambiar a "false" para desactivar el modo oscuro
if (isDarkMode) {
  nav.classList.add('dark-mode');
} else {
  nav.classList.remove('dark-mode');
}

//const sendBtn = document.getElementById("send-btn");

//sendBtn.addEventListener("click", () => {
  //sendBtn.classList.add("fly");
  //setTimeout(() => {
   // sendBtn.classList.remove("fly");
//  }, 2000);
//});


$(document).ready(function() {
    // Agregar evento click a cada pestaña
    $('.question').click(function() {
      // Obtener el contenido correspondiente a la pestaña
      var content = $(this).next('.answer');
      
      // Expandir o contraer el contenido al hacer clic en la pestaña
      content.slideToggle(200);
      
      // Cambiar el ícono de la pestaña
      $(this).find('.arrow').toggleClass('fa-chevron-down fa-chevron-up');
    });
  });



  // Obtener todos los elementos faq-item
  const faqItems = document.querySelectorAll('.faq-item');

  // Para cada faq-item, agregar un evento click a la pregunta
  faqItems.forEach((item) => {
    const question = item.querySelector('.question');
    const icon = question.querySelector('.icon');
    question.addEventListener('click', () => {
      // Cambiar la clase del faq-item para abrirlo o cerrarlo
      item.classList.toggle('open');
      // Cambiar la clase del icono para girarlo hacia arriba o hacia abajo
      if (item.classList.contains('open')) {
        icon.classList.add('up');
      } else {
        icon.classList.remove('up');
      }
    });
  });
  
