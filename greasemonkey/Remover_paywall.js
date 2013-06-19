// ==UserScript==
// @name        Remover paywall
// @namespace   clearpaywall
// @description Remove o paywall dos sites da Folha de S.Paulo
// @include     http://*.folha.uol.com.br/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  var img=document.querySelectorAll('[name=paywallimage]')[0]
  var pw=img.parentNode.parentNode
  pw.style.width='1px'
  pw.style.height='1px'
  pw.style.position='absolute'
  pw.style.top='-1000px'
  document.head.removeChild(document.querySelectorAll('head>style')[0])
})();
