"use strict";var App;App=angular.module("app",["ngCookies","ngResource","ngRoute","app.controllers","app.directives","app.filters","app.services"]),function(e,t,a,l,n,o,r){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,o=t.createElement(a),r=t.getElementsByTagName(a)[0],o.async=1,o.src=l,r.parentNode.insertBefore(o,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-60716161-1","auto"),ga("send","pageview"),angular.module("app.controllers",[]).controller("AppCtrl",["$scope",function(e){var t,a,l,n,o,r,i,c,s,u,g;return e.pageTitle="Do You give a Fuck?",a=document.getElementById("phoneCanvas"),o=document.getElementById("noCanvas").getContext("2d"),n=document.getElementById("maskCanvas").getContext("2d"),l=a.getContext("2d"),g=121,c=172,t=.02,u=10,i=!1,e.clicked=function(){return i?i=!1:(r(),ga("send","event","phone","tap"))},r=function(){return n.clearRect(0,0,g,c),i=!0},s=function(){var e,a,r,p,f,d,m,h,y,w;for(o.fillStyle="white",o.fillRect(0,0,g,c),o.font="103px BebasNeueRegular",o.fillStyle="#606060",o.fillText("No!",10,120),a=o.getImageData(0,0,g,c).data,r=f=0,y=g-1;y>=0?y>=f:f>=y;r=y>=0?++f:--f)for(p=d=0,w=c-1;w>=0?w>=d:d>=w;p=w>=0?++d:--d)Math.random()<t&&(n.fillStyle="white",n.fillRect(r,p,1,1));for(e=n.getImageData(0,0,g,c).data,r=m=0;120>=m;r=++m)for(p=h=0;171>=h;p=++h)l.fillStyle=Math.random()<.5?"#606060":"white",i&&255===e[4*(121*p+r)]&&255!==a[4*(121*p+r)]&&(l.fillStyle="rgb("+a[4*(121*p+r)]+","+a[4*(121*p+r)+1]+","+a[4*(121*p+r)+2]+")"),l.fillRect(r,p,1,1);return i||(l.fillStyle="#000000",l.font="90px BebasNeueRegular",l.fillText("DO I",10,70),l.font="76px BebasNeueRegular",l.fillText("GIVE",10,125),l.font="42px BebasNeueRegular",l.fillText("A FUCK?",10,159),l.fillStyle="rgba(255,255,255,0.8)",l.strokeStyle="rgba(255,255,255,"+(20-u)/10+")",l.beginPath(),l.arc(g/2,c/2,13,0,2*Math.PI,!1),l.fill(),l.closePath(),l.beginPath(),l.arc(g/2,c/2,u,0,2*Math.PI,!1),l.lineWidth=2,l.stroke(),l.closePath(),u+=.5,u>20&&(u=10)),setTimeout(s,10)},s(),$(window).scroll(function(){return $("#solidbg").css("background-color","rgba(127, 63, 09, "+Math.min(.5,$(window).scrollTop()/1200)+")")})}]),angular.module("app.directives",[]),angular.module("app.filters",[]),angular.module("app.services",[]);