"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[970],{8016:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var n=s(5893),r=s(1151);const t={sidebar_position:9},l="Linux Tricks",a={id:"Systemes/Linux Tricks",title:"Linux Tricks",description:"MULTIPASS Utilisation",source:"@site/docs/Systemes/Linux Tricks.md",sourceDirName:"Systemes",slug:"/Systemes/Linux Tricks",permalink:"/DevopsExplorerDemo/docs/Systemes/Linux Tricks",draft:!1,unlisted:!1,editUrl:"https://github.com/sameddemet/DevopsExplorerDemo/blob/main/docs/Systemes/Linux Tricks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Redis et Memcashed",permalink:"/DevopsExplorerDemo/docs/Systemes/Redis et Memcashed"},next:{title:"Liens Utiles",permalink:"/DevopsExplorerDemo/docs/Systemes/Liens Utiles"}},d={},o=[{value:"MULTIPASS Utilisation",id:"multipass-utilisation",level:3},{value:"SUDO without password",id:"sudo-without-password",level:3},{value:"Search and delete",id:"search-and-delete",level:3},{value:"Les touches directionnelles du clavier ne fonctionnent pas;",id:"les-touches-directionnelles-du-clavier-ne-fonctionnent-pas",level:3},{value:"Creation d&#39;un Certificat",id:"creation-dun-certificat",level:3},{value:"Ssh with key",id:"ssh-with-key",level:3},{value:"Create Alias",id:"create-alias",level:3},{value:"Tar et Gz",id:"tar-et-gz",level:3},{value:"Ssh no passwd",id:"ssh-no-passwd",level:3},{value:"Reconfigure le packet",id:"reconfigure-le-packet",level:3},{value:"Dev/Null;",id:"devnull",level:3}];function c(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"linux-tricks",children:"Linux Tricks"}),"\n",(0,n.jsx)(i.h3,{id:"multipass-utilisation",children:"MULTIPASS Utilisation"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://medium.com/@kurkoc/multipass-nedir-dc86cf0e8018",children:"https://medium.com/@kurkoc/multipass-nedir-dc86cf0e8018"})}),"\n",(0,n.jsx)(i.h3,{id:"sudo-without-password",children:"SUDO without password"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["sudo visudo\t\t\t| ajouter le line dans le fichier.",(0,n.jsx)(i.br,{}),"\n","USERNAME ALL=(ALL) NOPASSWD: ALL"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"search-and-delete",children:"Search and delete"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"apt install ncdu | O\xf9 se trouvent les espaces libres sur le disque ?\r\nsudo ncdu -x /\t| Utilisez les touches fl\xe9ch\xe9es pour naviguer et appuyez sur 'd' pour supprimer."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"les-touches-directionnelles-du-clavier-ne-fonctionnent-pas",children:"Les touches directionnelles du clavier ne fonctionnent pas;"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"sudo chsh -s /bin/bash samet //Ensuite, reconnectez-vous."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"creation-dun-certificat",children:"Creation d'un Certificat"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"ssh-keygen -t rsa -b 4096"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"ssh-with-key",children:"Ssh with key"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["ssh -i id_oclock ",(0,n.jsx)(i.a,{href:"mailto:student@sameddemet-server.eddi.cloud",children:"student@sameddemet-server.eddi.cloud"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"create-alias",children:"Create Alias"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["alias gg= 'git log --oneline'",(0,n.jsx)(i.br,{}),"\n","vim .bashrc  | Ajoutez la ligne suivante dans le fichier : alias gg='git log --oneline'"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tar-et-gz",children:"Tar et Gz"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tar -czf"}),(0,n.jsx)(i.br,{}),"\n","-c se\xe7ene\u011fi, dosyalar\u0131 ar\u015fivlerken yeni bir ar\u015fiv olu\u015fturulaca\u011f\u0131n\u0131 belirtir. -z se\xe7ene\u011fi, s\u0131k\u0131\u015ft\u0131rma i\u015flemi i\xe7in gzip s\u0131k\u0131\u015ft\u0131rma y\xf6ntemini kullanaca\u011f\u0131n\u0131 belirtir. -f se\xe7ene\u011fi, olu\u015fturulacak ar\u015fiv dosyas\u0131n\u0131n ad\u0131n\u0131 belirlemek i\xe7in kullan\u0131l\u0131r. -r se\xe7ene\u011fiyle (append) dosyay\u0131 ekleyebilir ama c yi cikarmak lazim. -rzf.\r\ntar -czf dosyalarim.tar.gz belge.txt resimler/"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tar -xzf"}),(0,n.jsx)(i.br,{}),"\n",'-x se\xe7ene\u011fi, dosyalar\u0131n ar\u015fivden \xe7\u0131kar\u0131laca\u011f\u0131n\u0131 belirtir. -z se\xe7ene\u011fi, gzip s\u0131k\u0131\u015ft\u0131rma y\xf6nteminin kullan\u0131ld\u0131\u011f\u0131n\u0131 belirtir.\r\ntar -xzf dosyalarim.tar.gz\r\nBu komut, "dosyalarim.tar.gz" adl\u0131 ar\u015fiv dosyas\u0131n\u0131 a\xe7ar ve i\xe7indeki dosyalar\u0131 ve dizinleri orijinal konumlar\u0131na \xe7\u0131kar\u0131r.']}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tar -xzf ar\u015fiv_dosyas\u0131.tar.gz -C hedef_dizin"}),(0,n.jsx)(i.br,{}),"\n","hedef dizine cikartir"]}),"\n",(0,n.jsx)(i.h3,{id:"ssh-no-passwd",children:"Ssh no passwd"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["ssh-add >source $(ssh agent)",(0,n.jsx)(i.br,{}),"\n","Cikan sonuclari kopyala ve variable olarak env a ekle. Artik ssh sifresi sormaz. Pull vb islemlerde git uzerinden !!!"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"reconfigure-le-packet",children:"Reconfigure le packet"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"dpkg-reconfigure phpmyadmin\t| Pour reconfigurer un paquet apr\xe8s une mauvaise installation."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"devnull",children:"Dev/Null;"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:".... > /dev/null 2>&1 &"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>l});var n=s(7294);const r={},t=n.createContext(r);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);