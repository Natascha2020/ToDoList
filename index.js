const input = document.getElementById("new-item");
const addButton = document.getElementById("add-todo");
const boxUl = document.getElementById("list-todo");
const toDo = document.getElementsByTagName("li"); // here we select ALL li items
const editButton = document.getElementsByClassName("edit-todo");
const deleteButton = document.getElementsByClassName("delete-todo");


addButton.addEventListener('click', (event) =>{
    event.preventDefault();
    let inputText = input.value;
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(inputText);

    boxUl.appendChild(newLi);
    let newLiWhole = newLi.appendChild(newLiText); //new li with text

    let editButtonNew=document.createElement('button');
    editButtonNew.className += "edit-todo";
    editButtonNewText = document.createTextNode('Edit');
    editButtonNew.appendChild(editButtonNewText);
    boxUl.appendChild(editButtonNew);

    let deleteButtonNew=document.createElement('button');
    deleteButtonNew.className += "delete-todo";
    deleteButtonNewText = document.createTextNode('Delete');
    deleteButtonNew.appendChild(deleteButtonNewText);

    boxUl.appendChild(deleteButtonNew);



    console.log(newLi);
    console.log(newLiText);
    console.log(editButtonNew);
    console.log(deleteButtonNew);
})