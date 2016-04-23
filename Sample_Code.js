function square(x) {
  return x * x;
}


function oldEnoughToDrink(x) {
	if (x >= 21) {
		return "Yes";
	}
		return "Hell no!";
}


function isHot (temperature) {
  if (temperature > 90) {
  return "It's hot!";
}
  return "It's not hot!";
}


function oldEnoughTo(age) {
  if (age >=21) {
  	return "Do all the things!"}
  	else if (age >= 16) {
  return "Drive a car";}
   else if (age >= 17); {
    return "Vote";
     }
 }

 
//Write a function sayHello that takes a language parameter, and returns "hello" in that language. Make the function work with at least three languages.

function sayHello(language) {
	if (language === "english") {
		return "Hello";
	} else if (language === "french") {
		return "Bonjour";
	} else if (language === "spanish")  {
		return "Hola";
	}
}


//Write a function validCredentials that accepts two parameters: username and password, and returns true if both are long enough, and false otherwise. You can decide what constitutes "long enough".

function min (x, y)	{
	if (x < y) {
		return x;
	}
		return y;
}

function validCredentials (username, password) {
	if (username.length >=5  && password.length >= 8) {
		return true;
		}
	return false
	}

function validCredentials2 (username, password) {
	if (username.length >=6 && password.length >=6) {
		return true; }
		else {
			return false
		}
	}


function power (b,e) {
	if (e === 0) {
		return 1;
	}
	return b * power (b, e -1);
}



// Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:


function sum (n) {
	if (n === 0) {
		return 0;
	}
	return n + sum(n-1)
}

// Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:

function factorial (n) {
	if (n === 1) {
		return 1;
	}
	return n * (factorial (n-1))
}


// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated, e.g.


function repeatString (str, count) {
	if (count === 0) {
		return ""; 
		}
		return str + repeatString (str, (count-1))
}


// Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:


function fib(n) {
	if (n === 1 || n === 0) {
		return 1;
	}
	return fib (n-1) + fib (n-2)
}


// Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.


function sum2 (start, end) {
	if (start === end) {
		return start + start;
	}
	return end + sum(end-1) - sum(start-1)
}


function sum3 (start, end) {
	if (start > end) {
		return start + sum(start-1) - sum(end-1)
	}
	else if (start === end) {
		return start + start;
	}
	return end + sum(end-1) - sum(start-1)
}

//Write a function product that works like sum, except it should compute the product of the numbers from start to end.

function product (start, end) {
	if (start === end) {
		return start * start
	}
	return factorial (end-1) * factorial (start-1)
}


// Let's pretend for a moment that JavaScript does not have the addition operator + -- instead, it comes with two functions called inc and dec that perform increment and decrement respectively:

// Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together. The catch is that you can only use inc and dec to accomplish this.

function inc (x) {
	return x + 1;
}

function dec (x) {
	return x -1;
}

function add (x, y) {

}


function scoreToGrade (x) {
	if (x>100 || x<0) {
		return "INVALID SCORE"
		}
	else if (x>90) {
		return "A"
	}
		else if (x>=80) {
			return "B"
		}
			else if (x>=70) {
				return "C"
			}
				else if (x>=60) {
				return "D"
				}
					else if (x<60) {
					return "F"
					}
}
