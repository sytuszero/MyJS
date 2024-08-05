!function(n){function t(t,c){var S=n.extend({},n.fn.countdowntimer.defaults,c),t=t;t.addClass("style");var m="",M="",h="",v="";if(m=S.size,M=S.borderColor,h=S.fontColor,v=S.backgroundColor,void 0!=c.regexpMatchFormat&&void 0!=c.regexpReplaceWith&&void 0==c.timeSeparator&&(window["regexpMatchFormat_"+t.attr("id")]=c.regexpMatchFormat,window["regexpReplaceWith_"+t.attr("id")]=c.regexpReplaceWith),void 0!=c.borderColor||void 0!=c.fontColor||void 0!=c.backgroundColor){var g={background:v,color:h,"border-color":M};t.css(g)}else t.addClass("colorDefinition");if(void 0!=c.size)switch(m){case"xl":t.addClass("size_xl");break;case"lg":t.addClass("size_lg");break;case"md":t.addClass("size_md");break;case"sm":t.addClass("size_sm");break;case"xs":t.addClass("size_xs")}else"sm"==m&&t.addClass("size_sm");if(void 0!=c.startDate||void 0!=c.dateAndTime||void 0!=c.currentTime||void 0==c.hours&&void 0==c.minutes&&void 0==c.seconds)if(void 0!=c.startDate&&void 0!=c.dateAndTime&&void 0==c.currentTime){startDate="",endDate="",timer_startDate="",window["startDate"+t.attr("id")]=new Date(S.startDate),window["endDate"+t.attr("id")]=new Date(S.dateAndTime);var p="withStart";a(t,S,p),window["timer_startDate"+t.attr("id")]=setInterval(function(){a(t,S,p)},1e3*S.tickInterval)}else if(void 0==c.startDate&&void 0!=c.dateAndTime&&void 0==c.currentTime){startTime="",dateTime="",timer_givenDate="";var I=S.startDate.getHours()<10?"0"+S.startDate.getHours():S.startDate.getHours(),f=S.startDate.getMinutes()<10?"0"+S.startDate.getMinutes():S.startDate.getMinutes(),k=S.startDate.getSeconds()<10?"0"+S.startDate.getSeconds():S.startDate.getSeconds(),D=S.startDate.getMonth()+1<10?"0"+(S.startDate.getMonth()+1):S.startDate.getMonth()+1,T=S.startDate.getDate()<10?"0"+S.startDate.getDate():S.startDate.getDate(),x=S.startDate.getFullYear();window["startTime"+t.attr("id")]=new Date(x+"/"+D+"/"+T+" "+I+":"+f+":"+k),window["dateTime"+t.attr("id")]=new Date(S.dateAndTime);var p="withnoStart";a(t,S,p),window["timer_givenDate"+t.attr("id")]=setInterval(function(){a(t,S,p)},1e3*S.tickInterval)}else void 0!=c.currentTime?(currentTime="",timer_currentDate="",window["currentTime"+t.attr("id")]=S.currentTime,_(t,S),window["timer_currentDate"+t.attr("id")]=setInterval(function(){_(t,S)},1e3*S.tickInterval)):(countSeconds="",timer_secondsTimer="",window["countSeconds"+t.attr("id")]=S.seconds,window["timer_secondsTimer"+t.attr("id")]=setInterval(function(){u(t)},1e3));else void 0!=c.hours&&void 0==c.minutes&&void 0==c.seconds?(hours_H="",minutes_H="",seconds_H="",timer_H="",window["hours_H"+t.attr("id")]=S.hours,window["minutes_H"+t.attr("id")]=S.minutes,window["seconds_H"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"H",S,e),void 0!=c.stopButton&&H(t,"H",S,e),e(t,S),window["timer_H"+t.attr("id")]=setInterval(function(){e(t,S)},1e3*S.tickInterval)):void 0==c.hours&&void 0!=c.minutes&&void 0==c.seconds?(hours_M="",minutes_M="",seconds_M="",timer_M="",window["hours_M"+t.attr("id")]=S.hours,window["minutes_M"+t.attr("id")]=S.minutes,window["seconds_M"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"M",S,o),void 0!=c.stopButton&&H(t,"M",S,o),o(t,S),window["timer_M"+t.attr("id")]=setInterval(function(){o(t,S)},1e3*S.tickInterval)):void 0==c.hours&&void 0==c.minutes&&void 0!=c.seconds?(hours_S="",minutes_S="",seconds_S="",timer_S="",window["hours_S"+t.attr("id")]=S.hours,window["minutes_S"+t.attr("id")]=S.minutes,window["seconds_S"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"S",S,i),void 0!=c.stopButton&&H(t,"S",S,i),i(t,S),window["timer_S"+t.attr("id")]=setInterval(function(){i(t,S)},1e3*S.tickInterval)):void 0!=c.hours&&void 0!=c.minutes&&void 0==c.seconds?(hours_HM="",minutes_HM="",seconds_HM="",timer_HM="",window["hours_HM"+t.attr("id")]=S.hours,window["minutes_HM"+t.attr("id")]=S.minutes,window["seconds_HM"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"HM",S,w),void 0!=c.stopButton&&H(t,"HM",S,w),w(t,S),window["timer_HM"+t.attr("id")]=setInterval(function(){w(t,S)},1e3*S.tickInterval)):void 0==c.hours&&void 0!=c.minutes&&void 0!=c.seconds?(hours_MS="",minutes_MS="",seconds_MS="",timer_MS="",window["hours_MS"+t.attr("id")]=S.hours,window["minutes_MS"+t.attr("id")]=S.minutes,window["seconds_MS"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"MS",S,d),void 0!=c.stopButton&&H(t,"MS",S,d),d(t,S),window["timer_MS"+t.attr("id")]=setInterval(function(){d(t,S)},1e3*S.tickInterval)):void 0!=c.hours&&void 0==c.minutes&&void 0!=c.seconds?(hours_HS="",minutes_HS="",seconds_HS="",timer_HS="",window["hours_HS"+t.attr("id")]=S.hours,window["minutes_HS"+t.attr("id")]=S.minutes,window["seconds_HS"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"HS",S,s),void 0!=c.stopButton&&H(t,"HS",S,s),s(t,S),window["timer_HS"+t.attr("id")]=setInterval(function(){s(t,S)},1e3*S.tickInterval)):void 0!=c.hours&&void 0!=c.minutes&&void 0!=c.seconds&&(hours_HMS="",minutes_HMS="",seconds_HMS="",timer_HMS="",window["hours_HMS"+t.attr("id")]=S.hours,window["minutes_HMS"+t.attr("id")]=S.minutes,window["seconds_HMS"+t.attr("id")]=S.seconds,void 0!=c.pauseButton&&l(t,"HMS",S,r),void 0!=c.stopButton&&H(t,"HMS",S,r),r(t,S),window["timer_HMS"+t.attr("id")]=setInterval(function(){r(t,S)},1e3*S.tickInterval))}function e(n,t){var e=n.attr("id");window["minutes_H"+e]==t.minutes&&window["seconds_H"+e]==t.seconds&&window["hours_H"+e]==t.hours?(window["hours_H"+e].toString().length<2&&(window["hours_H"+e]="0"+window["hours_H"+e]),S(n,window["hours_H"+e]+t.timeSeparator+"00"+t.timeSeparator+"00"),window["seconds_H"+e]=60-t.tickInterval,window["minutes_H"+e]=59,0!=window["hours_H"+e]?window["hours_H"+e]--:(delete window["hours_H"+e],delete window["minutes_H"+e],delete window["seconds_H"+e],clearInterval(window["timer_H"+e]),c(n,t))):(window["hours_H"+e].toString().length<2&&(window["hours_H"+e]="0"+window["hours_H"+e]),window["minutes_H"+e].toString().length<2&&(window["minutes_H"+e]="0"+window["minutes_H"+e]),window["seconds_H"+e].toString().length<2&&(window["seconds_H"+e]="0"+window["seconds_H"+e]),S(n,window["hours_H"+e]+t.timeSeparator+window["minutes_H"+e]+t.timeSeparator+window["seconds_H"+e]),window["seconds_H"+e]-=t.tickInterval,0!=window["minutes_H"+e]&&window["seconds_H"+e]<0&&(window["minutes_H"+e]--,window["seconds_H"+e]=60-t.tickInterval),0==window["minutes_H"+e]&&window["seconds_H"+e]<0&&0!=window["hours_H"+e]&&(window["hours_H"+e]--,window["minutes_H"+e]=59,window["seconds_H"+e]=60-t.tickInterval),0==window["minutes_H"+e]&&window["seconds_H"+e]<0&&0==window["hours_H"+e]&&(delete window["hours_H"+e],delete window["minutes_H"+e],delete window["seconds_H"+e],clearInterval(window["timer_H"+e]),c(n,t))),e=null}function o(n,t){var e=n.attr("id");window["minutes_M"+e]==t.minutes&&window["seconds_M"+e]==t.seconds?(window["minutes_M"+e].toString().length<2&&(window["minutes_M"+e]="0"+window["minutes_M"+e]),S(n,window["minutes_M"+e]+t.timeSeparator+"00"),window["seconds_M"+e]=60-t.tickInterval,0!=window["minutes_M"+e]?window["minutes_M"+e]--:(delete window["hours_M"+e],delete window["minutes_M"+e],delete window["seconds_M"+e],clearInterval(window["timer_M"+e]),c(n,t))):(window["minutes_M"+e].toString().length<2&&(window["minutes_M"+e]="0"+window["minutes_M"+e]),window["seconds_M"+e].toString().length<2&&(window["seconds_M"+e]="0"+window["seconds_M"+e]),S(n,window["minutes_M"+e]+t.timeSeparator+window["seconds_M"+e]),window["seconds_M"+e]-=t.tickInterval,0!=window["minutes_M"+e]&&window["seconds_M"+e]<0&&(window["minutes_M"+e]--,window["seconds_M"+e]=60-t.tickInterval),0==window["minutes_M"+e]&&window["seconds_M"+e]<0&&(delete window["hours_M"+e],delete window["minutes_M"+e],delete window["seconds_M"+e],clearInterval(window["timer_M"+e]),c(n,t))),e=null}function i(n,t){var e=n.attr("id");window["seconds_S"+e].toString().length<2&&(window["seconds_S"+e]="0"+window["seconds_S"+e]),S(n,window["seconds_S"+e]+" sec"),window["seconds_S"+e]-=t.tickInterval,window["seconds_S"+e]<0&&(delete window["hours_S"+e],delete window["minutes_S"+e],delete window["seconds_S"+e],clearInterval(window["timer_S"+e]),c(n,t)),e=null}function w(n,t){var e=n.attr("id");window["minutes_HM"+e]==t.minutes&&window["hours_HM"+e]==t.hours?(window["hours_HM"+e].toString().length<2&&(window["hours_HM"+e]="0"+window["hours_HM"+e]),window["minutes_HM"+e].toString().length<2&&(window["minutes_HM"+e]="0"+window["minutes_HM"+e]),S(n,window["hours_HM"+e]+t.timeSeparator+window["minutes_HM"+e]+t.timeSeparator+"00"),0!=window["hours_HM"+e]&&0==window["minutes_HM"+e]?(window["hours_HM"+e]--,window["minutes_HM"+e]=59,window["seconds_HM"+e]=60-t.tickInterval):0==window["hours_HM"+e]&&0!=window["minutes_HM"+e]?(window["seconds_HM"+e]=60-t.tickInterval,window["minutes_HM"+e]--):(window["seconds_HM"+e]=60-t.tickInterval,window["minutes_HM"+e]--),0==window["hours_HM"+e]&&0==window["minutes_HM"+e]&&60==window["seconds_HM"+e]&&(delete window["hours_HM"+e],delete window["minutes_HM"+e],delete window["seconds_HM"+e],clearInterval(window["timer_HM"+e]),c(n,t))):(window["hours_HM"+e].toString().length<2&&(window["hours_HM"+e]="0"+window["hours_HM"+e]),window["minutes_HM"+e].toString().length<2&&(window["minutes_HM"+e]="0"+window["minutes_HM"+e]),window["seconds_HM"+e].toString().length<2&&(window["seconds_HM"+e]="0"+window["seconds_HM"+e]),S(n,window["hours_HM"+e]+t.timeSeparator+window["minutes_HM"+e]+t.timeSeparator+window["seconds_HM"+e]),window["seconds_HM"+e]-=t.tickInterval,0!=window["minutes_HM"+e]&&window["seconds_HM"+e]<0&&(window["minutes_HM"+e]--,window["seconds_HM"+e]=60-t.tickInterval),0==window["minutes_HM"+e]&&window["seconds_HM"+e]<0&&0!=window["hours_HM"+e]&&(window["hours_HM"+e]--,window["minutes_HM"+e]=59,window["seconds_HM"+e]=60-t.tickInterval),0==window["minutes_HM"+e]&&window["seconds_HM"+e]<0&&0==window["hours_HM"+e]&&(delete window["hours_HM"+e],delete window["minutes_HM"+e],delete window["seconds_HM"+e],clearInterval(window["timer_HM"+e]),c(n,t))),e=null}function d(n,t){var e=n.attr("id");window["minutes_MS"+e]==t.minutes&&window["seconds_MS"+e]==t.seconds?(window["minutes_MS"+e].toString().length<2&&(window["minutes_MS"+e]="0"+window["minutes_MS"+e]),window["seconds_MS"+e].toString().length<2&&(window["seconds_MS"+e]="0"+window["seconds_MS"+e]),S(n,window["minutes_MS"+e]+t.timeSeparator+window["seconds_MS"+e]),0!=window["minutes_MS"+e]&&0==window["seconds_MS"+e]?(window["minutes_MS"+e]--,window["seconds_MS"+e]=60-t.tickInterval):0==window["minutes_MS"+e]&&0==window["seconds_MS"+e]?(delete window["hours_MS"+e],delete window["minutes_MS"+e],delete window["seconds_MS"+e],clearInterval(window["timer_MS"+e]),c(n,t)):window["seconds_MS"+e]-=t.tickInterval):(window["minutes_MS"+e].toString().length<2&&(window["minutes_MS"+e]="0"+window["minutes_MS"+e]),window["seconds_MS"+e].toString().length<2&&(window["seconds_MS"+e]="0"+window["seconds_MS"+e]),S(n,window["minutes_MS"+e]+t.timeSeparator+window["seconds_MS"+e]),window["seconds_MS"+e]-=t.tickInterval,0!=window["minutes_MS"+e]&&window["seconds_MS"+e]<0&&(window["minutes_MS"+e]--,window["seconds_MS"+e]=60-t.tickInterval),0==window["minutes_MS"+e]&&window["seconds_MS"+e]<0&&(delete window["hours_MS"+e],delete window["minutes_MS"+e],delete window["seconds_MS"+e],clearInterval(window["timer_MS"+e]),c(n,t))),e=null}function s(n,t){var e=n.attr("id");window["seconds_HS"+e]==t.seconds&&window["hours_HS"+e]==t.hours?(window["hours_HS"+e].toString().length<2&&(window["hours_HS"+e]="0"+window["hours_HS"+e]),window["seconds_HS"+e].toString().length<2&&(window["seconds_HS"+e]="0"+window["seconds_HS"+e]),S(n,window["hours_HS"+e]+t.timeSeparator+"00"+t.timeSeparator+window["seconds_HS"+e]),0==window["hours_HS"+e]&&0==window["seconds_HS"+e]?(delete window["hours_HS"+e],delete window["minutes_HS"+e],delete window["seconds_HS"+e],clearInterval(window["timer_HS"+e]),c(n,t)):0!=window["hours_HS"+e]&&0==window["seconds_HS"+e]?(window["hours_HS"+e]--,window["minutes_HS"+e]=59,window["seconds_HS"+e]=60-t.tickInterval):window["seconds_HS"+e]-=t.tickInterval):(window["hours_HS"+e].toString().length<2&&(window["hours_HS"+e]="0"+window["hours_HS"+e]),window["minutes_HS"+e].toString().length<2&&(window["minutes_HS"+e]="0"+window["minutes_HS"+e]),window["seconds_HS"+e].toString().length<2&&(window["seconds_HS"+e]="0"+window["seconds_HS"+e]),S(n,window["hours_HS"+e]+t.timeSeparator+window["minutes_HS"+e]+t.timeSeparator+window["seconds_HS"+e]),window["seconds_HS"+e]-=t.tickInterval,0!=window["minutes_HS"+e]&&window["seconds_HS"+e]<0&&(window["minutes_HS"+e]--,window["seconds_HS"+e]=60-t.tickInterval),0==window["minutes_HS"+e]&&window["seconds_HS"+e]<0&&0!=window["hours_HS"+e]&&(window["hours_HS"+e]--,window["minutes_HS"+e]=59,window["seconds_HS"+e]=60-t.tickInterval),0==window["minutes_HS"+e]&&window["seconds_HS"+e]<0&&0==window["hours_HS"+e]&&(delete window["hours_HS"+e],delete window["minutes_HS"+e],delete window["seconds_HS"+e],clearInterval(window["timer_HS"+e]),c(n,t))),e=null}function r(n,t){var e=n.attr("id");window["minutes_HMS"+e]==t.minutes&&window["seconds_HMS"+e]==t.seconds&&window["hours_HMS"+e]==t.hours?(window["hours_HMS"+e].toString().length<2&&(window["hours_HMS"+e]="0"+window["hours_HMS"+e]),window["minutes_HMS"+e].toString().length<2&&(window["minutes_HMS"+e]="0"+window["minutes_HMS"+e]),window["seconds_HMS"+e].toString().length<2&&(window["seconds_HMS"+e]="0"+window["seconds_HMS"+e]),S(n,window["hours_HMS"+e]+t.timeSeparator+window["minutes_HMS"+e]+t.timeSeparator+window["seconds_HMS"+e]),0==window["hours_HMS"+e]&&0==window["minutes_HMS"+e]&&0==window["seconds_HMS"+e]?(delete window["hours_HMS"+e],delete window["minutes_HMS"+e],delete window["seconds_HMS"+e],clearInterval(window["timer_HMS"+e]),c(n,t)):0!=window["hours_HMS"+e]&&0==window["minutes_HMS"+e]&&0==window["seconds_HMS"+e]?(window["hours_HMS"+e]--,window["minutes_HMS"+e]=59,window["seconds_HMS"+e]=60-t.tickInterval):0==window["hours_HMS"+e]&&0!=window["minutes_HMS"+e]&&0==window["seconds_HMS"+e]?(window["minutes_HMS"+e]--,window["seconds_HMS"+e]=60-t.tickInterval):0!=window["hours_HMS"+e]&&0!=window["minutes_HMS"+e]&&0==window["seconds_HMS"+e]?(window["minutes_HMS"+e]--,window["seconds_HMS"+e]=60-t.tickInterval):window["seconds_HMS"+e]-=t.tickInterval):(window["hours_HMS"+e].toString().length<2&&(window["hours_HMS"+e]="0"+window["hours_HMS"+e]),window["minutes_HMS"+e].toString().length<2&&(window["minutes_HMS"+e]="0"+window["minutes_HMS"+e]),window["seconds_HMS"+e].toString().length<2&&(window["seconds_HMS"+e]="0"+window["seconds_HMS"+e]),S(n,window["hours_HMS"+e]+t.timeSeparator+window["minutes_HMS"+e]+t.timeSeparator+window["seconds_HMS"+e]),window["seconds_HMS"+e]-=t.tickInterval,0!=window["minutes_HMS"+e]&&window["seconds_HMS"+e]<0&&(window["minutes_HMS"+e]--,window["seconds_HMS"+e]=60-t.tickInterval),0==window["minutes_HMS"+e]&&window["seconds_HMS"+e]<0&&0!=window["hours_HMS"+e]&&(window["hours_HMS"+e]--,window["minutes_HMS"+e]=59,window["seconds_HMS"+e]=60-t.tickInterval),0==window["minutes_HMS"+e]&&window["seconds_HMS"+e]<0&&0==window["hours_HMS"+e]&&(delete window["hours_HMS"+e],delete window["minutes_HMS"+e],delete window["seconds_HMS"+e],clearInterval(window["timer_HMS"+e]),c(n,t))),e=null}function a(n,t,e){var o=n.attr("id"),i="withnoStart"==e?window["dateTime"+o]:window["endDate"+o],w="withnoStart"==e?window["startTime"+o]:window["startDate"+o],d=Math.floor((i-w)/864e5),s=Math.floor((i-w)%864e5/36e5),r=Math.floor((i-w)%864e5/6e4)%60,a=Math.floor((i-w)%864e5/1e3)%60%60;i-w>0?(d.toString().length<2&&(d="0"+d),s.toString().length<2&&(s="0"+s),r.toString().length<2&&(r="0"+r),a.toString().length<2&&(a="0"+a),S(n,d+t.timeSeparator+s+t.timeSeparator+r+t.timeSeparator+a),"withnoStart"==e?window["startTime"+o].setSeconds(window["startTime"+o].getSeconds()+t.tickInterval):window["startDate"+o].setSeconds(window["startDate"+o].getSeconds()+t.tickInterval)):(S(n,"00"+t.timeSeparator+"00"+t.timeSeparator+"00"+t.timeSeparator+"00"),"withnoStart"==e?(delete window["dateTime"+o],delete window["startTime"+o],clearInterval(window["timer_givenDate"+o])):"withStart"==e&&(delete window["startDate"+o],delete window["endDate"+o],clearInterval(window["timer_startDate"+o])),c(n,t)),o=null}function _(n,t){if(1==window["currentTime"+n.attr("id")]){var e=new Date,o=e.getHours(),i=e.getMinutes(),w=e.getSeconds();o.toString().length<2&&(o="0"+o),i.toString().length<2&&(i="0"+i),w.toString().length<2&&(w="0"+w),S(n,o+t.timeSeparator+i+t.timeSeparator+w)}else alert("Set Current Time option.")}function u(n){var t=n.attr("id");window["countSeconds"+t].toString().length<2&&(window["countSeconds"+t]="0"+window["countSeconds"+t]),S(n,window["countSeconds"+t]+" sec"),window["countSeconds"+t]--,-1==window["countSeconds"+t]&&(delete window["countSeconds"+t],clearInterval(window["timer_secondsTimer"+t])),t=null}function c(t,e){null!=e.timeUp&&1==n.isFunction(e.timeUp)&&e.timeUp.apply(t,[]),null!=e.expiryUrl&&(window.location=e.expiryUrl)}function S(n,t){var e=t;if("undefined"!=typeof window["regexpMatchFormat_"+n.attr("id")]&&"undefined"!=typeof window["regexpReplaceWith_"+n.attr("id")]){var o=new RegExp(window["regexpMatchFormat_"+n.attr("id")]);e=t.replace(o,window["regexpReplaceWith_"+n.attr("id")])}n.html(e)}function l(t,e,o,i){n("#"+o.pauseButton).click(function(){"resume"!=n(this).val()?(n("#"+o.pauseButton).val("resume").text("Resume"),clearInterval(window["timer_"+e+t.attr("id")])):"resume"==n(this).val()&&(n("#"+o.pauseButton).val("pause").text("Pause"),window["timer_"+e+t.attr("id")]=setInterval(function(){i(t,o)},1e3*o.tickInterval))})}function H(t,e,o,i){n("#"+o.stopButton).click(function(){"start"!=n(this).val()?(n("#"+o.stopButton).val("start").text("Start"),clearInterval(window["timer_"+e+t.attr("id")]),window["hours_"+e+t.attr("id")]=o.hours,window["minutes_"+e+t.attr("id")]=o.minutes,window["seconds_"+e+t.attr("id")]=o.seconds,i(t,o)):"start"==n(this).val()&&(n("#"+o.stopButton).val("stop").text("Stop"),window["timer_"+e+t.attr("id")]=setInterval(function(){i(t,o)},1e3*o.tickInterval))})}n.fn.countdowntimer=function(e){return this.each(function(){t(n(this),e)})},n.fn.countdowntimer.defaults={hours:0,minutes:0,seconds:60,startDate:new Date,dateAndTime:new Date("0000/00/00 00:00:00"),currentTime:!1,size:"sm",borderColor:"#F0068E",fontColor:"#FFFFFF",backgroundColor:"#000000",timeSeparator:":",tickInterval:1,timeUp:null,expiryUrl:null,regexpMatchFormat:null,regexpReplaceWith:null,pauseButton:null,stopButton:null}}(jQuery);
!function(t){"use strict";function o(o,_){var M=t.extend({},t.fn.countdowntimer.defaults,_);t.extend(!0,M,t.fn.countdowntimer.regionalOptions,_),o.data("opts",{opts:M}),o.addClass("style");var S=M.size,v=M.borderColor,H=M.fontColor,p=M.backgroundColor;if(void 0!==_.regexpMatchFormat&&void 0!==_.regexpReplaceWith&&void 0===_.timeSeparator&&void 0===_.labelsFormat&&(window["regexpMatchFormat_"+o.attr("id")]=_.regexpMatchFormat,window["regexpReplaceWith_"+o.attr("id")]=_.regexpReplaceWith),void 0!==_.displayFormat){var h=[];h[0]=M.displayFormat.match("Y")?"!":"#",h[1]=M.displayFormat.match("O")?"!":"#",h[2]=M.displayFormat.match("D")?"!":"#",h[3]=M.displayFormat.match("H")?"!":"#",h[4]=M.displayFormat.match("M")?"!":"#",h[5]=M.displayFormat.match("S")?"!":"#",M.displayFormat=h.join("")}else M.displayFormat="###!!!";if(void 0!==_.borderColor||void 0!==_.fontColor||void 0!==_.backgroundColor){var f={background:p,color:H,"border-color":v};o.css(f)}else o.addClass("colorDefinition");if(!1===M.labelsFormat)if(void 0!==_.size)switch(S){case"xl":o.addClass("size_xl");break;case"lg":o.addClass("size_lg");break;case"md":o.addClass("size_md");break;case"sm":o.addClass("size_sm");break;case"xs":o.addClass("size_xs")}else"sm"===S&&o.addClass("size_sm");if(!0===M.isRTL&&o.addClass("lang-rtl"),void 0!==_.startDate||void 0!==_.dateAndTime||void 0!==_.currentTime||void 0===_.hours&&void 0===_.minutes&&void 0===_.seconds)if(void 0!==_.startDate&&void 0!==_.dateAndTime&&void 0===_.currentTime){window["startDate"+o.attr("id")]=new Date(M.startDate),window["endDate"+o.attr("id")]=null!==M.timeZone?e(new Date(M.dateAndTime),M.timeZone):new Date(M.dateAndTime);void 0!==_.beforeExpiryTime&&(window["beforeExpiry_withStart"+o.attr("id")]=M.beforeExpiryTime),c(o,M,"withStart"),window["timer_startDate"+o.attr("id")]=setInterval(function(){c(o,M,"withStart")},1e3*M.tickInterval)}else if(void 0===_.startDate&&void 0!==_.dateAndTime&&void 0===_.currentTime){var y=M.startDate.getHours(),x=M.startDate.getMinutes(),I=M.startDate.getSeconds(),g=M.startDate.getMonth()+1,b=M.startDate.getDate(),k=M.startDate.getFullYear(),D=new Date(k+"/"+g+"/"+b+" "+y+":"+x+":"+I);window["startTime"+o.attr("id")]=D,window["dateTime"+o.attr("id")]=null!==M.timeZone?e(new Date(M.dateAndTime),M.timeZone):new Date(M.dateAndTime);void 0!==_.beforeExpiryTime&&(window["beforeExpiry_withnoStart"+o.attr("id")]=M.beforeExpiryTime),c(o,M,"withnoStart"),window["timer_givenDate"+o.attr("id")]=setInterval(function(){c(o,M,"withnoStart")},1e3*M.tickInterval)}else void 0!==_.currentTime&&!0===M.currentTime?(l(o,M),window["timer_currentDate"+o.attr("id")]=setInterval(function(){l(o,M)},1e3*M.tickInterval)):(window["countSeconds"+o.attr("id")]=M.seconds,m(o,M),window["timer_secondsTimer"+o.attr("id")]=setInterval(function(){m(o,M)},1e3));else void 0!==_.hours&&void 0===_.minutes&&void 0===_.seconds?n(o,"H",M,i,_):void 0===_.hours&&void 0!==_.minutes&&void 0===_.seconds?n(o,"M",M,d,_):void 0===_.hours&&void 0===_.minutes&&void 0!==_.seconds?n(o,"S",M,s,_):void 0!==_.hours&&void 0!==_.minutes&&void 0===_.seconds?n(o,"HM",M,w,_):void 0===_.hours&&void 0!==_.minutes&&void 0!==_.seconds?n(o,"MS",M,r,_):void 0!==_.hours&&void 0===_.minutes&&void 0!==_.seconds?n(o,"HS",M,a,_):void 0!==_.hours&&void 0!==_.minutes&&void 0!==_.seconds&&n(o,"HMS",M,u,_)}function n(t,o,n,e,i){t.data("typefunc",{type:o,func:e}),window["hours_"+o+t.attr("id")]=n.hours,window["minutes_"+o+t.attr("id")]=n.minutes,window["seconds_"+o+t.attr("id")]=n.seconds,void 0!==i.beforeExpiryTime&&(window["beforeExpiry_"+o+t.attr("id")]=n.beforeExpiryTime),void 0!==i.pauseButton&&H(t,o,n,e),void 0!==i.stopButton&&p(t,o,n,e),e(t,n),window["timer_"+o+t.attr("id")]=setInterval(function(){e(t,n)},1e3*n.tickInterval)}function e(t,o){return new Date(t.getTime()+6e4*t.getTimezoneOffset()+6e4*(Math.abs(o)<30?60*o:o))}function i(t,o){var n=t.attr("id"),e="";window["minutes_H"+n]===o.minutes&&window["seconds_H"+n]===o.seconds&&window["hours_H"+n]===o.hours?(v(t,e=S(t,o,0,0,0,window["hours_H"+n],0,0),o),void 0!==window["beforeExpiry_H"+n]&&M(t,o,e,"H"),window["seconds_H"+n]=60-o.tickInterval,window["minutes_H"+n]=59,0!==window["hours_H"+n]?window["hours_H"+n]--:h(t,"H",o),!0===t.data("countdowntimer").destroy&&h(t,"H",o)):(v(t,e=S(t,o,0,0,0,window["hours_H"+n],window["minutes_H"+n],window["seconds_H"+n]),o),void 0!==window["beforeExpiry_H"+n]&&M(t,o,e,"H"),window["seconds_H"+n]-=o.tickInterval,0!==window["minutes_H"+n]&&window["seconds_H"+n]<0&&(window["minutes_H"+n]--,window["seconds_H"+n]=60-o.tickInterval),0===window["minutes_H"+n]&&window["seconds_H"+n]<0&&0!==window["hours_H"+n]&&(window["hours_H"+n]--,window["minutes_H"+n]=59,window["seconds_H"+n]=60-o.tickInterval),(0===window["minutes_H"+n]&&window["seconds_H"+n]<0&&0===window["hours_H"+n]||!0===t.data("countdowntimer").destroy)&&h(t,"H",o)),n=null}function d(t,o){var n=t.attr("id"),e="";window["minutes_M"+n]===o.minutes&&window["seconds_M"+n]===o.seconds?(v(t,e=S(t,o,0,0,0,0,window["minutes_M"+n],0),o),void 0!==window["beforeExpiry_M"+n]&&M(t,o,e,"M"),window["seconds_M"+n]=60-o.tickInterval,0!==window["minutes_M"+n]?window["minutes_M"+n]--:h(t,"M",o),!0===t.data("countdowntimer").destroy&&h(t,"M",o)):(v(t,e=S(t,o,0,0,0,0,window["minutes_M"+n],window["seconds_M"+n]),o),void 0!==window["beforeExpiry_M"+n]&&M(t,o,e,"M"),window["seconds_M"+n]-=o.tickInterval,0!==window["minutes_M"+n]&&window["seconds_M"+n]<0&&(window["minutes_M"+n]--,window["seconds_M"+n]=60-o.tickInterval),(0===window["minutes_M"+n]&&window["seconds_M"+n]<0||!0===t.data("countdowntimer").destroy)&&h(t,"M",o)),n=null}function s(t,o){var n=t.attr("id"),e="";v(t,e=S(t,o,0,0,0,0,0,window["seconds_S"+n]),o),void 0!==window["beforeExpiry_S"+n]&&M(t,o,e,"S"),window["seconds_S"+n]-=o.tickInterval,(window["seconds_S"+n]<0||!0===t.data("countdowntimer").destroy)&&h(t,"S",o),n=null}function w(t,o){var n=t.attr("id"),e="";window["minutes_HM"+n]===o.minutes&&window["hours_HM"+n]===o.hours?(v(t,e=S(t,o,0,0,0,window["hours_HM"+n],window["minutes_HM"+n],0),o),void 0!==window["beforeExpiry_HM"+n]&&M(t,o,e,"HM"),0!==window["hours_HM"+n]&&0===window["minutes_HM"+n]?(window["hours_HM"+n]--,window["minutes_HM"+n]=59,window["seconds_HM"+n]=60-o.tickInterval):(0===window["hours_HM"+n]&&window["minutes_HM"+n],window["seconds_HM"+n]=60-o.tickInterval,window["minutes_HM"+n]--),0===window["hours_HM"+n]&&0===window["minutes_HM"+n]&&60==window["seconds_HM"+n]&&h(t,"HM",o),!0===t.data("countdowntimer").destroy&&h(t,"HM",o)):(v(t,e=S(t,o,0,0,0,window["hours_HM"+n],window["minutes_HM"+n],window["seconds_HM"+n]),o),void 0!==window["beforeExpiry_HM"+n]&&M(t,o,e,"HM"),window["seconds_HM"+n]-=o.tickInterval,0!==window["minutes_HM"+n]&&window["seconds_HM"+n]<0&&(window["minutes_HM"+n]--,window["seconds_HM"+n]=60-o.tickInterval),0===window["minutes_HM"+n]&&window["seconds_HM"+n]<0&&0!==window["hours_HM"+n]&&(window["hours_HM"+n]--,window["minutes_HM"+n]=59,window["seconds_HM"+n]=60-o.tickInterval),(0===window["minutes_HM"+n]&&window["seconds_HM"+n]<0&&0===window["hours_HM"+n]||!0===t.data("countdowntimer").destroy)&&h(t,"HM",o)),n=null}function r(t,o){var n=t.attr("id"),e="";window["minutes_MS"+n]===o.minutes&&window["seconds_MS"+n]===o.seconds?(v(t,e=S(t,o,0,0,0,0,window["minutes_MS"+n],window["seconds_MS"+n]),o),void 0!==window["beforeExpiry_MS"+n]&&M(t,o,e,"MS"),0!==window["minutes_MS"+n]&&0===window["seconds_MS"+n]?(window["minutes_MS"+n]--,window["seconds_MS"+n]=60-o.tickInterval):0===window["minutes_MS"+n]&&0===window["seconds_MS"+n]?h(t,"MS",o):window["seconds_MS"+n]-=o.tickInterval,!0===t.data("countdowntimer").destroy&&h(t,"MS",o)):(v(t,e=S(t,o,0,0,0,0,window["minutes_MS"+n],window["seconds_MS"+n]),o),void 0!==window["beforeExpiry_MS"+n]&&M(t,o,e,"MS"),window["seconds_MS"+n]-=o.tickInterval,0!==window["minutes_MS"+n]&&window["seconds_MS"+n]<0&&(window["minutes_MS"+n]--,window["seconds_MS"+n]=60-o.tickInterval),(0===window["minutes_MS"+n]&&window["seconds_MS"+n]<0||!0===t.data("countdowntimer").destroy)&&h(t,"MS",o)),n=null}function a(t,o){var n=t.attr("id"),e="";window["seconds_HS"+n]===o.seconds&&window["hours_HS"+n]===o.hours?(v(t,e=S(t,o,0,0,0,window["hours_HS"+n],0,window["seconds_HS"+n]),o),void 0!==window["beforeExpiry_HS"+n]&&M(t,o,e,"HS"),0===window["hours_HS"+n]&&0===window["seconds_HS"+n]?h(t,"HS",o):0!==window["hours_HS"+n]&&0===window["seconds_HS"+n]?(window["hours_HS"+n]--,window["minutes_HS"+n]=59,window["seconds_HS"+n]=60-o.tickInterval):window["seconds_HS"+n]-=o.tickInterval,!0===t.data("countdowntimer").destroy&&h(t,"HS",o)):(v(t,e=S(t,o,0,0,0,window["hours_HS"+n],window["minutes_HS"+n],window["seconds_HS"+n]),o),void 0!==window["beforeExpiry_HS"+n]&&M(t,o,e,"HS"),window["seconds_HS"+n]-=o.tickInterval,0!==window["minutes_HS"+n]&&window["seconds_HS"+n]<0&&(window["minutes_HS"+n]--,window["seconds_HS"+n]=60-o.tickInterval),0===window["minutes_HS"+n]&&window["seconds_HS"+n]<0&&0!==window["hours_HS"+n]&&(window["hours_HS"+n]--,window["minutes_HS"+n]=59,window["seconds_HS"+n]=60-o.tickInterval),(0===window["minutes_HS"+n]&&window["seconds_HS"+n]<0&&0===window["hours_HS"+n]||!0===t.data("countdowntimer").destroy)&&h(t,"HS",o)),n=null}function u(t,o){var n=t.attr("id"),e="";window["minutes_HMS"+n]===o.minutes&&window["seconds_HMS"+n]===o.seconds&&window["hours_HMS"+n]===o.hours?(v(t,e=S(t,o,0,0,0,window["hours_HMS"+n],window["minutes_HMS"+n],window["seconds_HMS"+n]),o),void 0!==window["beforeExpiry_HMS"+n]&&M(t,o,e,"HMS"),0===window["hours_HMS"+n]&&0===window["minutes_HMS"+n]&&0===window["seconds_HMS"+n]?h(t,"HMS",o):0!==window["hours_HMS"+n]&&0===window["minutes_HMS"+n]&&0===window["seconds_HMS"+n]?(window["hours_HMS"+n]--,window["minutes_HMS"+n]=59,window["seconds_HMS"+n]=60-o.tickInterval):0===window["hours_HMS"+n]&&0!==window["minutes_HMS"+n]&&0===window["seconds_HMS"+n]?(window["minutes_HMS"+n]--,window["seconds_HMS"+n]=60-o.tickInterval):0!==window["hours_HMS"+n]&&0!==window["minutes_HMS"+n]&&0===window["seconds_HMS"+n]?(window["minutes_HMS"+n]--,window["seconds_HMS"+n]=60-o.tickInterval):window["seconds_HMS"+n]-=o.tickInterval,!0===t.data("countdowntimer").destroy&&h(t,"HMS",o)):(v(t,e=S(t,o,0,0,0,window["hours_HMS"+n],window["minutes_HMS"+n],window["seconds_HMS"+n]),o),void 0!==window["beforeExpiry_HMS"+n]&&M(t,o,e,"HMS"),window["seconds_HMS"+n]-=o.tickInterval,0!==window["minutes_HMS"+n]&&window["seconds_HMS"+n]<0&&(window["minutes_HMS"+n]--,window["seconds_HMS"+n]=60-o.tickInterval),0===window["minutes_HMS"+n]&&window["seconds_HMS"+n]<0&&0!==window["hours_HMS"+n]&&(window["hours_HMS"+n]--,window["minutes_HMS"+n]=59,window["seconds_HMS"+n]=60-o.tickInterval),(0===window["minutes_HMS"+n]&&window["seconds_HMS"+n]<0&&0===window["hours_HMS"+n]||!0===t.data("countdowntimer").destroy)&&h(t,"HMS",o)),n=null}function c(t,o,n){var e=t.attr("id"),i="withnoStart"===n?window["dateTime"+e]:window["endDate"+e],d="withnoStart"===n?window["startTime"+e]:window["startDate"+e],s=(i-d)/1e3,w="";if(i-d>0){if("withStart"===n&&d>new Date)v(t,w=S(t,o,0,0,0,0,0,0),o);else{v(t,w=S(t,o,0,0,0,0,0,s),o),void 0!==window["beforeExpiry_"+n+e]&&M(t,o,w,n);"withnoStart"==n?window["startTime"+e].setSeconds(window["startTime"+e].getSeconds()+o.tickInterval):window["startDate"+e].setSeconds(window["startDate"+e].getSeconds()+o.tickInterval)}!0===t.data("countdowntimer").destroy&&h(t,n,o)}else v(t,w=S(t,o,0,0,0,0,0,0),o),h(t,n,o);e=null}function l(t,o){var n=null!==o.timeZone?e(new Date,o.timeZone):new Date;v(t,S(t,o,0,0,0,n.getHours(),n.getMinutes(),n.getSeconds()),o)}function m(t,o){var n=t.attr("id");window["countSeconds"+n].toString().length<2&&(window["countSeconds"+n]="0"+window["countSeconds"+n]),t.html(window["countSeconds"+n]+" sec"),window["countSeconds"+n]--,-1==window["countSeconds"+n]&&(delete window["countSeconds"+n],clearInterval(window["timer_secondsTimer"+n])),n=null}function _(o,n){null!==n.timeUp&&!0===t.isFunction(n.timeUp)&&n.timeUp.apply(o,[]),null!==n.expiryUrl&&(window.location=n.expiryUrl)}function M(o,n,e,i){var d=o.attr("id"),s=window["beforeExpiry_"+i+d];if(s=s.split(":"),"0"===(e=e.split(n.timeSeparator))[0]&&"0"===e[1]){for(var w=0;w<e.length-2;w++)e[w]=e[w+2]<10?"0"+e[w+2]:e[w+2];e.splice(4,2),s[0]===e[0]&&s[1]===e[1]&&s[2]===e[2]&&s[3]===e[3]&&null!==n.beforeExpiryTimeFunction&&!0===t.isFunction(n.beforeExpiryTimeFunction)&&n.beforeExpiryTimeFunction.apply(o,[])}}function S(t,o,n,e,i,d,s,w){void 0===n&&(n=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===d&&(d=0),void 0===s&&(s=0),void 0===w&&(w=0);var r=Math.round(31536e3*n*100)/100+Math.round(2628e3*e*100)/100+Math.round(86400*i*100)/100+Math.round(3600*d*100)/100+Math.round(60*s*100)/100+Math.round(100*w)/100,a=o.displayFormat.split(""),u="!"===a[0]?Math.floor(r/31536e3):0,c="!"===a[1]?Math.round(Math.floor(r/2628e3-31536e3*u/2628e3)):0,l="!"===a[2]?Math.round(Math.floor(r/86400-2628e3*c/86400-31536e3*u/86400)):0,m="!"===a[3]?Math.round(Math.floor(r/3600-2628e3*c/3600-31536e3*u/3600-86400*l/3600)):0,_="!"===a[4]?Math.round(Math.floor(r/60-3600*m/60-86400*l/60-2628e3*c/60-31536e3*u/60)):0,M="!"===a[5]?Math.round(Math.floor(r-60*_-3600*m-86400*l-2628e3*c-31536e3*u)):0;return u+o.timeSeparator+c+o.timeSeparator+l+o.timeSeparator+m+o.timeSeparator+_+o.timeSeparator+M}function v(o,n,e){var i=e.displayFormat.split("");n=n.split(e.timeSeparator),n=(n=t.grep([n[0],n[1],n[2],n[3],n[4],n[5]],function(t,o){return t>=0&&"!"===i[o]}).join(e.timeSeparator)).split(e.timeSeparator);for(var d=0;d<n.length;d++)n[d].toString().length<2&&!0===e.padZeroes&&(n[d]="0"+n[d]);n=n.join(e.timeSeparator).toString();for(var s=0;s<10;s++){var w=s.toString(),r=new RegExp(w,"g");n=n.replace(r,e.digits[s])}if(!0===e.labelsFormat&&void 0===window["regexpMatchFormat_"+o.attr("id")]&&void 0===window["regexpReplaceWith_"+o.attr("id")]){o.addClass("labelformat");for(var a="<span class='timerDisplay label"+(n=n.split(e.timeSeparator)).length+"'>",u=[],c=0;c<6;c++)"!"===i[c]&&u.push(e.labels[c]);for(var l=n.length;l>0;l--){var m=n.length-l;a+="<span class='displaySection'><span class='numberDisplay'>"+n[m]+"</span><span class='periodDisplay'>"+u[m]+"</span></span>"}n=a+="</span>"}else if(!1===e.labelsFormat&&void 0!==window["regexpMatchFormat_"+o.attr("id")]&&void 0!==window["regexpReplaceWith_"+o.attr("id")]){var _=new RegExp(window["regexpMatchFormat_"+o.attr("id")]);n=n.replace(_,window["regexpReplaceWith_"+o.attr("id")])}o.html(n)}function H(o,n,e,i){"pause"===o.data("countdowntimer").pause?clearInterval(window["timer_"+n+o.attr("id")]):"resume"===o.data("countdowntimer").pause&&(window["timer_"+n+o.attr("id")]=setInterval(function(){i(o,e)},1e3*e.tickInterval)),t("#"+e.pauseButton).click(function(){"resume"!=t(this).val()?(t("#"+e.pauseButton).val("resume").text("Resume"),clearInterval(window["timer_"+n+o.attr("id")])):"resume"==t(this).val()&&(t("#"+e.pauseButton).val("pause").text("Pause"),window["timer_"+n+o.attr("id")]=setInterval(function(){i(o,e)},1e3*e.tickInterval))})}function p(o,n,e,i){"stop"===o.data("countdowntimer").stop?(clearInterval(window["timer_"+n+o.attr("id")]),window["hours_"+n+o.attr("id")]=e.hours,window["minutes_"+n+o.attr("id")]=e.minutes,window["seconds_"+n+o.attr("id")]=e.seconds,i(o,e)):"start"===o.data("countdowntimer").stop&&(window["timer_"+n+o.attr("id")]=setInterval(function(){i(o,e)},1e3*e.tickInterval)),t("#"+e.stopButton).click(function(){"start"!=t(this).val()?(t("#"+e.stopButton).val("start").text("Start"),clearInterval(window["timer_"+n+o.attr("id")]),window["hours_"+n+o.attr("id")]=e.hours,window["minutes_"+n+o.attr("id")]=e.minutes,window["seconds_"+n+o.attr("id")]=e.seconds,i(o,e)):"start"==t(this).val()&&(t("#"+e.stopButton).val("stop").text("Stop"),window["timer_"+n+o.attr("id")]=setInterval(function(){i(o,e)},1e3*e.tickInterval))})}function h(t,o,n){var e=t.attr("id");"withnoStart"===o?(delete window["dateTime"+e],delete window["startTime"+e],clearInterval(window["timer_givenDate"+e])):"withStart"===o?(delete window["startDate"+e],delete window["endDate"+e],clearInterval(window["timer_startDate"+e])):(delete window["hours_"+o+e],delete window["minutes_"+o+e],delete window["seconds_"+o+e],clearInterval(window["timer_"+o+e])),!0===t.data("countdowntimer").destroy?t.empty().removeClass():_(t,n)}var f={init:function(n){return this.each(function(){o(t(this),n)})},destroy:function(){this.data("countdowntimer",t.extend(!0,{},t.fn.countdowntimer.defaults,{destroy:!0}))},pause:function(o){this.data("countdowntimer",t.extend(!0,{},t.fn.countdowntimer.defaults,{pause:o})),H(t(this),t(this).data("typefunc").type,t(this).data("opts").opts,t(this).data("typefunc").func)},stop:function(o){this.data("countdowntimer",t.extend(!0,{},t.fn.countdowntimer.defaults,{stop:o})),p(t(this),t(this).data("typefunc").type,t(this).data("opts").opts,t(this).data("typefunc").func)}};t.fn.countdowntimer=function(o){return f[o]?f[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?void t.error("Method "+o+" does not exist on jQuery.countdownTimer"):(this.data("countdowntimer",t.extend(!0,{},t.fn.countdowntimer.defaults,o)),f.init.apply(this,arguments))},t.fn.countdowntimer.defaults={hours:0,minutes:0,seconds:60,startDate:new Date,dateAndTime:new Date("1970/01/01 00:00:00"),currentTime:!1,size:"sm",borderColor:"#F0068E",fontColor:"#FFFFFF",backgroundColor:"#000000",timeSeparator:":",tickInterval:1,timeUp:null,expiryUrl:null,regexpMatchFormat:null,regexpReplaceWith:null,pauseButton:null,stopButton:null,beforeExpiryTime:null,beforeExpiryTimeFunction:null,padZeroes:!0,displayFormat:"HMS",labelsFormat:!1,timeZone:null},t.fn.countdowntimer.regionalOptions={digits:["0","1","2","3","4","5","6","7","8","9"],labels:["Years","Months","Days","Hours","Minutes","Seconds"],isRTL:!1}}(jQuery);