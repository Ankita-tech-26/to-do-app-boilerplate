
let list = [];

let input = document.getElementById('input');


let todolist = document.getElementById('todolist');

function click() {
 
  let todo = input.value;
  
  if (todo !== '') {
 
    list.push(todo);
   
    input.value = '';
    
    
    showList();
  }
}

function showList() {

  todolist.innerHTML = '';


  for (let i = 0; i < list.length; i++) {
  
    let li = document.createElement('li');
    li.textContent = list[i];


    let deleteLink = document.createElement('a');
    deleteLink.textContent = 'Delete';
    deleteLink.setAttribute('href', '#');
    deleteLink.onclick = function() {
    
      deleteItem(i);
    };

    let editLink = document.createElement('a');
    editLink.textContent = 'Edit';
    editLink.setAttribute('href', '#');
    editLink.onclick = function() {
     
      editItem(i);
    };

    let space = document.createTextNode(' ');

    li.appendChild(editLink);
    li.appendChild(space);
    li.appendChild(deleteLink);


    todolist.appendChild(li);
  }
}

function deleteItem(index) {

  list.splice(index, 1);

  showList();
}

function editItem(index) {
  
  let newTodo = prompt('Please insert your new value:', list[index]);

  if (newTodo !== null) {
    list[index] = newTodo;
    
    showList();
  }
}


document.getElementById('button').addEventListener('click', click);
