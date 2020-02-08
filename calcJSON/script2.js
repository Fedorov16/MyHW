'use strict';

// let rub = document.getElementById('rub'),
//     calcUsd = document.getElementById('usd');
//     rub.addEventListener('input', ()=>{
//         let request = new XMLHttpRequest();

//         request.open('GET', 'js/current.json');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         request.send();

//         request.addEventListener('readystatechange', function(){

//             if(request.readyState === 4 && request.status == 200){
//                 let data = JSON.parse(request.response);
//                 calcUsd.value = rub.value/data.usd;
//             }
//             else{
//                 calcUsd.value = 'что пошло не так';
//             }
//         })
//     });

let rub = document.getElementById('rub'),
    calcUsd = document.getElementById('usd');
rub.addEventListener('input', () => {
    function calthData() {

        return new Promise(function (resolve, reject) {

            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function () {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response)
                    } else {
                        reject();
                    }

                }
            }

        })
    }
    calthData()
        .then(response => {
            let data = JSON.parse(response);
            calcUsd.value = rub.value / data.usd;
        }) 
        .catch(() => calcUsd.value = "Что-то пошло не так")
});