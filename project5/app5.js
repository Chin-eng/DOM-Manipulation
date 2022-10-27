myList = []

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myList"))


if (leadFromLocalStorage) {  
    myList = leadFromLocalStorage;
    render(myList);
}

//event listerer for add button

// addTask.addEventListener('click', function() {

//     let task = document.createElement('div')
//     task.classList.add('task')
    

//     let li = document.createElement('li')
//     li.innerText = `${inputTask.value}`
  
//     task.appendChild(li);


//     let checkButton = document.createElement("button")
//     checkButton.innerHTML = '<i class = "fa-solid fa-check">'
//     checkButton.classList.add('checkTask')
//     task.appendChild(checkButton)

//     let deleteButton = document.createElement("button")
//     deleteButton.innerHTML = '<i class = "fa-solid fa-trash-can">'
//     deleteButton.classList.add('deleteTask')
//     task.appendChild(deleteButton)

//     if (inputTask.value === " ") {
//         alert('Please Enter a Task')
//     } else {
//         taskContainer.appendChild(task);
//     }

//     inputTask.value = "";

//     checkButton.addEventListener('click', function() {
//         checkButton.parentElement.style.textDecoration = "line-through"
//     })

//     deleteButton.addEventListener('click', function(e) {
//         let target = e.target;
        
//         console.log(target.parentElement)

//         target.parentElement.remove()
{/* <i class = "fa-solid fa-check"></i>
<i class = "fa-solid fa-trash-can"></i> */}

//     })

// })

function render(leads) {
    let listItems = " "
    for (let i = 0; i < leads.length; i++) {
        listItems += 
            `<li class= "task"> 
                ${leads[i]} 
                <button class="checkTask"> 
                    <i class = "fa-solid fa-check"></i>
                <button class = "deleteTask" onclick = "deleteButton(${i})"> 
                    <i class = "fa-solid fa-trash-can"></i>
            </li>`
    }
    taskContainer.innerHTML = listItems
}


addTask.addEventListener('click', function() {
    
    if (inputTask.value === "") {
        alert('Please Enter a Task')
    } 

    myList.push(inputTask.value)
    inputTask.value = ""
    localStorage.setItem("myList", JSON.stringify(myList))
    console.log(leadFromLocalStorage)
    render(myList)
    
    
    const checkButton = document.querySelectorAll(".checkTask");
    if (checkButton.length == 1) {
        checkButton[0].addEventListener('click', function() {
            checkButton[0].parentElement.style.textDecoration = "line-through"
    })
    }
    for (i = 0; i < checkButton.length; i++) {
        checkButton[i].addEventListener('click', function() {
            this.parentElement.style.textDecoration = "line-through"
        }) 
    }

})

function deleteButton(index) {
    myList.splice(index, 1);
    localStorage.setItem("myList", JSON.stringify(myList));
    render(myList);
}








