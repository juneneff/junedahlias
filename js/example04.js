var i = 1; 		//Set counter to 1
var msg = ''; 	//Message

//Store 5 times table in a variable
while (i < 10) {
	msg += i + ' tuber ' + ' x 8 = ' + '$' + (i * 8) + '<br />';
	i++;
}

document.getElementById('ans').innerHTML = msg;
