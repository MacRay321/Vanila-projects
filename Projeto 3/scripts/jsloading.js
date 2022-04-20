"use strict"

const loadingcon = document.querySelector("#loadingcontainer");
const p = document.querySelector("#contador");
const body = document.body;

let contador = 0;

export default function loading(){

    contador += 1

    p.innerText = `${contador}`;

    if(contador == 100 ){

        body.removeChild(loadingcon);
        clearInterval(timef);

    }


}

