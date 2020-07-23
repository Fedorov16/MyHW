window.addEventListener('DOMContentLoaded', ()=>{
//tabs
    let tabcontent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');

    function HideTabContent(){
        tabcontent.forEach((item) =>{
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach((item) =>{
            item.classList.remove('tabheader__item_active');
        })
        
    }

    function ShowTabContent(i = 0){
        tabcontent[i].classList.add('show', 'fade');
        tabcontent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active')
    }

    HideTabContent();
    ShowTabContent();

    tabsParent.addEventListener('click', (event) => {
        let target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if(target == item){
                    HideTabContent();
                    ShowTabContent(i);
                }
                
            });
        }
        
    });

    //timer

    // const deadline = '2020-07-23';

    // function getTimeRemaining(endtime){
    //     const   t = Date.parse(endtime) - Date.parse(new Date()),
    //             days = Math.floor(t / (1000*60*60*24)),
    //             hours = Math.floor((t / (1000*60*60) % 24)),
    //             minutes = Math.floor((t / 1000 / 60) % 60), 
    //             seconds = Math.floor((t / 1000) % 60); 
    //     return{
    //             'total': t,
    //             'days': days,
    //             'hours': hours,
    //             'minutes': minutes,
    //             'seconds': seconds
    //         };
    // }
    // function getZero(num){
    //     if(num >= 0 && num < 10){
    //         return `0${num}`
    //     }
    //     else{
    //         return num;
    //     }
    // }
    
    // function setClock(selector, endtime){
    //     const timer = document.querySelector(selector),
    //             days = timer.querySelector('#days'),
    //             hours = timer.querySelector('#hours'),
    //             minutes = timer.querySelector('#minutes'),
    //             seconds = timer.querySelector('#seconds'),
    //             timeInterval = setInterval(updateClock, 1000);

    //         updateClock();

    //     function updateClock(){
    //             const t = getTimeRemaining(endtime);

    //             days.innerHTML = getZero(t.days);
    //             hours.innerHTML = getZero(t.hours);
    //             minutes.innerHTML = getZero(t.minutes);
    //             seconds.innerHTML = getZero(t.seconds);

    //             if(t.total <= 0){
    //                 clearInterval(timeInterval);
    //                 days.innerHTML = '00';
    //                 hours.textContent = '00';
    //                 minutes.textContent = '00';
    //                 seconds.innerHTML = '00';
    //             }
    //         }
    // }

    // setClock('.timer', deadline);



























    const   deadline = '2020-07-25';

    function setTime(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000*60*60*24)),
            hours = Math.floor((t / (1000*60*60)) % 24),
            minutes = Math.floor((t / (1000*60)) % 60),
            seconds = Math.floor((t/1000) % 60);
        return{
            't': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function setVariable(selector, endtime){
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            Interval = setInterval(UpdateTime, 1000);


        function AddZero(num){
            if(num < 10){
                return `0${num}`
            }
            else return num;
        }

            UpdateTime();
            function UpdateTime(){
                let t = setTime(endtime);
                    
                days.innerHTML = AddZero(t.days);
                hours.innerHTML = AddZero(t.hours);
                minutes.innerHTML = AddZero(t.minutes);
                seconds.innerHTML = AddZero(t.seconds);

                if(t.t <=0){
                    clearInterval(Interval);
                    days.textContent = "00";
                    hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00";
                }
        
            }
    }

    setVariable('.timer', deadline);

    
           
        

});