addEventListener("DOMContentLoaded", (e) => {
    let btn_inicio = document.querySelector("#btn_inicio");
    btn_inicio.addEventListener("click", (e) => {
        e.preventDefault();
        let resultado = document.querySelector("#resultado");
        function saludar(nombre) {
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + `hola ${nombre}`);
          }
          saludar("Alvaro");
    })
})