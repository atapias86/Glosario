addEventListener("DOMContentLoaded", (e) => {
    let from = document.querySelector("#form");
    from.addEventListener("submit", (e) => {
        e.preventDefault();
        const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        data = Object.fromEntries(new FormData(e.target));
        let num = Number(data.numero_mult);
        document.querySelector("#tb").innerHTML = "";
        from.reset();
        if (num >= 1) {
            for (let multp of list) {
                let result = num * multp;
                let plantillas = `
                <tr>
                    <td>${num}}</td>
                    <td>${multp}</td>
                    <td>${result}</td>
                </tr>`;
                document.querySelector("#tb").insertAdjacentHTML("beforeend", plantillas);
            }
        }
    })
})