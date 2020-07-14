window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let deadline = '2020-01-28';

    function getTime(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTime(endTime);
                
            function checkTime(a){
                    if (a <= 9){
                        return "0" + a;
                    } else{
                        return a;
                    }
                }
            hours.textContent = checkTime(t.hours);
            minutes.textContent = checkTime(t.minutes);
            seconds.textContent = checkTime(t.seconds);
           
            if (t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    };

    setClock('timer', deadline);

});