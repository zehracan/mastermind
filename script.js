function reloadPage(){
 location.reload(); 
};




var createDistinctNumber = function (){
var newNumber = "";
while(newNumber.length !== 4)
	{
		var num = Math.floor(Math.random() * 10);
		if(newNumber.length===0 && num ===0) //ilk basamak 0 ise devam et 
			continue;
			
		if(!newNumber.includes(num))	
			newNumber+=num;
	}
	return newNumber;
};

var sayi = createDistinctNumber();
console.log(sayi);

var guess = function (){
    let girdi = document.querySelector('#player').value;
    let arr = [];

    for (let i = 0; i<4; i++){
        let playerarr = parseInt (girdi.substr(i,1));
        arr.push(playerarr)
}
    
    check (arr);
};



var check = function  (tahmin){
let pozitif = 0;
let negatif = 0;
let turns = parseInt(document.querySelector('.turns').innerHTML);


for (let i = 0; i <4; i++){
  
    if (tahmin[i]==sayi[i]){
        pozitif++;
    } 
    else if (sayi.indexOf(tahmin[i])>=0)//tahmin içindeki sayı asıl sayıda varsa -1 den farklı değer döner.{
        negatif++;
    }



 turns --;
 document.querySelector('.turns').innerHTML = turns;


if (turns ==0 || pozitif==4 ){
    let status = 'Bitti';
    if (pozitif == 4) {
        status = ' Tebrikler!';
    }
    endGame(tahmin, turns, status);
}
feedback(tahmin,pozitif,negatif);
};


var feedback = function (tahmin,pozitif,negatif){
    let table = document.getElementById("turnsLog");
    let newLine = document.createElement('p');
    newLine.innerHTML = 'Deneme'+(10-document.querySelector('.turns').innerHTML) + ':&nbsp;' + tahmin +' Pozitif: '+ pozitif +'; Negatif: '+ negatif;
    table.appendChild(newLine);
};

var endGame = function (tahmin, turns, status){
    document.querySelector('.number').innerHTML=sayi;
    alert(status + " "+"Tuttuğum sayı:" + sayi);
};