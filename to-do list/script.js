let input=document.getElementById("input-box")
let add=document.getElementById("add")
let listBox=document.querySelector(".listBox")

add.addEventListener('click',()=>{
    let li= document.createElement("li")
    li.innerHTML=input.value
    listBox.appendChild(li)
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
    input.value="";
    saveData();
})

listBox.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data',listBox.innerHTML)
}

function showData(){
    listBox.innerHTML=localStorage.getItem("data")
}
showData();