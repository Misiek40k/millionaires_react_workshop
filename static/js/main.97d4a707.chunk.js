(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(96)},42:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(30),i=n.n(s),c=(n(42),n(7)),u=n(8),o=n(10),l=n(9),m=n(11),d=n(3),h=n(98),p=n(99),f=n(100),b=n(31),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.difficulty;a.trim().length?e.props.onSubmit(a,r,e.redirect):alert("Name jest wymagane")},e.state={name:"",difficulty:e.options[0].value},e.onSubmitHandler=e.onSubmitHandler.bind(Object(d.a)(Object(d.a)(e))),e.onChangeHandler=e.onChangeHandler.bind(Object(d.a)(Object(d.a)(e))),e.redirect=e.redirect.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(b.a)({},n,a))}},{key:"redirect",value:function(){this.props.history.push("/game")}},{key:"renderOption",value:function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}},{key:"render",value:function(){return r.a.createElement("div",{className:"l-centered"},r.a.createElement("form",{className:"f-start",onSubmit:this.onSubmitHandler},r.a.createElement("label",{htmlFor:"name",className:"f-start__control"},"Name "),r.a.createElement("input",{className:"f-start__control",value:this.state.name,onChange:this.onChangeHandler,name:"name",id:"name"}),r.a.createElement("select",{className:"f-start__control",name:"difficulty",id:"difficulty",value:this.state.difficulty,onChange:this.onChangeHandler},this.options.map(this.renderOption)),r.a.createElement("button",{className:"f-start__action"},"Submit")))}},{key:"options",get:function(){return[{value:"easy",label:"easy"},{value:"medium",label:"medium"},{value:"hard",label:"hard"}]}}]),t}(a.Component),y=n(35),O=function(e){return r.a.createElement("div",{className:"c-background"},e.children)},j=n(32),E=n.n(j),N=[{price:1e6,isGuaranteed:!0},{price:5e5,isGuaranteed:!1},{price:25e4,isGuaranteed:!1},{price:125e3,isGuaranteed:!1},{price:75e3,isGuaranteed:!1},{price:4e4,isGuaranteed:!0},{price:2e4,isGuaranteed:!1},{price:1e4,isGuaranteed:!1},{price:5e3,isGuaranteed:!1},{price:2e3,isGuaranteed:!1},{price:1e3,isGuaranteed:!0},{price:500,isGuaranteed:!1}],g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).renderItem=function(e,t){var a=e.price,s=e.isGuaranteened,i=n.props.questionNumber,c=i===n.lastQuestionIndex-t,u=i>n.lastQuestionIndex-t,o="c-status__item ".concat(c?"is-active":""," ").concat(u?"is-done":""," ").concat(s?"is-special":"");return r.a.createElement("li",{key:a,className:o},r.a.createElement("span",{className:"c-status__indicator"},n.lastQuestionIndex-t),r.a.createElement("span",{className:"c-value"},a))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"c-side"},r.a.createElement("ul",null,N.map(this.renderItem)))}},{key:"lastQuestionIndex",get:function(){return N.length-1}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).renderAnswer=function(e,t){return r.a.createElement("li",{key:t,className:"c-question",onClick:n.props.onAnswerClick(e)},r.a.createElement("span",{className:"c-question__label"},String.fromCharCode(65+t),": ",e))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.answers;return r.a.createElement("div",{className:"c-questions"},r.a.createElement("p",{className:"c-questions__title c-question"},t),r.a.createElement("ul",{className:"c-questions__list"},n.map(this.renderAnswer)))}}]),t}(a.Component),w=n(33),S=n.n(w),_=n(97),G=function(e){return r.a.createElement("div",{className:"l-end"},r.a.createElement("p",null,"Game Over ",e.username),r.a.createElement("p",null,"You Won ",function(e){if(!e)return 0;var t=N.slice(-e).find(function(e){return e.isGuaranteed});return t?t.price:0}(e.questionNumber)," $"),r.a.createElement(_.a,{to:"/"},"Restart"))},q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).state={questions:[],currentQuestionNumber:0,hasWon:!1,isFinished:!1},e.getQuestions=e.getQuestions.bind(Object(d.a)(Object(d.a)(e))),e.checkAnswer=e.checkAnswer.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.hasStarted||this.props.history.replace("/"),this.getQuestions()}},{key:"getQuestions",value:function(){var e,t=this;(e=this.props.difficulty,E.a.get("http://react-workshop-api.herokuapp.com",{params:{difficulty:e}}).then(function(e){var t=e.data.results;return(void 0===t?[]:t).map(function(e){return{category:e.category,question:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers}})})).then(function(e){t.setState({questions:e})})}},{key:"checkAnswer",value:function(e){var t=this;return function(n){e===t.currentQuestion.correctAnswer?t.state.currentQuestionNumber<11?t.setState(function(e){return{currentQuestionNumber:e.currentQuestionNumber+1}}):t.setState({hasWon:!0,isFinished:!0}):t.setState({hasWon:!1,isFinished:!0})}}},{key:"render",value:function(){var e=this.currentQuestion||{},t=e.correctAnswer,n=e.incorrectAnswers,a=void 0===n?[]:n,s=e.question;return this.state.isFinished?r.a.createElement(G,{username:this.props.username,questionNumber:this.state.currentQuestionNumber}):r.a.createElement("div",{className:"l-game"},r.a.createElement(O,null,r.a.createElement(k,{answers:S()([t].concat(Object(y.a)(a))),question:s,onAnswerClick:this.checkAnswer})),r.a.createElement(g,{questionNumber:this.state.currentQuestionNumber}))}},{key:"currentQuestion",get:function(){return this.state.questions[this.state.currentQuestionNumber]}}]),t}(a.Component),Q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).state={hasStarted:!1,name:"",difficulty:""},e.setupGame=e.setupGame.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"setupGame",value:function(e,t,n){this.setState({name:e,difficulty:t,hasStarted:!0},n)}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){var n=t.history;return r.a.createElement(v,{onSubmit:e.setupGame,history:n})}}),r.a.createElement(f.a,{exact:!0,path:"/game",render:function(t){var n=t.history;return r.a.createElement(q,{hasStarted:e.state.hasStarted,history:n,username:e.state.name,difficulty:e.state.difficulty})}}),r.a.createElement(f.a,{render:function(){return r.a.createElement("p",null,"404 Page Not Found")}})))}}]),t}(a.Component);i.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.97d4a707.chunk.js.map