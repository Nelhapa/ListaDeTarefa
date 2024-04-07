// script.js

function add() {
    const conteudo = document.getElementById("conteudo").value;

    if (conteudo.trim() !== "") { //Aqui verifica se o usuario digitou algo. Se ele digitou algo vai ir seguindo...
        const novaTarefa = document.createElement("div"); // Aqui cria uma const, e essa const serve para criar uma div.
        novaTarefa.className = "tarefa"; // Aqui é uma classe, e ela é atribuida a tarefa, 

        const botaoCompleto = document.createElement("button"); // Aqui cria botão completa, e esse botão vai servir para mudar a cor e a tarefa.
        botaoCompleto.innerHTML = "Completa"; // Aqui escreve o nome lá que aparece no site.
        botaoCompleto.id = "botaoCompleto";
        botaoCompleto.onclick = function(){
            novaTarefa.classList.toggle("completa");
            
       
            if (novaTarefa.classList.contains("completa")) { //Aqui verifica se está COMPLETA ou não, e vai seguir em baixo.
                novaTarefa.style.backgroundColor = "green"; // Caso a tarefa esteja COMPLETA a cor de fundo fica verde!
                novaTarefa.style.textDecoration = "line-through"; // Aqui faz a tarefa ficar cortada!
            } else {
                novaTarefa.style.backgroundColor = "white"; // Aqui volta pra cor original que é branca!
                novaTarefa.style.textDecoration = "none"; // Aqui não deixa mais cortado!
            }
        };

        const botaoExcluir = document.createElement("button"); // Aqui cria m botão!
        botaoExcluir.innerHTML = "Excluir"; // Apenas o texto. Nada de mais!
        botaoExcluir.onclick = function() { // Aqui caso clique no botão será executado em baixo...
            novaTarefa.remove(); // Aqui remove a tarefa que tu colocou.
        };

        novaTarefa.innerHTML = conteudo; // Aqui mostra conteudo digitado, a tarefa em si.

        // Adicionando os botões diretamente ao conteúdo da novaTarefa
        novaTarefa.appendChild(botaoCompleto);
        novaTarefa.appendChild(botaoExcluir);

        document.getElementById("tarefas").appendChild(novaTarefa);
        document.getElementById("conteudo").value = ""; //Aqui faz ficar vazio o campo novamente.
    } else {
        alert("Insira uma tarefa.");
    }
}
