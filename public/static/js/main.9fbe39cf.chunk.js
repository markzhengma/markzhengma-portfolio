(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(39)},26:function(e,a,t){},28:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(9),i=t.n(n),r=(t(26),t(1)),c=t(2),o=t(5),m=t(3),h=t(4),p=t(6),d=(t(28),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("header",null,s.a.createElement("div",{className:"navigation"},s.a.createElement("li",{className:"navs",id:"homeBtn",onClick:function(){return e.props.scrollToElement("home-spacer")}},s.a.createElement("i",{className:"fas fa-home"}),this.props.isEnglish?"Home":"\u4e3b\u9875"),s.a.createElement("li",{className:"navs",id:"aboutBtn",onClick:function(){return e.props.scrollToElement("about-spacer")}},s.a.createElement("i",{className:"fas fa-id-card"}),this.props.isEnglish?"About":"\u5173\u4e8e"),s.a.createElement("li",{className:"navs",id:"workBtn",onClick:function(){return e.props.scrollToElement("work-spacer")}},s.a.createElement("i",{className:"fas fa-pencil-alt"}),this.props.isEnglish?"Work":"\u4f5c\u54c1"),s.a.createElement("li",{className:"navs",id:"contactBtn",onClick:function(){return e.props.scrollToElement("contact-spacer")}},s.a.createElement("i",{className:"fas fa-phone"}),this.props.isEnglish?"Contact":"\u7559\u8a00")))}}]),a}(l.Component)),u=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"resume ".concat(this.props.showResume?"resume-show":"")},s.a.createElement("div",{className:"resume-btn-group"},s.a.createElement("div",{className:"download-btn ".concat(this.props.showResume?"btn-show":"")},s.a.createElement("a",{href:"/markzhengma_resume.pdf",download:!0},s.a.createElement("i",{className:"fas fa-download"}))),s.a.createElement("div",{className:"close-btn ".concat(this.props.showResume?"btn-show":""),onClick:this.props.toggleShowResume},s.a.createElement("i",{className:"fas fa-window-close"}))),s.a.createElement("img",{className:"resume-content",src:"/markzhengma_resume.png",alt:"Loading Resume..."}))}}]),a}(l.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"info"},s.a.createElement("div",{className:"info-title"},s.a.createElement("h2",null,this.props.isEnglish?"Mark Zheng Ma":"\u9a6c\u94ee(Mark)"),s.a.createElement("div",{className:"resume-btn",onClick:this.props.toggleShowResume},this.props.isEnglish?"Resume":"\u7b80\u5386")),s.a.createElement("div",{className:"info-list"},s.a.createElement("div",{className:"info-single"},s.a.createElement("a",{className:"envelope",href:"mailto:markzhengma@gmail.com"},s.a.createElement("i",{className:"fas fa-envelope"}))),s.a.createElement("div",{className:"info-single"},s.a.createElement("a",{href:"https://www.github.com/markzhengma",target:"_blank"},s.a.createElement("i",{className:"fab fa-github-square"}))),s.a.createElement("div",{className:"info-single"},s.a.createElement("a",{href:"https://www.linkedin.com/in/markzhengma",target:"_blank"},s.a.createElement("i",{className:"fab fa-linkedin"}))),s.a.createElement("div",{className:"info-single"},s.a.createElement("a",{href:"https://www.instagram.com/markzhengma",target:"_blank"},s.a.createElement("i",{className:"fab fa-instagram"}))),s.a.createElement("div",{className:"language-btn",onClick:this.props.switchLanguage},this.props.isEnglish?"\u4e2d\u6587":"ENGLISH")))}}]),a}(l.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"ui ".concat(this.props.showResume?"ui-show":"")},s.a.createElement(d,{isEnglish:this.props.isEnglish,scrollToElement:this.props.scrollToElement}),s.a.createElement(u,{showResume:this.props.showResume,toggleShowResume:this.props.toggleShowResume}),s.a.createElement(E,{isEnglish:this.props.isEnglish,toggleShowResume:this.props.toggleShowResume,switchLanguage:this.props.switchLanguage}))}}]),a}(l.Component),b=t(7),w=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"home"},s.a.createElement(b.Element,{className:"home-box-spacer",name:"home-spacer"}),s.a.createElement("div",{className:"home-box"},this.props.isEnglish?s.a.createElement("div",{className:"word-box"},s.a.createElement("h2",null,"Mark Zheng Ma"),s.a.createElement("b",null,"Web Developer"),s.a.createElement("b",null,"Unity Developer"),s.a.createElement("b",null,"Teacher")):s.a.createElement("div",{className:"word-box"},s.a.createElement("h2",null,"\u9a6c\u94ee (Mark)"),s.a.createElement("b",null,"\u5168\u6808\u7f51\u7ad9\u5f00\u53d1\u5458"),s.a.createElement("b",null,"Unity\u6e38\u620f\u5f00\u53d1\u5458"),s.a.createElement("b",null,"\u6559\u5e08")),s.a.createElement("div",{className:"project",id:"latest-project",onClick:function(){return e.props.scrollToElement("work-spacer")}},s.a.createElement("div",{className:"project-name",id:"latest-name"},this.props.isEnglish?s.a.createElement("h3",null,"Recent Project"):s.a.createElement("h3",null,"\u8fd1\u671f\u4f5c\u54c1")),s.a.createElement("div",{className:"project-pic project-pic-".concat(this.props.recentWork.id),id:"latest-pic"}),s.a.createElement("div",{className:"project-name",id:"latest-name"},s.a.createElement("h5",null,this.props.recentWork.title)))))}}]),a}(l.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"about"},s.a.createElement(b.Element,{className:"spacer about-spacer",name:"about-spacer"}),this.props.isEnglish?s.a.createElement("h2",null,s.a.createElement("i",{className:"fa fa-id-card fa-fw","aria-hidden":"true"}),"About Me"):s.a.createElement("h2",null,s.a.createElement("i",{className:"fa fa-id-card fa-fw","aria-hidden":"true"}),"\u5173\u4e8e"),s.a.createElement("div",{className:"paragraph-list"},s.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p5")?"selection":""),id:"p5",onClick:function(){return e.props.showOrHideParagraph("p5")}},s.a.createElement("div",{className:"paragraph-title title-p5 ".concat(this.props.showParaId.includes("p5")&&window.innerWidth>=1200?"title-hide":"")},this.props.isEnglish?s.a.createElement("h2",null,"Skills"):s.a.createElement("h2",null,"\u6280\u80fd")),s.a.createElement("div",{className:"image img-5"}),s.a.createElement("div",{className:"paragraph-single single-p5 ".concat(this.props.showParaId.includes("p5")&&window.innerWidth>=1200?"paragraph-show":"")},s.a.createElement("div",{className:"skill-single skill-html"},s.a.createElement("div",{className:"skill-name"},"HTML")),s.a.createElement("div",{className:"skill-single skill-css"},s.a.createElement("div",{className:"skill-name"},"CSS")),s.a.createElement("div",{className:"skill-single skill-js"},s.a.createElement("div",{className:"skill-name"},"Javascript")),s.a.createElement("div",{className:"skill-single skill-sql"},s.a.createElement("div",{className:"skill-name"},"SQL")),s.a.createElement("div",{className:"skill-single skill-git"},s.a.createElement("div",{className:"skill-name"},"Git")),s.a.createElement("div",{className:"skill-single skill-react"},s.a.createElement("div",{className:"skill-name"},"React")),s.a.createElement("div",{className:"skill-single skill-node"},s.a.createElement("div",{className:"skill-name"},"Node")),s.a.createElement("div",{className:"skill-single skill-express"},s.a.createElement("div",{className:"skill-name"},"Express")),s.a.createElement("div",{className:"skill-single skill-socket"},s.a.createElement("div",{className:"skill-name"},"Socket")),s.a.createElement("div",{className:"skill-single skill-ruby"},s.a.createElement("div",{className:"skill-name"},"Ruby")),s.a.createElement("div",{className:"skill-single skill-java"},s.a.createElement("div",{className:"skill-name"},"Java")),s.a.createElement("div",{className:"skill-single skill-android"},s.a.createElement("div",{className:"skill-name"},"Android",s.a.createElement("br",null),"Studio")),s.a.createElement("div",{className:"skill-single skill-csharp"},s.a.createElement("div",{className:"skill-name"},"C#")),s.a.createElement("div",{className:"skill-single skill-unity"},s.a.createElement("div",{className:"skill-name"},"Unity")),s.a.createElement("div",{className:"skill-single skill-vive"},s.a.createElement("div",{className:"skill-name"},"Vive")),s.a.createElement("div",{className:"skill-single skill-vuforia"},s.a.createElement("div",{className:"skill-name"},"Vuforia")))),s.a.createElement("div",{className:"scroll scroll-p5 ".concat(this.props.showParaId.includes("p5")&&window.innerWidth<1200?"scroll-show":"scroll-hide")},s.a.createElement("div",{className:"skill-p ".concat(this.props.showParaId.includes("p5")&&window.innerWidth<1200?"p-show":"p-hide")},s.a.createElement("div",{className:"skill-single skill-html"},s.a.createElement("div",{className:"skill-name"},"HTML")),s.a.createElement("div",{className:"skill-single skill-css"},s.a.createElement("div",{className:"skill-name"},"CSS")),s.a.createElement("div",{className:"skill-single skill-js"},s.a.createElement("div",{className:"skill-name"},"Javascript")),s.a.createElement("div",{className:"skill-single skill-sql"},s.a.createElement("div",{className:"skill-name"},"SQL")),s.a.createElement("div",{className:"skill-single skill-git"},s.a.createElement("div",{className:"skill-name"},"Git")),s.a.createElement("div",{className:"skill-single skill-react"},s.a.createElement("div",{className:"skill-name"},"ReactJS")),s.a.createElement("div",{className:"skill-single skill-node"},s.a.createElement("div",{className:"skill-name"},"NodeJS")),s.a.createElement("div",{className:"skill-single skill-express"},s.a.createElement("div",{className:"skill-name"},"ExpressJS")),s.a.createElement("div",{className:"skill-single skill-socket"},s.a.createElement("div",{className:"skill-name"},"Socket")),s.a.createElement("div",{className:"skill-single skill-ruby"},s.a.createElement("div",{className:"skill-name"},"Ruby")),s.a.createElement("div",{className:"skill-single skill-java"},s.a.createElement("div",{className:"skill-name"},"Java")),s.a.createElement("div",{className:"skill-single skill-android"},s.a.createElement("div",{className:"skill-name"},"Android",s.a.createElement("br",null),"Studio")),s.a.createElement("div",{className:"skill-single skill-csharp"},s.a.createElement("div",{className:"skill-name"},"C#")),s.a.createElement("div",{className:"skill-single skill-unity"},s.a.createElement("div",{className:"skill-name"},"Unity")),s.a.createElement("div",{className:"skill-single skill-vive"},s.a.createElement("div",{className:"skill-name"},"Vive")),s.a.createElement("div",{className:"skill-single skill-vuforia"},s.a.createElement("div",{className:"skill-name"},"Vuforia")))),s.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p1")?"selection":""),id:"p1",onClick:function(){return e.props.showOrHideParagraph("p1")}},s.a.createElement("div",{className:"paragraph-title title-p1 ".concat(this.props.showParaId.includes("p1")&&window.innerWidth>=1200?"title-hide":"")},this.props.isEnglish?s.a.createElement("h2",null,"Education"):s.a.createElement("h2",null,"\u6559\u80b2\u80cc\u666f")),s.a.createElement("div",{className:"image img-1"}),s.a.createElement("div",{className:"paragraph-single single-p1 ".concat(this.props.showParaId.includes("p1")&&window.innerWidth>=1200?"paragraph-show":"")},this.props.isEnglish?s.a.createElement("p",null,"BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014). ",s.a.createElement("br",null),"MS in Teaching and Curriculum from Syracuse University (2014-2016). ",s.a.createElement("br",null),"MA in Design and Development of Digital Games at Columbia Unviersity (2017-2019)."):s.a.createElement("p",null,"\u7855\u58eb 2\uff1a\u54e5\u4f26\u6bd4\u4e9a\u5927\u5b66 \u7535\u5b50\u6e38\u620f\u5f00\u53d1\u4e0e\u8bbe\u8ba1\u4e13\u4e1a (2017\u81f32019).",s.a.createElement("br",null),"\u7855\u58eb 1\uff1a\u96ea\u57ce\u5927\u5b66 \u6559\u80b2\u5b66\u4e13\u4e1a (2014\u81f32016).",s.a.createElement("br",null),"\u672c\u79d1\uff1a\u5317\u4eac\u8bed\u8a00\u5927\u5b66 \u6c49\u8bed\u8a00\u6587\u5b66\u4e13\u4e1a (2010\u81f32014)."))),s.a.createElement("div",{className:"scroll scroll-p1 ".concat(this.props.showParaId.includes("p1")&&window.innerWidth<1200?"scroll-show":"scroll-hide")},this.props.isEnglish?s.a.createElement("p",{className:this.props.showParaId.includes("p1")&&window.innerWidth<1200?"p-show":"p-hide"},"BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014). ",s.a.createElement("br",null),"MS in Teaching and Curriculum from Syracuse University (2014-2016). ",s.a.createElement("br",null),"MA in Design and Development of Digital Games at Columbia Unviersity (2017-2019)."):s.a.createElement("p",{className:this.props.showParaId.includes("p1")?"p-show":"p-hide"},"\u7855\u58eb 2\uff1a\u54e5\u4f26\u6bd4\u4e9a\u5927\u5b66 \u7535\u5b50\u6e38\u620f\u5f00\u53d1\u4e0e\u8bbe\u8ba1\u4e13\u4e1a (2017\u81f32019).",s.a.createElement("br",null),"\u7855\u58eb 1\uff1a\u96ea\u57ce\u5927\u5b66 \u6559\u80b2\u5b66\u4e13\u4e1a (2014\u81f32016).",s.a.createElement("br",null),"\u672c\u79d1\uff1a\u5317\u4eac\u8bed\u8a00\u5927\u5b66 \u6c49\u8bed\u8a00\u6587\u5b66\u4e13\u4e1a (2010\u81f32014).")),s.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p2")?"selection":""),id:"p2",onClick:function(){return e.props.showOrHideParagraph("p2")}},s.a.createElement("div",{className:"paragraph-title title-p2 ".concat(this.props.showParaId.includes("p2")&&window.innerWidth>=1200?"title-hide":"")},this.props.isEnglish?s.a.createElement("h2",null,"Web Development"):s.a.createElement("h2",null,"\u7f51\u7ad9\u5f00\u53d1\u7ecf\u5386")),s.a.createElement("div",{className:"image img-2"}),s.a.createElement("div",{className:"paragraph-single single-p2 ".concat(this.props.showParaId.includes("p2")&&window.innerWidth>=1200?"paragraph-show":"")},this.props.isEnglish?s.a.createElement("p",null,"I gained certificate of completion in Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I kept learning new skills after that and I am now working as a freelance developer."):s.a.createElement("p",null,"\u83b7\u5f97 General Assembly \u5168\u6808\u7f51\u7ad9\u5f00\u53d1\u57f9\u8bad\u73ed\u7ed3\u4e1a\u8bc1\u4e66\u3002",s.a.createElement("br",null),"\u4e0d\u65ad\u81ea\u5b66\u66f4\u65b0\u81ea\u5df1\u7684\u5f00\u53d1\u8005\u6280\u80fd\u5e93\u3002",s.a.createElement("br",null),"\u4e13\u4e1a\u5f00\u53d1\u5168\u6808\u7f51\u7ad9\uff0c\u64c5\u957f\u4f7f\u7528ReactJS\uff0cExpressJS\u548cPostgreSQL\uff0c\u719f\u7ec3\u638c\u63e1Git\u76f8\u5173\u5e94\u7528\u3002",s.a.createElement("br",null),"\u627f\u63a5\u5404\u7c7b\u7f51\u7ad9\u5f00\u53d1\u9879\u76ee\u3002"))),s.a.createElement("div",{className:"scroll scroll-p2 ".concat(this.props.showParaId.includes("p2")&&window.innerWidth<1200?"scroll-show":"scroll-hide")},this.props.isEnglish?s.a.createElement("p",{className:this.props.showParaId.includes("p2")&&window.innerWidth<1200?"p-show":"p-hide"},"I gained certificate of completion in Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I kept learning new skills after that and I am now working as a freelance developer."):s.a.createElement("p",{className:this.props.showParaId.includes("p2")&&window.innerWidth<1200?"p-show":"p-hide"},"\u83b7\u5f97 General Assembly \u5168\u6808\u7f51\u7ad9\u5f00\u53d1\u57f9\u8bad\u73ed\u7ed3\u4e1a\u8bc1\u4e66\u3002",s.a.createElement("br",null),"\u4e0d\u65ad\u81ea\u5b66\u66f4\u65b0\u81ea\u5df1\u7684\u5f00\u53d1\u8005\u6280\u80fd\u5e93\u3002",s.a.createElement("br",null),"\u4e13\u4e1a\u5f00\u53d1\u5168\u6808\u7f51\u7ad9\uff0c\u64c5\u957f\u4f7f\u7528ReactJS\uff0cExpressJS\u548cPostgreSQL\uff0c\u719f\u7ec3\u638c\u63e1Git\u76f8\u5173\u5e94\u7528\u3002",s.a.createElement("br",null),"\u627f\u63a5\u5404\u7c7b\u7f51\u7ad9\u5f00\u53d1\u9879\u76ee\u3002")),s.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p3")?"selection":""),id:"p3",onClick:function(){return e.props.showOrHideParagraph("p3")}},s.a.createElement("div",{className:"paragraph-title title-p3 ".concat(this.props.showParaId.includes("p3")&&window.innerWidth>=1200?"title-hide":"")},this.props.isEnglish?s.a.createElement("h2",null,"Unity Development"):s.a.createElement("h2",null,"Unity\u6e38\u620f\u5f00\u53d1\u7ecf\u5386")),s.a.createElement("div",{className:"image img-3"}),s.a.createElement("div",{className:"paragraph-single single-p3 ".concat(this.props.showParaId.includes("p3")&&window.innerWidth>=1200?"paragraph-show":"")},this.props.isEnglish?s.a.createElement("p",null,"I taught myself C# and Unity development during the masters program of Design and Development of Digital Games at Columbia University. I code the logics of games and have faith in AR/VR/MR development."):s.a.createElement("p",null,"\u54e5\u4f26\u6bd4\u4e9a\u5927\u5b66\u7535\u5b50\u6e38\u620f\u5f00\u53d1\u4e0e\u8bbe\u8ba1\u4e13\u4e1a\u7814\u7a76\u751f\u9879\u76ee\u7684\u5b66\u4e60\u671f\u95f4\u901a\u8fc7\u9879\u76ee\u5f00\u53d1\u81ea\u5b66C#\u8bed\u8a00\u4ee5\u53caUnity3D\u5f15\u64ce\u5f00\u53d1\u3002",s.a.createElement("br",null),"\u64c5\u957f\u4e8e\u7f16\u5199\u6e38\u620f\u903b\u8f91\u5e76\u4e14\u70ed\u8877\u4e8eAR/VR/MR\u7684\u6e38\u620f\u5f00\u53d1\u3002",s.a.createElement("br",null),"\u627f\u63a5\u5404\u7c7b\u6e38\u620f\u5f00\u53d1\u9879\u76ee\u3002"))),s.a.createElement("div",{className:"scroll scroll-p3 ".concat(this.props.showParaId.includes("p3")&&window.innerWidth<1200?"scroll-show":"scroll-hide")},this.props.isEnglish?s.a.createElement("p",{className:this.props.showParaId.includes("p3")&&window.innerWidth<1200?"p-show":"p-hide"},"I taught myself C# and Unity development during the masters program of Design and Development of Digital Games at Columbia University. I code the logics of games and have faith in AR/VR/MR development."):s.a.createElement("p",{className:this.props.showParaId.includes("p3")&&window.innerWidth<1200?"p-show":"p-hide"},"\u54e5\u4f26\u6bd4\u4e9a\u5927\u5b66\u7535\u5b50\u6e38\u620f\u5f00\u53d1\u4e0e\u8bbe\u8ba1\u4e13\u4e1a\u7814\u7a76\u751f\u9879\u76ee\u7684\u5b66\u4e60\u671f\u95f4\u901a\u8fc7\u9879\u76ee\u5f00\u53d1\u81ea\u5b66C#\u8bed\u8a00\u4ee5\u53caUnity3D\u5f15\u64ce\u5f00\u53d1\u3002",s.a.createElement("br",null),"\u64c5\u957f\u4e8e\u7f16\u5199\u6e38\u620f\u903b\u8f91\u5e76\u4e14\u70ed\u8877\u4e8eAR/VR/MR\u7684\u6e38\u620f\u5f00\u53d1\u3002",s.a.createElement("br",null),"\u627f\u63a5\u5404\u7c7b\u6e38\u620f\u5f00\u53d1\u9879\u76ee\u3002")),s.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p4")?"selection":""),id:"p4",onClick:function(){return e.props.showOrHideParagraph("p4")}},s.a.createElement("div",{className:"paragraph-title title-p4 ".concat(this.props.showParaId.includes("p4")&&window.innerWidth>=1200?"title-hide":"")},this.props.isEnglish?s.a.createElement("h2",null,"Teaching Experience"):s.a.createElement("h2",null,"\u6559\u5e08\u7ecf\u5386")),s.a.createElement("div",{className:"image img-4"}),s.a.createElement("div",{className:"paragraph-single single-p4 ".concat(this.props.showParaId.includes("p4")&&window.innerWidth>=1200?"paragraph-show":"")},this.props.isEnglish?s.a.createElement("p",null,"In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC."):s.a.createElement("p",null,"\u5317\u4eacRICH\u590f\u4ee4\u8425\u4e2d\u6587\u52a9\u6559\uff082013\uff09",s.a.createElement("br",null),"\u5317\u4eacINCLUDED\u6d3b\u529b\u793e\u533a\u6253\u5de5\u5b50\u5f1f\u5fd7\u613f\u8005\u6559\u5e08\uff082013\uff09",s.a.createElement("br",null),"\u65b0\u6cfd\u897f\u5dde\u6cfd\u897f\u57ceRiver School\u6559\u5e08\uff082016\uff09",s.a.createElement("br",null),"\u7ebd\u7ea6\u5e02Hudsonway Immersion School\u5c0f\u5b66\u5168\u79d1\u6559\u5e08\uff082016-2017\uff09"))),s.a.createElement("div",{className:"scroll scroll-p4 ".concat(this.props.showParaId.includes("p4")&&window.innerWidth<1200?"scroll-show":"scroll-hide")},this.props.isEnglish?s.a.createElement("p",{className:this.props.showParaId.includes("p4")&&window.innerWidth<1200?"p-show":"p-hide"},"In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC."):s.a.createElement("p",{className:this.props.showParaId.includes("p4")&&window.innerWidth<1200?"p-show":"p-hide"},"\u5317\u4eacRICH\u590f\u4ee4\u8425\u4e2d\u6587\u52a9\u6559\uff082013\uff09",s.a.createElement("br",null),"\u5317\u4eacINCLUDED\u6d3b\u529b\u793e\u533a\u6253\u5de5\u5b50\u5f1f\u5fd7\u613f\u8005\u6559\u5e08\uff082013\uff09",s.a.createElement("br",null),"\u65b0\u6cfd\u897f\u5dde\u6cfd\u897f\u57ceRiver School\u6559\u5e08\uff082016\uff09",s.a.createElement("br",null),"\u7ebd\u7ea6\u5e02Hudsonway Immersion School\u5c0f\u5b66\u5168\u79d1\u6559\u5e08\uff082016-2017\uff09"))))}}]),a}(l.Component),k=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"work"},s.a.createElement(b.Element,{className:"spacer work-spacer",name:"work-spacer"}),this.props.isEnglish?s.a.createElement("h2",null,s.a.createElement("i",{className:"fas fa-pencil-alt"}),"My Work"):s.a.createElement("h2",null,s.a.createElement("i",{className:"fas fa-pencil-alt"}),"\u4f5c\u54c1"),s.a.createElement("div",{className:"project-list"},this.props.workData?this.props.workData.map(function(a){return s.a.createElement("div",{className:"project",key:a.id},s.a.createElement("div",{className:"project-name project-name-".concat(a.id)},s.a.createElement("h3",null,a.title)),s.a.createElement("div",{className:"project-pic project-pic-".concat(a.id),onMouseEnter:function(){return e.props.showTech(a.id)},onMouseLeave:function(){return e.props.hideTech(a.id)}},s.a.createElement("div",{className:"tech-used tech-".concat(a.id," ").concat(e.props.showTechId&&e.props.showTechId===a.id?"show-tech":"")},s.a.createElement("p",null,s.a.createElement("strong",null,"Tech Highlights:")),s.a.createElement("p",null,a.tech.map(function(e){return s.a.createElement("span",{key:a.tech.indexOf(e)},e,s.a.createElement("br",null))})))),a.btnTwo?s.a.createElement("div",{className:"project-button-list"},s.a.createElement("div",{className:"project-button"},e.props.isEnglish?s.a.createElement("a",{href:a.btnOne.url,target:"_blank"},s.a.createElement("b",null,a.btnOne.text)):a.btnOne.alt_url?s.a.createElement("a",{href:a.btnOne.alt_url,target:"_blank"},s.a.createElement("b",null,a.btnOne.text)):s.a.createElement("a",{href:a.btnOne.url,target:"_blank"},s.a.createElement("b",null,a.btnOne.text))),s.a.createElement("div",{className:"project-button"},s.a.createElement("a",{href:a.btnTwo.url,target:"_blank"},s.a.createElement("b",null,a.btnTwo.text)))):s.a.createElement("div",{className:"project-button-list"},s.a.createElement("div",{className:"project-button",style:{width:"360px"}},e.props.isEnglish?s.a.createElement("a",{href:a.btnOne.url,target:"_blank"},s.a.createElement("b",null,a.btnOne.text)):a.btnOne.alt_url?s.a.createElement("a",{href:a.btnOne.alt_url,target:"_blank"},s.a.createElement("b",null,a.btnOne.text)):s.a.createElement("a",{href:a.btnOne.url,target:"_blank"},s.a.createElement("b",null,a.btnOne.text)))))}):""))}}]),a}(l.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"contact"},s.a.createElement(b.Element,{className:"spacer contact-spacer",name:"contact-spacer"}),s.a.createElement("h2",null,s.a.createElement("i",{className:"fa fa-phone fa-fw","aria-hidden":"true"}),this.props.isEnglish?"Contact Me":"\u7559\u8a00"),s.a.createElement("form",{className:"contact-form",method:"POST",action:"http://formspree.io/mazheng1022@hotmail.com"},s.a.createElement("input",{type:"email",name:"email",placeholder:this.props.isEnglish?"Your Email":"\u60a8\u7684\u90ae\u7bb1\u5730\u5740"}),s.a.createElement("textarea",{name:"message",placeholder:this.props.isEnglish?"Please leave me a message if there's an opportunity for projects/cooporation, thank you.":"\u5982\u679c\u6709\u9879\u76ee\u5408\u4f5c\u610f\u5411\u8bf7\u5728\u8fd9\u91cc\u7559\u8a00\uff0c\u8c22\u8c22\u3002"}),s.a.createElement("button",{type:"submit"},"Send"))))}}]),a}(l.Component),N=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggleShowResume=function(){e.setState({showResume:!e.state.showResume})},e.scrollToElement=function(e){b.scroller.scrollTo(e,{duration:500,smooth:!0})},e.showOrHideParagraph=function(a){var t=e.state.showParaId;e.state.showParaId.includes(a)?(t.splice(t.indexOf(a),1),e.setState({showParaId:t})):(t.push(a),e.setState({showParaId:t}))},e.showTech=function(a){e.setState({showTechId:a})},e.hideTech=function(a){e.setState({showTechId:null})},e.switchLanguage=function(){e.setState({isEnglish:!e.state.isEnglish})},e.state={isEnglish:!1,showResume:!1,selectedWork:null,showParaId:[],showTechId:null,workData:[{id:17,title:"Space Exploration Lab",tech:["Freelance Project","{My Part: [Mobile App, Data Connection]}","Firebase","HTML, CSS & JS","p5.js"],btnOne:{text:"Demo",url:"https://youtu.be/f56LLfo--J4",alt_url:"http://share.polyv.net/front/video/preview?vid=720d62c88e1fb09626729c26d3b9d658_7"},btnTwo:{text:"Journal Article",url:"https://www.timeout.com/new-york-kids/news/nycs-latest-pop-up-experience-is-out-of-this-world-061119"}},{id:16,title:"WeBubbleTwo",tech:["Masters Graduation Project","Unity","MacOS & iOS PLatforms"],btnOne:{text:"Demo",url:"https://youtu.be/oJdBs7qOQos",alt_url:"http://share.polyv.net/front/video/preview?vid=720d62c88e45c8f5615e0787c7f6b85f_7"},btnTwo:{text:"Itch.io",url:"https://markzhengma.itch.io/we-bubble-two"}},{id:15,title:"Witch's Grotto",tech:["Reality Virtually Hackathon","{My Part: Puzzle Logics}","Unity","HTC Plugin"],btnOne:{text:"DevPost",url:"https://devpost.com/software/virtual-escape-room-bj9lwv",alt_url:"http://share.polyv.net/front/video/preview?vid=720d62c88e18c8a5bfbd18c1d029e7e6_7"},btnTwo:{text:"GitHub",url:"https://github.com/RealityVirtually2019/vrEscapeRoom"}},{id:14,title:"Stay With Me",tech:["Team Project","{My Part: [Event System, Inventory, Navigation, Animation]}","Unity","Event System","Navigation"],btnOne:{text:"Demo",url:"https://youtu.be/au07OoysCdU"},btnTwo:{text:"Itch.io",url:"https://markzhengma.itch.io/staywithme"}},{id:13,title:"InstaBot",tech:["Ruby","Selenium","Web Automation"],btnOne:{text:"Demo",url:"https://youtu.be/EGdbMELkgjM",alt_url:"http://share.polyv.net/front/video/preview?vid=720d62c88ef6943ca022ae7875f04bbc_7"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/InstaBot"}},{id:12,title:"AR Tutorial",tech:["Presentation for Games Research Lab Workshop","Unity","C#","Vuforia"],btnOne:{text:"Session Notes",url:"https://docs.google.com/presentation/d/1-L2tShT2nQu6cgwnBk5DxPdNl4QUCpckiGUwFkqgJlM/edit?usp=sharing"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/ar-game-tutorial"}},{id:11,title:"Wechat Official Shell",tech:["Freelance Project","ReactJS","NodeJS","PostgreSQL","BMap API"],btnOne:{text:"Website",url:"https://wechat-official-shell.herokuapp.com"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/wechat-official-shell"}},{id:10,title:"Return To Olympia",tech:["Unity2D","C#"],btnOne:{text:"Intro Slides",url:"https://docs.google.com/presentation/d/1biFXhc95RMlaC_j7hZI-CvjXWMMdvuKi3gizSNYLVRo/edit?usp=sharing"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/return-to-olympia"}},{id:9,title:"LifoMMunity",tech:["Team Project","{My Part: [Firebase Auth, User Profile Storage]}","Java","Android Studio","Firebase"],btnOne:{text:"Demo",url:"https://youtu.be/AbmFxUTz1tc",alt_url:"http://share.polyv.net/front/video/preview?vid=720d62c88efee0d5aa04752495fedfd4_7"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/LifoMMunity"}},{id:7,title:"Geek Olympics",tech:["Team Project","Non-digital Card Game","Learn coding logics with card game"],btnOne:{text:"Demo",url:"https://youtu.be/vAiOSLtFoGw",alt_url:"http://share.polyv.net/front/video/preview?vid=720d62c88ed5946164f49d019d758b13_7"}},{id:6,title:"Zombie Run",tech:["Unity","C#"],btnOne:{text:"Itch.io",url:"https://markzhengma.itch.io/zombierun"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/ZombieRun"}},{id:5,title:"To Be With You",tech:["Unity","C#","WikiTude AR","Firebase"],btnOne:{text:"GitHub",url:"https://github.com/markzhengma/ar-pet"}},{id:4,title:"Grandmaster",tech:["Team Project","{My Part: [User Registration, Card Inventory, Battle Logics]}","ExpressJS","ReactJS","SocketIO","Firebase"],btnOne:{text:"Website",url:"https://grandmaster-io.herokuapp.com"},btnTwo:{text:"GitHub",url:"https://github.com/hewhowearspants/Project-03-Card-Battle"}},{id:2,title:"Language Studio",tech:["Ruby on Rails","PostgreSQL","Pearson API"],btnOne:{text:"Website",url:"https://language-studio.herokuapp.com/"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/DictionaryApp"}},{id:1,title:"Word Hero",tech:["ExpressJS","ReactJS","PostgreSQL"],btnOne:{text:"Website",url:"https://word-hero.herokuapp.com"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/Word-Game"}}]},e.showOrHideParagraph=e.showOrHideParagraph.bind(Object(p.a)(Object(p.a)(e))),e.showTech=e.showTech.bind(Object(p.a)(Object(p.a)(e))),e.hideTech=e.hideTech.bind(Object(p.a)(Object(p.a)(e))),e.scrollToElement=e.scrollToElement.bind(Object(p.a)(Object(p.a)(e))),e.switchLanguage=e.switchLanguage.bind(Object(p.a)(Object(p.a)(e))),e}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"background-img"}),s.a.createElement(g,{isEnglish:this.state.isEnglish,showResume:this.state.showResume,toggleShowResume:this.toggleShowResume,scrollToElement:this.scrollToElement,switchLanguage:this.switchLanguage}),s.a.createElement(w,{isEnglish:this.state.isEnglish,recentWork:this.state.workData[0],scrollToElement:this.scrollToElement}),s.a.createElement(v,{isEnglish:this.state.isEnglish,showParaId:this.state.showParaId,showOrHideParagraph:this.showOrHideParagraph}),s.a.createElement(k,{isEnglish:this.state.isEnglish,workData:this.state.workData,showTechId:this.state.showTechId,showTech:this.showTech,hideTech:this.hideTech}),s.a.createElement(f,{isEnglish:this.state.isEnglish}))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.9fbe39cf.chunk.js.map