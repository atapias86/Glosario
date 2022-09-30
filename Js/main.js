addEventListener("DOMContentLoaded",(e)=>{
    let from = document.querySelector("#form");
    const list = [0,1,2,3,4,5,6,7,8,9,10,11,12];

    from.addEventListener("submit",(e)=>{
        e.preventDefault();
        data = Object.fromEntries(new FormData(e.target));
        let num = Number(data.numero_mult);
        document.querySelector("#dataTable_oprac").innerHTML ="";
        from.reset();
        for(let multp of list){
            let resul = num * multp;
            let plantilla = `
            <tr>
                <td>${num}</td>
                <td>${multp}</td>
                <td>${resul}</td>
            </tr>`;
        document.querySelector("#dataTable_oprac").insertAdjacentHTML("beforeend", plantilla);
        }
    })    
})