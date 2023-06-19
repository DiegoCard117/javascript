const addTask = () => {
    const taskTitle = document.querySelector('#tasks').value
    if (taskTitle) {
        //clona o template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)

        //add o titulo da tarefa
        newTask.querySelector('.task-title').textContent = taskTitle

        //remove a classe inutilizada
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adiciona tarefa
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)

        //remover a tarefa
        const remove = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this)
        })

        //evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this)
        })

        // limpar o input para nova task
        document.querySelector('#tasks').value = ''
    }
}
//funçao para remover
function removeTask(task) {
    task.parentNode.remove(true)
}

//funçao para completar 

function completeTask(task) {
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle('li-done')
}



const btnAdd = document.querySelector('#btn-add')
const task = document.querySelector('#tasks').value

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    addTask()
})



