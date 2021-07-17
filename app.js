

function even_odd(num1,num2) {
    document.getElementById("ev_odd_h3").style.display = "block";
    for (; num1 < num2; num1+=2) {
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(num1);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("even_odd_result").appendChild(node);
    
    }
}


function all_numbers(num1,num2) {
    document.getElementById("all_h3").style.display = "block";
    for (; num1 <= num2; num1+=1) {
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(num1);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("all_result").appendChild(node);
    
    }
}


function alerts() {
    alert("If you type an even you will recive even result & if you type an oll you will recive oll result.")
}

