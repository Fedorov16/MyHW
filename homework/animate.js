'use strict';

let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function Animate(){
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame(){
        if(pos == 300){
            clearInterval(id);
        } else{
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', Animate);

// Делигирование событий. Удобен, когда много элементов с одинаковыми обработчиками. 
let btnBlock = document.querySelector('.btn-block'),
    buttonB = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function(event){
        if(event.target && event.target.tagName == 'BUTTON'){
            console.log('hello');
        }
    })