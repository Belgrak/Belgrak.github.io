var some = document.getElementsByTagName("input");
var kol = 2;
for (var i = kol; i < some.length; i++) {
	some[i].style.display = 'none';
}

function add() {
	some[kol].style.display = 'block';
	kol++;
}

function choice() {
	var t = document.getElementById("id");
	var n = getRandomInt(0, kol);
	t.innerHTML = 'The brilliant desicion is '+some[n].value;

}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
 
}
