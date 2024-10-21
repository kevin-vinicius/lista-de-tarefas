import initTarefaRealizada from "./tarefaRealizada.js"
export default function initNovaTarefa() {
  const form = document.querySelector('form')
  const input = document.querySelector('#caixaDTexto')
  const listaDTarefas = document.querySelector('[data-areacontainer="areaContainer"]')

  

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const mensagem = input.value;
    const novaDiv = document.createElement('div');
    novaDiv.className = 'tarefa';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = "task_completed"
    checkbox.className = 'marcador';

    const paragrafo = document.createElement('p')
    paragrafo.innerText = mensagem

    const lixeira = document.createElement('button');
    lixeira.className = 'lixeira'
    lixeira.innerText = '🗑️'

    lixeira.addEventListener('click', function () {
      listaDTarefas.removeChild(novaDiv); 
    });

    checkbox.addEventListener('change', initTarefaRealizada());

    novaDiv.appendChild(checkbox)
    novaDiv.appendChild(paragrafo)
    novaDiv.appendChild(lixeira)

    listaDTarefas.appendChild(novaDiv)

    input.value = ''
  })
}

