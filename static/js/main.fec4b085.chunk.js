(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,function(s){s.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47}]')},,function(s){s.exports=JSON.parse('[{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}]')},function(s){s.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},,,,,function(s,t,e){},function(s,t,e){},function(s,t,e){},,function(s,t,e){},function(s,t,e){},function(s,t,e){},function(s,t,e){},function(s,t,e){},function(s,t,e){},function(s,t,e){},function(s,t,e){"use strict";e.r(t);var a=e(1),n=e.n(a),c=e(4),i=e.n(c),r=(e(11),e(5)),l=e(3),o=e(6),j=(e(12),e(13),e(0));function d(s){var t=s.avatar;return Object(j.jsx)("img",{className:"avatar",src:t,alt:"avatar"})}d.defaultProps={avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU"};e(15);function m(s){var t=s.name,e=s.tag,a=s.location;return Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("p",{className:"description-item name",children:t}),Object(j.jsxs)("p",{className:"description-item tag",children:["@",e]}),Object(j.jsx)("p",{className:"description-item location",children:a})]})}e(16);function u(s){var t=s.stats;return Object(j.jsxs)("ul",{className:"stats",children:[Object(j.jsxs)("li",{className:"stats-item followers",children:[Object(j.jsx)("p",{className:"stats-title ",children:"Followers"}),Object(j.jsx)("span",{className:"stats-number",children:t.followers})]}),Object(j.jsxs)("li",{className:"stats-item",children:[Object(j.jsx)("p",{className:"stats-title",children:"Views"}),Object(j.jsx)("span",{className:"stats-number",children:t.views})]}),Object(j.jsxs)("li",{className:"stats-item likes",children:[Object(j.jsx)("p",{className:"stats-title",children:"Likes"}),Object(j.jsx)("span",{className:"stats-number",children:t.likes})]})]})}e(17);var b=function(s){var t=s.settings,e=t.avatar,a=t.name,n=t.tag,c=t.location,i=t.stats;return Object(j.jsxs)("div",{className:"profile",children:[Object(j.jsx)(d,{avatar:e}),Object(j.jsx)(m,{name:a,tag:n,location:c}),Object(j.jsx)(u,{stats:i})]})};e(18);function p(s){var t=s.stats;return Object(j.jsx)("ul",{className:"stat-list",children:t.map((function(s){return Object(j.jsxs)("li",{className:"item ",children:[Object(j.jsx)("span",{className:"label",children:s.label}),Object(j.jsxs)("span",{className:"percentage",children:[s.percentage,"%"]})]},s.id)}))})}e(19);var v=function(s){var t=s.title,e=s.stats;return Object(j.jsxs)("section",{className:"statistics",children:[Object(j.jsx)("h2",{className:"title",children:t}),Object(j.jsx)(p,{stats:e})]})};e(20);function O(s){var t=s.friendsList;return console.log(t),Object(j.jsx)(j.Fragment,{children:t.map((function(s){var t=s.id,e=s.isOnline,a=s.avatar,n=s.name;return Object(j.jsxs)("li",{className:"friend-item",children:[Object(j.jsx)("span",{className:"friend-status",style:{backgroundColor:e?"green":"red"}}),Object(j.jsx)("img",{className:"friend-avatar",src:a,alt:"avatar",width:"48"}),Object(j.jsx)("p",{className:"friend-name",children:n})]},t)}))})}e(21);function f(s){var t=s.friendsList;return Object(j.jsx)("ul",{className:"friends-list",children:Object(j.jsx)(O,{friendsList:t})})}var x=function(){return Object(j.jsxs)("div",{className:"container",children:[r.map((function(s){return Object(j.jsx)(b,{settings:s},s.tag)})),Object(j.jsx)(v,{title:"Upload stats",stats:l}),Object(j.jsx)(v,{stats:l}),Object(j.jsx)(f,{friendsList:o})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.fec4b085.chunk.js.map