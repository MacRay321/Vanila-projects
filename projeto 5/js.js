const DIVS = document.querySelectorAll(".divq");

window.addEventListener("scroll", ()=>{

    const VALOR = Math.ceil(window.screen.height / 3);

    DIVS.forEach((z,x,c)=>{

        if(z.getBoundingClientRect().top <= VALOR){

            z.classList.remove("divq");
            z.classList.add("ligado");

        } 

    })

})






