const apiKey='b98faa03';
const searchButton=document.getElementById("searchButton")
const input=document.getElementById("searchbar")
const movieBox=document.querySelector(".movieDetails")

searchButton.addEventListener('click',()=>{
    const movieName=input.value.trim()
    movieBox.innerHTML=""
    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`)
    .then((response)=>{
        console.log(response)
        return response.json(); 
    }).then((data)=>{
        console.log(data)
        data.Search.forEach(element => {
            movieBox.innerHTML+=`<div class="movieBlock">
                
                    <img src=${element.Poster}/>
                    <h4>${element.Title}</h4>
        
            <div>`
        });
    })
})

