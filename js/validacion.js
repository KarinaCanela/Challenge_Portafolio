//Haz tú validación en javascript acá

export function valida (input) {
    const tipodeInput = input.dataset.tipo;
    if (validadores[tipodeInput]) {
        validadores[tipodeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
    }else {
        input.parentElement.classList.add("input-container--invalid");
    }
}