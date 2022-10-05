addEventListener("DOMContentLoaded", (e) => {
    let btn = document.querySelector("#btn_inicio");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let resultado;
        resultado = 1 + 2;
        alert(resultado);
    })
})