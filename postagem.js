let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

btn1 = 1;
btn2 = 2;
btn3 = 3;
btn4 = 4;

btn1.addEventListener('click', ()=>{
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/1`).then(result => result.json()).then(result =>{

    });
})
