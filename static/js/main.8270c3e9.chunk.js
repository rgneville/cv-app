(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),j=n.n(a),r=n(0);var o=function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"CV Creator"}),Object(r.jsxs)("svg",{id:"Icons",height:"30",viewBox:"0 0 74 74",width:"30",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("path",{d:"m28.182 69.074a1.013 1.013 0 0 1 -.122-.008 1 1 0 0 1 -.86-.8l-5.193-26.7-19.295-8.476a1 1 0 0 1 .053-1.853l68.69-25.574a1 1 0 0 1 1.321 1.172l-12.966 53.565a1 1 0 0 1 -1.456.64l-20.513-11.322-8.753 18.782a1 1 0 0 1 -.906.574zm-22.408-36.823 17.518 7.7a1 1 0 0 1 .579.725l4.705 24.19 7.905-16.966a1 1 0 0 1 1.389-.453l20.3 11.2 12.22-50.454z"}),Object(r.jsx)("path",{d:"m37.387 49.325a1 1 0 0 1 -.771-1.636l29.733-36.047-42.886 30.04a1 1 0 0 1 -1.148-1.638l48.915-34.263a1 1 0 0 1 1.346 1.455l-34.417 41.725a1 1 0 0 1 -.772.364z"}),Object(r.jsx)("path",{d:"m28.18 69.078a1 1 0 0 1 -.691-1.724l16.194-15.461a1 1 0 1 1 1.381 1.446l-16.194 15.461a1 1 0 0 1 -.69.278z"})]})]})},l=n(2),u=n(5),s=n(16),b=Object(c.createContext)(),d=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],a=n[1],j=Object(c.useState)([{position:"Development Underwriter",company:"Sutton Specialist Risks Ltd",city:"Bristol, UK",jobStart:"23/09/2013",jobEnd:"01/04/2021",id:1}]),o=Object(l.a)(j,2),d=o[0],O=o[1],x=Object(c.useState)([{qualification:"BA (Hons) - Economics",institution:"University of Sussex",location:"Brighton, UK",finished:"17/07/2013",id:1}]),h=Object(l.a)(x,2),p=h[0],f=h[1],v=Object(c.useState)([{skill:"HTML/CSS",id:1}]),m=Object(l.a)(v,2),g=m[0],C=m[1];return Object(r.jsx)(b.Provider,{value:{contactInfo:i,experience:d,qualifications:p,skills:g,addContact:function(e,t,n,c,i){a({firstName:e,lastName:t,phone:n,email:c,jobTitle:i,id:Object(s.a)()})},addJob:function(e,t,n,c,i){O([].concat(Object(u.a)(d),[{position:e,company:t,city:n,jobStart:c,jobEnd:i,id:Object(s.a)()}]))},removeJob:function(e){O(d.filter((function(t){return t.id!==e})))},addQualification:function(e,t,n,c){f([].concat(Object(u.a)(p),[{qualification:e,institution:t,location:n,finished:c,id:Object(s.a)()}]))},removeQualification:function(e){f(p.filter((function(t){return t.id!==e})))},editJob:function(e,t,n,c,i,a){var j=d.map((function(j){return j.id===a?{position:e,company:t,city:n,jobStart:c,jobEnd:i,id:a}:j}));return O(j)},editQualification:function(e,t,n,c,i){var a=d.map((function(a){return a.id===i?{qualification:e,institution:t,location:n,finished:c,id:i}:a}));return f(a)},addSkill:function(e){C([].concat(Object(u.a)(g),[{skill:e,id:Object(s.a)()}]))},clearSkills:function(){C([])}},children:e.children})};var O=function(){var e=Object(c.useContext)(b).addContact,t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],j=Object(c.useState)(""),o=Object(l.a)(j,2),u=o[0],s=o[1],d=Object(c.useState)(""),O=Object(l.a)(d,2),x=O[0],h=O[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],m=f[1],g=Object(c.useState)(""),C=Object(l.a)(g,2),S=C[0],y=C[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"general-info-form",onSubmit:function(t){t.preventDefault(),e(i,u,x,v,S)},children:[Object(r.jsx)("label",{children:"Contact details:"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:i,placeholder:"First name",onChange:function(e){return a(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:u,placeholder:"Last name",onChange:function(e){return s(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:x,placeholder:"Phone number",onChange:function(e){return h(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:v,placeholder:"Email address",onChange:function(e){return m(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:S,placeholder:"Job title",onChange:function(e){return y(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Save"})]})})};var x=function(){var e=Object(c.useContext)(b).addJob,t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],j=Object(c.useState)(""),o=Object(l.a)(j,2),u=o[0],s=o[1],d=Object(c.useState)(""),O=Object(l.a)(d,2),x=O[0],h=O[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],m=f[1],g=Object(c.useState)(""),C=Object(l.a)(g,2),S=C[0],y=C[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"experience-form",onSubmit:function(t){t.preventDefault(),e(i,u,x,v,S),a(""),s(""),h(""),m(""),y("")},children:[Object(r.jsx)("label",{children:"Add a job:"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:i,placeholder:"Position held",onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:u,placeholder:"Company",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:x,placeholder:"City",onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:v,placeholder:"Start date",onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:S,placeholder:"Finish date",onChange:function(e){return y(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Add"})]})})};var h=function(){var e=Object(c.useContext)(b).addQualification,t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],j=Object(c.useState)(""),o=Object(l.a)(j,2),u=o[0],s=o[1],d=Object(c.useState)(""),O=Object(l.a)(d,2),x=O[0],h=O[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],m=f[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"education-form",onSubmit:function(t){t.preventDefault(),e(i,u,x,v),a(""),s(""),h(""),m("")},children:[Object(r.jsx)("label",{children:"Add a qualification:"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:i,placeholder:"Qualification name",onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:u,placeholder:"Insitution of qualification",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:x,placeholder:"Location",onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:v,placeholder:"Finish date",onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Add"})]})})},p=function(e){var t=e.job,n=Object(c.useContext)(b),i=n.removeJob,a=n.editJob,j=Object(c.useState)(t.position),o=Object(l.a)(j,2),u=o[0],s=o[1],d=Object(c.useState)(t.company),O=Object(l.a)(d,2),x=O[0],h=O[1],p=Object(c.useState)(t.city),f=Object(l.a)(p,2),v=f[0],m=f[1],g=Object(c.useState)(t.jobStart),C=Object(l.a)(g,2),S=C[0],y=C[1],k=Object(c.useState)(t.jobEnd),w=Object(l.a)(k,2),q=w[0],D=w[1],E=Object(c.useState)(!1),N=Object(l.a)(E,2),J=N[0],Q=N[1];return Object(r.jsxs)("div",{className:"experience-container",children:[J?null:Object(r.jsxs)("div",{className:"experience-info",children:[Object(r.jsx)("h4",{children:t.position}),Object(r.jsx)("p",{children:t.company}),Object(r.jsx)("p",{children:t.city}),Object(r.jsxs)("p",{children:[t.jobStart," to ",t.jobEnd]}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),i(t.id)},children:"Delete"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),Q(!J)},children:"Edit"})]}),J?Object(r.jsx)("div",{className:"edit-form",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",value:u,placeholder:t.position,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:x,placeholder:t.company,onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:v,placeholder:t.city,onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:S,placeholder:t.jobStart,onChange:function(e){return y(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:q,placeholder:t.jobEnd,onChange:function(e){return D(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),a(u,x,v,S,q,t.id),Q(!J)},children:"Save edits"})]})}):null]})},f=function(){var e=Object(c.useContext)(b).experience;return Object(r.jsxs)("div",{id:"experience-list",children:[Object(r.jsx)("h3",{children:"Employment History"}),e.map((function(e){return Object(r.jsx)(p,{job:e},e.id)})),Object(r.jsx)("hr",{})]})},v=function(e){var t=e.certificate,n=Object(c.useContext)(b),i=n.removeQualification,a=n.editQualification,j=Object(c.useState)(t.qualification),o=Object(l.a)(j,2),u=o[0],s=o[1],d=Object(c.useState)(t.institution),O=Object(l.a)(d,2),x=O[0],h=O[1],p=Object(c.useState)(t.location),f=Object(l.a)(p,2),v=f[0],m=f[1],g=Object(c.useState)(t.finished),C=Object(l.a)(g,2),S=C[0],y=C[1],k=Object(c.useState)(!1),w=Object(l.a)(k,2),q=w[0],D=w[1];return Object(r.jsxs)("div",{className:"education-container",children:[q?null:Object(r.jsxs)("div",{className:"education-info",children:[Object(r.jsx)("h4",{children:t.qualification}),Object(r.jsx)("p",{children:t.institution}),Object(r.jsx)("p",{children:t.location}),Object(r.jsxs)("p",{children:["Completed ",t.finished]}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),i(t.id)},children:"Delete"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),D(!q)},children:"Edit"})]}),q?Object(r.jsx)("div",{className:"edit-form",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",value:u,placeholder:t.qualification,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:x,placeholder:t.institution,onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:v,placeholder:t.location,onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:S,placeholder:t.finished,onChange:function(e){return y(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),a(u,x,v,S,t.id),D(!q)},children:"Save edits"})]})}):null]})},m=function(){var e=Object(c.useContext)(b).qualifications;return Object(r.jsxs)("div",{id:"education-list",children:[Object(r.jsx)("h3",{children:"Education and Qualifications"}),e.map((function(e){return Object(r.jsx)(v,{certificate:e},e.id)})),Object(r.jsx)("hr",{})]})},g=function(){var e=Object(c.useContext)(b).contactInfo;return Object(r.jsxs)("div",{id:"general-info-list",children:[Object(r.jsxs)("div",{id:"namebox",children:[Object(r.jsxs)("h2",{children:[e.firstName," ",e.lastName]}),Object(r.jsx)("h4",{children:e.jobTitle})]}),Object(r.jsxs)("div",{id:"contact",children:[Object(r.jsx)("h5",{children:"Contact information:"}),Object(r.jsx)("p",{children:e.phone}),Object(r.jsx)("p",{children:e.email})]})]})},C=function(){var e=Object(c.useContext)(b).addSkill,t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1];return Object(r.jsx)("div",{id:"skill-form",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{children:"Add a skill:"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:i,placeholder:"Skill name",onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),e(i),a("")},children:"Add"})]})})},S=function(){var e=Object(c.useContext)(b),t=e.skills,n=e.clearSkills;return Object(r.jsxs)("div",{id:"skill-list",children:[Object(r.jsx)("h3",{id:"skills-title",children:"Skills"}),Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{id:"skill-info",children:e.skill},e.id)}))}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),n()},className:"bottomSpace",children:"Clear skills"})]})},y=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",onClick:function(){var e=document.getElementById("CV").innerHTML,t=window.open("","","height=500, width=500");t.document.write("<html>"),t.document.write("<body>"),t.document.write(e),t.document.write("</body>"),t.document.write("<style> button { display: none; } </style>"),t.document.write("</html>"),t.document.close(),t.print()},className:"bottomSpace",children:"Print Resume Contents"})})};var k=function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)(d,{children:[Object(r.jsxs)("div",{id:"form-container",children:[Object(r.jsx)(o,{}),Object(r.jsx)(O,{}),Object(r.jsx)(x,{}),Object(r.jsx)(h,{}),Object(r.jsx)(C,{})]}),Object(r.jsxs)("div",{id:"CV",children:[Object(r.jsx)(g,{}),Object(r.jsx)(f,{}),Object(r.jsx)(m,{}),Object(r.jsx)(S,{})]}),Object(r.jsx)(y,{})]})})};n(13);j.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8270c3e9.chunk.js.map