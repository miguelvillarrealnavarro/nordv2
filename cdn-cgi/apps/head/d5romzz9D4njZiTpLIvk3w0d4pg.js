;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="d54782092980001a7ac0b68bd1e1d1ef";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["Gja7vEoCkvPD"]={appId:"XzVIEqe1R2kW",scope:{}};;CloudflareApps.installs["Gja7vEoCkvPD"].options={"chrome":0,"edge":17,"firefox":0,"ie":11,"opera":0,"safari":0};;CloudflareApps.installs["lzvdEj2bhKN1"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["lzvdEj2bhKN1"].options={"id":"UA-38030533-1","social":true};;CloudflareApps.installs["8SMY3u9XSU2v"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["8SMY3u9XSU2v"].options={"blocks":[{"code":"\u003cscript type=\"text/javascript\"\u003e!function(e,t,n){function a(){var e=t.getElementsByTagName(\"script\")[0],n=t.createElement(\"script\");n.type=\"text/javascript\",n.async=!0,n.src=\"https://beacon-v2.helpscout.net\",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],\"complete\"===t.readyState)return a();e.attachEvent?e.attachEvent(\"onload\",a):e.addEventListener(\"load\",a,!1)}(window,document,window.Beacon||function(){});\u003c/script\u003e\u003cscript\u003ewindow.Beacon('init', 'e5f4e1ae-d219-4b46-9385-242e16c6d443')\u003c/script\u003e","location":{"method":"append","pages":{"URLPatterns":["^demo.web3canvas.com/?.*$"]},"selector":"body"}}]};;CloudflareApps.installs["8SMY3u9XSU2v"].selectors={"blocks[0].location.selector":"body"};;if(CloudflareApps.matchPage(CloudflareApps.installs['8SMY3u9XSU2v'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['8SMY3u9XSU2v'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['8SMY3u9XSU2v'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['lzvdEj2bhKN1'].URLPatterns)){(function(){var options=CloudflareApps.installs['lzvdEj2bhKN1'].options;var id;if(options.account&&options.organization){id=options["web-properties-for-"+options.organization];}else{id=(options.id||"").trim();}
if(!id){console.log("Cloudflare Google Analytics: Disabled. UA-ID not present.");return;}else if("lzvdEj2bhKN1"==="preview"){console.log("Cloudflare Google Analytics: Enabled",id);}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split("#")[0].match(/[^?=&]+=([^&]*)?/g);for(var i=0,chunk;(chunk=parameters[i]);++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split("=")[1]);}}}}
window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}
gtag("js",new Date());gtag("config",id);gtag("set",{anonymizeIp:options.anonymizeIp});var vendorScript=document.createElement("script");vendorScript.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(vendorScript);if(options.social){window.addEventListener("load",function googleAnalyticsSocialTracking(){var FB=window.FB;var twttr=window.twttr;if("FB"in window&&"Event"in FB&&"subscribe"in window.FB.Event){FB.Event.subscribe("edge.create",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"like",content_id:targetUrl});});FB.Event.subscribe("edge.remove",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"unlike",content_id:targetUrl});});FB.Event.subscribe("message.send",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"send",content_id:targetUrl});});}
if("twttr"in window&&"events"in twttr&&"bind"in twttr.events){twttr.events.bind("tweet",function(event){if(event){var targetUrl;if(event.target&&event.target.nodeName==="IFRAME"){targetUrl=resolveParameter(event.target.src,"url");}
gtag("event","share",{method:"twitter",event_action:"tweet",content_id:targetUrl});}});}},false);}})();}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/at8SSPnfnV6vhCRnQFlSHZWR_DA.js';document.head.appendChild(script);})();