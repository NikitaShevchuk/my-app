"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[657],{9270:function(e,s,a){var n=a(5671),t=a(3144),i=a(9340),r=a(2882),c=a(2791),o=a(6871),l=a(8687),d=a(184),u=function(e){return{isAuthorized:e.auth.isAuthorized}};s.Z=function(e){var s=function(s){(0,i.Z)(c,s);var a=(0,r.Z)(c);function c(){return(0,n.Z)(this,c),a.apply(this,arguments)}return(0,t.Z)(c,[{key:"render",value:function(){return this.props.isAuthorized?(0,d.jsx)(e,{}):(0,d.jsx)(o.Fg,{replace:!0,to:"/login"})}}]),c}(c.Component);return(0,l.$j)(u)(s)}},4657:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});var n=a(2791),t=a(4159),i=a(885),r=a(8683),c=a(5078),o=a(6871),l=a(8570);var d=a.p+"static/media/send.2ec83b7d2370fbd448eddc161ecfe473.svg",u=a(1598),m=a(4712),g=a(1363),h=a(3174),f=a(184),x=function(e){return(0,f.jsx)(c.l0,{onSubmit:e.sendMessage,render:function(e){var s=e.handleSubmit,a=e.submitting,n=e.pristine,t=e.form;return(0,f.jsxs)("form",{onSubmit:s,children:[(0,f.jsxs)("div",{className:"messages-additional-icons",children:[(0,f.jsx)("i",{className:"fa fa-picture-o"}),(0,f.jsx)("i",{className:"fa fa-smile-o"})]}),(0,f.jsx)(c.gN,{onKeyDown:function(e){!function(e,s){"Enter"===e.key&&(e.preventDefault(),s.submit(),s.reset())}(e,t)},name:"body",component:"textarea",placeholder:"Text a message"}),(0,f.jsx)("button",{disabled:a||n,children:(0,f.jsx)("img",{src:d,alt:""})})]})}})},j=function(e){var s=(0,n.useState)(!1),a=(0,i.Z)(s,2),t=a[0],r=a[1];return(0,f.jsxs)("ul",{className:"peoples",children:[(0,f.jsx)("div",{className:"sidebarHeader",children:"Messages"}),t?(0,f.jsx)(m.Z,{getDialog:e.getDialog}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"search-users pointer",onClick:function(){return r(!0)},children:[(0,f.jsx)(g.G,{icon:h.wn1}),(0,f.jsx)("input",{placeholder:"Search users",className:"search-users__input"})]}),e.dialogs[0]?e.dialogs:(0,f.jsx)(l.Z,{})]})]})},p=function(e){var s=(0,o.UO)().userId,a=(0,n.useRef)(null);return(0,n.useEffect)((function(){s&&e.setAllMessages(s),e.setDialogs(s)}),[s]),(0,n.useEffect)((function(){a.current&&e.messages[0]&&(a.current.scrollTop=a.current.scrollHeight)}),[e.messages]),(0,f.jsx)("div",{className:"central-meta messages",children:(0,f.jsx)("div",{className:"messages",children:(0,f.jsxs)("div",{className:"message-box",children:[(0,f.jsx)(j,(0,r.Z)({},e)),(0,f.jsx)("div",{className:"peoples-mesg-box",children:s?(0,f.jsxs)("div",{className:"chatArea opacity-animation",children:[(0,f.jsxs)("div",{className:"conversation-head",children:[(0,f.jsx)("figure",{children:(0,f.jsx)("img",{src:e.conversationHead.photo?e.conversationHead.photo:u,alt:""})}),(0,f.jsx)("span",{children:e.conversationHead.userName})]}),(0,f.jsx)("ul",{className:"chatting-area ps-container ps-theme-default ps-active-y",ref:a,children:e.messages[0]?e.messages:(0,f.jsx)(l.Z,{})}),(0,f.jsx)("div",{className:"message-text-container",children:(0,f.jsx)(x,{sendMessage:function(a){e.sendNewMessage(s,a)}})})]}):(0,f.jsx)("div",{className:"noMessages",children:"Choose friend to start chat"})})]})})})},v=a(8687),N=a(9270),b=a(7781),Z=a(5314),y=(0,b.qC)(N.Z,(0,v.$j)((function(e){return{messages:(0,Z.xq)(e),dialogs:(0,Z.c4)(e),conversationHead:e.messagesPage.conversationHead}}),{getDialog:t.Yq,sendNewMessage:t.J,setAllMessages:t.nT,setDialogs:t.ow}))(p)}}]);
//# sourceMappingURL=657.84c7321f.chunk.js.map