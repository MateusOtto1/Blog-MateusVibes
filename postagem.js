let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let container = document.querySelector(".container-mais");

btn1.addEventListener('click', ()=>{
    container.innerHTML = "";
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/1`).then(result => result.json()).then(result =>{
        card.innerHTML = result.title;
        document.querySelector(".descricao-post2").innerHTML = result.description;
        document.querySelector(".descricao-post2").style.display = "none";
        document.querySelector(".nome-criador2").innerHTML = result.profileName;
        let imgpost2 = `https://api-rest-post-diegocandido.herokuapp.com${result.thumbImage}`;
        document.querySelector(".img-post2").src = imgpost2;
    });
})
