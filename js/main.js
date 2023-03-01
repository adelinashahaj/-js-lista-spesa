
const listaspesaDom = ["mele", "pane", "uva", "carne", "cipolla"];

const listaDom = document.getElementById('lista');

let i = 0;
while (i < listaspesaDom.length){
    listaDom.innerHTML += `<li>${listaspesaDom[i]}</li>`;
    i++;
}


