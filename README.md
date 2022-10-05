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

## Función limpia

Una función limpia es la cual se va a utilizar muchas veces.

```js
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
```

## Funciones sucias

Una función sucia es la cual no se va a utilizar muchas veces.

```
addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn_inicio");
  btn.addEventListener("click", (e) => {
​    e.preventDefault();
​    let resultado;
​    resultado = 1 * 2 * 3;
​    alert(resultado);
  })
})
```

## Parámetros

Los parámetros que se le pasan a la función pueden ser:  a) Valores simples a los que se denomina literales: por ejemplo 554 o true b) Variables que contienen un número, un texto o un valor booleano.

```
addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#btn_inicio");
  btn.addEventListener("click", (e) => {
​    e.preventDefault();
​    let resultado;
​    resultado = (10* 50* 10 + 2)/100;
​    alert(resultado);
  })
})
```

## Nivel de scope

El **scope** puede definirse como el alcance que una variable tendrá en tu código. Es decir , que el **scope** decide a qué variables tienes acceso en cada parte del código. 

```
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
```

