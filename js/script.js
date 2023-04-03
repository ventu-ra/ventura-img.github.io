const listaImagens = document.querySelector("#imagens");
const adicionar = document.querySelector("#button");
const url = "https://teste-api-app-teste.herokuapp.com/api/users/";

function lista() {
  let todos = "alls";

  var req = fetch(url + todos);

  var res = req.then(function (res) {
    return res.json();
  });

  res.then(function (dados) {
    listaImagens.innerHTML = "";
    dados.reverse();
    for (var i = 0; i < dados.length; i++) {
      if (dados[i].linkImg != "") {
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");

        img.className = "w-100 shadow-1-strong rounded mb-4";
        div1.className = "col-lg-4 col-md-12 mb-4 mb-lg-0";
        div2.className = "";
        img.src = dados[i].linkImg;

        div2.appendChild(img);
        div1.appendChild(div2);
        listaImagens.appendChild(div1);
      }
    }
  });
}

function pegarDados() {
  let input = document.querySelector("#link_imagem");
  let imagens = input.value;

  // console.log(imagens);

  if (imagens != "") {
    fetch("https://teste-api-app-teste.herokuapp.com/api/users/inserts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: data
      body: JSON.stringify({
        linkImg: imagens,
      }),
    })
      .then((response) => {

        lista();
      })
      .catch(console.error);
  } else {
    window.alert("Campo vazio!");
  }

  input.value = "";
}

adicionar.addEventListener("click", pegarDados);
lista();
