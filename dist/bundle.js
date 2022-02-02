(()=>{"use strict";var t={256:(t,e,r)=>{r.d(e,{Z:()=>c});var a=r(81),n=r.n(a),o=r(645),i=r.n(o)()(n());i.push([t.id,'header{margin:40px 0px 40px}.search-bar{position:relative;margin:0 auto;padding:0 20px;max-width:350px;display:flex;align-items:center}.search-bar .cursor{position:absolute;width:1px;height:80%;background-color:rgba(255,255,255,.85);border-radius:1px;opacity:0;animation:blink-animation 3s linear infinite;transition:all .3s}.search-bar .search-input{padding:5px 40px 5px 5px;left:0;top:0;width:100%;border:none;outline:none;background-color:transparent;font-size:2rem;color:#fff;text-transform:capitalize}.search-bar .search-button{cursor:pointer;padding-right:20px;position:absolute;right:0px;width:60px;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;border:none}.search-bar .search-button img{height:50%;filter:invert(1);opacity:.5;transition:all .3s ease;margin-left:auto}.search-bar .search-button:active{-webkit-tap-highlight-color:transparent}.search-bar .search-button:active img{opacity:1}@media(hover: hover){.search-button:hover img{opacity:1}}::placeholder{color:#d3d3d3}@keyframes blink-animation{0%{opacity:0}30%{opacity:0}50%{opacity:1}80%{opacity:1}100%{opacity:0}}.current-weather{background:linear-gradient(#386f8a36, #65a3c7);background-attachment:fixed;box-shadow:0px 3px 10px rgba(0,0,0,.25);border-radius:5px;max-width:325px;margin:0 auto;margin-bottom:50px;padding:20px;font-size:.9rem;font-weight:500}.current-weather .summary{text-align:center}.current-weather .data-wrapper{display:flex;flex-direction:row;align-items:center;margin-bottom:20px;margin-top:20px}.current-weather .data-wrapper>*+*{margin-left:10px}.current-weather .data-wrapper .big-weather-icon{height:65px;filter:invert(1);margin-left:auto}.current-weather .data-wrapper .big-temperature-number{font-size:5rem;font-weight:lighter;vertical-align:top;margin-right:auto}.current-weather .data-wrapper .big-temperature-number sup{font-size:2rem}.current-weather .data-wrapper .data-list{list-style:none}.current-weather .data-wrapper .data-list li{display:flex;align-items:center;justify-content:left}.current-weather .data-wrapper .data-list li .icon{width:20px;filter:invert(1);margin:5px}.current-weather .data-wrapper .data-list li.wind-direction .icon{width:25px}.current-weather .data-wrapper .data-list li .arrow{width:20px;filter:invert(1)}.current-weather .data-wrapper .data-list li .unit{font-size:.6rem}.current-weather .data-wrapper .data-list li.wind .unit{margin-left:3px}@media only screen and (max-height: 600px){.current-weather{background:linear-gradient(#386f8a7e, #65a3c7c4);background-attachment:unset}}.charts-container{position:relative;overflow:hidden}.chart{transform:translateX(0px);transition:all .5s ease}.chart.temperature.hidden{transform:translateX(-100%)}.chart.precipitation{position:absolute;top:0;left:0}.chart.precipitation.hidden{transform:translateX(100%)}.chart-buttons-wrapper{display:flex;justify-content:space-evenly;margin-top:10px}.chart-buttons-wrapper .chart-button{border-bottom:1px solid #fff;text-shadow:1px 1px 2px rgba(0,0,0,.5);transition:all .3s;text-transform:capitalize;cursor:pointer;-webkit-tap-highlight-color:transparent}.chart-buttons-wrapper .chart-button.hidden{transform:scale(0.85);transform-origin:50% 100%;border-bottom:1px solid #fff;text-shadow:none}.day-name{margin:10px 0px 30px;color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.308);font-weight:400}.coming-days-bg-cnt{background:linear-gradient(-90deg, #386f8a, #3f7e9e);border-top:1px solid #386f8a;box-shadow:0px 0px 10px rgba(0,0,0,.25)}.coming-days{max-width:1200px;margin:0 auto;padding-bottom:40px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.coming-days .day{display:flex;flex-direction:column;align-items:center;padding:30px}.coming-days .day.template{display:none}.coming-days .day .table{display:flex;flex-direction:column}.coming-days .day .table>*+*{margin-top:15px}.coming-days .day .table .time-section{display:flex;flex-direction:row;align-items:center;text-align:center}.coming-days .day .table .time-section>*+*{margin-left:10px}.coming-days .day .table .time-section>*{width:40px}.coming-days .day .table .time-section .wind-direction{filter:invert(1);padding:0 10px}.tooltip{user-select:none;position:absolute;transition:all .3s;opacity:0;transform:scale(0);z-index:1;padding:5px;background-color:#1c5479;border-radius:5px;font-size:.8rem}.info-icons-wrapper{margin-left:100px;display:flex;flex-direction:row}.info-icons-wrapper>*+*{margin-left:10px}.info-icons-wrapper .icon-wrapper{position:relative;width:40px;padding:0 5px;text-align:center}.info-icons-wrapper .icon-wrapper .icon{width:80%;border-bottom:1px dotted #002027;padding-bottom:3px;filter:invert(1)}.info-icons-wrapper .icon-wrapper .tooltip{width:100px;bottom:120%;left:50%;margin-left:-50px;transform-origin:50% 100%}.info-icons-wrapper .icon-wrapper:hover .tooltip{transform:scale(1);opacity:1}.info-icons-wrapper .icon-wrapper.wind-direction .tooltip{margin-left:-70px}.weather-icon-wrapper{position:relative;display:flex;align-items:center;justify-content:center}.weather-icon-wrapper .weather-icon{width:70%;border-bottom:1px dotted #002027;padding-bottom:3px;filter:invert(1)}.weather-icon-wrapper .tooltip{left:100%;width:max-content;padding:5px 10px;transform-origin:0% 50%}.weather-icon-wrapper:hover .tooltip{transform:scale(1);opacity:1}*{box-sizing:border-box;margin:0;padding:0}html{font-size:1.2rem}:root{--comingDaysOffsetTop: 0}.background{z-index:-2;position:fixed;top:0;left:0;width:100%;height:var(--comingDaysOffsetTop);background-image:url("https://images.unsplash.com/photo-1520985244272-9d0b8067a4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");background-size:cover;background-position:center top}@media only screen and (min-width: 768px){.background{background-position:center center}}body{min-width:350px;margin:0 auto;font-family:"Dosis",sans-serif;color:#fff;min-height:100vh;display:flex;flex-direction:column}h1,h2,.search-input,.chart-button,.summary,.tooltip,footer{font-family:"Quicksand",sans-serif}.error-message{color:#ff7d7d;font-weight:bold;text-align:center;text-transform:uppercase;margin:auto 0}footer{background:linear-gradient(-90deg, #124856, #185969);border-top:1px solid #124856;padding:50px 30px 50px 10vw;font-size:.8rem}footer>*+*{margin-top:20px}footer a{color:inherit;font-weight:500;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.25)}@media(hover: hover){a{transition:all .3s ease}a:hover{color:#fac5b0}.chart-button:hover{border-color:#fac5b0 !important}}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",a=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),a&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),a&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,a,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,a=0;a<e.length;a++)if(e[a].identifier===t){r=a;break}return r}function a(t,a){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],d=a.base?s[0]+a.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=r(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=n(m,a);a.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var o=a(t=t||[],n=n||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=r(o[i]);e[c].references--}for(var s=a(t,n),d=0;d<o.length;d++){var p=r(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},569:t=>{var e={};t.exports=function(t,r){var a=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,n&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};(()=>{r.d(a,{Y:()=>L});const t={summaryP:document.querySelector(".summary"),bigWeatherIcon:document.querySelector(".big-weather-icon"),bigTemperatureNumber:document.querySelector(".big-temperature-number"),precipitationLi:document.querySelector(".data-list .precipitation .number"),windLi:document.querySelector(".data-list .wind .number"),windDirectionLi:document.querySelector(".data-list .wind-direction .arrow"),temperatureChart:document.querySelector(".chart.temperature"),precipitationChart:document.querySelector(".chart.precipitation"),temperatureChartButton:document.querySelector(".temperature-chart-button"),precipitationChartButton:document.querySelector(".precipitation-chart-button")},e=e=>{t.temperatureChart.classList.remove("hidden"),t.precipitationChart.classList.remove("hidden"),t.temperatureChartButton.classList.remove("hidden"),t.precipitationChartButton.classList.remove("hidden"),e.target.classList[0].includes("temperature")?(t.precipitationChart.classList.add("hidden"),t.precipitationChartButton.classList.add("hidden")):(t.temperatureChart.classList.add("hidden"),t.temperatureChartButton.classList.add("hidden"))},n=t=>{t&&t.destroy()},o=(r,a)=>{var o;(e=>{const r=L[e.dateObject.getDay()],a=e.dateObject.getHours();let n=e.dateObject.getMinutes();n<10&&(n="0"+n);const o=e.description;t.summaryP.textContent=`${r} ${a}:${n}, ${o}`})(r),o=r,t.bigWeatherIcon.setAttribute("src",`./images/weather-icons/${o.iconName}.png`),t.bigWeatherIcon.setAttribute("alt","icon of "+o.description),t.bigTemperatureNumber.innerHTML=`${Math.round(o.temperature)}<sup>°</sup>`,t.precipitationLi.textContent="0"|o.precip,t.windLi.textContent=Math.round(3.6*o["wind-speed"]),t.windDirectionLi.style.transform=`rotate(${-90+Math.abs(o["wind-direction"]-180)}deg)`,(e=>{Chart.defaults.font.size=16,Chart.defaults.color="white",Chart.defaults.font.family="Dosis",Chart.defaults.plugins.tooltip.enabled=!1,Chart.defaults.plugins.legend.display=!1,Chart.defaults.scale.beginAtZero=!0,Chart.defaults.scale.grid.display=!1,Chart.defaults.scale.grid.drawBorder=!1,Chart.defaults.scale.ticks.maxRotation=0,Chart.defaults.scale.ticks.maxTicksLimit=6,Chart.defaults.layout.padding={top:30,right:10,left:10},Chart.defaults.hover.mode=null,n(t.temperatureChart.chartInstance);const r=(t=>{const e={temperatureData:[],timestamps:[]};for(let r=0;r<12;r++)e.temperatureData.push(Math.round(t.hourly[r].temp)),e.timestamps.push(new Date(1e3*t.hourly[r].dt).getHours()+"h");return e})(e);(e=>{t.temperatureChart.chartInstance=new Chart(t.temperatureChart,{plugins:[ChartDataLabels],type:"line",data:{labels:e.timestamps,datasets:[{data:e.temperatureData,pointRadius:0,borderColor:"white",borderWidth:2,fill:!0,backgroundColor:"transparent",tension:.3,datalabels:{align:"top",padding:{left:20,bottom:10,right:20},display:"auto",formatter:t=>t+"°"}}]},options:{scales:{y:{ticks:{display:!1}}}}})})(r)})(a),(e=>{n(t.precipitationChart.chartInstance);const r=(t=>{const e={precipitationData:[],timestamps:[]};for(let r=0;r<12;r++)e.precipitationData.push(Math.round(100*t.hourly[r].pop)),e.timestamps.push(new Date(1e3*t.hourly[r].dt).getHours()+"h");return e})(e);(e=>{t.precipitationChart.chartInstance=new Chart(t.precipitationChart,{plugins:[ChartDataLabels],type:"bar",data:{labels:e.timestamps,datasets:[{barPercentage:1,categoryPercentage:1,data:e.precipitationData,backgroundColor:"rgba(255, 255, 255, .3)",datalabels:{anchor:"end",align:"top",padding:{left:5,right:5,top:5},display:"auto",formatter:t=>t>0?t+"%":""}}]},options:{scales:{y:{ticks:{display:!1}}}}})})(r)})(a),t.temperatureChartButton.addEventListener("click",e),t.precipitationChartButton.addEventListener("click",e)},i=(t,e)=>{const r=document.createElement("p");return r.classList.add(t),r.textContent=e,r},c=(t,e)=>{const r=i("time",t.dateObject.getHours()+"h"),a=i("temperature",Math.round(t.temperature)+"°"),n=i("precipitation",Math.round(100*t.precip)+"%"),o=i("wind-speed",Math.round(3.6*t["wind-speed"])),c=(t=>{const e=document.createElement("img");e.classList.add("weather-icon"),e.setAttribute("src",`./images/weather-icons/${t.iconName}.png`),e.setAttribute("alt","icon of "+t.description);const r=document.createElement("div");return r.classList.add("weather-icon-wrapper"),r.append(e),((t,e)=>{const r=document.createElement("div");r.classList.add("tooltip"),r.textContent=e,t.append(r)})(r,t.description),r})(t),s=document.createElement("img");s.classList.add("wind-direction"),s.setAttribute("src","./images/right-arrow.png"),s.style.transform=`rotate(${-90+Math.abs(t["wind-direction"]-180)}deg)`;const d=document.createElement("div");d.classList.add("time-section"),d.append(r,c,a,n,o,s),e.append(d)},s=t=>{const e=t.cloneNode(!0);return e.classList.remove("template"),document.querySelector(".coming-days").append(e),e};var d=r(379),p=r.n(d),l=r(795),u=r.n(l),m=r(569),h=r.n(m),f=r(565),g=r.n(f),y=r(216),b=r.n(y),w=r(589),x=r.n(w),v=r(256),C={};C.styleTagTransform=x(),C.setAttributes=g(),C.insert=h().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=b(),p()(v.Z,C),v.Z&&v.Z.locals&&v.Z.locals;const k="be9f3e7fb99ef3d5a6cdca04ec93f7de",L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],S={searchInput:document.querySelector(".search-input"),mainElem:document.querySelector("main"),searchButtonImg:document.querySelector(".search-button img"),cursor:document.querySelector(".cursor")};window.onload=(()=>{const t=document.querySelector(".coming-days-bg-cnt");document.documentElement.style.setProperty("--comingDaysOffsetTop",t.offsetTop+40+"px")})();const E=t=>{const e=document.createElement("p");e.classList.add("error-message"),e.textContent=t,document.body.insertBefore(e,document.body.children[2]),S.mainElem.style.display="none"};async function q(t=!1){const e=await(async t=>{let e;return t?(e=await(async()=>{let t=!1;return await fetch("https://api.ipdata.co?api-key=eb617bdb9e2e2a192a199ff5311d9b78163925f757dfee0bf7bf7e64").then((t=>t.json())).then((e=>{console.log(e),t=e.city})).catch((t=>{console.error("Error:",t)})),t})(),!1===e&&(e=S.searchInput.value),S.searchInput.value=e):e=S.searchInput.value,e})(t),r=await(async t=>{let e;return(()=>{const t=document.querySelectorAll(".day");for(const e of t)e.classList.contains("template")||e.remove()})(),(()=>{const t=document.querySelector(".error-message");t&&(t.remove(),S.mainElem.style.display="block")})(),await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${t}&units=metric&appid=${k}`).then((t=>t.json())).then((t=>e=t)),e})(e);if("200"!==r.cod)return void E(r.message);const a=await(async t=>{let e;const r=t.city.coord.lat,a=t.city.coord.lon;return await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r}&lon=${a}&units=metric&appid=${k}`).then((t=>t.json())).then((t=>e=t)),e})(r),n=(t=>{const e=[];return e.summary=t.current.weather[0].main,e.description=t.current.weather[0].description,e.dateObject=new Date(1e3*t.current.dt),e.temperature=t.current.temp,e.humidity=t.current.humidity,e.precip=t.current.pop,e.iconName=t.current.weather[0].icon,e["wind-speed"]=t.current.wind_speed,e["wind-direction"]=t.current.wind_deg,e})(a);o(n,a);(t=>{const e=document.querySelector(".day");let r,a="";for(const n of t){const t=L[n.dateObject.getDay()];if(a!==t){a=t;const n=s(e);n.children[0].textContent=t,r=n.children[1]}c(n,r)}document.querySelector(".day:not(.template) .day-name").textContent="Today"})((t=>{if("200"!==t.cod)return void E(t.message);const e=[];for(const r of t.list){const t={};t.summary=r.weather[0].main,t.description=r.weather[0].description,t.dateObject=new Date(1e3*r.dt),t.temperature=r.main.temp,t.humidity=r.main.humidity,t.clouds=r.clouds.all,t.precip=r.pop,t.iconName=r.weather[0].icon,t["wind-speed"]=r.wind.speed,t["wind-direction"]=r.wind.deg,e.push(t)}return e})(r))}window.onload=q(!0),S.searchInput.addEventListener("focus",(()=>{S.cursor.style.display="none",S.searchButtonImg.style.opacity="1"})),S.searchInput.addEventListener("blur",(()=>{S.cursor.style.display="inline",S.searchButtonImg.style.opacity=".5"})),document.querySelector(".search-button").addEventListener("click",q),window.addEventListener("keydown",(t=>{"Enter"===t.key&&(S.searchInput.blur(),q())})),window.addEventListener("scroll",(()=>{const t=window.scrollY;document.querySelector(".background").style.top=-.5*t+"px"}))})()})();