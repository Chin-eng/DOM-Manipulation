const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


//event listerer for add button

addTask.addEventListener('click', function() {

    let task = document.createElement('div')
    task.classList.add('task')
    console.log(task)

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    console.log(li);
    task.appendChild(li);


    let checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class = "fa-solid fa-check">'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can">'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)

    if (inputTask.value === " ") {
        alert('Please Enter a Task')
    } else {
        taskContainer.appendChild(task);
    }
})