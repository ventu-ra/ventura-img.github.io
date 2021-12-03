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

    for (var i = 0; i < dados.length; i++) {
      if (dados[i].linkImg != "") {
        var li = document.createElement("li");
        var img = document.createElement("img");

        img.src = dados[i].linkImg;
        li.appendChild(img);
        listaImagens.appendChild(li);
      }
    }
  });
}

function pegarDados() {

  let input = document.querySelector("#link_imagem")
  let imagens = input.value
  

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
        // if (!response.ok) {
        //   throw new Error("Network response was not ok.");
        // }
      
        lista();
      })
      .catch(console.error);
  } else {
    window.alert("Campo vazio!");
  }

  input.value = ""
}

adicionar.addEventListener("click", pegarDados);
lista();
