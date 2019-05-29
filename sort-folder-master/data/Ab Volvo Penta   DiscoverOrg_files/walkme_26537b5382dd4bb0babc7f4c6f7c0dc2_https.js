﻿/*!
 * WalkMe
 * http://www.walkme.com/
 *
 * Copyright 2012, WalkMe ltd
 */
function WalkmeSnippet(){window._walkmeInternals=window._walkmeInternals||{},ee("snippetStartInit");var e,t,n,r,i,a,o,s=this,u=!1,l="40",c={publish:0,preview:1},d=c.publish;try{o=window.localStorage}catch(w){}function g(){window._walkmeConfig=window._walkmeConfig||{},a=_walkmeInternals,a.snippetLog=[],a.addTimeStamp=ee,v("ish");var e="false";a.isSelfHosted="true"===e,v("ssm"),T(),n=new U,v("lsu");var t,o="https://cdn.walkme.com/users/26537b5382dd4bb0babc7f4c6f7c0dc2/settings.txt",s="https://cdn.walkme.com/users/a88d7f33711443dba034ebed33e929ca/settings.txt",u=true,l=false,c=1==l||u&&f();if(c?(v("lsm"),t=s,_walkmeConfig.platform=3):(v("lsw"),t=o),n.cdnServerName.indexOf("###AUTO_DETECT###")>-1&&(v("lad"),i=K(n.cdnServerName.replace("###AUTO_DETECT###",""),c),n=j(n)),t=x(t),r=D(t),n=N(n),v("cli"),_walkmeConfig.smartLoad){if(top!=window&&!_()&&m())return}else if(1!=window.walkme_load_in_iframe&&top!=window)return;if(v("cuc"),!c&&!P()){try{v("bns"),walkme_browser_not_supported()}catch(d){}return}v("exl");var w=window[A()],g=a.blocked;if(v("lsl"),p(),v("ipm"),!C()&&(v("clt"),window.document.dontLoadTriangle))return v("bsl"),window.walkme_snippet_blocked=!0,a.blocked=!0,void(a.continueLoad=h);v("slb"),w&&!g&&te("slt","WalkMe Snippet was loaded twice"),v("lss"),h(),v("eok")}function f(){return V()}function m(){try{var e=window;do if(e=e.parent.window,e._walkmeConfig)return!0;while(e!=top)}catch(t){}return!1}function _(){try{if(parent.location.href)return!1}catch(e){}return!0}function v(e){a.snippetLog.push(e)}function p(){var e=A();window[e]=s}function h(){window.walkme_custom_settings_data?(v("lso"),S(walkme_custom_settings_data)):(v("lsp"),ee("settingsFileStartLoad"),q(r,null,a.isSelfHosted,"fixedCallback",S))}function S(e){if(ee("settingsFileEndLoad"),!C()&&window.document.dontLoadTriangle)return window.walkme_snippet_blocked=!0,a.blocked=!0,void(a.continueLoad=function(){b(e)});v("cls"),b(e)}function b(e){t=j(e);var n=window.walkme_settings_callback;n&&n(t);var r=Z("walkme_is_enabled_override");if(void 0!==r){if("0"===r)return}else if(!e.IsEnabled)return;k(e.jQueryFile)}function k(e){if(window.walkme_custom_jquery)window.mtjQuery=walkme_custom_jquery,y();else{var t=F("walkmeCustomjQueryUrl");if(0!=t&&(e=t),a.localjQueryUrlPath){var n=e.lastIndexOf("/"),r=e.substring(n+1);e=a.localjQueryUrlPath+r}q(e,y)}}function y(){if(ee("jQueryScriptLoaded"),void 0==window.mtjQuery)return;if(u)return;u=!0,window.walkme_custom_jquery||mtjQuery.noConflict(),t.WaitDocumentReady?(v("wdr"),mtjQuery(document).ready(function(){E(t)})):(v("ndr"),E(t))}function E(e){ee("jQueryDocumentReady");try{I(e)}catch(t){}}function L(){var e;a.localLibUrl&&(e=a.localLibUrl);var t=F("walkmeCustomeLibUrl");if(0!=t)return t;return e}function I(e){var t=F("wm-prelibjs");t&&(e.PreLibJsFile=t),e.PreLibJsFile&&""!=e.PreLibJsFile?(window.walkme_pre_lib_loaded=function(){window.walkme_pre_lib_loaded=function(){try{console.log("walkme_pre_lib_loaded was called twice.")}catch(e){}},O(e)},ee("preLibStartLoad"),q(e.PreLibJsFile)):O(e)}function O(e){var t=L()||e.LibFile;q(t)}function A(){return C()?"wmPreviewSnippet":"wmSnippet"}function T(){var e="###IS_PREVIEW_MODE###";"true"===e&&(d=c.preview)}function C(){return d==c.preview}function U(){this.recorderServer="###RECORDER_SERVER_NAME###",this.cdnServerName="https://cdn.walkme.com",this.storage="proxy",this.userGuids=["26537b5382dd4bb0babc7f4c6f7c0dc2"],window.walkme_custom_cdn_server&&(this.cdnServerName=walkme_custom_cdn_server),window.walkme_custom_app_server&&(this.recorderServer=walkme_custom_app_server),window.walkme_custom_data_url?this.triangleUrl=walkme_custom_data_url:this.triangleUrl=this.cdnServerName+"###SPECIAL_TRIANGLE_FILE###",window.walkme_custom_datafile_url?this.datafilesArray=walkme_custom_datafile_url:this.datafilesArray="###SPECIAL_DATA_FILE###",window.walkme_custom_widget_url?this.widgetUrl=walkme_custom_widget_url:this.widgetUrl="###SPECIAL_WIDGET_FILE###"}function x(e){var t="0",n="26537b5382dd4bb0babc7f4c6f7c0dc2",r=Z("walkme_segmented_settings_"+n+"_"+t,!0);if(r)return v("seg"),r;return e}function D(e){var t="walkme_custom_user_settings_",n=Z(t+"url",!0),r=Z(t+"guid",!0),i=Z(t+"env",!0),o=R();return n&&(e=n),r&&(e=e.replace(/(users\/)([^\/]*)(\/)/,"$1"+r+"$3")),(i||""===i)&&(i&&(i+="/"),e=e.replace(/(users\/[^\/]*\/)(.*)(sett)/,"$1"+i+"$3")),e=j(e),a.settingsUrl=e,v(o?"cb":"ncb"),o&&(e+="?forceUpdate="+(new Date).getTime()),e}function R(){var e=F("walkMe_wm-settings-cache-bust");if(e){var t=/{"val":"(true|false)","exp":(\d+)}/,n=t.exec(e);if(n&&"true"==n[1]&&(new Date).getTime()<parseInt(n[2]))return!0}return!1}function j(e){if(void 0==i)return e;return X(e,function(e){return e.replace("###AUTO_DETECT###",i)})}function M(e){var t,n,r,i=document.cookie.split(";");for(t=0;t<i.length;t++)if(n=i[t].substr(0,i[t].indexOf("=")),r=i[t].substr(i[t].indexOf("=")+1),n=n.replace(/^\s+|\s+$/g,""),n==e)return r;return!1}function F(e){try{if(o){var t=o.getItem(e);if(null!=t)return t}}catch(n){}return!1}function N(e){return e}function P(){var e=Z("walkme_dont_check_browser");if("1"===e||C())return!0;var t=$(),n=W();return t&&n}function W(){return!G()&&!B()}function G(){var e="android.+mobile|blackberry|iemobile|ip(hone|od)|phone|symbian|windows (ce|phone)";return Q(e)}function V(){var e="android|blackberry|iemobile|ip(ad|hone|od)|phone|symbian|windows (ce|phone)";return Q(e)}function Q(e){var t=new RegExp(e,"i").test(navigator.userAgent||navigator.vendor||window.opera);return t}function B(){var e=Math.max(screen.width,screen.height),t=Math.min(screen.width,screen.height),n=e<800||t<600;return n}function $(){var e={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string,r=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,n){if(n.indexOf(e[t].subString)!=-1)return e[t].identity}else if(r)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(t==-1)return;return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer",versionSearch:" rv"},{string:navigator.userAgent,subString:"Edge",identity:"Edge"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};if(e.init(),"Chrome"==e.browser||"Firefox"==e.browser||"Safari"==e.browser&&"Windows"!=e.OS)return!0;if("Explorer"==e.browser&&e.version>=7)return!0;return te("icb","WalkMe: Incompatible browser."),!1}function q(e,t,n,r,i){var a=document.createElement("script");a.async=!0,n&&(e+=(e.indexOf("?")==-1?"?":"&")+"_wmts="+z()),a.src=e,a.id="mt_script",t&&(a.onload=t,a.onreadystatechange=t),J(r,i),H().appendChild(a)}function H(){return e||(e=document.getElementsByTagName("head")[0]),e}function J(e,t){if(e&&t){var n=window[e];window[e]=function(r){window[e]=n,t(r)}}}function z(){return(new Date).getTime()}function K(e,t){for(var n=document.getElementsByTagName("script"),r="a88d7f33711443dba034ebed33e929ca",i="26537b5382dd4bb0babc7f4c6f7c0dc2",o=0;o<n.length;o++){var s=n[o],u=s.src;if(u&&u.indexOf("walkme_")>0){if(e){var o=u.indexOf(e),l=Y(u.substr(0,o));v("dst")}else{var o=u.indexOf("walkme_"),l=Y(u.substr(0,o-1));v("dso")}return t&&a.isSelfHosted&&(l=l.split(i).join(r),v("dsm")),l}}return""}function Y(e){return e.replace(/^\s+|\s+$/g,"")}function X(e,t){if("string"==typeof e)return t(e);if("[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<e.length;n++)e[n]=X(e[n],t);return e}if("object"==typeof e){for(var n in e)Object.hasOwnProperty.call(e,n)&&(e[n]=X(e[n],t));return e}return e}function Z(e,t){var n=t?F(e):M(e);if(n!==!1)return n;var r=window[e];if(void 0!=r)return r;return}function ee(e){try{var t,n,r=(new Date).getTime();_walkmeInternals.timing?(t=_walkmeInternals.timing,n=r-t.list[t.list.length-1].time):(t=_walkmeInternals.timing={},t.map={},t.list=[],t.delta=[],n=0),t.map[e]=r,t.list.push({name:e,time:r}),t.delta.push({name:e,delta:n})}catch(i){}}function te(e,t){try{v(e),console.log(t)}catch(n){}}this.getSnippetVersion=function(){return l},this.getSettingsFile=function(){return t},this.getServerSettings=function(){return n},this.fixAutoDetectPaths=j,setTimeout(g,0)}new WalkmeSnippet;