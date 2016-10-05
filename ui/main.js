console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Text Content';
var img = document.getElementById('madi');

img.onclick = function(){
    img.style.marginLeft = '100px';
};
