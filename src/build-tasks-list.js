(async () => {
    const task =await getTasks();
    console.log(task);

    if(task.length){
const div  = document.getElementById('task');
const loadingDiv = div.childNodes[1];

const ul = document.createElement('ul');
const li = document.createElement('li');
div.replaceChild(ul,loadingDiv);
task.map(task) => {
li.className = 'task-item';
const block = document.createElement('div');
block.className = 'task-item-block';
const checkboxSpan =document.createElement('span');
const checkbox =  document.createElement('input');
checkbox.setAttribute('type','checkbox');
checkboxSpan.className = 'task- checkbox';
checkboxSpan.appendChild(checkbox);
const nameSpan = document.createElement('span');
nameSpan.className = 'task-name';
nameSpan.innerText = task.name;
const statusSpan = document.createElement('span');
statusSpan.className = 'task-status';
statusSpan.innerText = task.status;
const dateSpan = document.createElement('span');
dateSpan.className = 'task-date';
dateSpan.innerText = task.create_date;

block.appendChild(checkboxSpan);
block.appendChild(nameSpan);
block.appendChild(statusSpan);
block.appendChild(dateSpan);
li.appendChild(block);
ul.appendChild(li);

};
}
})();

