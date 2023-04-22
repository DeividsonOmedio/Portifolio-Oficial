

var currentImgIndex=1;
var ImgSrcArray = [
'img/menup.png',
'img/menusair.png',
];
var displayArray = [ 
'-701px',
'0px',
];
var mainArray = [
    '100%',
    '70%'
]
var contateArray = [
    '0 0',
    '0 0 20% 0',
]

function trocar(){

  if(currentImgIndex == ImgSrcArray.length)
  {
    currentImgIndex=0;
  }
  document.getElementById("imgmenu").src=ImgSrcArray[currentImgIndex]; 
  document.getElementById("menu1").style.right =displayArray[currentImgIndex];
  //document.getElementById("main").style.width=mainArray[currentImgIndex];
  //document.getElementById("contate").style.margin=contateArray[currentImgIndex];
  currentImgIndex++; 
  
}
var currentMenuIndex=1;
var menu2Array = [ 
'none',
'block',
];

function clicarMenu2() {
    if (currentMenuIndex == menu2Array.length) {
        currentMenuIndex = 0;  
    }
    document.getElementById("menu2").style.display =menu2Array[currentMenuIndex];
    currentMenuIndex++;
}

const services = document.getElementById("menu-services")

services.addEventListener("click", () => {trocar()})


var tema= document.getElementById("tema")
var currentTemaIndex = 1
var arrayTema = [
  "#070C15",
  "#fff"
]
var arrayColor = [
  "#fff",
  "#070C15"
]
var arrayMenuTema = [
  "#070C15",
  "#74e7c7"
]
var arrayBorda= [
  "#74e7c7",
  "#070C15"
]
var arrayTextTema= [
  "Tema Claro",
  "Tema Escuro"
]
tema.addEventListener("click", ()=>{
  if(currentTemaIndex == arrayTema.length){
    currentTemaIndex = 0
  }
  document.documentElement.style.setProperty("--background-color1", arrayTema[currentTemaIndex])
  document.documentElement.style.setProperty("--color1", arrayColor[currentTemaIndex] )
  document.documentElement.style.setProperty("--background-tema-color", arrayMenuTema[currentTemaIndex] )
  document.documentElement.style.setProperty("--color-border", arrayBorda[currentTemaIndex])
  tema.innerHTML = arrayTextTema[currentTemaIndex]
  currentTemaIndex++
})