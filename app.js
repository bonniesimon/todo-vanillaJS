const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const submitBtn = document.querySelector('#submit');
const collection = document.querySelector('.collection');
const filterInput = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');




// const addTaskItem = (item) => {
//     collection.innerHTML = `${collection.innerHTML}<li class="collection-item"><p class="center-align">${item} <button class="btn red delete">X</button></p></li>`;
// }

let todos = [];
todos.push(localStorage.getItem('todos'));
console.log(todos);

loadEventListners();

//Load all event listners
function loadEventListners(){

    //adding tasks
    form.addEventListener('submit' , (e)=> {
        if(taskInput.value == ''){
            alert('Input Task, not emptiness!! xD');
        }else{
            let item = taskInput.value;
            //local storage
            const li = document.createElement('li');
            li.className='collection-item';
            li.appendChild(document.createTextNode(item));
            //creating link
            const link = document.createElement('a');
            link.className='delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(link);
            collection.appendChild(li);
            inputToLocalStorage(taskInput.value);
        }
        document.querySelector('#task').value = '';
        e.preventDefault();
    });

    //Adding tasks to localStorage
    function inputToLocalStorage(task){
        if( todos[0] === null){
            todos = [task];
        }else{
            todos = [...todos , task];
        }
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    //Removing Tasks
    collection.addEventListener('click' , (e)=>{
        // console.log(e.target);
        if(e.target.parentElement.classList.contains('delete-item') || e.target.classList.contains('delete-item') ){
            console.log(e.target.parentElement.parentElement.innerText);
            e.target.parentElement.parentElement.remove();
        }
    });

    //Clear Tasks
    clearBtn.addEventListener('click' , (e) =>{
        while(collection.firstChild){
            collection.removeChild(collection.firstChild);
        }
    })
     

    //Filter Tasks
    filterInput.addEventListener('keyup' , (e)=>{
        const text = e.target.value.toLowerCase();

        document.querySelectorAll('.collection-item').forEach((item)=>{
           if(item.firstChild.textContent.toLowerCase().indexOf(text) != -1){
                item.style.display='block';
           } else{
                item.style.display = 'none';
           }
        })
    });



} /* loadEventListners END*/



//Working of indexOf():

// let word = 'longestwordever!';
// let subString = 'long';
// let output = word.toLowerCase().indexOf(subString);
// console.log(output);





/* 
THINGS I LEARNED:

-how to remove items properly in a todo list
-how to filter through a list of items using indexOf();
-how to clear out all tasks using firstChild and removeChild
-JSON.stringify(obj); to convert an object such as array into string form.
-JSON.parse(str); to convert a string to obj form
*/


