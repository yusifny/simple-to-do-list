let addBtn = document.getElementById('add-btn');
let input = document.getElementById('input');
let infoText = document.getElementById('info');

addBtn.addEventListener('click', () => {
    //checks if input is whitespace, if so alert is thrown
    if(!input.value.trim()) 
    return Swal.fire('Enter task a title',`Please, don't leave required fields blank!`);
    // if input is legit, task is created
    let task = document.createElement('div');
    task.classList.add('task');
    let span = document.createElement('span');
    span.classList.add('span');
    task.appendChild(span);
    span.innerText = input.value;
    let spanIcon = document.createElement('span');
    spanIcon.innerHTML = '<span class="iconify trash-icn" data-icon="fa6-regular:trash-can" style="color: white;"></span>';
    span.appendChild(spanIcon);
    document.querySelector('.foot-sec').appendChild(task);
    infoText.remove();
})