import './style.css'
fetch('/Artstation/im.json').then((result) => {
    result.json().then((result) =>{
        addImage(result.firstIm);
        addImage(result.secondIm);
        addImage(result.thirdIm);
    })

})

function addImage(link){
    let nextImg = document.createElement('img');
    nextImg.src = link;
    let body = document.querySelector('body');
    body.append(nextImg);

}