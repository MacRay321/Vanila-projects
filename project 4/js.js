const z = Array.from({length: 100});
const x = z.map((z,w)=> `Item número ${w+1}`);
const input = document.querySelector("#input");
const l = document.querySelector("#btn1");
const e = document.querySelector("#btn2");
const w = document.querySelector("#container");
let contadordebotao = 2;
let numerototaldepaginas = Math.floor(x.length / 5);
let numerodeelementos = 5;

let teste = "das1dasd";

console.log(teste.indexOf("1"))

input.addEventListener("keyup",()=>{

    w.innerHTML = " ";

    for(let i = 0; i<=x.length -1 ; i++){

        if(x[i].indexOf(input.value.toString()) > 0){

            let container = document.createElement("p");
            container.innerHTML = x[i];
            w.appendChild(container);

            console.log("funcionou");

        }
    }

    if(w.innerHTML == " "){

        w.innerHTML = "<p>Digitação incorreta</p>";

    }

})

const funcionalidades = {

    To(){

        if(contadordebotao < 101){

            w.innerHTML = "";

        } 
        
        for(let i = 0; i<=4; i++){

            if(contadordebotao == 99) break;
            
            contadordebotao++
            let c = document.createElement("li");
            c.innerText = x[contadordebotao];
            w.appendChild(c);
            console.log(contadordebotao);

        }


    },
    back(){

        if(contadordebotao > 0){

            w.innerHTML = "";

        } 

        for(let i = 0; i<=4; i++){

            if(contadordebotao < 1) break;
            
            contadordebotao--
            let c = document.createElement("li");
            c.innerText = x[contadordebotao];
            w.appendChild(c);

        }

    },

}

e.addEventListener("click", funcionalidades.To);
l.addEventListener("click", funcionalidades.back);

function funcaoinicial(){

    for(let i = 0; i <3; i++){

        let container = document.createElement("li");
        container.innerText = x[i];
        w.appendChild(container);

    }

}

funcaoinicial();



