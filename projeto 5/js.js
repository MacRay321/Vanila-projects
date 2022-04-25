let g = document.querySelector("#cursor");
const div = document.querySelector("#div");
const divs = document.querySelectorAll(".divq");

document.body.addEventListener("mousemove", (e)=>{

    g.style.left = `${e.pageX}px`;
    g.style.top = `${e.pageY}px`;


})

div.addEventListener("mouseout",()=>{

    if(!div.classList.contains("numero")) div.classList.add("numero");

})

window.addEventListener("scroll",()=>{

let d = 0;

divs.forEach((z,w,c)=>{

    d = z.getBoundingClientRect().top;

    if(d <= 500){

        z.classList.remove("numero2")
        z.classList.remove("divq");
        z.classList.add("numero");

    }

    if( d <= -700 && z.classList.contains("numero")){

        z.classList.remove("numero");
        z.classList.remove("divq");
        z.classList.add("numero2");
      
    }

})

})

divs.forEach((z,x,c)=>{

    x.addEventListener("mouseover",()=>{

        div.classList.add("dentro");

    })

})



