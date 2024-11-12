const inputElement = document.querySelector("#input-element");
const addButton = document.querySelector("#add-button")
const listContainer = document.querySelector("#container")
const toDoList = []

renderTodoList ()

function renderTodoList (){
    let toDoListHTML = "";

    // looping through an array
    for(let i = 0; i < toDoList.length; i++){
        const todo = toDoList[i]
        const html = `<p>${todo} <button> Delete</button></p> `;
        toDoListHTML += html
    }

    listContainer.innerHTML = toDoListHTML
}


function addTodo(){
    const inputValue = inputElement.value;
    toDoList.push(inputValue)

    renderTodoList ()

    inputElement.value = ""
}
