addEventListener("DOMContentLoaded",(e)=>{
    let from = document.querySelector("#form");  
    from.addEventListener("submit",(e)=>{
        e.preventDefault();
        data = Object.fromEntries(new FormData(e.target));
        let num = Number(data.numero_mult);
        document.querySelector("#dataTable_oprac").innerHTML ="";
        from.reset();
        for(let i = 0; i<=12 ; i++){
            let resul = num * i;
            let plantilla = `
            <tr>
                <td>${num}</td>
                <td>${i}</td>
                <td>${resul}</td>
            </tr>`;
        document.querySelector("#dataTable_oprac").insertAdjacentHTML("beforeend", plantilla);
        }
    })
})