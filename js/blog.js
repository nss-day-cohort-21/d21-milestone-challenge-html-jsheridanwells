function post(date, title, body, url) {
	this.date = date,
	this.title = title,
	this.body = body
	this.url = url
}

let postArr = [];

let post1 = new post(
	'July 8, 2017', 
	'L is for Liftoff, Learning, and Landing', 
	'Greetings and welcome!  This will be the inaugural post for this blog which will serve as my learning journal for the next six months.  Here I hope to create a record of my experience learning web development and to synthesize new understandings about code, technology, and the learning process.', 
	'https://jeremywellsdotorg.wordpress.com/2017/07/08/l-is-for-liftoff-learning-and-landing/'
	);

let post2 = new post(
	'July 9, 2017',
	'T is for Terminal, Tools, and Typing',
	'One of the first challenges I\’m finding in getting into the developer workflow is keeping my fingers off the laptop’s trackpad.  This means staying away from Apple’s Finder and getting to know the terminal.  As I get a little more muscle memory developed, I\’m finding that I can think and type out simple commands, almost like saying magic words and what I want on a web page or a window appears into being.', 
	'https://jeremywellsdotorg.wordpress.com/2017/07/09/t-is-for-terminal-tools-and-typing/'
	);

postArr.push(post1, post2);

let date1 = document.getElementById('date1');
let title1 = document.getElementById('title1');
let body1 = document.getElementById('body1');
let link1 = document.getElementById('link1');

let date2 = document.getElementById('date2');
let title3 = document.getElementById('title2');
let body2 = document.getElementById('body2');
let link2 = document.getElementById('link2');

date1.innerText = post1.date;
title1.innerText = post1.title;
body1.innerText = post1.body;
link1.setAttribute('href', post1.url);

date2.innerText = post2.date;
title2.innerText = post2.title;
body2.innerText = post2.body;
link2.setAttribute('href', post2.url);

