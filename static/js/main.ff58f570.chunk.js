(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={section:"Section_section__3atwk",sectionTitle:"Section_sectionTitle__33ddu"}},,,,,function(e,t,n){e.exports={container:"Container_container__1ZyH5"}},function(e,t,n){e.exports={notificationMessage:"Notification_notificationMessage__31zE3"}},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),s=n.n(i),o=(n(16),n(17),n(5)),r=n(6),l=n(7),u=n(11),d=n(10),j=n(8),b=n.n(j),h=n(0),f=function(e){var t=e.children;return Object(h.jsx)("div",{className:b.a.container,children:t})},O=n(3),x=n.n(O),p=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:x.a.section,children:[Object(h.jsx)("h2",{className:x.a.sectionTitle,children:t}),n]})},v=(n(19),function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(h.jsx)("button",{type:"button",className:"button",onClick:function(){return n(e)},children:e},e)}))}),g=(n(20),function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good: ",Object(h.jsx)("span",{children:t})]}),Object(h.jsxs)("li",{children:["Neutral: ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("li",{children:["Bad: ",Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("li",{children:["Total: ",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{children:["Positive feedback: ",Object(h.jsxs)("span",{children:[i,"%"]})]})]})}),k=n(9),m=n.n(k),F=function(e){var t=e.message;return Object(h.jsx)("p",{className:m.a.notificationMessage,children:t})},_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.getOptionsValues=function(){return Object.keys(e.state)},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/(.01*e.countTotalFeedback()))||0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Feedback from visitors to Caf\xe9 Expresso"}),Object(h.jsx)(p,{title:"Please leave your feedback",children:Object(h.jsx)(f,{children:Object(h.jsx)(v,{options:this.getOptionsValues(),onLeaveFeedback:this.onLeaveFeedback})})}),Object(h.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(g,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(F,{message:"No feedback given"})})]})}}]),n}(c.Component);_.defaultProps={};var P=_;s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ff58f570.chunk.js.map