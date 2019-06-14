let i; //This  enables me to keep track of how many times the program ran

//The function below is the Math to sum up every digits in a given prompt
function firstSum(){
	let n = prompt("Enter Number");
	function sumIt(){
		let sum = 0;
		while(n){
			sum += (n % 10);
			n = Math.floor(n/10);
		}
		document.write("Test Case" + " " + i + ":" + " ");
		document.write(sum + "<br>");
	}
	sumIt();
}
let t = prompt("Enter Number of Test-Cases"); 
// The code below is the one responsible for the program to run 2 times.
if (t == 2){
	for (i = 1; i < 3; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 3 times.
else if (t == 3) {
	for (i = 1; i < 4; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 4 times.
else if (t == 4) {
	for (i = 1; i < 5; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 5 times.
else if (t == 5) {
	for (i = 1; i < 6; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 6 times.
else if (t == 6) {
	for (i = 1; i < 7; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 7 times.
else if (t == 7) {
	for (i = 1; i < 8; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 8 times.
else if (t == 8) {
	for (i = 1; i < 9; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run 9 times.
else if (t == 9){
	for (i = 1; i < 10; i++){
		firstSum();
	}
}

//The code below is the one responsible for the program to run once.
else if (t == 1) {
	for (i = 1; i < 2; i++){
		firstSum();
	}
}

//The code below is the one responsible to keep user from inputing more than 9 numberse.
else if (t >= 9) {
	alert("You can only run 9 Test-Cases");
}

//You should know what this one do
else if (t == 0){
	alert("You can't run 0 test-case");
}

//The code below helps to identify any character that isn't a number
else{
	alert("You're to use only numbers")
}