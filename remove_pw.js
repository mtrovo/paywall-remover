// complete version for editing and stuff
(function(){
  // select paywall image and paywall parent container
  var imgs=document.querySelectorAll('[name=paywallimage]')
  for(var i=0; i < imgs.length; i++){
  	var pw = imgs[i], e=0;
	  while((e=pw.parentNode).nodeName != 'BODY')pw=e;
	  pw.style.top='-1000px';
  }

  document.body.setAttribute('style', '')
})();

