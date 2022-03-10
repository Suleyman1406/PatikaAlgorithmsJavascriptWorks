var currentdate;
var datetime;
var currentDate;
const clockDiv=document.querySelector("#myClock");
const nameSpan=document.querySelector("#myName");
var input=prompt("Adınız nedir?");
nameSpan.innerHTML=input;
setInterval(function() {
     currentdate= new Date(); 

     datetime= currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    currentDate=currentdate.getDay();
    if(currentdate==1){
        datetime+=" Pazartesi";
    }else if(currentdate==2){
        datetime+=" Salı";
    }else if(currentdate==3){
        datetime+=" Çarşamba";
    }else if(currentdate==4){
        datetime+=" Perşembe";
    }else if(currentdate==5){
        datetime+=" Cuma";
    }else if(currentdate==6){
        datetime+=" Cumartesi";
    }else if(currentdate==7){
        datetime+=" Pazar";
    }
    clockDiv.innerHTML=currentdate;
    clockDiv.style.fontSize="25px"
}, 1000);