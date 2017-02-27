// ==UserScript==
// @name        Repair Baidu page navigation link
// @namespace   http://www.baidu.com
// @description Repair Baidu search page change links when js is blocked by NoScript
// @include     https://www.baidu.com/s*
// @include     http://www.baidu.com/s*
// @version     0.1
// @grant       none
// ==/UserScript==


//Add "&pn=xx" to the end of current page's url to make the page navigation link addresses.

var href = location.href.replace(/&pn=\d+/,'')
//console.log(href)

var links = document.querySelectorAll('#page > a')
for (i=0; i<links.length; i++) {
  var pnAttr = links[i].href.match(/pn=\d+/)
  if(!pnAttr) {
    pnAttr = 'pn=0'
  }
  links[i].href = href + '&' + pnAttr
  //console.log(links[i].href)
}
