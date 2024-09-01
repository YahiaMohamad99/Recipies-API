let row = document.querySelector(".row")
let bl7 = new XMLHttpRequest()
let recipeChoise = document.querySelector("select")
let userInput= document.querySelector("#userInput")
recipeChoise.addEventListener("change",function(){
    userInput.value=''
    getData(recipeChoise.value)
})
userInput.addEventListener("blur",function(){
getData(userInput.value)
}) 


// bl7.open("GET","https://jsonplaceholder.typicode.com/posts")

getData('pasta')


function getData(data){
    bl7.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${data}`)
    bl7.send()
    bl7.addEventListener("readystatechange",function(){
    if (bl7.readyState ==4) {  
    let mydata = JSON.parse(bl7.response)
    showData(mydata.recipes)
    }
    })
}

function showData  (list){
    let cartona = ''
    for(let i = 0;i<list.length;i++){
        cartona += `
   <div class=" col-md-4 p-1">
  <img class="w-100 mb-2" src="${list[i].image_url}" alt="">
  <p>  <b>Title: </b>${list[i].title}</p>
 <p>  <b>Recipe Id: </b>${list[i].recipe_id}</p>
  <p>  <b>puplisher: </b>${list[i].publisher}</p>
  <p> <b>Social Rank: </b>${list[i].social_rank}</p>
</div>
        `
    }
row.innerHTML=cartona
}

