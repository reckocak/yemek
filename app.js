let forYemekListe=[];

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

 .then((res)=>res.json()

 )
.then((datA)=>

{console.log(datA);

forYemekListe=datA

yemekler(forYemekListe.meals)
})


function yemekler(datA) {

document.querySelector('.ekran').innerHTML='';

for (const key of datA) {
document.querySelector('.ekran').innerHTML+=` <div class="col-md-3">   <div class="card">
  <img src=${key.strMealThumb} class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">${key.strMeal}</h5>   
  </div>
</div></div>  `
}
}  

document.getElementById("ara").oninput=(harf)=>{
    // console.log(harf.target.value);
    console.log(forYemekListe);

    let data2= forYemekListe.meals.filter((w)=>w.strMeal.toLowerCase().includes(harf.target.value.toLowerCase()))
    console.log(data2);
    yemekler(data2)
}

function getCountry (country) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        yemekler(data.meals)
    });
    
  }

document.querySelector('.turkey').onclick=()=>{
    getCountry('turkish')
    
}
document.querySelector('.abd').onclick=()=>{
    getCountry('american')
}
document.querySelector('.indian').onclick=()=>{
    getCountry('indian')
}
document.querySelector('.croatian').onclick=()=>{
    getCountry('croatian')
}
document.querySelector('.france').onclick=()=>{
    getCountry('french')
}

