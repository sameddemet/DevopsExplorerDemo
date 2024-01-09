"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[761],{9325:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(5893),r=n(1151);const i={sidebar_position:9},l="Iptables -Netfilter",a={id:"Reseaux/Iptables - Netfilter",title:"Iptables -Netfilter",description:"Output",source:"@site/docs/Reseaux/Iptables - Netfilter.md",sourceDirName:"Reseaux",slug:"/Reseaux/Iptables - Netfilter",permalink:"/DevopsExplorerDemo/docs/Reseaux/Iptables - Netfilter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"TCP et UDP",permalink:"/DevopsExplorerDemo/docs/Reseaux/TCP et UDP"},next:{title:"DNS et R\xe9cursion",permalink:"/DevopsExplorerDemo/docs/Reseaux/DNS et R\xe9cursion"}},d={},c=[{value:"Commandes iptables et Leurs Descriptions",id:"commandes-iptables-et-leurs-descriptions",level:3},{value:"DNAT et SNAT : Redirection et Modification d&#39;Adresses IP",id:"dnat-et-snat--redirection-et-modification-dadresses-ip",level:3},{value:"iptables-persistent : Rendre les R\xe8gles iptables Persistantes",id:"iptables-persistent--rendre-les-r\xe8gles-iptables-persistantes",level:3}];function o(e){const s={br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"iptables--netfilter",children:"Iptables -Netfilter"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Output",src:n(2818).Z+"",width:"1153",height:"504"})}),"\n",(0,t.jsx)(s.p,{children:"Un firewall peut se simplifier en se param\xe9trant uniquement sur les flux d\u2019entr\xe9e et donc sur la table FILTER et INPUT. Cependant il est important d\u2019autoriser les flux vers les interface locales en particulier lo (loopback) :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"iptables -I INPUT -i lo -j ACCEPT\n"})}),"\n",(0,t.jsx)(s.p,{children:"En s\u2019appuyant sur la table de conntrack (suivi de connexion) il faut aussi penser \xe0 autoriser les flux de retour :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"iptables -I INPUT -m state --state ESTABLISHED -j ACCEPT\n"})}),"\n",(0,t.jsx)(s.p,{children:"Ainsi les donn\xe9es de retour associ\xe9 \xe0 une connexion sortante seront automatiquement accept\xe9."}),"\n",(0,t.jsx)(s.p,{children:"Voici les diff\xe9rents endroits (hooks/chaines) o\xf9 Iptables peut agir :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"PREROUTING : avant qui rentre avant routage"}),"\n",(0,t.jsx)(s.li,{children:"INPUT : paquet arrive localement, destin\xe9 au serveur en question"}),"\n",(0,t.jsx)(s.li,{children:"FORWARD : paquet qui passe, sans \xeatre trait\xe9 localement"}),"\n",(0,t.jsx)(s.li,{children:"OUTPUT : paquet \xe9mit localement"}),"\n",(0,t.jsx)(s.li,{children:"POSTROUTING : paquet qui sort sur une interface, il est d\xe9j\xe0 rout\xe9."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Il faut distinguer deux tables :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"la table FILTER, utilis\xe9 pour filtrer les paquets, qui agit en INPUT et OUTPUT qu\u2019on a utilis\xe9 pour s\xe9curis\xe9 notre serveur."}),"\n",(0,t.jsx)(s.li,{children:"la table NAT, utilis\xe9e pour modifier des ip source et/ou destination et des ports."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"La table NAT a deux usages principaux :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"le DNAT : modifier les destinateur des paquets : rediriger des ports"}),"\n",(0,t.jsx)(s.li,{children:"le SNAT : modifier les sources des paquets : partager une connexion"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"commandes-iptables-et-leurs-descriptions",children:"Commandes iptables et Leurs Descriptions"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -L -n -v"})," : Liste les r\xe8gles iptables."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -L --line-numbers"})," : Affiche les r\xe8gles avec les num\xe9ros de ligne."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT 1 -p tcp --dport 8080 -j DROP"})," : Ajoute une r\xe8gle en premi\xe8re position et d\xe9cale les autres."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT"})," : Ajoute une r\xe8gle au d\xe9but de la liste."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -A INPUT"})," : Ajoute une r\xe8gle \xe0 la fin de la liste."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -A INPUT -p tcp --dport 80 -j REJECT --reject-with icmp-port-unreachable"})," : Rejette avec un message celui qui essaie d'acc\xe9der, mais le laisse expirer avec drop."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -t nat -F"})," : Supprime les r\xe8gles de la table nat."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT -p tcp --dport 22 -j ACCEPT"})," : Autorise SSH."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT -i lo -j ACCEPT"})," : Doit \xeatre fait absolument, la machine virtuelle communique avec le monde."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT -i lxdbr0  -j ACCEPT"})," : Ajoute une r\xe8gle si des conteneurs sont pr\xe9sents sur le syst\xe8me."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT -m state --state ESTABLISHED -j ACCEPT"})," : Accepte les retours li\xe9s \xe0 nos paquets envoy\xe9s. La table Conntrack suit d\xe9j\xe0 les paquets. Doit \xeatre fait absolument, pour le DNS, etc."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -A INPUT -j DROP"})," : Ferme tous les ports qui ne sont pas dans la table."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -A INPUT -s 192.168.1.3 -j ACCEPT"})," : Accepte les paquets provenant de cette adresse IP."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -I INPUT -p tcp --dport 80 -m iprange --src-range 81.220.48.0-81.220.55.255 -j DROP"})," : Bloque tous les paquets provenant de la plage d'adresses sp\xe9cifi\xe9e."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"iptables -P INPUT DROP"})," : \xc9tablit une politique, regarde la table, supprime tout sauf ce qui est autoris\xe9."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Si vous avez \xe9tabli une politique (",(0,t.jsx)(s.code,{children:"iptables -P"}),"), celle-ci ne sera pas supprim\xe9e avec la commande ",(0,t.jsx)(s.code,{children:"iptables -F"})," !!! Les autres r\xe8gles seront supprim\xe9es et vous ne pourrez pas vous connecter en SSH. Vous devrez red\xe9marrer."]}),"\n",(0,t.jsx)(s.h3,{id:"dnat-et-snat--redirection-et-modification-dadresses-ip",children:"DNAT et SNAT : Redirection et Modification d'Adresses IP"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DNAT (Destination NAT) :"}),(0,t.jsx)(s.br,{}),"\n","Il permet \xe0 un p\xe9riph\xe9rique dans un r\xe9seau de modifier l'adresse IP de destination des paquets entrants. Cette technique est g\xe9n\xe9ralement utilis\xe9e par les pare-feu ou les passerelles r\xe9seau."]}),"\n",(0,t.jsx)(s.p,{children:"DNAT est souvent utilis\xe9 pour rediriger le trafic entrant vers un autre service en modifiant l'adresse IP de destination des paquets. En d'autres termes, il redirige l'adresse IP de destination des paquets entrants vers une autre adresse IP sp\xe9cifi\xe9e."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SNAT (Source NAT) :"}),(0,t.jsx)(s.br,{}),"\n","Il permet \xe0 un p\xe9riph\xe9rique dans un r\xe9seau de modifier l'adresse IP source des paquets sortants. Cette technique est g\xe9n\xe9ralement utilis\xe9e par les dispositifs dans un r\xe9seau interne lorsqu'ils communiquent avec le monde ext\xe9rieur."]}),"\n",(0,t.jsx)(s.p,{children:"SNAT est souvent utilis\xe9 pour permettre \xe0 un dispositif dans un r\xe9seau interne d'agir comme un repr\xe9sentant unique en modifiant son adresse IP source lorsqu'il communique avec le monde ext\xe9rieur."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Diff\xe9rences :"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DNAT :"})," Modifie l'adresse IP de destination des paquets entrants."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"SNAT :"})," Modifie l'adresse IP source des paquets sortants."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"Apr\xe8s cette explication th\xe9orique, voici des sc\xe9narios d'utilisation pratiques pour DNAT et SNAT."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Exemples ;"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Exemples de DNAT"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Redirection de Port :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination <NOUVELLE-IP>:<NOUVEAU-PORT>\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple redirige les requ\xeates HTTP entrantes vers la nouvelle adresse IP et le nouveau port sp\xe9cifi\xe9s."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 1337\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple redirige les requ\xeates HTTP entrantes sur le port 80 vers le port 1337."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Modification de l'Adresse IP Source :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"iptables -t nat -A PREROUTING -s <ANCIENNE-IP> -j DNAT --to-destination <NOUVELLE-IP>\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple redirige les requ\xeates HTTP entrantes vers la nouvelle adresse IP et le nouveau port sp\xe9cifi\xe9s."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Exemples de SNAT"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Modification de l'Adresse IP de Sortie :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"iptables -t nat -A POSTROUTING -o <INTERFACE-DE-SORTIE> -j SNAT --to-source <NOUVELLE-IP>\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple modifie l'adresse IP de sortie du trafic r\xe9seau sur l'interface sp\xe9cifi\xe9e."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Redirection de Port et Modification de l'Adresse IP Source :"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"iptables -t nat -A POSTROUTING -s <IP-RESEAU-INTERNE> -p tcp --dport 8080 -j SNAT --to-source <NOUVELLE-IP>:<NOUVEAU-PORT>\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple redirige les paquets provenant d'une adresse IP source sp\xe9cifique avec une destination de port 8080, tout en modifiant l'adresse IP source."}),"\n",(0,t.jsx)(s.h3,{id:"iptables-persistent--rendre-les-r\xe8gles-iptables-persistantes",children:"iptables-persistent : Rendre les R\xe8gles iptables Persistantes"}),"\n",(0,t.jsxs)(s.p,{children:["Les r\xe8gles iptables sont g\xe9n\xe9ralement appliqu\xe9es de mani\xe8re temporaire et sont perdues apr\xe8s le red\xe9marrage du syst\xe8me. Cependant, le paquet ",(0,t.jsx)(s.code,{children:"iptables-persistent"})," permet de rendre les r\xe8gles iptables install\xe9es persistantes, assurant ainsi qu'elles ne seront pas perdues apr\xe8s le red\xe9marrage.",(0,t.jsx)(s.br,{}),"\n","Pour installer le paquet ",(0,t.jsx)(s.code,{children:"iptables-persistent"}),", vous pouvez utiliser la commande suivante :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo apt install iptables-persistent\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Utilisation :"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Enregistrer les R\xe8gles iptables :"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo iptables-save > /etc/iptables/rules.v4\r\nsudo ip6tables-save > /etc/iptables/rules.v6\n"})}),"\n",(0,t.jsx)(s.p,{children:"Ces commandes enregistrent les r\xe8gles iptables existantes dans les fichiers /etc/iptables/rules.v4 (IPv4) et /etc/iptables/rules.v6 (IPv6)."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Chargement Automatique au D\xe9marrage :"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo systemctl enable netfilter-persistent\r\nsudo systemctl start netfilter-persistent\n"})}),"\n",(0,t.jsx)(s.p,{children:"Ces commandes activent le service netfilter-persistent pour le chargement automatique des r\xe8gles iptables au d\xe9marrage du syst\xe8me."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Charger les R\xe8gles iptables manuellement :"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo iptables-restore < /etc/iptables/rules.v4\r\nsudo ip6tables-restore < /etc/iptables/rules.v6\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Ces commandes chargent les r\xe8gles iptables pr\xe9c\xe9demment enregistr\xe9es.",(0,t.jsx)(s.br,{}),"\n","Le paquet iptables-persistent charge automatiquement les r\xe8gles iptables lors du d\xe9marrage du syst\xe8me. Aucune configuration suppl\xe9mentaire n'est n\xe9cessaire pour activer cette fonctionnalit\xe9."]}),"\n",(0,t.jsx)(s.p,{children:"Une alternative pour rendre les r\xe8gles iptables persistantes en utilisant systemd :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo netfilter-persistent save  #Enregistre manuellement les r\xe8gles actuelles.\r\nsudo netfilter-persistent reload #Recharge les r\xe8gles actuelles.\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2818:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/iptables-d7ce0ce2dbdea98b12307d99796fe46a.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>l});var t=n(7294);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);