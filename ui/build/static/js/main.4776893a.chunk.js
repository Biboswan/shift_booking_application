(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/spinner_green.e525bdd3.svg"},49:function(e,t,a){e.exports=a.p+"static/media/spinner_red.2f25c194.svg"},62:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),i=a(15),l=a(100),s=a(52),u={lightTheme:Object(s.a)({palette:{type:!0?"light":"dark",background:{default:"#F1F4F8"},darkGrayMain:"#4F6C92",darkGraySecondary:"#A4B8D3",lightGreyMain:"#CBD2E1",pinkMain:"#E2006A",white:"#F7F8FB"},text:{activeTabColor:"#004FB4",inactiveTabColor:"#CBD2E1",activeCancelButton:"#E2006A",disableCancelButton:"#FE93B3",activeBookButton:"#16A64D",disableBookButton:"#55CB82"},border:{activeCancelButton:"#FE93B3",disableCancelButton:"#EED2DF",activeBookButton:"#55CB82",disableBookButton:"#CAEFD8"}})},d=a(50),b=a(23),p=a(101),m=a(96),f=a(81),v=Object(f.a)(function(e){return{root:{color:e.palette.darkGrayMain}}}),h=function(){var e=v();return o.a.createElement("header",null,o.a.createElement(m.a,{className:e.root,variant:"h4",component:"h1"},"Shift Booking Application"))},g=a(24),k=a.n(g),E=a(32),C=a(33),x=a(103),O=a(99),B=a(97),j=a(98),w=["January","February","March","April","May","June","July","August","September","October","November","December"],y=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return Math.floor((new Date(e)-t)/864e5)}(e);if(0===t)return"Today";if(1===t)return"Tomorrow";var a=new Date(e);return"".concat(w[a.getMonth()]," ").concat(a.getDate())},T=(Object(n.createContext)(null),Object(n.createContext)(null)),S=a(48),I=Object(f.a)(function(e){return{root:{backgroundColor:Object(S.fade)(e.palette.background.default,.5),width:"100%",padding:16},mainHeader:{color:e.palette.darkGrayMain,fontWeight:"bold"},subHeader:{color:e.palette.lightGreyMain}}}),D=function(e){var t=I(),a=e.date,n=e.noOfShifts,r=e.totalDuration,c=e.showSubHeader,i=void 0!==c&&c;return o.a.createElement("div",{className:t.root},o.a.createElement(m.a,{classes:{root:t.mainHeader},variant:"h6",component:"h2"},a,i?o.a.createElement(m.a,{variant:"subtitle2",component:"span",className:t.subHeader}," ",n," ",n>1?"shifts":"shift",", ",r):""))},R=a(102),N=a(41),A=a.n(N),M=a(49),F=a.n(M),H=function(e){switch(e.color){case"green":return o.a.createElement("img",{alt:"green spinner",src:A.a});case"red":return o.a.createElement("img",{alt:"red spinner",src:F.a});default:return o.a.createElement("img",{alt:"green spinner",src:A.a})}},_=a(36),P=function(e,t){return e.reduce(function(e,a){return Object(C.a)({},e,Object(_.a)({},a[t],Object(C.a)({},a)))},{})},G=Object(f.a)(function(e){return{root:{borderRadius:25,backgroundColor:e.palette.white,width:100,height:50},activeCancelButtton:{color:e.text.activeCancelButton,borderColor:e.border.activeCancelButton},disableCancelButton:{color:e.text.disableCancelButton,borderColor:e.border.disableCancelButton},activeBookButtton:{color:e.text.activeBookButton,borderColor:e.border.activeBookButton},disableBookButton:{color:e.text.disableBookButton,borderColor:e.border.disableBookButton}}}),L="".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_SERVER,"/shifts"),W=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useContext)(T),s=l.shifts,u=l.shiftDispatch,d=e.id,b=e.isDisable,p=G(),m=s[d].booked;return o.a.createElement("button",{disabled:b,className:"".concat(p.root," ").concat(m?b?p.disableCancelButton:p.activeCancelButtton:b?p.disableBookButton:p.activeBookButtton),onClick:m?function(e){c(!0),function(){var e=Object(E.a)(k.a.mark(function e(){var t,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L,"/").concat(d,"/cancel"),{method:"POST"});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:a=e.sent,console.log("data"),console.log(a),u({type:"cancel",payload:P([a],"id")});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(){return e.apply(this,arguments)}}()(),c(!1)}:function(e){c(!0),console.log(r),function(){var e=Object(E.a)(k.a.mark(function e(){var t,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L,"/").concat(d,"/book"),{method:"POST"});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:a=e.sent,console.log("data"),console.log(a),u({type:"book",payload:P([a],"id")});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(){return e.apply(this,arguments)}}()(),c(!1)}},r?o.a.createElement(H,{color:m?"red":"green"}):m?"Cancel":"Book")},J=Object(f.a)(function(e){return{root:{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:7},mainHeader:{color:e.palette.darkGrayMain,fontWeight:"normal"},subHeader:{color:e.palette.darkGraySecondary},bookStatusBookedColor:{color:e.palette.darkGrayMain},bookStatusfont:{fontWeight:"bold",paddingRight:20},bookStatusOverlapColor:{color:e.palette.pinkMain}}}),U=function(e){var t,a=J(),r=Object(n.useContext)(T).shifts,c=e.id,i=e.prevId,l=e.nextId,s=r[c],u=s.area,d=s.startTime,b=s.endTime,p=s.booked,f=e.showBookStatus,v=void 0!==f&&f,h=new Date(d),g=new Date(b),k=h.getHours(),E=g.getHours(),C=h.getMinutes(),x=C>9?C:"0".concat(C),O=g.getMinutes(),B=O>9?O:"0".concat(O),j="".concat(k,":").concat(x," - ").concat(E,":").concat(B);if(v&&!p){var w=r[i];if(w&&w.booked&&new Date(w.endTime)>h&&(t="Overlapping"),"Overlapping"!==t){var y=r[l];y&&y.booked&&g>new Date(y.startTime)&&(t="Overlapping")}}var S=!1;return(new Date>h||"Overlapping"===t)&&(S=!0),o.a.createElement("li",{className:a.root},o.a.createElement("div",null,o.a.createElement("div",{className:a.mainHeader},j),o.a.createElement("div",{className:a.subHeader},u)),o.a.createElement(R.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},v?o.a.createElement("div",null,p?o.a.createElement(m.a,{className:"".concat(a.bookStatusBookedColor," ").concat(a.bookStatusfont)},"Booked"):"Overlapping"===t&&o.a.createElement(m.a,{className:"".concat(a.bookStatusOverlapColor," ").concat(a.bookStatusfont)},"Overlapping")):"",o.a.createElement(W,{isDisable:S,id:c})))},V=Object(f.a)(function(e){return{groupItemsList:{width:"100%",display:"block",padding:16}}}),z=function(e){var t=e.group,a=t.date,n=t.booked_shifts,r=V(),c=n.length,i=n.reduce(function(e,t){return e+(t.endTime-t.startTime)/6e4},0),l="".concat(i/60," h ").concat(i%60," m");return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{date:a,noOfShifts:c,totalDuration:l,showSubHeader:!0}),o.a.createElement("ul",{className:r.groupItemsList},n.map(function(e){return o.a.createElement(U,{key:e.id,id:e.id})})))},Y=Object(f.a)(function(e){return{groupContainer:{flexWrap:"wrap",padding:0},root:{height:"98%",overflowY:"auto"}}}),q=function(){var e=Y(),t=Object(n.useContext)(T).shifts;return o.a.createElement(B.a,{classes:{root:e.root},disablePadding:!0},function(e){for(var t,a=Object.values(e).filter(function(e){return e.booked}).sort(function(e,t){return e.startTime<t.startTime?-1:1}),n="",o=[],r=a.length,c=0;c<r;c++){var i=a[c],l=y(i.startTime);l!==n?(t={date:l,booked_shifts:[i]},n=l,o.push(t)):t.booked_shifts.push(i)}return console.log("lau"),console.log(o),o}(t).map(function(t){return o.a.createElement(j.a,{divider:!0,classes:{root:e.groupContainer},key:t.date},o.a.createElement(z,{group:t}))}))},K=Object(f.a)(function(e){return{groupItemsList:{width:"100%",display:"block",padding:16},groupContainer:{flexWrap:"wrap",padding:0},groupsList:{height:"92%",overflowY:"auto"}}}),Q=function(e){var t=K(),a=e.group,r=Object(n.useContext)(T).shifts;return o.a.createElement(B.a,{classes:{root:t.groupsList}},function(){for(var e,t=[],n="",o=a.length,c=0;c<o;c++){var i=a[c],l=i.id,s=i.prevId,u=i.nextId,d=y(r[l].startTime);d!==n?(e={date:d,shifts:[{id:l,prevId:s}]},n=d,t.push(e)):e.shifts.push({id:l,prevId:s,nextId:u})}return t}().map(function(e){var a=e.date,n=e.shifts;return o.a.createElement(j.a,{key:a,divider:!0,classes:{root:t.groupContainer}},o.a.createElement(D,{date:a}),o.a.createElement("ul",{className:t.groupItemsList},n.map(function(e){var t=e.id,a=e.prevId,n=e.nextId;return o.a.createElement(U,{showBookStatus:!0,key:t,id:t,prevId:a,nextId:n})})))}))},X=Object(f.a)(function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw"},activeTab:{color:e.text.activeTabColor},tabsRoot:{color:e.text.inactiveTabColor},tabsFlexContainer:{justifyContent:"space-evenly"},tabRoot:{textTransform:"capitalize"},tabIndicator:{backgroundColor:"transparent"},item:{width:"100vw",maxWidth:525},tabContainer:{backgroundColor:e.palette.white,minHeight:"75vh",borderRadius:10,boxShadow:"0px 0px 10px 2px ".concat(e.palette.lightGreyMain)}}}),Z=["Helsinki","Tampere","Turku"],$=function(){var e=X(),t=Object(n.useContext)(T).shifts,a=Object(n.useState)(Z[0]),r=Object(i.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)(function(e){for(var t,a,n=Object.values(e),o=(new Date).getTime(),r=n.filter(function(e){return e.endTime>o}).sort(function(e,t){return e.startTime<t.startTime?-1:1}),c=r.length,i={Helsinki:[],Tampere:[],Turku:[]},l=0;l<c;l++){var s=r[l];l+1<c&&(a=r[l+1].id),i[s.area].push({id:s.id,prevId:t,nextId:a}),t=s.id}return i}(t)),u=Object(i.a)(s,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{classes:{root:e.tabsRoot,indicator:e.tabIndicator,flexContainer:e.tabsFlexContainer},value:c,onChange:function(e,t){l(t)}},Z.map(function(t){return o.a.createElement(O.a,{key:t,label:o.a.createElement(m.a,null,"".concat(t," (").concat(u[t].length,")")),classes:{root:e.tabRoot,selected:e.activeTab},value:t})})),Z.map(function(e){return c===e&&o.a.createElement(Q,{key:e,group:u[e]})}))},ee=Object(f.a)(function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw"},activeTab:{color:e.text.activeTabColor},tabsRoot:{color:e.text.inactiveTabColor},tabRoot:{textTransform:"capitalize"},tabIndicator:{backgroundColor:"transparent"},item:{width:"100vw",maxWidth:525},tabContainer:{backgroundColor:e.palette.white,height:"75vh",borderRadius:10,boxShadow:"0px 0px 10px 2px ".concat(e.palette.lightGreyMain)}}}),te=function(e,t){switch(t.type){case"fetchAll":case"book":case"cancel":return Object(C.a)({},e,t.payload);default:return e}},ae=function(){var e=ee(),t=Object(n.useReducer)(te,{}),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)("user"),s=Object(i.a)(l,2),u=s[0],d=s[1],b=Object(n.useState)(!0),p=Object(i.a)(b,2),f=p[0],v=p[1];return Object(n.useEffect)(function(){var e=function(){var e=Object(E.a)(k.a.mark(function e(){var t,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_SERVER,"/shifts"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c({type:"fetchAll",payload:P(a,"id")});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();console.log("mount"),v(!0),e(),v(!1)},[]),o.a.createElement("main",{className:e.container},o.a.createElement("div",{className:e.item},o.a.createElement(x.a,{classes:{root:e.tabsRoot,indicator:e.tabIndicator},value:u,onChange:function(e,t){d(t)}},o.a.createElement(O.a,{classes:{root:e.tabRoot,selected:e.activeTab},value:"user",label:o.a.createElement(m.a,{variant:"h5",component:"h2"},"My shifts")}),o.a.createElement(O.a,{classes:{root:e.tabRoot,selected:e.activeTab},value:"available",label:o.a.createElement(m.a,{variant:"h5",component:"h2"},"Available shifts")})),o.a.createElement(T.Provider,{value:{shifts:r,shiftDispatch:c}},f?o.a.createElement(H,{color:"green"}):o.a.createElement("div",{className:e.tabContainer},"user"===u&&o.a.createElement(q,null),"available"===u&&o.a.createElement($,null)))))},ne=function(){var e=Object(n.useState)("lightTheme"),t=Object(i.a)(e,2),a=t[0];t[1];return Object(n.useEffect)(function(){console.log("React App Running...")},[]),o.a.createElement(d.a,null,o.a.createElement(l.a,{theme:u[a]},o.a.createElement(p.a,null),o.a.createElement(h,null),o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/",component:ae}))))};c.a.render(o.a.createElement(ne,null),document.querySelector("#root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4776893a.chunk.js.map