// Select some elements...
let body = document.querySelector('body')
body.style.margin = '0'
body.style.fontFamily = 'Tahoma'

let header = document.querySelector('#page-header')
header.style.textAlign = "left"
header.style.backgroundColor = 'blue'
header.style.color = 'yellow'
header.style.boxShadow = "0px 0px 30px blue"
header.style.textDecoration = 'overline'

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = "rotate(15deg)"
    dogImages[i].style.border = '2px solid red'
    dogImages[i].style.boxShadow = "0px 0px 30px red"
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = "left"
    dogNames[i].style.color = 'rgb(12, 27, 72)' 
}

let dogDescription = document.querySelectorAll('.dog-description')
for(let i = 0; i < dogDescription.length; i++){
    dogDescription[i].style.textAlign = "left"
}

let footer = document.querySelector('.footer')
footer.style.backgroundColor = 'blue'
footer.style.color = 'yellow'
footer.style.fontWeight = 'bold'
footer.style.boxShadow = "0px 0px 30px blue";