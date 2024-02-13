(function(){"use strict";var e={8348:function(e,t,a){var o=a(5328),n=a(6760),i=a(8752);const s=(0,n.QD)("div",{class:"m-a"},[(0,n.QD)("span",null,"↻"),(0,n.QD)("p",null,"Loading...")],-1),r=[s];function l(e,t,a,o,s,l){const c=(0,n.E1)("HeaderPage"),d=(0,n.E1)("HomePage"),m=(0,n.E1)("MarqueePage"),h=(0,n.E1)("ProjectsPage"),u=(0,n.E1)("FooterPage"),p=(0,n.E1)("ProjectCard");return(0,n.Wz)(),(0,n.An)(n.ae,null,[(0,n.QD)("div",{class:(0,i.WN)(["loader",{open:s.isLoading}])},r,2),(0,n.K2)(c,{isWeb:l.isWeb},null,8,["isWeb"]),(0,n.QD)("main",null,[(0,n.K2)(d),(0,n.K2)(m,{text:"SELECTED PROJECTS"}),(0,n.K2)(h,{isWeb:l.isWeb},null,8,["isWeb"]),(0,n.K2)(u)]),(0,n.K2)(p,{item:o.currentProjectView,isOpen:o.isProjectViewOpen},null,8,["item","isOpen"])],64)}const c=e=>((0,n.ED)("data-v-adfba5de"),e=e(),(0,n.ii)(),e),d={class:"container-fluid header"},m={class:"row"},h=c((()=>(0,n.QD)("div",{class:"col-4"},[(0,n.QD)("div",{class:"logo font-title"},[(0,n.QD)("a",{href:"#home",class:"line"},"rcm")])],-1))),u={key:0,class:"col-8 mt-a mb-a"},p={class:"content"},f=["onClick"];function g(e,t,a,o,s,r){return(0,n.Wz)(),(0,n.An)("div",d,[(0,n.QD)("div",m,[h,a.isWeb?((0,n.Wz)(),(0,n.An)("div",u,[(0,n.QD)("div",p,[(0,n.QD)("nav",null,[(0,n.QD)("ul",null,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(s.tabs,(e=>((0,n.Wz)(),(0,n.An)("li",{key:e},[(0,n.QD)("a",{onClick:t=>r.goTo(e),class:(0,i.WN)({active:s.activeSection==e})},(0,i.WA)(r.getTabName(e)),11,f)])))),128))])])])])):(0,n.g1)("",!0)])])}var b={name:"HeaderPage",props:["isWeb"],data(){return{tabs:["home","about","projects","contact"],activeSection:"home",activeLang:"es"}},methods:{goTo(e){this.activeSection=e;try{document.querySelector(`#${e}`).scrollIntoView({behavior:"smooth"})}catch(t){console.log(t)}},getTabName(e){const t={home:"Home",about:"About",projects:"Projects",contact:"Contact"};return t[e]||e}}},v=a(8152);const w=(0,v.c)(b,[["render",g],["__scopeId","data-v-adfba5de"]]);var k=w;const y=(0,n.IL)('<section class="splash" id="home" data-v-75d57abc><div class="container-fluid mt-a" data-v-75d57abc><h1 class="font-title" data-v-75d57abc><b data-v-75d57abc>I&#39;m Miguel</b></h1><h3 class="text-primary" data-v-75d57abc>Software engineer, UI/UX Developer </h3></div><div class="container-fluid" data-v-75d57abc><img src="yo.svg" alt="Dibujo de Miguel" class="hero" width="500" data-v-75d57abc></div><div class="scroll-help" data-v-75d57abc>Scroll to see more <span class="text-primary" data-v-75d57abc>⤵</span></div></section><section class="about padding bg-dark" id="about" data-v-75d57abc><div class="container" data-v-75d57abc><h2 data-v-75d57abc>I&#39;m a <b class="text-primary" data-v-75d57abc>UI/UX</b> developer that&#39;s interested in finding themost efficient way to create the best experiences.</h2><p data-v-75d57abc>I consider myself as someone that thinks in a logical way, but also I develop myself in the artistic world since I can remember; that has made me more of a design developer, and such thing has eprmitted me to explore the different ways in which we can interact with the user and at the same time develop in a fast and efiient way.</p></div></section>',2);function D(e,t,a,o,n,i){return y}var Q={name:"HomePage",methods:{},mounted(){setTimeout((()=>{window.scrollY>1||document.querySelector(".scroll-help").classList.add("show")}),5e3)}};const j=(0,v.c)(Q,[["render",D],["__scopeId","data-v-75d57abc"]]);var W=j;const A={class:"scrolling-band bg-primary"},I={class:"marquee font-title"},T={class:"wrapper text-xxl"};function z(e,t,a,o,s,r){return(0,n.Wz)(),(0,n.An)("section",A,[(0,n.QD)("div",I,[(0,n.QD)("div",T,[(0,n.QD)("div",null,[(0,n.QD)("h1",null,(0,i.WA)(a.text),1)]),(0,n.QD)("div",null,[(0,n.QD)("h1",null,(0,i.WA)(a.text),1)])])])])}var P={name:"MarqueePage",props:["text"]};const x=(0,v.c)(P,[["render",z],["__scopeId","data-v-534fd35c"]]);var S=x;const U=e=>((0,n.ED)("data-v-1f557ee6"),e=e(),(0,n.ii)(),e),M={class:"container"},L=["onClick"],E={class:"thumbnail"},O=["src"],C={class:"data"},F={class:"mt-0 mb-0 font-title"},H={class:"tags"},q=U((()=>(0,n.QD)("p",{class:"mt-0 mb-0"},[(0,n.QD)("span",{class:"bg-dark"},"View Case   →")],-1)));function V(e,t,a,o,s,r){return(0,n.Wz)(),(0,n.An)("section",{class:(0,i.WN)(["projects",{padding:a.isWeb}]),id:"projects"},[(0,n.QD)("div",M,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(r.projectList,((e,t)=>((0,n.Wz)(),(0,n.An)("div",{key:e,class:"item",style:(0,i.MN)({background:e.background}),onClick:e=>o.setProject(r.getProject(t))},[(0,n.QD)("div",E,[(0,n.QD)("img",{src:e.thumbnail,alt:""},null,8,O)]),(0,n.QD)("div",C,[(0,n.QD)("h1",F,(0,i.WA)(e.name),1),(0,n.QD)("div",H,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e.types,(e=>((0,n.Wz)(),(0,n.An)("span",{class:"bg-primary",key:e},(0,i.WA)(e),1)))),128))]),q])],12,L)))),128))])],2)}a(3248);var N=JSON.parse('[{"name":"Mi Kiosko 5","type":["UI/UX Redesign","Frontend Development","Mobile"],"framework":"Ionic/Angular","date":"2021","thumbnail":"projects/kiosko/thumbnail.png","background":"linear-gradient(45deg, #bcdba6  35%, #498f1b)","clients":[{"name":"Feedbak","url":"https://www.feedbakmx.com/"}],"description":["<b>Mi Kiosko</b. is a human resources platform used for many companies in the north of mexico, it gives employees a mobile application to look up their payroll receipts, send and request work letters, see their available vacations and more functionalities designed for the client needs. Also the platform provides dashboard to manage employees, aproove or decline letter requests, etc."],"case":"The task given was to redesign a newer version for Mi Kiosko\'s UI, added to that, it was necessary to update the version of the used framework, which ended up with a development from the ground up.","before":{"title":"The current state of the application was funtional, but there were some problems that needed to be solved with this update.","text":["No standard frontend code, css optimization and class naming rules","There was no implementation of components","UI was inconsistent","Very outdated framework version"],"images":["projects/kiosko/1.png","projects/kiosko/2.png","projects/kiosko/3.png"],"colSize":"4"},"after":{"title":"The solution process went with many stages, leading up to a carefully built code and much smaller component sizes.","text":["First stage working in the UI redesign was <b>paper sketching</b> and feedback from users, and using the best practices for a smoother interaction.","The Second stage was <b>research</b>, with this I started learning more in depth about the Ionic framework and the best practices for it.","Third stage was the <b>development</b> of the UI, this took place for several weeks. In this stage the class naming rules were creted, a more solid image for the platform was made and animations were implemented.","Finally, the <b>delivery</b> was made in a small presentation with the development team, having more feedback and polishing the final redesign."],"images":["projects/kiosko/4.png","projects/kiosko/5.png","projects/kiosko/6.png"],"colSize":"4"},"achievements":["First official UI framework for Feedbak (I called it FeedUI)"]},{"name":"Taskin","date":"2022","thumbnail":"projects/taskin/thumbnail.png","background":"linear-gradient(45deg, #b8cff3  35%, #05199e)","type":["UI/UX","Frontend Development","Web"],"framework":"Angular","clients":[{"name":"Feedbak","url":"https://www.feedbakmx.com/"}],"description":["<b>Taskin</b> is a platform made for management and tracking of tasks, clients and contracts for many type of clients, it has a mbile app to upload, manage and approve the tickets in the dashboard."],"case":"This platform was made from scratch, of course having references from other products, the main challenge was the core feature needed for this project: a table that can be customized, have data types, options, status tracking, filtering, etc. all dynamically.","before":{"title":"There was no initial state of the project.","text":["With no starting point in this project, so I went straightforward to develop the main features and building a UI look around it."],"images":[],"imageRatio":"horizontal"},"after":{"title":"Development of the project.","text":["First stage was <b>research</b> for thechnology obstacles and features that I may have encounter or need in the process of development.","The second step was to <b>develop</b> the main table component, with column types and a dynamic global dropdown","Along the second step was the <b>UI design</>, which included finding a color palette, and polishing the style system in the template we had set up.","Finally, my <b>delivery</b> was presented with the team, explaining the main table functionality and the views that were required for the start of the project."],"images":["projects/taskin/1.jpeg","projects/taskin/2.jpeg","projects/taskin/3.jpeg"],"colSize":"12"},"achievements":["A table system that were implemented among the subsequent projects","The fisrt stable web template for our development team"]},{"name":"Maghni AI","date":"2023","thumbnail":"projects/maghni/thumbnail.png","background":"linear-gradient(45deg, #f6dfff  35%, #cb1a6f)","type":["UI/UX","Frontend Development","Desktop"],"framework":"VueJS","clients":[{"name":"Misbah Studios","url":"https://www.facebook.com/MisbahStudios"},{"name":"VocaTOne Studio","url":"https://www.vocatone.studio/"}],"description":["<b>Maghni AI</b> is a voice synthesizer the uses AI technology, focused on singing, language preservation and ethical AI.","As a background for this project, I have been involved and working on the technology, music and community that the voice synthesis softwares have since 2012, and after getting into UI/UX development, it was a goal of mine to develop an interface for a product like this. I was gladly contacted from a member of the Maghni AI team and got to work in this project.","This is still in active development as of 2024, though it doesn\'t interrupt my main tasks and resposibilities."],"case":"The challenge was to develop a new UI for the software, being fresh, intuitive and modern. Initially, the frontend was going to be coded in JUCE, a C++ framework for audio plugins, but later on the team decided to change to Vue + Tauri + Rust, for a cross-platform support and lighter app size.","before":{"title":"The first version of the app was built on JUCE, with a pretty basic UI, mostly testing and simple functionality, but not a very pleasing look as none of the team members before me was dedicated to frontend.","text":["The first image shows the first version of the UI that I saw.","Something different in the process of this project is that I already had some explorations, so I made a prototype on Vue to show and see if the team liked the new direcion. (Image 2)","After the prototype was accepted, it went through some cycles that improved the look, and frontend structure. For example, the third image is the last stage before the current version."],"images":["projects/maghni/1.png","projects/maghni/2.png","projects/maghni/3.png"],"colSize":"12"},"after":{"title":"Current version is now more stable, cleaner and has got much better. We think it will be the last major evolution.","text":["The approach for this UI is using a more native look, so the app feels more integrated with the OS, and obtain a more timeless feel because we stick to a design language that won\'t change too often.","The workspace area is mean to have the most screen space used, with the sufficient tools at hand and secondary functionality in other menus.","Went for a light and dark themes, with monochromatic background to use the primary and secondary color for accents. User customization is also possible and, very importantly, a requirement.","The side menu will have tab navigation, options for the current workspace (Home, Editor, Export, and more to come) and a card banner for important current information."],"images":["projects/maghni/4.png"],"colSize":"12"},"achievements":["First audio/music related UI project"]}]'),_={name:"ProjectsPage",setup(){const e=(0,n.uU)("setProject");return{setProject:e}},props:["isWeb"],components:{},computed:{projectList(){let e=[];return N.forEach((t=>{const a={name:t.name,date:t.date,types:t.type,framework:t.framework,thumbnail:t.thumbnail||t.after.images[0]||t.before.images[0]||null,background:t.background};e.push(a)})),e}},methods:{getProject(e){return N[e]||{}}}};const K=(0,v.c)(_,[["render",V],["__scopeId","data-v-1f557ee6"]]);var Y=K;const X=e=>((0,n.ED)("data-v-0c252304"),e=e(),(0,n.ii)(),e),J={class:"card bg-white"},R={class:"container-fluid"},Z={class:"row"},G={class:"col-12"},$=["src"],B={class:"body"},ee={class:"container"},te={class:"row"},ae={class:"col-4 ta-l"},oe=X((()=>(0,n.QD)("b",null,"Client:",-1))),ne=["href"],ie=X((()=>(0,n.QD)("b",null,"Date:",-1))),se=X((()=>(0,n.QD)("b",null,"Framework(s):",-1))),re=X((()=>(0,n.QD)("b",null,"Type(s):",-1))),le={key:0},ce={class:"col-8 ta-l"},de=["innerHTML"],me={class:"row"},he={class:"col-12 ta-l"},ue=X((()=>(0,n.QD)("h1",{class:"font-title text-primary"},"💡 Case",-1))),pe=["innerHTML"],fe={class:"row"},ge={class:"col-12 ta-l"},be=X((()=>(0,n.QD)("h1",{class:"font-title text-primary"},"✏️ Start of project",-1))),ve=["innerHTML"],we={class:"frame"},ke=["src"],ye={class:"row"},De={class:"col-12 ta-l"},Qe=X((()=>(0,n.QD)("h1",{class:"font-title text-primary"},"✨ End of project",-1))),je=["innerHTML"],We={class:"frame"},Ae=["src"],Ie={class:"row"},Te={class:"col-12 ta-l"},ze=X((()=>(0,n.QD)("h1",{class:"font-title text-primary"},"🏆 Achievements",-1))),Pe=["innerHTML"],xe=X((()=>(0,n.QD)("div",{class:"footer bg-dark"},[(0,n.QD)("div",{class:"container"},[(0,n.QD)("h2",{class:"mb-0 mt-0 font-title"},"End of case")])],-1)));function Se(e,t,a,o,s,r){return(0,n.Wz)(),(0,n.An)("div",{class:(0,i.WN)(["wrapper",{open:a.isOpen}]),onScroll:t[1]||(t[1]=(...e)=>r.setScroll&&r.setScroll(...e)),id:"projectView"},[(0,n.QD)("div",{class:(0,i.WN)(["head font-title",{light:s.scrollPos<100}])},[(0,n.QD)("h1",null,[(0,n.QD)("b",null,(0,i.WA)(a.item?.name),1)]),(0,n.QD)("span",{onClick:t[0]||(t[0]=(...e)=>o.close&&o.close(...e))},"✕")],2),(0,n.QD)("div",J,[(0,n.QD)("div",R,[(0,n.QD)("div",Z,[(0,n.QD)("div",G,[(0,n.QD)("div",{class:"top",style:(0,i.MN)({background:a.item?.background})},[(0,n.QD)("img",{src:a.item?.thumbnail,alt:"Project thumbnail"},null,8,$)],4)])])]),(0,n.QD)("div",B,[(0,n.QD)("div",ee,[(0,n.QD)("div",te,[(0,n.QD)("div",ae,[(0,n.QD)("p",null,[oe,(0,n.mY)(),((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.clients,(e=>((0,n.Wz)(),(0,n.An)("a",{key:e,href:e.url},(0,i.WA)(e.name),9,ne)))),128))]),(0,n.QD)("p",null,[ie,(0,n.mY)(" "+(0,i.WA)(a.item?.date),1)]),(0,n.QD)("p",null,[se,(0,n.mY)(" "+(0,i.WA)(a.item?.framework),1)]),(0,n.QD)("p",null,[re,(0,n.mY)(),((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.type,((e,t)=>((0,n.Wz)(),(0,n.An)("span",{key:e},[t?((0,n.Wz)(),(0,n.An)("span",le,", ")):(0,n.g1)("",!0),(0,n.mY)(" "+(0,i.WA)(e),1)])))),128))])]),(0,n.QD)("div",ce,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.description,(e=>((0,n.Wz)(),(0,n.An)("p",{key:e,innerHTML:e},null,8,de)))),128))])]),(0,n.QD)("div",me,[(0,n.QD)("div",he,[ue,(0,n.QD)("p",{innerHTML:a.item?.case},null,8,pe)])]),(0,n.QD)("div",fe,[(0,n.QD)("div",ge,[be,(0,n.QD)("p",null,[(0,n.QD)("b",null,(0,i.WA)(a.item?.before?.title),1)]),(0,n.QD)("ul",null,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.before?.text,(e=>((0,n.Wz)(),(0,n.An)("li",{key:e,innerHTML:e},null,8,ve)))),128))])]),((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.before?.images,(e=>((0,n.Wz)(),(0,n.An)("div",{key:e,class:(0,i.WN)("col-"+a.item?.before?.colSize||0)},[(0,n.QD)("div",we,[(0,n.QD)("img",{src:e},null,8,ke)])],2)))),128))]),(0,n.QD)("div",ye,[(0,n.QD)("div",De,[Qe,(0,n.QD)("p",null,[(0,n.QD)("b",null,(0,i.WA)(a.item?.after?.title),1)]),(0,n.QD)("ul",null,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.after?.text,(e=>((0,n.Wz)(),(0,n.An)("li",{key:e,innerHTML:e},null,8,je)))),128))])]),((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.after?.images,(e=>((0,n.Wz)(),(0,n.An)("div",{key:e,class:(0,i.WN)("col-"+a.item?.after?.colSize||0)},[(0,n.QD)("div",We,[(0,n.QD)("img",{src:e},null,8,Ae)])],2)))),128))]),(0,n.QD)("div",Ie,[(0,n.QD)("div",Te,[ze,(0,n.QD)("ul",null,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(a.item?.achievements,(e=>((0,n.Wz)(),(0,n.An)("li",{key:e,innerHTML:e},null,8,Pe)))),128))])])])])]),xe])],34)}var Ue={name:"ProjectCard",setup(){const e=(0,n.uU)("closeProject");return{close:e}},props:["item","isOpen"],data(){return{scrollPos:0}},methods:{setScroll(e){this.scrollPos=e.target.scrollTop}}};const Me=(0,v.c)(Ue,[["render",Se],["__scopeId","data-v-0c252304"]]);var Le=Me;const Ee=e=>((0,n.ED)("data-v-57a8bba0"),e=e(),(0,n.ii)(),e),Oe={class:"contact padding bg-dark",id:"contact"},Ce=Ee((()=>(0,n.QD)("div",{class:"container ta-l"},[(0,n.QD)("p",{class:"mt-0 mb-0"},"Get in touch!"),(0,n.QD)("h1",{class:"font-title text-xl mt-0"},[(0,n.QD)("a",{href:"mailto:miguelrocham12@hotmail.com",class:"line"},"miguelrocham12@hotmail.com")])],-1))),Fe=[Ce];function He(e,t,a,o,i,s){return(0,n.Wz)(),(0,n.An)("section",Oe,Fe)}var qe={name:"FooterPage",computed:{currentYear(){return(new Date).getFullYear()}}};const Ve=(0,v.c)(qe,[["render",He],["__scopeId","data-v-57a8bba0"]]);var Ne=Ve,_e=a(8568),Ke={name:"App",setup(){let e=(0,_e.IL)({}),t=(0,_e.IL)(!1);function a(a){e.value=a,t.value=!0,document.querySelector("#projectView").scrollTo(0,{behavior:"smooth"}),document.querySelector("body").classList.add("ov-h")}function o(){t.value=!1,document.querySelector("#projectView").scrollTo(0,{behavior:"smooth"}),document.querySelector("body").classList.remove("ov-h"),setTimeout((()=>{e.value={}}),500)}return(0,n.Zl)("setProject",a),(0,n.Zl)("closeProject",o),{currentProjectView:e,isProjectViewOpen:t}},components:{HomePage:W,HeaderPage:k,MarqueePage:S,ProjectsPage:Y,ProjectCard:Le,FooterPage:Ne},data(){return{isLoading:!0}},computed:{isWeb(){return window.innerWidth>400}},created(){this.isLoading=!1}};const Ye=(0,v.c)(Ke,[["render",l]]);var Xe=Ye;(0,o.W0)(Xe).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var d=l(a)}for(t&&t(o);c<s.length;c++)i=s[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[999],(function(){return a(8348)}));o=a.O(o)})();
//# sourceMappingURL=app.35d9cebc.js.map