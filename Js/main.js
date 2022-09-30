addEventListener("DOMContentLoaded", (e) => {
    let btn = document.querySelector("#btn_inicio");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const map = list.filter(x => x > 5);
        document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + map);
    })
})