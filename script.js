document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
}
