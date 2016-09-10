window.onload = function() {
	myHeight = new fx.Height('nav', {duration: 400});
	myHeight.hide();
	
	add_error_message();
}

function add_error_message()
{
	let errorNode = document.createElement('div');
	let errormessage =
		'CodeIgniter2.x系のサポートは2015年10月31日に終了しました。' +
		'CodeIgniter開発元であるブリティッシュコロンビア工科大学は、CodeIgniter3.xの利用を推奨しています。';

	let textNode = document.createTextNode(errormessage);
	errorNode.appendChild(textNode);
	errorNode.setAttribute('id','errorMessage')

	let linkNode = document.createElement('a');
	let linkmessage =
		'Codeigniter3.xのユーザガイドへ移動する';
	let textLinkNode = document.createTextNode(linkmessage);
	linkNode.appendChild(textLinkNode);
	linkNode.setAttribute('href','http://codeigniter.jp/user_guide/3/')

	errorNode.appendChild(linkNode);

	let headerArea = document.querySelector("#masthead");
	console.log(headerArea);
	let errorBefore = document.querySelector("#masthead table");
	headerArea.insertBefore( errorNode, errorBefore ) ;
}