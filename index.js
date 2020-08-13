// This index.js file is structured in the following ways:

//   - Constant Declaration: declarations of most importants elements;
//   - Add function: function that insert a new toDo element, edit and delete buttons. It contains also edit and delete
//     function for new items added to the list;
//   - Edit function: function that modify an existing toDo by pressing the edit button;
//   - Delete function: function that deletes an existing toDo by pressing the delete button;
//

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// - Constant Declaration -

const input = document.getElementById("new-item");
const addButton = document.getElementById("add-todo");
const boxUl = document.getElementById("list-todo");
const toDo = document.getElementsByTagName("li");
const editButton = document.getElementsByClassName("edit-todo");
const deleteButton = document.getElementsByClassName("delete-todo");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// - Add function -

// Listen the addButton
addButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Create div elements
  let liWrapper = document.createElement("div");
  liWrapper.className += "li-wrapper d-flex";
  boxUl.appendChild(liWrapper);

  // Create li elements
  let inputText = input.value;
  let newLi = document.createElement("li");
  let newLiText = document.createTextNode(inputText);

  // Assign a class name to new li elements
  liWrapper.appendChild(newLi);
  newLi.className += "form-control";
  let newLiWhole = newLi.appendChild(newLiText);

  // New edit button
  let editButtonNew = document.createElement("button");
  editButtonNew.className += "edit-todo btn btn-primary";
  editButtonNew.setAttribute("type", "button");
  editButtonNewText = document.createTextNode("Edit");
  editButtonNew.appendChild(editButtonNewText);
  liWrapper.appendChild(editButtonNew);

  // New delete button
  let deleteButtonNew = document.createElement("button");
  deleteButtonNew.className += "delete-todo btn btn-danger";
  deleteButtonNew.setAttribute("type", "button");
  deleteButtonNewText = document.createTextNode("Delete");
  deleteButtonNew.appendChild(deleteButtonNewText);
  liWrapper.appendChild(deleteButtonNew);

// - Delete function addressing new added items -
  
  // This alert user about removing new items after clicking on delete button
  deleteButtonNew.addEventListener("click", (e) => {
    if (confirm("Sure you are done?")) {
      let remove = e.target.parentElement;
      boxUl.removeChild(remove);
    }
  });

  // This make li editable once clicked on edit button and focus the li tag
  editButtonNew.addEventListener("click", (e) => {
    let newText = e.target.parentElement.firstChild;
    newText.contentEditable = true;
    newText.focus();
  });

  // This prevent text changes of the edit button itself once clicked in
  editButtonNew.addEventListener("dblclick", (e) => {
    let newText = e.target.parentElement.firstChild;
    newText.contentEditable = false;
  });
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// - Edit function -

// This make existing li tags editable once clicked on edit button, also focus the li tag
Object.keys(editButton).forEach((key) => {
  editButton[key].addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-todo")) {
      let editorText = e.target.previousSibling.previousSibling;
      editorText.contentEditable = true;
      editorText.focus();
    }
  });
});

// This prevent text changes of the edit button itself once clicked in
Object.keys(editButton).forEach((key) => {
  editButton[key].addEventListener("dblclick", (e) => {
    if (e.target.classList.contains("edit-todo")) {
      let editorText = e.target.previousSibling.previousSibling;
      editorText.contentEditable = false;
    }
  });
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// - Delete function -

// This alert user about removing items after clicking on delete button
Object.keys(deleteButton).forEach((key) => {
  deleteButton[key].addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-todo")) {
      if (confirm("Sure you are done?")) {
        let remove = e.target.parentElement;
        boxUl.removeChild(remove);
      }
    }
  });
});

// End of the index.js file
