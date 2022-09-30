addEventListener("DOMContentLoaded", (e) => {
    let btn = document.querySelector("#btn_inicio");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const text = "hola ADSI la mejor ficha";
        const search = text.search("e");
        document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + search);
    })
})