## Ciclos

Es proceso el cual se tiene pleno control del inicio, recorrido y el final, con esto se puede ejecutar n veses y cerrar el ciclo en cualquier momento.

```js
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
```

## Interacciones

Es un proceso el cual no se tiene control del inicio, recorrido y final.

```js
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
```

## Map

Sirve para realizar operaciones matemáticas a  interacciones 

```js
addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn_inicio");
  btn.addEventListener("click", (e) => {
​    e.preventDefault();
​    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
​    const map = list.map(x => x * 2);
​    document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + map);
  })
})
```

## Filter

Realiza filtro de listas tanto de tipo number o string

```js
addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn_inicio");
  btn.addEventListener("click", (e) => {
​    e.preventDefault();
​    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
​    const map = list.filter(x => x > 5);
​    document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + map);
  })
})
```

## Search

Esta función devuelve la posición de la primera coincidencia del parámetro a buscar de tipo String.

```js
addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn_inicio");
  btn.addEventListener("click", (e) => {
​    e.preventDefault();
​    const text = "hola ADSI la mejor ficha";
​    const search = text.search("e");
​    document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + search);
  })
})
```

## For each

ejecuta la función una vez por cada elemento del array; a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable.

```
addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn_inicio");
  btn.addEventListener("click", (e) => {
​    e.preventDefault();
​    let list = [1,2,3,4,5,6,7,8]
​    list.forEach(e => document.querySelector("#resultado").insertAdjacentHTML("beforeend", "<br></br>" + e*5));
  })
})
```

