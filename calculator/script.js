const input= document.querySelector('.input-box')
const ALLbuttons=document.querySelectorAll('button')

let string=""
const buttons=Array.from(ALLbuttons)

buttons.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.id==="clear"){
            string=""
            input.value=string
        }
        else if(e.target.id==="del")
        {
            string=string.substring(0,string.length-1)
            input.value=string
        }
        else if(e.target.id==="equals")
        {
            string=eval(string)
            input.value=string
        }
        else{
            string+=e.target.innerHTML
            input.value=string
        }
    })
});