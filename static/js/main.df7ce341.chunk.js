(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,s){t.exports={statisticsList:"Statistics_statisticsList__3YUMd",statisticsItem:"Statistics_statisticsItem__3KQ4z",statisticsLabel:"Statistics_statisticsLabel__1lI7b",statisticsValue:"Statistics_statisticsValue__1IBwX"}},,,function(t,e,s){t.exports={pageWrap:"PageWrap_pageWrap__3mYU-",mainTitle:"PageWrap_mainTitle__1nZqH"}},function(t,e,s){t.exports={section:"Section_section__3atwk",sectionTitle:"Section_sectionTitle__33ddu"}},function(t,e,s){t.exports={feedbackBtnsWrap:"FeedbackOptions_feedbackBtnsWrap__WKROe",feedbackBtn:"FeedbackOptions_feedbackBtn__1_DqV"}},,,,,function(t,e,s){t.exports={container:"Container_container__1ZyH5"}},function(t,e,s){t.exports={notificationMessage:"Notification_notificationMessage__31zE3"}},,,,,,,,function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var a=s(2),c=s.n(a),i=s(7),n=s.n(i),r=(s(19),s(20),s(8)),o=s(9),l=s(10),b=s(14),d=s(13),j=s(4),u=s.n(j),h=s(0),p=function(t){var e=t.title,s=t.children;return Object(h.jsxs)("div",{className:u.a.pageWrap,children:[Object(h.jsx)("h1",{className:u.a.mainTitle,children:e}),s]})},O=s(5),f=s.n(O),m=s(11),x=s.n(m),_=function(t){var e=t.children;return Object(h.jsx)("div",{className:x.a.container,children:e})},k=function(t){var e=t.title,s=t.children;return Object(h.jsx)("section",{className:f.a.section,children:Object(h.jsxs)(_,{children:[Object(h.jsx)("h2",{className:f.a.sectionTitle,children:e}),s]})})},v=s(6),N=s.n(v),g=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(h.jsx)("div",{className:N.a.feedbackBtnsWrap,children:e.map((function(t){return Object(h.jsx)("button",{type:"button",onClick:function(){return s(t)},className:N.a.feedbackBtn,children:t},t)}))})},L=s(1),F=s.n(L),T=function(t){var e=t.good,s=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(h.jsxs)("ul",{className:"list ".concat(F.a.statisticsList),children:[Object(h.jsxs)("li",{className:F.a.statisticsItem,children:[Object(h.jsx)("span",{className:F.a.statisticsLabel,children:"Good: "}),Object(h.jsx)("span",{className:F.a.statisticsValue,children:e})]}),Object(h.jsxs)("li",{className:F.a.statisticsItem,children:[Object(h.jsx)("span",{className:F.a.statisticsLabel,children:"Neutral: "}),Object(h.jsx)("span",{className:F.a.statisticsValue,children:s})]}),Object(h.jsxs)("li",{className:F.a.statisticsItem,children:[Object(h.jsx)("span",{className:F.a.statisticsLabel,children:"Bad: "}),Object(h.jsx)("span",{className:F.a.statisticsValue,children:a})]}),Object(h.jsxs)("li",{className:F.a.statisticsItem,children:[Object(h.jsx)("span",{className:F.a.statisticsLabel,children:"Total: "}),Object(h.jsx)("span",{className:F.a.statisticsValue,children:c})]}),Object(h.jsxs)("li",{className:F.a.statisticsItem,children:[Object(h.jsx)("span",{className:F.a.statisticsLabel,children:"Positive feedback: "}),Object(h.jsxs)("span",{className:F.a.statisticsValue,children:[i,"%"]})]})]})},I=s(12),P=s.n(I),V=function(t){var e=t.message;return Object(h.jsx)("p",{className:P.a.notificationMessage,children:e})},B=function(t){Object(b.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.getOptionsValues=function(){return Object.keys(t.state)},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.round(e/(.01*t.countTotalFeedback()))||0},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this.state,e=t.good,s=t.neutral,a=t.bad;return Object(h.jsxs)(p,{title:"Feedback from visitors to Caf\xe9 Expresso",children:[Object(h.jsx)(k,{title:"Please leave your feedback",children:Object(h.jsx)(g,{options:this.getOptionsValues(),onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(k,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(T,{good:e,neutral:s,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(V,{message:"No feedback given"})})]})}}]),s}(a.Component);n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.df7ce341.chunk.js.map