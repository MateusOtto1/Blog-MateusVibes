
fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens/").then(response => response.json()).then(result => {
    document.querySelector(".titulo-post1").innerHTML = result[4].title;
    document.querySelector(".descricao-post1").innerHTML = result[4].description;
    document.querySelector(".nome-criador1").innerHTML = result[4].profileName;
    let imgpost1 = `https://api-rest-post-diegocandido.herokuapp.com${result[4].thumbImage}`;
    document.querySelector(".img-post1").src = imgpost1;

    document.querySelector(".titulo-post2").innerHTML = result[1].title;
    document.querySelector(".descricao-post2").innerHTML = result[1].description;
    document.querySelector(".descricao-post2").style.display = "none";
    document.querySelector(".nome-criador2").innerHTML = result[1].profileName;
    let imgpost2 = `https://api-rest-post-diegocandido.herokuapp.com${result[1].thumbImage}`;
    document.querySelector(".img-post2").src = imgpost2;

    document.querySelector(".titulo-post3").innerHTML = result[2].title;
    document.querySelector(".descricao-post3").innerHTML = result[2].description;
    document.querySelector(".descricao-post3").style.display = "none";
    document.querySelector(".nome-criador3").innerHTML = result[2].profileName;
    let imgpost3 = `https://api-rest-post-diegocandido.herokuapp.com${result[2].thumbImage}`;
    document.querySelector(".img-post3").src = imgpost3;

    document.querySelector(".titulo-post4").innerHTML = result[3].title;
    document.querySelector(".descricao-post4").innerHTML = result[3].description;
    document.querySelector(".descricao-post4").style.display = "none";
    document.querySelector(".nome-criador4").innerHTML = result[3].profileName;
    let imgpost4 = `https://api-rest-post-diegocandido.herokuapp.com${result[3].thumbImage}`;
    document.querySelector(".img-post4").src = imgpost4;

    document.querySelector(".titulo-post5").innerHTML = result[0].title;
    document.querySelector(".descricao-post5").innerHTML = result[0].description;
    document.querySelector(".descricao-post5").style.display = "none";
    document.querySelector(".nome-criador5").innerHTML = result[0].profileName;
    let imgpost5 = `https://api-rest-post-diegocandido.herokuapp.com${result[0].thumbImage}`;
    document.querySelector(".img-post5").src = imgpost5;
});

