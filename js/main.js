// Menu fixo
$(function(){   
    var nav = $('#heading');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 92) { 
            nav.addClass("menu-fixo");
            $('body').css('padding-top', 70);
        } else { 
            nav.removeClass("menu-fixo"); 
            $('body').css('padding-top', 0);
        } 
    });  
});


$(document).ready(function(){
    $('#parentVerticalTab').easyResponsiveTabs();
  });

  //Vertical Tab
  $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });


    $(document).ready(function(){
        $('#parentVerticalTab2').easyResponsiveTabs();
      });
    
      //Vertical Tab
      $('#parentVerticalTab2').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_2', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
    });

    $('#parentVerticalTab3').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_3', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    
    

// Travar fundo modal
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe 'modal'
    var modais = document.querySelectorAll(".modal");

    // Event listener para quando um modal é exibido
    modais.forEach(function (modal) {
        modal.addEventListener("show.bs.modal", function () {
            document.documentElement.style.overflowY = "hidden";
        });

        // Event listener para quando um modal é fechado
        modal.addEventListener("hidden.bs.modal", function () {
            document.documentElement.style.overflowY = "auto";

            // Remove o elemento .modal-backdrop
            var backdrop = document.querySelector(".modal-backdrop");
            if (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
            }
        });

        // Event listener para quando um modal é escondido
        modal.addEventListener("hide.bs.modal", function () {
            document.documentElement.style.overflowY = "auto";
        });

        // Event listener para quando um modal é totalmente oculto
        modal.addEventListener("hidden.bs.modal", function () {
            document.documentElement.style.overflowY = "auto";
        });
    });

    // Adicione event listeners para os botões/links que abrem os modais
    var modalTriggers = document.querySelectorAll("[data-bs-toggle='modal']");

    modalTriggers.forEach(function (modalTrigger) {
        modalTrigger.addEventListener("click", function () {
            // Abra o modal manualmente
            var modal = new bootstrap.Modal(modalTrigger.dataset.bsTarget);
            modal.show();
        });
    });
});


//Btn Isenção HRV
    const btnIpi = document.getElementById("btnIpi");
    const btnTotal = document.getElementById("btnTotal");
    const contentIpi = document.getElementById("contentIpi");
    const contentTotal = document.getElementById("contentTotal");
  
    btnIpi.addEventListener("click", () => {
      btnIpi.classList.add("active");
      btnTotal.classList.remove("active");
      contentIpi.style.display = "block";
      contentTotal.style.display = "none";
    });
  
    btnTotal.addEventListener("click", () => {
      btnIpi.classList.remove("active");
      btnTotal.classList.add("active");
      contentIpi.style.display = "none";
      contentTotal.style.display = "block";
    });  
    
//Btn Isenção Sedan
    const btnIpi2 = document.getElementById("btnIpi2");
    const btnTotal2 = document.getElementById("btnTotal2");
    const contentIpi2 = document.getElementById("contentIpi2");
    const contentTotal2 = document.getElementById("contentTotal2");

    btnIpi2.addEventListener("click", () => {
    btnIpi2.classList.add("active");
    btnTotal2.classList.remove("active");
    contentIpi2.style.display = "block";
    contentTotal2.style.display = "none";
    });

    btnTotal2.addEventListener("click", () => {
    btnIpi2.classList.remove("active");
    btnTotal2.classList.add("active");
    contentIpi2.style.display = "none";
    contentTotal2.style.display = "block";
    }); 
    
//Btn Isenção Hatch
    const btnIpi3 = document.getElementById("btnIpi3");
    const btnTotal3 = document.getElementById("btnTotal3");
    const contentIpi3 = document.getElementById("contentIpi3");
    const contentTotal3 = document.getElementById("contentTotal3");

    btnIpi3.addEventListener("click", () => {
    btnIpi3.classList.add("active");
    btnTotal3.classList.remove("active");
    contentIpi3.style.display = "block";
    contentTotal3.style.display = "none";
    });

    btnTotal3.addEventListener("click", () => {
    btnIpi3.classList.remove("active");
    btnTotal3.classList.add("active");
    contentIpi3.style.display = "none";
    contentTotal3.style.display = "block";
    }); 


    document.addEventListener("DOMContentLoaded", function() {
        // Seleciona a imagem dentro da .carousel-item
        var carouselImage = document.querySelector('.carousel-item.active img');
        // Seleciona o elemento #tenhoInteresse
        var interesseForm = document.getElementById('tenhoInteresse');

        // Define a altura do elemento #tenhoInteresse como a altura da imagem
        interesseForm.style.height = carouselImage.clientHeight + 'px';

        // Reajusta a altura do elemento #tenhoInteresse quando a janela for redimensionada
        window.addEventListener('resize', function() {
          interesseForm.style.height = carouselImage.clientHeight + 'px';
        });
      });

