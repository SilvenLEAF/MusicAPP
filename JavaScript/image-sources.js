// document.querySelector('.one').src = 'images/Glory-LOGO.jpg';
// document.querySelector('.two').src = 'images/Glory-Ye-Xiu.jpg';
// document.querySelector('.three').src = 'images/Glory-Heroine.jpg';
// document.querySelector('.four').src = 'images/Glory-Heroine-Friend.jpg';
// document.querySelector('.five').src = 'images/Glory-Friend.jpg';
// document.querySelector('.six').src = 'images/Glory-Math-Genius.jpg';
// document.querySelector('.seven').src = 'images/Glory-Muscular.jpg';
// document.querySelector('.eight').src = 'images/Glory-Villain.jpg';
// document.querySelector('.nine').src = 'images/Glory-Mage-Apprentice.jpg';

let cardArr= document.querySelectorAll('.card-img');

for (let i=0; i<cardArr.length; i++){
     cardArr[i].src = 'images/Glory-Heroine-Friend.jpg';
}


let iconArr= document.querySelectorAll('.song-icon');

for (let i=0; i<iconArr.length; i++){
     iconArr[i].src = 'images/Glory-Heroine-Friend.jpg';
}
