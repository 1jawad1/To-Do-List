let submit = document.querySelector('#submit');
let reset = document.querySelector('#delete');
let element = document.getElementById('element');
let list = document.getElementById('ul');

let toDoList = []


submit.addEventListener('click', ()=>{
    let value = element.value;
    if(value && !(toDoList.includes(value))){
        toDoList.push(value)
        createElements()
    }
})


function createElements(){
        list.innerHTML = '';

        toDoList.forEach(e => {
            let li = document.createElement('li');
            li.setAttribute('id', toDoList.indexOf(e))
            li.innerHTML = e;
            li.classList.add('li')


            let del_btn =  document.createElement('button');
            del_btn.innerHTML = 'x';
            deleteElement(del_btn)
            del_btn.classList.add('del_btn')
            li.appendChild(del_btn)
            
            let edit_btn =  document.createElement('button');
            edit_btn.innerHTML = 'edit';
            editElement(edit_btn)
            edit_btn.classList.add('edit_btn')
            li.appendChild(edit_btn)
            
            list.appendChild(li)

        });

}

function deleteElement(e){
    e.addEventListener('click', ()=>{
        toDoList.splice(parseInt(e.parentElement.getAttribute('id')), 1)
        createElements()
    })
}

function editElement(e){
    e.addEventListener('click', ()=>{
        let p = prompt("enter the new value : ")
        let value = p ? p : toDoList[parseInt(e.parentElement.getAttribute('id'))]
        toDoList[parseInt(e.parentElement.getAttribute('id'))] = value
        createElements()
    })
}


reset.addEventListener('click', ()=>{
        toDoList = []
        createElements()
})



