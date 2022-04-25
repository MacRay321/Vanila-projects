const over = document.querySelectorAll(".mouse");
const CURSOR = document.querySelector("#cursor");

export default function mouse(){

    document.body.addEventListener("mousemove",(z)=>{

        CURSOR.style.left = `${z.pageX}px`;
        CURSOR.style.top = `${z.pageY}px`;
    
    })


    over.forEach((z)=>{

        z.addEventListener("mouseenter",()=>{

            CURSOR.style.backgroundColor = "#141414";
    
        })
    
        z.addEventListener("mouseout", ()=>{
    
            CURSOR.style.backgroundColor = "rgb(255,255,255,0.1)";
    
        })
    })
     
  
}

