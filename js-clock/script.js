function realTime(){
    var zaman=new Date();
    var h=zaman.getHours();
    var m=zaman.getMinutes();
    var s=zaman.getSeconds();



var time=h+":"+m+":"+s;
document.getElementById("anaSaat").innerHTML=time;
document.getElementById("anaSaat").textContent=time;

setTimeout(realTime, 1000);
}
realTime();