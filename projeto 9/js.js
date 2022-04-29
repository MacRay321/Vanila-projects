const D = document.querySelectorAll("#ulde > li");
const X = document.querySelectorAll("#ulde > li > h1");
const O = document.querySelectorAll("#ulde > li > span");
const NOMES = document.querySelectorAll(".titulos");
const INPUT = document.querySelector("#input");
const SUBMIT = document.querySelector("#submit");
const UL = document.querySelector("#ulde");

console.log(D.length);


//======Atualização da tabela de valores;

setInterval(()=>{

    D.forEach((x,z)=>{

        let nome = X[z].innerText;
        
        fetch(`https://www.mercadobitcoin.net/api/${nome}/ticker/`)
        .then((x)=>x.json())
        .then((g)=>{

            let buy = g.ticker.buy;
            let last = g.ticker.last;
            let low = g.ticker.low;
            let high = g.ticker.high;

            let informacoes = `<p>Maior preço de oferta de compra das últimas 24 horas: <span>${buy}</span>$USD</p> <p>Menor preço unitário de negociação das últimas 24 horas:<span>${low}</span>$USD</p> <p>Preço unitário da última negociação: <span>${last}</span>$USD</p> <p>Maior preço unitário de negociação das últimas 24 horas: <span>${high}</span>$USD</p>`

            O[z].innerHTML = informacoes;
         

        })

    })
 
 },1000);



//=======FUNCIONALIDADE DE PROCURA;

let a = document.createElement("P");
a.innerText = "Digite novamente";
a.style.width = "90%";
a.style.display = "block";
a.style.justifyContent = "center";
a.style.color = "white";
a.style.margin = "auto";
a.style.fontSize = "2rem";

INPUT.addEventListener("keyup",()=>{
  
let contador = 0;

    for(let i = 0; i<NOMES.length; i++){

        if(NOMES[i].innerText.indexOf((INPUT.value).toUpperCase()) >= 0){

            D[i].style.display = "block";

        }   else D[i].style.display = "none";


        D.forEach((x)=>{

        if(x.style.display == "none"){

            contador++;
        }

        })

          
        if(a.parentElement == UL){

            a.parentElement.removeChild(a);
    
        }

        if(contador == D.length){
            
            UL.appendChild(a);
            
        }   else contador = 0;

       }

})

//========Parte da pesquisa;



