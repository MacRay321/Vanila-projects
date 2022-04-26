const c = document.querySelector("#ul");
const d = document.querySelector("#btn1");
const s = document.querySelector("#btn2");
const TAMANHO = document.querySelector("#ul li:first-child img");
const UL = document.querySelector("#ul");
let contador1 = 0;

const time = setInterval(()=>{

    const clc = TAMANHO.width * 4;
    contador1 += TAMANHO.clientWidth;

    if(contador1 !== clc){

        UL.style.transform = `translateX(-${contador1}px)`;

    }else{

        contador1 = 0;
        UL.style.transform = `translateX(0px)`;

    }

    if(contador1 >= clc) contador1 = 0;

    console.log(contador1);

},5000)

s.addEventListener("click", ()=>{

    const clc = TAMANHO.width * 3;

    if(contador1 !== clc){

        contador1 += TAMANHO.clientWidth;

        console.log(contador1);
        UL.style.transform = `translateX(-${contador1}px)`;

}

})

d.addEventListener("click", ()=>{

    if(contador1 !== 0){

        contador1 -= TAMANHO.clientWidth;

        UL.style.transform = `translateX(-${contador1}px)`;

    } else{

        UL.style.transform = `translateX(0px)`;

    }

})


