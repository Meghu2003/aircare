var h1=document.getElementById('hour');
var m1=document.getElementById('minute');
var s1=document.getElementById('second');
var ampm1=document.getElementById('ampm');
function updateClock(){
    var date=new Date();
    h2=date.getHours();
    m2=date.getMinutes();
    s2=date.getSeconds();
    ampm2='AM';
    if(h2>12){
        h2=h2-12;
        ampm2='PM';
    }
    h2=h2<10?"0"+h2:h2;
    m2=m2<10?"0"+m2:m2;
    s2=s2<10?"0"+s2:s2;
    h1.innerText=h2;
    m1.innerText=m2;
    s1.innerText=s2;
    ampm1.innerText=ampm2;
    setTimeout(updateClock,1000);
}
updateClock();