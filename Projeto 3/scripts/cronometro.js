const centro = document.querySelector("#centro");
const STOP = document.querySelector("#btn1");
const START = document.querySelector("#btn2");
const PAUSE = document.querySelector("#btn3");

let m = 0;
let s = 0;
let hr = 0;


export default function cronometro(){
    START.addEventListener("click", ()=>{

        START.innerText = "Rodando!"
    
        const relogio = setInterval(timer, 1000);
        console.log("funcionou")
    
        STOP.addEventListener("click", () => {
    
            clearInterval(relogio);
            m = 0;
            s = 0;
            hr = 0;
    
            centro.innerText = `00:00:00`
            START.innerText = "START!"
    
        })
    
        PAUSE.addEventListener("click", ()=>{
    
            clearInterval(relogio);
            START.innerText = "Voltar ao tempo";
    
        })

})
    
    
    function timer(){
        s++
    
        if(s == 60){
            s = 0;
            m++
        }
    
        if(m == 60){
    
            m = 0;
            hr++;
    
        }
    
        let valorinteral = (hr < 10? `0${hr}` : `${hr}`) + ":" +(m<10? `0${m}`: `${m}`) +":"+ (s<10? `0${s}` : `${s}`);
        
        centro.innerText = `${valorinteral}`;
    
    }

}