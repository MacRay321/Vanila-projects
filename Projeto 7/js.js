const A = document.querySelectorAll(".div");

A.forEach((z)=>{

    z.addEventListener("click", ()=>{

        let d = z.offsetTop;
        let x = z.getBoundingClientRect().top;
        let equacao = d-x;
        let container = document.createElement("div");
        let clone = z.cloneNode(true);
        container.appendChild(clone);
        container.classList.add("telatotal");
        container.style.position = "absolute";
        container.style.top = `${equacao}px`;

        document.body.appendChild(container);

        //=============Funcionalidade de cliques;

        document.body.addEventListener("click",(e)=>{

            if(e.target == container && e.target !== clone){

                document.body.removeChild(container);

            }

        })


    })

})