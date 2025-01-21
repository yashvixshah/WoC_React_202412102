const reset=document.getElementById("reset")
const add=document.getElementById("add")
const sub=document.getElementById("subtract")
const display=document.getElementById("display")

display.value="0";

reset.addEventListener('click',()=>
{
    display.value="0"
})
add.addEventListener('click',()=>
{
    let val= parseInt(display.value)
    val++
    display.value=val
})
sub.addEventListener('click',()=>
{
    let val= parseInt(display.value)
    val--
    display.value=val
})
