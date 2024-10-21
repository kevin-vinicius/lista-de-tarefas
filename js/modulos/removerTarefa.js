export default function initRemoverTarefa(){

}

const listaDTarefas = document.querySelector('[data-areacontainer="areaContainer"]')

listaDTarefas.addEventListener('click', function (event) {
  if (event.target.classList.contains('lixeira')) {
    const tarefaDiv = event.target.closest('.tarefa'); 

   
    if (tarefaDiv && listaDTarefas.contains(tarefaDiv)) {
      listaDTarefas.removeChild(tarefaDiv); 
    }
  }
});