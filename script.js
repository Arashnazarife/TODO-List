let myform = document.querySelector('#form')
let todotext = document.querySelector('.todo')
let number = 0

myform.addEventListener('submit' , function(){
if (todotext.value != "")
{

    let listitem = document.createElement('li')
    listitem.innerHTML = todotext.value

    let taskslist = document.querySelector('#tasks ul')
    taskslist.appendChild(listitem)
    todotext.value = ''
    number = number + 1
    document.querySelector('#total-count').innerHTML = number 
}else{
    alert('type somfing....')
}

})

/*
        let listitem = document.createElement('li')
        listitem.innerHTML = todotext.value
    
        let taskslist = document.querySelector('#tasks ul')
        taskslist.appendChild(listitem)

*/