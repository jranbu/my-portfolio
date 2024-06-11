var detail=document.getElementById('txt')
var arr=["Web developer","software developer","Quality Analyst"];
var skillindex=0;
function changeskill(){
    detail.innerText=arr[skillindex];
    skillindex+=1;
    if(skillindex==3){
        skillindex=0;
    }
}
setInterval(changeskill,1000);

var Contactindex=0;
function changeContact(){
    detail.innerText=arr[Contacttindex];
    contactindex+=1;
    if(Contactindex==3){
        Contactindex=0;
    }
}
setInterval(changeContact,1000);

var Portfolioindex=0;
function changePortfolio(){
    detail.innerText=arr[Portfolioindex];
    Portfolioindex+=1;
    if(Portfolioindex==3){
        Portfolioindex=0;
    }
}
setInterval(changePortfolio,1000);

var namew=document.getElementById('h')
let i=0;
var m=["A","An","Anb","Anbu","Anbu D","Anbu De","Anbu Des","Anbu Desi","Anbu Desig","Anbu Desiga","Anbu Desigan C",];
function callname(){

    namew.innerText=m[i];
    
    if(i<10){
        i+=1;
        
    }
        
    
}
setInterval(callname,100);