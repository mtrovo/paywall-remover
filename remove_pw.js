// complete version for editing and stuff
(function(){
  // select paywall image and paywall parent container
  var img=document.querySelectorAll('[name=paywallimage]')[0]
  var pw=img.parentNode.parentNode

  // must be 1px so the browser doesn't trigger the visible attr
  pw.style.width='1px'
  pw.style.height='1px'

  // force positioning outside window
  pw.style.position='absolute'
  pw.style.top='-1000px'

  // remove stylesheet with 'important!' overflow markings
  document.head.removeChild(document.querySelectorAll('head>style')[0])
})();

