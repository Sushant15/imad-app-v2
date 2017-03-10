// Counter code
var button = document.getElementById('counter');
button.onclick = function() {
    
    // Make a request to the counter endpoint
    
    // Capture the response and store it in s variable
    
    // Render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = count.toString();
};