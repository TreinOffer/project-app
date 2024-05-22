const cabecalho = ["Nome", "Matricula", "Atrasos", "Graficos"];

userNames = ["Eduardo Pereira","Jorge Almeida","Maggie Alcantara"];

userMatric = ["10202015","10202014","10202013"];

let table = document.getElementById("tabela");
let tbRow = document.createElement("tr");

for (let i = 0; i < cabecalho.length; i++) {
    let tHead = document.createElement("th");
    tHead.innerText = cabecalho[i];
    tbRow.appendChild(tHead);
    table.appendChild(tbRow);
}

for (let i = 0; i < userNames.length; i++) {
    let tbRow2 = document.createElement("tr");
    let tbData = document.createElement("td");
    let userImg = document.createElement("img");
    let userNome = document.createElement("text");
    let userNumber = document.createElement("text");

    userNome.innerText = userNames[i];
    userImg.src = "../imgs/Github.png";
    userNumber.innerText = userMatric[i];

    tbData.appendChild(userImg);
    tbData.appendChild(userNome);
    tbData.appendChild(userNumber);
    tbRow2.appendChild(tbData);

    table.appendChild(tbRow2);

}

// for (let i = 0; i < userMatric.length; i++) {
//     let tbRow2 = document.createElement("tr");
//     let tbData = document.createElement("td");
//     tbData.innerText = userMatric[i];
//     tbRow2.appendChild(tbData);

//     table.appendChild(tbRow2);
// };