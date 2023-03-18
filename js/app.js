var boxes = document.querySelectorAll(".experiencie__box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}

function ocultarImagenes(recolocar) {
    /** recolocar indica que se recoloque el documento **/
    /** si no recolocamos, solo ocultamos las imágenes **/
      for (x=0;x<document.images.length;x++){
        if (recolocar)
          document.images[x].className = "formcontato--esquerda";
        else
          document.images[x].style.visibility = "hidden";
      }
    }

    const toggle = document.getElementById("toggle");
    const nav = document.getElementById("nav");
    
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active")
        // document.getElementById("nomb").style.display = "none";
    });

    nav.addEventListener("close", () => {
        nav.classList.toggle("active")
        document.getElementsByClassName("headerPrincipal-titulo").style.display = "inline";
    });
    
// import { valida } from ".validacion.js";

// const inputs = document.querySelectorAll("input");
// inputs.forEach(inputs => {
//     inputs.addEventListener('blur', (input) => {
//         valida(input.target);
//     })
// })