import mouse from "./jsmain/cursor.js"
import criadora from"./jsmain/criador.js"

mouse();
criadora();

let c = document.querySelector("#carregamento");
let d = document.querySelector("#porcentagem");
let contador = 0;
let s = setInterval(()=>{

    contador +=1;
    d.innerText = `${contador}%`;

    if(contador == 100) {
        clearInterval(s);

        document.body.removeChild(c);
    }
    
},50)





