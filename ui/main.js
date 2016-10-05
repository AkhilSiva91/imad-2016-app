console.log('Loaded!');
//changing the content
var element = document.getElementById('mtext');
element.innerHTML = 'New Text Content';


//making the picture move
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginleft + 'px';
}
img.onclick = function(){
 var interval = setInterval(moveRight, 50);   
};

