addEventListener("DOMContentLoaded", (e) => {
    let btn = document.querySelector("#btn_inicio");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let resultado;
        resultado = (10* 50* 10 + 2)/100;
        alert(resultado);
    })
})