//get exist items
let addBtn = document.getElementById('addBtn');
let contentDiv = document.querySelector('.content')
let inputFeild = document.querySelector("input[type='text']")
    //create elements
let item = document.createElement('div');
let taskDiv = document.createElement('div');
let DellBtn = document.createElement('button');
//preparing item to be added
DellBtn.innerText = 'Delete';
DellBtn.className = 'btnStyle';
item.className = 'itemStyle';
taskDiv.className = 'taskStyle';
item.appendChild(taskDiv);
item.appendChild(DellBtn);

//local storage initialize
let existElements = window.localStorage.getItem('items');
if (existElements) {
    existElements.split(',').forEach(e => {
        taskDiv.innerText = e;
        let tmp = item.cloneNode(true);
        contentDiv.appendChild(tmp);
    });
} else window.localStorage.setItem('items', '');
//localStorage.clear();
// onclick
addBtn.addEventListener('click', function(event) {
    let value = inputFeild.value;
    if (value.length == 0) return;
    value = value.split('').filter((e => e !== ',')).join('');
    taskDiv.innerText = value;
    let tmp = item.cloneNode(true);
    contentDiv.appendChild(tmp);
    if (window.localStorage.items.length)
        window.localStorage.items += ',' + value;
    else
        window.localStorage.items += value;
    inputFeild.value = "";
});

contentDiv.addEventListener('click', function(e) {
    if (e.target.classList.contains('btnStyle')) {
        let val = e.target.parentElement.querySelector('.taskStyle').innerText;
        let tmp = window.localStorage.items;
        if (tmp.includes(',' + val))
            window.localStorage.items = window.localStorage.items.replace(',' + val, '');
        else
            window.localStorage.items = window.localStorage.items.replace(val, '');
        e.target.parentElement.remove();

    }
});