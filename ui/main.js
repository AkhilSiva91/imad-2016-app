console.log('Loaded!');

var element = document.getElementById('maintext');
element.innerHTML = 'New Text Content';
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = margimLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};
