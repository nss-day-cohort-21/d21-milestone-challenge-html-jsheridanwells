//create post objects
function post(date, title, body, url) {
	this.date = date,
	this.title = title,
	this.body = body
	this.url = url
}

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

//create array of post objects
let postArr = [];
postArr.push(post1, post2);

//contiainer for all blog posts
let blogOutput = document.getElementById('blog-output');

//create article element with blog data
function makePost(post) {
	let article = document.createElement('article');
	let output = `<h6>${post.date}</h6>`;
	output += `<h3>${post.title}</h3>`;
	output += `<p>${post.body}</p>`;
	output += `<p class="read-more"><a href=" ${post.url} " target="_blank" id="link2">Read More...</a></p>`;
	article.innerHTML = output;
	blogOutput.appendChild(article);
}

//append all post data to page
for (let i = 0; i < postArr.length; i++) {
	makePost(postArr[i]);
}