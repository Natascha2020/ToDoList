const input = document.getElementById("new-item");
const addButton = document.getElementById("add-todo");
const boxUl = document.getElementById("list-todo");
const toDo = document.getElementsByTagName("li"); // here we select ALL li items
const editButton = document.getElementsByClassName("edit-todo");
const deleteButton = document.getElementsByClassName("delete-todo");


// functions Edit



// functions Delete

Object.keys(deleteButton).forEach(function (key){
    addEventListener('click', (e) => {
        let remove = e.target.parentElement;
        boxUl.removeChild(remove);
    })
})


