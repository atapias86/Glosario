addEventListener("DOMContentLoaded", (e) => {
    let btn = document.querySelector("#btn_inicio");
    btn.addEventListener("click", (e) => {
        resultado = document.querySelector("#resultado");
        e.preventDefault();
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 0));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 1));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 2));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 3));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 4));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 5));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 6));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 7));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 8));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 9));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 10));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 11));
        resultado.insertAdjacentHTML("beforebegin","<br></br>" + mult(9, 12));
    })
})
function mult(num1, num2) {
    let mult = num1 * num2;
    return mult;
}