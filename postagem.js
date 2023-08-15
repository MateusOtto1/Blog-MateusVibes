let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let body = document.querySelector(".esconde-body");
let container = document.querySelector(".container-verMais");
let btnVoltar = document.querySelector(".btnVoltar");
let quadrado1 = document.querySelector(".quadrado1");
let quadrado2 = document.querySelector(".quadrado2");
let quadrado3 = document.querySelector(".quadrado3");
let quadrado4 = document.querySelector(".quadrado4");
let quadrado5 = document.querySelector(".quadrado5");
let quadrado6 = document.querySelector(".quadrado6");
let quadrado7 = document.querySelector(".quadrado7");

btn1.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/1`).then(result => result.json()).then(result => {
        document.querySelector(".titulo-post-verMais").innerHTML = result.title;
        document.querySelector(".descricao-post-verMais").innerHTML = result.description;
        document.querySelector(".nome-criador-verMais").innerHTML = result.profileName;
        let imgpost = `https://api-rest-post-diegocandido.herokuapp.com${result.thumbImage}`;
        document.querySelector(".imgPost-verMais").src = imgpost;
    });
});

btn2.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/2`).then(result => result.json()).then(result => {
        document.querySelector(".titulo-post-verMais").innerHTML = result.title;
        document.querySelector(".descricao-post-verMais").innerHTML = result.description;
        document.querySelector(".nome-criador-verMais").innerHTML = result.profileName;
        let imgpost = `https://api-rest-post-diegocandido.herokuapp.com${result.thumbImage}`;
        document.querySelector(".imgPost-verMais").src = imgpost;
    });
});

btn3.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/3`).then(result => result.json()).then(result => {
        document.querySelector(".titulo-post-verMais").innerHTML = result.title;
        document.querySelector(".descricao-post-verMais").innerHTML = result.description;
        document.querySelector(".nome-criador-verMais").innerHTML = result.profileName;
        let imgpost = `https://api-rest-post-diegocandido.herokuapp.com${result.thumbImage}`;
        document.querySelector(".imgPost-verMais").src = imgpost;
    });
});

btn4.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/0`).then(result => result.json()).then(result => {
        document.querySelector(".titulo-post-verMais").innerHTML = result.title;
        document.querySelector(".descricao-post-verMais").innerHTML = result.description;
        document.querySelector(".nome-criador-verMais").innerHTML = result.profileName;
        let imgpost = `https://api-rest-post-diegocandido.herokuapp.com${result.thumbImage}`;
        document.querySelector(".imgPost-verMais").src = imgpost;
    });
});

quadrado1.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "O setup do meu sonho";
    document.querySelector(".descricao-post-verMais").innerHTML = "Esse é o setup dos meus sonhos com vários periféricos de alta qualidade, tudo muito clean, espero que gostem! <br> <br> <br><br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/5Post.png";
});

quadrado2.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "Notebook 2023";
    document.querySelector(".descricao-post-verMais").innerHTML = "Computadores, sejam eles desktop ou notebooks, sempre vão apresentar configurações e preços variados para abraçar o maior público possível. Nesse processo, certamente vamos encontrar pessoas que querem levar para casa um bom equipamento, mas sem precisar desembolsar uma quantia alta por isso. <br> <br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/6Post.png";
});

quadrado3.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "YouTube";
    document.querySelector(".descricao-post-verMais").innerHTML = "YouTube é uma plataforma de compartilhamento de vídeos com sede em San Bruno, Califórnia. O serviço foi criado por três ex-funcionários do PayPal - Chad Hurley, Steve Chen e Jawed Karim - em fevereiro de 2005. A Google comprou o site em novembro de 2006 por US$ 1,65 bilhão. <br><br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/7Post.png";
});

quadrado4.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "Placa de vídeo RTX";
    document.querySelector(".descricao-post-verMais").innerHTML = "O que é e como funciona a tecnologia Nvidia RTX de placa de vídeo? A Nvidia RTX é uma tecnologia de placas de vídeo desenvolvida pela Nvidia, que traz uma geração avançada de recursos para jogos, criação de conteúdo digital e outras aplicações intensivas em gráficos.<br><br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/8Post.webp";
});

quadrado5.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "Iphone 13 Pro-Max";
    document.querySelector(".descricao-post-verMais").innerHTML = "O Apple iPhone 13 é um dos smartphones iOS mais avançados e completos que existem em circulação. Tem um grande display de 6.1 polegadas com uma resolução de 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 13 são muitas e inovadoras.<br><br><br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/9Post.png";
});

quadrado6.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "Nova Tecnologia Micro LED da Samsung";
    document.querySelector(".descricao-post-verMais").innerHTML = "A Samsung Electronics apresentou o futuro da tecnologia Micro LED na Integrated Systems Europe (ISE) 2022 em Barcelona, com três novos modelos de sua tecnologia de LED de última geração, The Wall. “A tecnologia Micro LED vai definir o futuro da inovação em displays.<br><br><br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/10Post.png";
});

quadrado7.addEventListener('click', () => {
    container.style.display = "flex";
    body.style.display = "none";
    document.querySelector(".titulo-post-verMais").innerHTML = "O que é uma placa-mãe?";
    document.querySelector(".descricao-post-verMais").innerHTML = "Quando falamos em uma placa-mãe, estamos nos referindo ao componente responsável por juntar todas as outras peças do computador através de conexões. É nela que são encaixados o processador, a placa de vídeo, a memória RAM, armazenamento, e a fonte.<br><br><br>";
    document.querySelector(".nome-criador-verMais").innerHTML = "Mateu Brusius Otto";
    document.querySelector(".imgPost-verMais").src = "./imagens/11Post.png";
});

btnVoltar.addEventListener('click', () => {
    container.style.display = "none";
    body.style.display = "block";
});