let listaPessoas = [];

function gerarId(){
    return Math.floor(Math.random() * 100);  
}

function cadastrarPessoa(){
    const nome = prompt("Digite o nome: ");
    const idade = prompt("Digite a idade: ");
    const cidade = prompt("Digite a cidade: ");
    const curso = prompt("Digite o curso: ")

    const pessoa = {nome, idade, cidade, curso};
    pessoa.id = gerarId();

    console.log("Pessoa cadastrada: ", pessoa)

    listaPessoas.push(pessoa);
}

function atualizarPessoa() {
    const id = prompt("Digite o Id da pessoa que deseja atualizar: ")
    const pessoa = listaPessoas.find(pessoa => pessoa.id === parseInt(id, 10));

    if(pessoa) {

        const dadosAtualizados = {}

        dadosAtualizados.nome = prompt("Digite o nome atualizado: ");
        dadosAtualizados.idade = prompt("Digite a idade atualizada: ");
        dadosAtualizados.cidade = prompt("Digite a cidade atualizada: ");
        dadosAtualizados.curso = prompt("Digite o curso atualizado: ");
    
        Object.assign(pessoa, dadosAtualizados);
        console.log("Pessoa atualizada: ", pessoa);
    } else {
        console.log("Pessoa não cadastrada no sistema.")
    }
}

function deletarPessoa() {
    const id = prompt("Digite o Id da pessoa que deseja deletar: ");
    const remover = listaPessoas.findIndex(pessoa => pessoa.id === parseInt(id, 10));

    if (remover !== -1) {
        const pessoaRemovida = listaPessoas.splice(remover, 1);
        console.log("Pessoa deletada: ", pessoaRemovida[0]);
    } else {
        console.log("Pessoa não encontrada na lista.");
    }
}

function listarPessoas(){
    console.log(listaPessoas);
    return listaPessoas;
}