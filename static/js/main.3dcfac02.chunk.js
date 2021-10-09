(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"App_container__3Xrcx"}},19:function(t,e,n){},2:function(t,e,n){t.exports={label:"ContactForm_label__eCgmp",input:"ContactForm_input__3ctj3",form:"ContactForm_form__1Cx_e",button:"ContactForm_button__Z99xP"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(19),n(14)),i=n(4),l=n(5),u=n(7),b=n(6),m=n(11),d=n.n(m),f=n(12),h=n.n(f),j=n(13),p=n(2),v=n.n(p),O=n(0),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.form,children:[Object(O.jsxs)("label",{className:v.a.label,children:["Name",Object(O.jsx)("input",{onChange:this.handleChange,value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:v.a.input,required:!0})]}),Object(O.jsxs)("label",{className:v.a.label,children:["Number",Object(O.jsx)("input",{onChange:this.handleChange,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:v.a.input,required:!0})]}),Object(O.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})}}]),n}(a.Component),x=C,g=n(9),_=n.n(g);var y=function(t){var e=t.contacts,n=t.onDelete;return Object(O.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{children:[a,": ",c]}),Object(O.jsx)("button",{id:e,onClick:n,className:_.a.button,children:"Delete"})]},e)}))})};var S=function(t){var e=t.filter,n=t.onChange;return Object(O.jsxs)("label",{children:["Find contacts by name",Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})},N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContacts=function(e){var n=e.name,a=e.number;if(t.state.contacts.some((function(t){return t.name===n})))alert("".concat(n," is already in contacts"));else{var c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))}},t.formSubmitHendler=function(e){t.addContacts(e)},t.filterHendler=function(e){var n=e.target.value;t.setState({filter:n})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){console.log("componentDidUpdate"),e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(O.jsxs)("div",{className:h.a.container,children:[Object(O.jsx)("h2",{children:"Phonebook"}),Object(O.jsx)(x,{onSubmit:this.formSubmitHendler}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(S,{filter:t,onChange:this.filterHendler}),Object(O.jsx)(y,{contacts:this.filterContacts(),onDelete:this.deleteContact})]})}}]),n}(a.Component),A=N;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactList_list__KqHNt",button:"ContactList_button__3IsFo"}}},[[29,1,2]]]);
//# sourceMappingURL=main.3dcfac02.chunk.js.map