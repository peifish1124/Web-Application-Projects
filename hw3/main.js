var todo_all = [];
var todo_active = [];
var todo_completed = [];
var index = 0;
var mode = "all";

var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
var footer = document.getElementById("todo-footer");
var total = document.getElementsByClassName("todo-app__total")[0];
var all = document.getElementById("all-button");
var active = document.getElementById("active-button");
var completed = document.getElementById("completed-button");
var clear = document.getElementById("clean-button");
//default
footer.style.display = "none"; 
clear.style.color = "white";
clear.style.background = "white";

function createItem(itemName){
    let liNode = document.createElement("li");
    liNode.setAttribute("class","todo-app__item");

    let leftNode = document.createElement("div");
    leftNode.setAttribute("class","todo-app__checkbox");
    let leftLeftNode = document.createElement("input");
    leftLeftNode.setAttribute("id",index);
    leftLeftNode.setAttribute("type","checkbox");
    leftLeftNode.checked = false;
    let leftRightNode = document.createElement("label");
    leftRightNode.setAttribute("for",index);
    leftNode.appendChild(leftLeftNode); leftNode.appendChild(leftRightNode);

    let middleNode = document.createElement("h1");
    middleNode.setAttribute("class","todo-app__item-detail");
    middleNode.textContent = itemName;

    let rightNode = document.createElement("img");
    rightNode.setAttribute("src","./img/x.png");
    rightNode.setAttribute("class","todo-app__item-x");
    rightNode.setAttribute("onclick","removeItem()");

    liNode.appendChild(leftNode);
    liNode.appendChild(middleNode);
    liNode.appendChild(rightNode);
    return liNode;
}

function countLeft(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] != "" && array[i] != null) count++;
    }
    return count;
}

input.addEventListener("keyup", e => {
    // enter 的 keyCode 是 13
    if(e.keyCode === 13 && e.target.value !== ""){
        todo_all.push(e.target.value);
        todo_active.push(e.target.value);
        let liNode = createItem(e.target.value);
        list.appendChild(liNode);
        e.target.value = "";
        index++;
        total.textContent = `${countLeft(todo_active)} left`;
    }
    if(countLeft(todo_all) >= 1){
        footer.style.display = "flex";
    } else {
        footer.style.display = "none";
    }
});

list.addEventListener("click", e => {
    
    var clickItem = document.getElementById(e.target.id);
    try{
        var itemParent = clickItem.parentNode.parentNode;
        var detail = itemParent.getElementsByClassName("todo-app__item-detail")[0];
        if(e.target.checked){ 
            detail.style["text-decoration"] = "line-through";
            detail.style["opacity"] = 0.5;
            
            let place = todo_all.indexOf(detail.textContent);
            //active-
            todo_active[place] = "";
            //complete+
            todo_completed[place] = detail.textContent;

            total.textContent = `${countLeft(todo_active)} left`;
        } else {
            detail.style["text-decoration"] = "";
            detail.style["opacity"] = 1;

            let place = todo_all.indexOf(detail.textContent);
            //active+
            todo_active[place] = detail.textContent;
            //complete-
            todo_completed[place] = "";

            total.textContent = `${countLeft(todo_active)} left`;
        }
        if(countLeft(todo_completed) != 0){
            clear.removeAttribute("style");
        } else{
            clear.style.color = "white";
            clear.style.background = "white";   
        }
        if(mode == "all"){
            allItem();
        } else if(mode == "active"){
            activeItem();
        } else{
            completedItem();
        }
    } catch(e){
        //do nothing
    }
});

function removeItem(){
    var element = event.target;
    var li = element.parentNode.parentNode;
    var text = element.parentNode.getElementsByClassName("todo-app__item-detail")[0].textContent;
    let place = todo_all.indexOf(text);
    if (place !== -1) {
        todo_all.splice(place, 1);
        todo_active.splice(place, 1);
        todo_completed.splice(place, 1);
     }
     li.removeChild(element.parentNode);
     total.textContent = `${countLeft(todo_active)} left`;
     if(countLeft(todo_all) >= 1){
        footer.style.display = "flex";
    } else {
        footer.style.display = "none";
    }
}

function allItem(){
    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
    for(var i = 0; i < todo_all.length; i++){
        if(todo_active[i] != ""){
            let liNode = createItem(todo_active[i]);
            list.appendChild(liNode);
            index++;
        }
        if(todo_completed[i] != "" && todo_completed[i] != null){
            let liNode = createItem(todo_completed[i]);
            let detail = liNode.getElementsByClassName("todo-app__item-detail")[0];
            detail.style["text-decoration"] = "line-through";
            detail.style["opacity"] = 0.5;
            let box = liNode.getElementsByTagName("input")[0];
            box.checked = true;
            list.appendChild(liNode);
            index++;
        }
    }  
    mode = "all";   
}

function activeItem(){
    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
    for(var i = 0; i < todo_active.length; i++){
        if(todo_active[i] != ""){
            let liNode = createItem(todo_active[i]);
            list.appendChild(liNode);
            index++;
        }
    } 
    mode = "active";  
}

function completedItem(){
    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
    
    for(var i = 0; i < todo_completed.length; i++){
        if(todo_completed[i] != "" && todo_completed[i] != null){
            let liNode = createItem(todo_completed[i]);
            let detail = liNode.getElementsByClassName("todo-app__item-detail")[0];
            detail.style["text-decoration"] = "line-through";
            detail.style["opacity"] = 0.5;
            let box = liNode.getElementsByTagName("input")[0];
            box.checked = true;
            list.appendChild(liNode);
            index++;
        }
    }
    mode = "completed"; 
}

function clearItem(){
    var i = 0;
    while(i != todo_completed.length){
        if(todo_completed[i] != "" && todo_completed[i] != null){
            todo_all.splice(i, 1);
            todo_active.splice(i, 1);
            todo_completed.splice(i, 1);
            i = 0;
        } else {
            i++;
        }
    }
    if(mode == "all"){
        allItem();
    } else if(mode == "active"){
        activeItem();
    } else{
        completedItem();
    }

    if(countLeft(todo_all) >= 1){
        footer.style.display = "flex";
    } else {
        footer.style.display = "none";
    }
}


     