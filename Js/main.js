addEventListener("DOMContentLoaded", (e) => {
    let btn_inicio = document.querySelector("#btn_inicio");
    btn_inicio.addEventListener("click", (e) => {
        e.preventDefault();
        let resultado = document.querySelector("#resultado");
        let num = function () {
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 0));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 1));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 2));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 3));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 4));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 5));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 6));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 7));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 8));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 9));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 10));
            resultado.insertAdjacentHTML("beforebegin", "<br></br>" + (9 * 11));
        };
        num();
    })
})