const all_status = document.querySelectorAll('.status');
const modal = document.querySelector('.modal');
const open_modal = document.querySelector('.open_modal');
const close_modal = document.querySelector('.close_modal');
const input = document.querySelector('.modal .body input[type=text]');
const add_todo = document.querySelector('.modal .body input[type=submit]');

// EVENT LISTENERS

open_modal.addEventListener('click', openModalFunc);
close_modal.addEventListener('click', closeModalFunc);
add_todo.addEventListener('click', createTodoFunc);
all_status.forEach(status=>{
    status.addEventListener('dragover', dragOverFunc);
    status.addEventListener('dragenter', dragEnterFunc);
    status.addEventListener('dragleave', dragLeaveFunc);
    status.addEventListener('drop', dropFunc);
    status.addEventListener('click',  removeTodoFunc);
});

// FUNCTIONS

function openModalFunc(){
    modal.classList.add('active');
}
function closeModalFunc(){
    modal.classList.remove('active');
}
function createTodoFunc(e){
    e.preventDefault();
    const div = document.createElement('div');
    div.classList.add('todo');
    div.setAttribute('draggable', 'true');
    const span1 = document.createElement('span');
    span1.innerText = input.value;
    const span2 = document.createElement('span');
    span2.classList.add('close');
    span2.innerText = '\u00D7';
    div.appendChild(span1);
    div.appendChild(span2);
    div.addEventListener('dragstart', dragStartFunc);
    div.addEventListener('dragend', dragEndFunc);
    all_status[0].appendChild(div);
    input.value = '';
   // closeModalFunc();
}
function removeTodoFunc(e){
    if(e.target.classList[0] == 'close'){
        e.target.parentElement.remove();
    }
}

// TODO EVENTS

let draggable_todo = null;
function dragStartFunc(){
    draggable_todo = this;
}
function dragEndFunc(){
    draggable_todo = null;
}

// STATUS EVENTS

function dragOverFunc(e){
    e.preventDefault();
}
function dragEnterFunc(){
    this.style.border = '5px gray dotted';
}
function dragLeaveFunc(){
    this.style.border = 'none';
}
function dropFunc(){
    this.appendChild(draggable_todo);
    this.style.border = 'none';
}