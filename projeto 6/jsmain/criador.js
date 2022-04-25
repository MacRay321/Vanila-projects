const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const CONTAINER = document.querySelector("#container");
const modal = document.querySelector("#modal");
const submit2 = document.querySelector("#submit2");
const inputmodal = document.querySelector("#inputmodal");
let c;

export default function criadora(){

    submit.addEventListener("click", ()=>{
    
        const a = document.createElement("div");
        const b = document.createElement("P");
        const c = document.createElement("a");
        const d = document.createElement("a");
        const e = document.createElement("div");
    
        b.innerText = `${input.value}`;
    
        c.classList.add("remover");
        c.innerText = "remover";
        c.setAttribute("href","#")
        d.classList.add("reeditar");
        d.innerText = "reeditar"
        d.setAttribute("href","#");
        e.appendChild(c);
        e.appendChild(d);
        e.classList.add("divelemento");
    
        a.appendChild(b);
        a.appendChild(e);
        a.classList.add("elemento");
    
        CONTAINER.appendChild(a);

        input.value = " ";

    }
    );

    document.body.addEventListener("click", (e)=>{

        if(e.target.classList.contains("remover")){

            let c = e.target.parentElement.parentElement.parentElement;
            c.removeChild(e.target.parentElement.parentElement);

        }
        
    })

    document.body.addEventListener("click", (e)=>{

        if(e.target.classList.contains("reeditar")){
    
            modal.style.display = "flex";
    
            c = e.target.parentElement.previousElementSibling;
    
        }
    
        if(e.target == submit2){
    
            c.innerText = `${inputmodal.value}`
            modal.style.display = "none";
            inputmodal.value = "";
    
        }
    
    })
    
}

