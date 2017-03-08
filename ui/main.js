console.log('Loaded!');

//get  the text of page changed
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//get the image moving
var img = document.getElementById('madi');
img.onClick = function() {
    img.style.marginleft = '100px' ;
};