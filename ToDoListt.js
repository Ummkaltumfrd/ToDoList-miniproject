   const toDo=[{
      name:'cooking',
      date:'01/02/2004'
     },{
      name:'clean dishes',
      date:'01/02/2004'
     }];
     const todo= document.querySelector('.js-todo');
    
   
  
showTheList();

  function handleInputKeydown(event){
    if(event.key==='Enter'){
      AddToDo();
    }
  }


  function AddToDo(){
    const name =document.querySelector('.js-todo-input').value;
    const date =document.querySelector('.js-todoTime-input').value;

    if(!name){
      alert('You have to enter something');
      return;
    }
      toDo.push({name,date});
      showTheList();
      document.querySelector('.js-todo-input').value='';
      document.querySelector('.js-todoTime-input').value='';
   }

   function   showTheList(){
    let TODOinnerHTML='';
    toDo.forEach((item,index)=>{
         TODOinnerHTML+=` <div class="container">
    <div class="text-content">
      <div>${item.name}</div>
      <div>${item.date}</div>
    </div>
    <button class="delete-btn" onclick="removeTodo(${index})">Delete</button>
  </div>
               
         `;
    })
      todo.innerHTML=TODOinnerHTML;
   }


   function removeTodo(index){

        toDo.splice(index,1);
        showTheList();
   }