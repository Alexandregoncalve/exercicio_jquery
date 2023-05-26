EXPLICAÇÃO: 
$(document).ready(function() {
$(document).ready()
// é uma função que é executada assim que o documento HTML é totalmente carregado. 
//Ela garante que o código dentro dela só será executado quando a estrutura HTML estiver pronta para ser manipulada pelo JavaScript.

$('#form-atividade').submit(function(e) {
  e.preventDefault();

$('#form-atividade') //seleciona o elemento HTML com o 
ID "form-atividade". //Neste caso, é o formulário que será submetido.
.submit() //é uma função de manipulador de eventos que é acionada quando o formulário é submetido.
function(e) { ... } //é a função de callback que será executada quando o evento de envio do formulário ocorrer.
e.preventDefault(); //é usado para prevenir o comportamento padrão do envio do formulário, que é atualizar a página.

let nomeTarefa = $('#nome-tarefa').val();
let nomeTarefa // é uma declaração de uma variável local que armazenará o valor do campo de entrada de texto com o ID "nome-tarefa".
$('#nome-tarefa').val() // obtém o valor atual do campo de entrada de texto com o ID "nome-tarefa".

let tarefaExistente = false;
$('tbody tr').each(function() {
  const tarefa = $(this).find('td').text();
  if (tarefa === nomeTarefa) {
    tarefaExistente = true;
    return false;
  }
});
let //tarefaExistente é uma declaração de uma variável local que é inicializada como falsa e será usada para verificar se a tarefa já existe na tabela.
$('tbody tr') // seleciona todas as linhas (<tr>) dentro do elemento <tbody>.
.each(function() { ... }) // é usado para iterar sobre cada linha encontrada.
const tarefa = $(this).find('td').text();// encontra a célula (<td>) dentro da linha atual e obtém o texto contido nela.
if (tarefa === nomeTarefa) { ... } // verifica se o texto da célula é igual ao nome da tarefa fornecido.
Se // a tarefa já existir na tabela, a variável tarefaExistente é definida como verdadeira e o loop é interrompido usando return false;.

if (tarefaExistente) {
  alert('Essa tarefa já foi cadastrada.');
  return;
}
Se // a tarefa já existir na tabela, exibe um alerta informando ao usuário que a tarefa já foi cadastrada e interrompe a execução do código usando return;.

let novaLinha = $('<tr>').append($('<td>').text(nomeTarefa));
let // novaLinha é uma declaração de uma variável local que cria um novo elemento de linha (<tr>) e adiciona uma célula (<td>) dentro dela com o texto da tarefa fornecida.

novaLinha.click(function() {
  $(this).toggleClass('riscado');
});
// Adiciona um manipulador de eventos de clique à nova linha. Quando a linha for clicada, a função de callback será executada.
$(this) // refere-se à linha atual que foi clicada.
.toggleClass('riscado') // adiciona ou remove a classe CSS "riscado" à linha, alternando seu estado.

$('tbody').append(novaLinha);
$('tbody') // seleciona o elemento <tbody> onde as linhas da tabela estão localizadas.
.append( //novaLinha) insere a nova linha no final do elemento <tbody>, tornando-a parte da tabela.

$('#nome-tarefa').val(''); //Limpa o campo de entrada de texto com o ID "nome-tarefa", definindo seu valor como uma string vazia.
