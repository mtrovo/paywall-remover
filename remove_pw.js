// complete version for editing and stuff
(function(){
  // select paywall image and paywall parent container
  var img=document.querySelectorAll('[name=paywallimage]')[0]
  var pw=img.parentNode.parentNode
  pw.style.top='-1000px'

  document.body.setAttribute('style', '')
})();

