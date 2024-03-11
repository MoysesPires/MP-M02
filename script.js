const animais = [];

function cadastrarAnimal(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const especie = document.getElementById('especie').value;
    animais.push({ nome, especie });
    atualizarTabela();
}

function atualizarTabela() {
    const tbody = document.querySelector('#animalTable tbody');
    tbody.innerHTML = '';
    animais.forEach((animal, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${animal.nome}</td>
            <td>${animal.especie}</td>
            <td class="actions">
                <button onclick="editarAnimal(${index})">Editar</button>
                <button onclick="excluirAnimal(${index})">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editarAnimal(index) {
    const novoNome = prompt('Digite o novo nome do animal:');
    const novaEspecie = prompt('Digite a nova espécie do animal:');
    if (novoNome && novaEspecie) {
        animais[index].nome = novoNome;
        animais[index].especie = novaEspecie;
        atualizarTabela();
    }
}

function excluirAnimal(index) {
    animais.splice(index, 1);
    atualizarTabela();
}

document.getElementById('animalForm').addEventListener('submit', cadastrarAnimal);
atualizarTabela();
