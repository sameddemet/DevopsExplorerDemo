"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[879],{2727:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=i(5893),r=i(1151);const t={sidebar_position:6},o="/proc/sys/net",c={id:"Reseaux/Proc-Sys-Net",title:"/proc/sys/net",description:"/proc/sys/net est un dossier syst\xe8me sp\xe9cial sur les syst\xe8mes d'exploitation Linux qui contient des fichiers li\xe9s \xe0 la configuration et aux param\xe8tres r\xe9seau. Ce dossier offre un moyen d'acc\xe9der et de configurer divers param\xe8tres r\xe9seau en lisant ou en modifiant les valeurs de ces fichiers.",source:"@site/docs/Reseaux/Proc-Sys-Net.md",sourceDirName:"Reseaux",slug:"/Reseaux/Proc-Sys-Net",permalink:"/DevopsExplorerDemo/docs/Reseaux/Proc-Sys-Net",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ip Route",permalink:"/DevopsExplorerDemo/docs/Reseaux/Ip Route"},next:{title:"Mod\xe9le OSI",permalink:"/DevopsExplorerDemo/docs/Reseaux/Mod\xe9le OSI"}},l={},a=[{value:"Utilisation de Base",id:"utilisation-de-base",level:3},{value:"Exemples de Commandes",id:"exemples-de-commandes",level:3},{value:"Alert",id:"alert",level:3}];function d(e){const s={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"procsysnet",children:"/proc/sys/net"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"/proc/sys/net"})," est un dossier syst\xe8me sp\xe9cial sur les syst\xe8mes d'exploitation Linux qui contient des fichiers li\xe9s \xe0 la configuration et aux param\xe8tres r\xe9seau. Ce dossier offre un moyen d'acc\xe9der et de configurer divers param\xe8tres r\xe9seau en lisant ou en modifiant les valeurs de ces fichiers."]}),"\n",(0,n.jsx)(s.h3,{id:"utilisation-de-base",children:"Utilisation de Base"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Les fichiers sous le dossier ",(0,n.jsx)(s.code,{children:"/proc/sys/net"})," repr\xe9sentent divers param\xe8tres r\xe9seau, et ces fichiers peuvent \xeatre lus ou modifi\xe9s pour ajuster les param\xe8tres."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Voici quelques exemples de fichiers couramment utilis\xe9s :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"/proc/sys/net/ipv4/tcp_keepalive_time"})," : D\xe9termine la dur\xe9e du keepalive pour les connexions TCP."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"/proc/sys/net/ipv6/conf/all/forwarding"})," : Active ou d\xe9sactive le routage IPv6."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"/proc/sys/net/core/somaxconn"})," : D\xe9finit la taille maximale de la file d'attente pour les connexions TCP."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"/proc/sys/net/ipv4/icmp_echo_ignore_broadcasts"})," : Active ou d\xe9sactive la reponse de commande ",(0,n.jsx)(s.code,{children:"ping"}),". Si la valeur de ce fichier est 0, cela signifie que l'h\xf4te r\xe9pondra aux demandes de ping entrantes. Si la valeur est r\xe9gl\xe9e sur 1, aucune r\xe9ponse ne sera donn\xe9e."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exemples-de-commandes",children:"Exemples de Commandes"}),"\n",(0,n.jsxs)(s.p,{children:["Voici des exemples de commandes pour acc\xe9der et modifier les valeurs de ces fichiers sous ",(0,n.jsx)(s.code,{children:"/proc/sys/net"})," :"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ cat /proc/sys/net/ipv4/tcp_keepalive_time\r\n# Afficher la dur\xe9e du keepalive TCP\r\n\r\n$ echo 120 > /proc/sys/net/ipv4/tcp_keepalive_time\r\n# D\xe9finir la dur\xe9e du keepalive TCP \xe0 120 secondes\n"})}),"\n",(0,n.jsx)(s.p,{children:"Certains Fichiers Importants et Leurs Descriptions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"/proc/sys/net/ipv4/ : Param\xe8tres et configurations li\xe9s \xe0 IPv4."}),"\n",(0,n.jsx)(s.li,{children:"/proc/sys/net/ipv6/ : Param\xe8tres et configurations li\xe9s \xe0 IPv6."}),"\n",(0,n.jsx)(s.li,{children:"/proc/sys/net/core/ : Param\xe8tres du noyau r\xe9seau."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"alert",children:"Alert"}),"\n",(0,n.jsxs)(s.p,{children:["Vous pouvez effectuer ces modifications en \xe9ditant le fichier ",(0,n.jsx)(s.code,{children:"/etc/sysctl.conf"}),". Ce fichier est utilis\xe9 pour configurer les param\xe8tres syst\xe8me. Apr\xe8s avoir effectu\xe9 les modifications, vous pouvez appliquer les changements en utilisant la commande ",(0,n.jsx)(s.code,{children:"sysctl -p"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>o});var n=i(7294);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);