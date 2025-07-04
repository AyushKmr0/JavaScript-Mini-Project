let selectedPriority = '';

const priorityItems = document.querySelectorAll('.priority');
priorityItems.forEach((items) => {
    items.addEventListener("click", function () {
        priorityItems.forEach((p) => p.classList.remove('activePriority'));

        this.classList.add('activePriority');
        selectedPriority = this.innerText;
    });
});

document.querySelector('#addTask').onclick = function () {
    const body = document.body;
    const appContent = document.querySelector('.appContent');
    const taskTitle = document.querySelector('.taskTitle');
    const taskDescription = document.querySelector('.taskDescription');
    const taskList = document.querySelector('#taskList');
    const noTextMsg = document.querySelector('#noTextMsg');
    const model = document.querySelector('#model');
    const closeModel = document.querySelector('.closeModel');
    const titleModel = document.querySelector('.titleModel');
    const descModel = document.querySelector('.descModel');


    if (taskTitle.value.trim().length == 0 || taskDescription.value.trim().length == 0) {
        noTextMsg.style.display = 'flex';
        alert("Please enter both the fileds");
        return;
    }

    if (taskTitle.value.trim().length > 20) {
        alert("Task title should be less then 20 character");
        return;
    }

    noTextMsg.style.display = 'none';

    // taskContainer --child--> textContainer, button
    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer';

    // textContainer --child--> label, textSpan
    const textContainer = document.createElement('div');
    textContainer.className = 'textContainer';

    // label --child--> input, span
    const inputLabel = document.createElement('label');
    inputLabel.className = 'roundcheckboxWrapper';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const checkmark = document.createElement('span');
    checkmark.className = 'checkmark';

    inputLabel.appendChild(checkbox);
    inputLabel.appendChild(checkmark);

    const textSpan = document.createElement('span');
    textSpan.className = 'tasktext';
    textSpan.innerText = taskTitle.value.trim();

    textContainer.appendChild(inputLabel);
    textContainer.appendChild(textSpan);

    const taskBottom = document.createElement('div');
    taskBottom.className = 'taskBottom';

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete';
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';

    const taskDate = document.createElement('span');
    taskDate.className = 'date';
    const date = new Date();
    taskDate.innerText = date.toDateString();

    taskBottom.appendChild(deleteBtn);
    taskBottom.appendChild(taskDate);


    taskContainer.appendChild(textContainer);
    taskContainer.appendChild(taskBottom);

    if (selectedPriority == 'High Priority') {
        taskContainer.style.borderBottom = '8px solid red';
    }
    else if (selectedPriority == 'Medium Priority') {
        taskContainer.style.borderBottom = '8px solid orange';
    }
    else if (selectedPriority == 'Low Priority') {
        taskContainer.style.borderBottom = '8px solid green';
    }

    // add task to taskList
    taskList.appendChild(taskContainer);


    // checkbox toggle
    checkbox.onclick = function () {
        textSpan.classList.toggle('complete');
    };

    // delete
    deleteBtn.onclick = function () {
        taskContainer.remove();

        if (document.querySelectorAll('.textContainer').length == 0) {
            noTextMsg.style.display = 'flex';
        }
    };

    // open models
    const currentTitle = taskTitle.value.trim();
    const currentDescription = taskDescription.value.trim();

    textSpan.onclick = function () {
        titleModel.innerText = currentTitle;
        descModel.innerText = currentDescription;

        model.classList.remove('active');
        body.classList.add('no-scroll');
        appContent.classList.add('disable-interaction');
    };


    closeModel.onclick = function () {
        model.classList.add('active');
        body.classList.remove('no-scroll');
        appContent.classList.remove('disable-interaction');
    };

    taskTitle.value = '';
    taskDescription.value = '';
    priorityItems.forEach((p) => p.classList.remove('activePriority'));

};
