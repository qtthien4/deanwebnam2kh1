function tim() {
    var input = document.getElementById('myinput').value;
    var filter = input.toUpperCase();
    console.log(filter);
    var ul = document.getElementsByClassName('listmusic-list');
    var name = document.getElementsByClassName('namesong-list');
    for (var i = 0; i < ul.length; i++) {

        if (name[i].textContent.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}

function menuMobile() {
    var x = document.getElementById("item-nav");
    var y = document.getElementsByClassName('item-left-nav');
    for (var i = 0; i <= y.length; i++) {
        if (x.style.display == "block") {
            x.style.display = "none";
            y[i].style.display = "block";
        } else {
            x.style.display = "block";
            y[i].style.display = "inline-block";
        }
    }
}

function clickMemuProfile() {
    var x = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i <= x.length; i++) {
        if (x[i].style.display == "none") {
            x[i].style.display = "block"
        } else {
            x[i].style.display = "none"
        }
    }
}

var pause = document.getElementsByClassName('pause');

var play = document.getElementsByClassName('play');
var audio = document.getElementsByClassName('audio');
var stop = document.getElementsByClassName('stop');
var play1 = document.getElementById('play1');



for (let i = 0; i < audio.length; i++) {
    play[i].addEventListener('click', function() {
        console.log(i);
        audio[i].play();
    });
    stop[i].addEventListener('click', function() {
        audio[i].pause();
        audio[i].currentTime = 0;
    });
    pause[i].addEventListener('click', function() {
        audio[i].pause();
    });
}
AOS.init();