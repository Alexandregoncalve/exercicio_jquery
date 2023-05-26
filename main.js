$(document).ready(function() {
    $('#form-atividade').submit(function(e) {
      e.preventDefault();
  
      let nomeTarefa = $('#nome-tarefa').val();
  
      let tarefaExistente = false;
      $('tbody tr').each(function() {
        const tarefa = $(this).find('td').text();
        if (tarefa === nomeTarefa) {
          tarefaExistente = true;
          return false;
        }
      });
  
      if (tarefaExistente) {
        alert('Essa tarefa já foi cadastrada.');
        return;
      }
  
      let novaLinha = $('<tr>').append($('<td>').text(nomeTarefa));
  
      novaLinha.click(function() {
        $(this).toggleClass('riscado');
      });
  
      $('tbody').append(novaLinha);
  
      $('#nome-tarefa').val('');
    });
  });

  novaLinha.click(function() {
    $(this).toggleClass('riscado');
  });
  