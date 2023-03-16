//Haz tú validación en javascript acá
var boxes = document.querySelectorAll(".experiencie__box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    // console.log(window.innerHeight);
    // console.log(boxes[7].getBoundingClientRect().top);

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