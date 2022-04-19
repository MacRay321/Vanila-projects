let a = document.querySelector("#aa")
let body = document.querySelector("#quadro");
const p = document.querySelector("#lugardap");
const s = document.querySelector("#loading");
const z = document.body;
const dd = setInterval(loading,50);
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let contador;
let contadorloading = 0;

a.addEventListener("click",()=>{

    contador = "#";

    for(let i = 0; i < 6; i++ ){

        const randomnumber = Number((Math.random() * 16).toFixed());

        contador += hex[randomnumber];

    }

    body.style.backgroundColor = `${contador}`

})


function loading(){

contadorloading = contadorloading + 1;

    if(contadorloading == 100) {
        clearInterval(dd)
        z.removeChild(s);
    }

    else lugardap.innerText = `${contadorloading}`;

}