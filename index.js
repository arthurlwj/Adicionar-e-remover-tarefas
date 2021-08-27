const inputElement = document.querySelector("input#tarefa");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");



buttonElement.onclick = ev => {
    ev.preventDefault();

    if (inputElement.value == "") {
        alert("Dado vazio, preencha com valores válidos");
    } else {
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;

        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";

        const liElement = document.createElement("li")
        liElement.appendChild(textElement);
        liElement.appendChild(btnElement);



        btnElement.onclick = () => {
            ulElement.removeChild(liElement);
        }

        ulElement.appendChild(liElement);
        inputElement.value = "";
       
    }


};