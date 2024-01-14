"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3779],{6320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=r(5893),t=r(1151);const o={sidebar_position:6},i=void 0,d={id:"Systemes/Nginx",title:"Nginx",description:"- sudo apt install -y  nginx",source:"@site/docs/Systemes/Nginx.md",sourceDirName:"Systemes",slug:"/Systemes/Nginx",permalink:"/docs/Systemes/Nginx",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Github Action Runner",permalink:"/docs/Systemes/Github Action Runner"},next:{title:"Mysql & Mariadb",permalink:"/docs/Systemes/Mysql & Mariadb"}},c={},l=[{value:"Reverse Proxy Nginx ;",id:"reverse-proxy-nginx-",level:3},{value:"Certbot",id:"certbot",level:3}];function a(e){const n={code:"code",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sudo apt install -y  nginx"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reverse-proxy-nginx-",children:"Reverse Proxy Nginx ;"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"server {\r\n  listen 80;\r\n  server_name example.com;\r\n\r\n  location / {\r\n      proxy_pass http://127.0.0.1:8080;\r\n      proxy_set_header Host $host;\r\n      proxy_set_header X-Real-IP $remote_addr;\r\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\r\n      proxy_set_header X-Forwarded-Proto $scheme;\r\n  }\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sudo ln -s /etc/nginx/sites-available/reverse_proxy /etc/nginx/sites-enabled/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sudo unlink /etc/nginx/sites-enabled/reverse_proxy"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"certbot",children:"Certbot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"apt install python3-certbot-apache"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"certbot --apache -d sameddemet-server.eddi.cloud"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var s=r(7294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);