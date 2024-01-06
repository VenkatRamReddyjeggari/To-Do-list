const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let  span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
 inputBox.value ="";
    }
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagname ==="SPAN"){
        e.target.parentElement.remove();

    }
    }, false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTHL);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
 showtask();