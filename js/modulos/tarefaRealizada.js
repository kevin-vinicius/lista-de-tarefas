// modulos/enviar.js
export default function initTarefaRealizada() {
  const listaDTarefas = document.querySelector('[data-areaContainer="areaContainer"]');

 
  function riscarTexto(event) {
    const checkbox = event.target; 
    const tarefaDiv = checkbox.closest('.tarefa'); 
    const paragrafo = tarefaDiv.querySelector('p'); 

    
    paragrafo.classList.toggle('riscado', checkbox.checked);
  }

  
  const checkboxesExistentes = listaDTarefas.querySelectorAll('input.marcador');
  checkboxesExistentes.forEach(checkbox => {
    checkbox.addEventListener('change', riscarTexto);
  });

  
  return riscarTexto;
}


