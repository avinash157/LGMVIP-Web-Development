const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function inputTask(){
    if(inputBox.value===''){
        alert("Please write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveSchedule();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("circle");
        saveSchedule();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveSchedule();
    }
}, false);
function saveSchedule(){
    localStorage.setItem("Schedule",listContainer.innerHTML);
}
function showDo(){
    listContainer.innerHTML=localStorage.getItem("Schedule");
}
showDo();