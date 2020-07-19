let list = document.querySelector('ul');
let item = document.querySelector('input');
let add = document.getElementById('b');

function addItem(){
  if(item.value.trim() != ""){
    list.innerHTML +=
    `<li>
            <label>
                ${item.value}
            </label>
            <div>
              <button type = "submit" class = "chk"> 
                check 
              </button>
              <button type = "submit" class = "del"> 
                delete 
              </button>
            </div>
    </li>`;
  }
  item.value = "";
}

function chkItem(){
  let newItem = event.target.parentNode.parentNode;
  if(newItem.querySelector('label').style.textDecoration == "none" || newItem.querySelector('label').style.textDecoration == ""){
    newItem.querySelector('label').style.textDecoration = "line-through";
  }else{
    newItem.querySelector('label').style.textDecoration = "none";
  }
}

function delItem(){
  let newItem = event.target.parentNode.parentNode;
  newItem.remove();
}

function init(){

  add.addEventListener('click', (event) => {
    event.preventDefault();
    addItem();
  });

  list.addEventListener('click', (event) => {
     event.preventDefault();
     if(event.target.matches('.del')){
       delItem();
     }else if(event.target.matches('.chk')){
       chkItem();
     }
   });

}

init();