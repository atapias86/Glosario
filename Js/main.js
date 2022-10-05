addEventListener("DOMContentLoaded", (e) => {
    let btn_inicio = document.querySelector("#btn_inicio");
    btn_inicio.addEventListener("click", (e) => {
        e.preventDefault();
        tabla = [0,1,2,3,4,5,6,7,8,9,10,11,12];
        let resultado = document.querySelector("#resultado");
        resultado.insertAdjacentHTML("beforebegin", "<br></br>" + tabla.map(e => e*9));
        
    })
})