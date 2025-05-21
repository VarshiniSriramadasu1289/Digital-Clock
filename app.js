window.onload = () =>{
    function buildClock(){

        console.log("Code for Interview");
        const date=new Date();
        console.log(date);

        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();

        hours=hours<10?"0"+hours:hours;
        minutes=minutes<10?"0"+minutes:minutes;
        seconds=seconds<10?"0"+seconds:seconds;

        document.querySelector('#hours').innerText=hours;
        document.querySelector('#minutes').innerText=minutes;
        document.querySelector('#seconds').innerText=seconds;

    }
    buildClock();
    setInterval(buildClock, 1000);
}