//setInerval => reapeatively running
//setTimeOut =>after sometime
// var count = 0;
// var interval;
// function timer()
// {
//     count++
//     console.log(count);
// }
// interval =  setInterval(timer,1000)
// setTimeout(function()
// {
//     clearInterval(interval)
// },5000) //5000 mili second = 5 second 

//setINterval time mili second man lata ha 




// function timeOut()
// {
//     console.log('running');
// }
// setTimeout(timeOut,3000)




var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById('msec');

var interval;
function timer()
{
    msec++;
    msecHeading.innerHTML = msec;//jb timer function chlaga phir milisecond ko increase kraga phir us ko html man daldaga
    if(msec >= 100)
    {
        sec++
        secHeading.innerHTML = sec;
        msec= 0;
    } else if(sec>=60)
    {
        min++
        sec = 0
        minHeading.innerHTML = min
    }
}
function start()
{
    interval = setInterval(timer,10);
}
function stop()
{
    clearInterval(interval)
}
function reset()
{
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
}

