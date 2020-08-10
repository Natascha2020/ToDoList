const input = document.getElementById("new-item");
const addButton = document.getElementById("add-todo");
const boxUl = document.getElementById("list-todo");
const toDo = document.getElementsByTagName("li"); // here we select ALL li items
const editButton = document.getElementsByClassName("edit-todo");
const deleteButton = document.getElementsByClassName("delete-todo");


//Add ToDo-Item with Text and Button

addButton.addEventListener('click', (event) =>{
    event.preventDefault();

    let liWrapper = document.createElement('div');
    liWrapper.className += "li-wrapper d-flex";
    boxUl.appendChild(liWrapper);
    
    let inputText = input.value;
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(inputText);

    liWrapper.appendChild(newLi);
    newLi.className += "form-control";
    let newLiWhole = newLi.appendChild(newLiText); //new li with text

    let editButtonNew=document.createElement('button');
    editButtonNew.className += "edit-todo btn btn-primary";
    editButtonNewText = document.createTextNode('Edit');
    editButtonNew.appendChild(editButtonNewText);
    liWrapper.appendChild(editButtonNew);

    let deleteButtonNew=document.createElement('button');
    deleteButtonNew.className += "delete-todo btn btn-danger";
    deleteButtonNewText = document.createTextNode('Delete');
    deleteButtonNew.appendChild(deleteButtonNewText);
    liWrapper.appendChild(deleteButtonNew);

    newLiWhole.style.marginRight = "4px"; //space between new Buttons

    /* console.log(newLi);
    console.log(newLiText);
    console.log(editButtonNew);
    console.log(deleteButtonNew); */
})

//End