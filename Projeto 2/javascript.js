const d = document.querySelectorAll(".imagens");
const btn = document.querySelectorAll(".links");
const div1 = document.querySelector("#seta1")
const div2 = document.querySelector("#seta2");
const interval = setInterval(loading,5000);
let contador = 0;


function loading(){

    contador += 1;

    if(contador >= 5) contador = 0;
    
    for(let i = 0; i<=4; i++){
    
        d[i].setAttribute("data-set","falso")
    
    }
    
    d[contador].setAttribute("data-set","verdadeiro");


}


btn.forEach((z,x,c)=>{

    z.addEventListener("click",(e)=>{

        if(e.target == div1){

            contador += 1;
    
            if(contador >= 5) contador = 0;
    
            for(let i = 0; i<=4; i++){
    
                d[i].setAttribute("data-set","falso")
    
            }
    
            d[contador].setAttribute("data-set","verdadeiro");

        } else{

            contador -= 1;
            
            if(contador == -1) contador = 4;
            
            for(let i = 0; i<=4; i++){
            
                d[i].setAttribute("data-set","falso")
            
            }
            
            d[contador].setAttribute("data-set","verdadeiro");

        } 

    })

})



