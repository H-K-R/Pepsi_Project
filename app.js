function show_pepsifst() {
    document.getElementById('pepsi-img').src = "p1.png";
    document.getElementsByClassName('main')[0].style.backgroundColor = "#4169E1";
    document.getElementsByClassName('first-p')[0].innerHTML = "Do you like pepsi?";
}

function show_pepsisec() {
    document.getElementById('pepsi-img').src = "p2.png";
    document.getElementsByClassName('main')[0].style.backgroundColor = "#8B0000";
    document.getElementsByClassName('first-p')[0].innerHTML = "which is your favourite?";
}

function show_pepsithrd() {
    document.getElementById('pepsi-img').src = "p3.png";
    document.getElementsByClassName('main')[0].style.backgroundColor = "black";
    document.getElementsByClassName('first-p')[0].innerHTML = "Feel the chill,pepsi is refreshment.";
}