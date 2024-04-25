const localStorageKey = 'to-do-list-gn';

function validateIfExistNewTask()
{
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let inputValue = document.getElementById('input-new-task').value;
  let exists = values.find(x => x.name == inputValue)
  return !exists ? false : true
}



function newTask() {
  let input = document.getElementById('input-new-task');
  input.style.border = ' '
  // Validação
  if (!input.value) {
    input.style.border = '1px solid red'
    alert('Enter something to add to your list');
  }
  else if(validateIfExistNewTask()){
    alert ('There is already a task with that name')
  }
  
  else {
    // Incrementar ao localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value
    });
    // Salvar de volta no localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
  }
  input.value =''
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  let list = document.getElementById('to-do-list');
  list.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
  for (let i = 0; i < values.length; i++) {
    // Adiciona cada item à lista
    list.innerHTML += `<li>${values[i]['name']} <button id= 'btn-ok' onclick='removeItem(${i})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
  </svg></button></li>`;
  }
}

function removeItem(index) {
  let values = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  showValues();
}
