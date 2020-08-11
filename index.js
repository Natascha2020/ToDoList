const input = document.getElementById("new-item");
const addButton = document.getElementById("add-todo");
const boxUl = document.getElementById("list-todo");
const toDo = document.getElementsByTagName("li"); // here we select ALL li items
const editButton = document.getElementsByClassName("edit-todo");
const deleteButton = document.getElementsByClassName("delete-todo");

// fuction Edit

Object.keys(editButton).forEach(function (key) {
  addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-todo")) {
      let editorText = e.target.previousSibling.previousSibling;
      editorText.contentEditable = true;
    }
    if (editorText.innerText.trim().length >= 10) {
      e.preventDefault();
    }
  });
});

Object.keys(editButton).forEach(function (key) {
  addEventListener("dblclick", (e) => {
    if (e.target.classList.contains("edit-todo")) {
      let editorText = e.target.previousSibling.previousSibling;
      editorText.contentEditable = false;
    }
  });
});

// functions Delete

Object.keys(deleteButton).forEach(function (key) {
  addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-todo")) {
      if (confirm("Sure you are done?")) {
        let remove = e.target.parentElement;
        boxUl.removeChild(remove);
      }
    }
  });
});

// Add Input and Buttons

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  let liWrapper = document.createElement("div");
  liWrapper.className += "li-wrapper d-flex";
  boxUl.appendChild(liWrapper);

  let inputText = input.value;
  let newLi = document.createElement("li");
  let newLiText = document.createTextNode(inputText);

  liWrapper.appendChild(newLi);
  newLi.className += "form-control";
  let newLiWhole = newLi.appendChild(newLiText); //new li with text

  let editButtonNew = document.createElement("button");
  editButtonNew.className += "edit-todo btn btn-primary";
  editButtonNewText = document.createTextNode("Edit");
  editButtonNew.appendChild(editButtonNewText);
  liWrapper.appendChild(editButtonNew);

  let deleteButtonNew = document.createElement("button");
  deleteButtonNew.className += "delete-todo btn btn-danger";
  deleteButtonNewText = document.createTextNode("Delete");
  deleteButtonNew.appendChild(deleteButtonNewText);
  liWrapper.appendChild(deleteButtonNew);

  /* console.log(newLi);
    console.log(newLiText);
    console.log(editButtonNew);
    console.log(deleteButtonNew); */
});

//End
