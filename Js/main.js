addEventListener("DOMContentLoaded", (e) => {
    let btn = document.querySelector("#btn_inicio");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let list = [1,2,3,4,5,6,7,8]
        list.forEach(e => document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + e*5));
    })
})