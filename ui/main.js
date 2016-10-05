console.log('Loaded!');

var element = document.getElementById('mtext');
element.innerHTML = 'New Text Content';
var img = document.getElementById('madi');

img.onclick = function(){
    img.style.marginLeft = '100px';
};
