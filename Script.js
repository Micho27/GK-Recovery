function MenuAndHeader() {
	var body=document.getElementById("body");
	var main=document.getElementById("main");

	//create header
	var header=document.createElement("header");

	//create menu and fill it
	var div=document.createElement("div");
	div.setAttribute('id','menu');
	div.innerHTML+="<a id='link' href='index.html'>Home</a>";
	div.innerHTML+="<a id='link' href='services.html'>Services</a>";
	div.innerHTML+="<a id='link' href='contact.html'>Contact</a>";
	div.innerHTML+="<a id='link' href='about.html'>About</a>";
	div.innerHTML+="<a id='link' href='news.html'>News</a>";

	var footer=document.createElement("footer");
	footer.innerHTML+="<p> E-mail:<a href='mailto:gkrecoveryproducts@gmail.com'>gkrecoveryproducts@gmail.com</a></p>";
	footer.innerHTML+="<p> Phone: 087 928-2114";
	footer.innerHTML+="<a href='https://www.facebook.com/gkrecoveryproducts'>Facebook</a><p>or</p><a href='https://www.instagram.com/gkrecovpro/'>Instagram</a>";
	
	//insert menu/header/footer
	body.insertBefore(header,main);
	body.insertBefore(div,main);
	body.append(footer);
}
