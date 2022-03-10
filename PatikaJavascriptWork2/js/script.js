const task=document.querySelector('#task');
const list=document.querySelector("#list");
const items=JSON.parse(localStorage.getItem('items'))==null?[]:JSON.parse(localStorage.getItem('items'));
const isDone=JSON.parse(localStorage.getItem('isDone'))==null?[]:JSON.parse(localStorage.getItem('isDone'));
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>`    

function addedListToast(hasProblem=false)  {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl) 
    });
    if(!hasProblem)toastList[0].show();
    else toastList[1].show();
    console.log(toastList);
  };

const item=document.querySelector('#liveToast');
console.log(item)
getItemsFromStorage();

function getItemsFromStorage(){
    list.innerHTML="";
    
    for(let i=0;i<items.length;i++){
        const li=document.createElement('li');
        const removeI=document.createElement('i');
        removeI.innerHTML=svg;
        removeI.classList="float-right mr-1"
        removeI.addEventListener('click',remove);
        if(isDone[i]){
            li.classList='checked'
        }else{
            li.classList=''

        }
        li.innerHTML=`${items[i]}`
        li.id=i;
        li.append(removeI);
        li.addEventListener('click', jobDone,true)
        list.append(li);
    }
}
function remove(e){
    items.splice(this.parentNode.id,1);
    isDone.splice(this.parentNode.id,1);
    localStorage.setItem('isDone',JSON.stringify(isDone));
    localStorage.setItem('items',JSON.stringify(items));
    getItemsFromStorage();
    e.preventDefault();
}

function jobDone(e){
    if(e.target==this){
    isDone[this.id]=!isDone[this.id];
    localStorage.setItem('isDone',JSON.stringify(isDone));
    getItemsFromStorage();
    }
}

function newElement(){
    if(task.value.trim()!==''){
        addedListToast();

        const li=document.createElement('li');
        const removeI=document.createElement('i');
        removeI.innerHTML=svg;
        removeI.classList="float-right mr-1"
        removeI.addEventListener('click',remove);
        li.innerHTML=`${task.value}`
        li.append(removeI);
        li.id=items.length;
        li.addEventListener('click', jobDone,false)
        list.append(li);
        items.push(task.value);
        isDone.push(false);
        task.value="";
        localStorage.setItem('items',JSON.stringify(items));
        localStorage.setItem('isDone',JSON.stringify(isDone));
    }else{
        addedListToast(true);

    }
}
