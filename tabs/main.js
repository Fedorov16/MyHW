window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabConten(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabConten(i);
                    break;
                }
            }
        }
    });

    // timer

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

// modal
    function modalWindow(){
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup-close');

        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        popup.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.add('more-splash');
            document.body.style.overflow = '';
        });
    }
    modalWindow();
    
});