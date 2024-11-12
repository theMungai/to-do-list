const inputElement = document.querySelector("#input-element");
const addButton = document.querySelector(".fa-circle-plus")
const listContainer = document.querySelector("#container");
const dateInput = document.querySelector(".due-date")
const toDoList = [{
    name:" ",
    dueDate:" "
},{
    name : "",
    dueDate : " "
}]

renderTodoList ()

function renderTodoList (){
    let toDoListHTML = "";

    // looping through an array
    for(let i = 0; i < toDoList.length; i++){
        const todoObject = toDoList[i]
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate
        const { name,dueDate } = todoObject /* destructuring */
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>    
                <i class="fa-solid fa-trash-can" onclick ="
                    toDoList.splice(${i}, 1);
                    renderTodoList ();">            
                </i>
            </p> 
        `;
        toDoListHTML += html
    }

    listContainer.innerHTML = toDoListHTML
}


function addTodo(){
    const dueDate = dateInput.value
    const inputValue = inputElement.value;
    toDoList.push({
        name: inputValue,
        dueDate: dueDate

    }
        
    )

    inputElement.value = "";

    renderTodoList () 
    
    if(!inputElement.value){
        alert("Kindly enter your tasks")
    }
}
