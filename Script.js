function MenuAndHeader() {
	var body=document.getElementById("body");
	var main=document.getElementById("main");

	//create header
	var header=document.createElement("header");
	header.innerHTML+="<h1>GK Recovery Products</h1>";

	//create menu and fill it
	var div=document.createElement("div");
	div.setAttribute('id','menu');
	div.innerHTML+="<a id='link' href='index.html'>Home</a>";
	div.innerHTML+="<a id='link' href='products.html'>Services</a>";
	div.innerHTML+="<a id='link' href='contact.html'>Contact</a>";
	div.innerHTML+="<a id='link' href='about.html'>About</a>";
	div.innerHTML+="<a id='link' href='news.html'>News</a>";

	//insert menu and header
	body.insertBefore(header,main);
	body.insertBefore(div,main);
}
