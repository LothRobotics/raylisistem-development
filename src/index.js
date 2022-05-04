const comptStart = document.querySelector('.days-compt-start'), start = document.querySelector('.days-compt'),
toggleBtn = document.querySelector('.toggle-btn'),
navBar = document.querySelector('.navbar');


// toggle btn

toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})





// Date countdown below

const targetDate = new Date(2022, 5, 11).getTime(),
secondTargetDate = new Date(2022, 5, 4).getTime();

const countdown = () => {
    const now = new Date().getTime();
    const gap = targetDate - now 
    gap2 = secondTargetDate - now 

    // Time work

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day); 
    const textHour = Math.floor(gap % day / hour); 

    const textDay2 = Math.floor(gap2 / day); 
    const textHour2 = Math.floor(gap2 % day / hour); 
    
    comptStart.innerText = textDay + ' GÜN';
    start.innerText = textDay2 + ' GÜN';
    //hourText.innerText = textHour + ' SAAT';
};

countdown()
setInterval(countdown, 60 * 60 * 1000)
