console.log('Loaded!');
//changing the content
var element = document.getElementById('mtext');
element.innerHTML = 'New Text Content';


//making the picture move
var img = document.getElementById('madi');

img.onclick = function(){
    img.style.marginLeft = '100px';
};
