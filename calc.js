
var box = document.getElementById('display');	//declare box, display is text box id
var operators = ['+','-','*','/'];
var decimalAdded = false;

function addToScreen(x){

	//box.value += x;	//x is the value of the button
	//+= add new value without replace old value

	if(x == 'c'){
		
		box.value = '';

		decimalAdded = false;

	}else if (operators.indexOf(x) > -1) {

		var bValue = box.value;

		var lastChar = bValue[bValue.length - 1];

		// Only add operator if input is not empty and there is no operator at the last
		if (bValue != '' && operators.indexOf(lastChar) == -1) {
			box.value += x;
		}else if (bValue == '' && x == '-') {
			box.value += x;
		}

		// Replace the last operator (if exists) with the newly pressed operator
		if (operators.indexOf(lastChar) > -1 && bValue.length > 1) {
			// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				box.value = bValue.replace(/.$/, x);
		}

		decimalAdded =false;

	}else if(x == '.') {

		if(!decimalAdded) {
			box.value += x;
			decimalAdded = true;
		}

	}else{
		box.value += x;
	}



}


function answer(){

	var y = box.value;
	var lastChar = y[y.length - 1];

	// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
	if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
				y = y.replace(/.$/, '');
	}

	//thn calculate
	if(y){
		var z = eval(y);	//calculate y
		decimalAdded = false;
		box.value = z;
	}

}

