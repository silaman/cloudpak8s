(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),r=n("q1tI"),o=n.n(r),l=n("NmYn"),i=n.n(l),c=n("OKom"),b=n("k4MR"),s=n("TSYQ"),p=n.n(s),d=n("QH2O"),u=n("qKvR"),m=function(e){var t,n=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},n)))))},h=n("pEPl"),O=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=h.data.site.siteMetadata.repository,r=n||a,o=r.baseUrl,l=r.subDirectory,i=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},j=n("FCXl"),f=(n("Oyvg"),n("Wbzz")),N=n("I8xM");var w=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),o=r===a,l=new RegExp(a+"(?!-)"),c=n.replace(l,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(f.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},a}(o.a.Component),y=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,r=e.location,o=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,h=s.tabs,O=s.title,f=s.theme,N=s.description,C=s.keywords,k=a.data.site.pathPrefix,P=k?r.pathname.replace(k,""):r.pathname,v=h?P.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:h,homepage:!1,theme:f,pageTitle:O,pageDescription:N,pageKeywords:C,titleType:d},Object(u.b)(m,{title:o?Object(u.b)(o,null):O,label:"label",tabs:h}),h&&Object(u.b)(w,{slug:P,tabs:h,currentTab:v}),Object(u.b)(y.a,{padded:!0},n,Object(u.b)(g,{relativePagePath:p})),Object(u.b)(j.a,{pageContext:t,location:r,slug:P,tabs:h,currentTab:v}),Object(u.b)(c.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},uaMr:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},i={_frontmatter:l},c=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("strong",{parentName:"h2"},"Installing Cloud Pak for Applications Then Cloud Pak for Integration")),Object(a.b)("p",null,"This section describes the scenario of installing Cloud Pak\nfor Applications first, followed by Cloud Pak for Integration. "),Object(a.b)("p",null,"From the experience of the residency group, if you are wanting to\ninstall these two Cloud Paks in this order in the same cluster, it is important\nto follow the instructions below to resolve conflicts and make things\ngo smoothly"),Object(a.b)("p",null,"The first step is to consider the prerequisites for the Cloud Paks you\nwant to install and to make sure your cluster has the required resources."),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Cloud Pak for Applications Prerequisites")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(a.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html"}),"prerequisites page"),"\n(Cloud Pak for Applications 4.0.x)\nfor details on what is required before starting an installation."),Object(a.b)("li",{parentName:"ul"},"Also consider the prerequisites for installing the Cloud Pak for Applications\ndeveloper tools. Prerequisites and installation instructions are provided in\nthis Playbook for ",Object(a.b)("a",o({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_mac/"}),"Mac")," and for\n",Object(a.b)("a",o({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_win/"}),"Windows")," workstations.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Cloud Pak for Integration Prerequisites")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(a.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html"}),"prerequisites page"),"\n(Cloud Pak for Integration 2019.4)\nfor details on what is required before starting an installation.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Cloud Pak for Integration + Applications")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Combined Minimum Requirements (January 2020):")),Object(a.b)("p",null,"For your convenenience, the combined resource requirements that were used\nduring the residency in January 2020 are shown below. You are advised to\ncheck the product documentation for the most current numbers for the\nreleases you want to install."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Node Type"),Object(a.b)("th",o({parentName:"tr"},{align:"center"}),"Quantity"),Object(a.b)("th",o({parentName:"tr"},{align:"center"}),"CPU"),Object(a.b)("th",o({parentName:"tr"},{align:"center"}),"RAM"),Object(a.b)("th",o({parentName:"tr"},{align:"center"}),"DISK 1"),Object(a.b)("th",o({parentName:"tr"},{align:"center"}),"DISK 2"),Object(a.b)("th",o({parentName:"tr"},{align:"center"}),"DISK 3"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Bootstrap"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"100"),Object(a.b)("td",o({parentName:"tr"},{align:"center"})),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Installer"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"120"),Object(a.b)("td",o({parentName:"tr"},{align:"center"})),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"LB"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"120"),Object(a.b)("td",o({parentName:"tr"},{align:"center"})),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Master"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"3"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"32"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"300"),Object(a.b)("td",o({parentName:"tr"},{align:"center"})),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Compute"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"8"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"64"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"200"),Object(a.b)("td",o({parentName:"tr"},{align:"center"})),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Storage"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"3"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"4"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"16"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"200"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"500"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"NFS"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"2"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"8"),Object(a.b)("td",o({parentName:"tr"},{align:"center"}),"500"),Object(a.b)("td",o({parentName:"tr"},{align:"center"})),Object(a.b)("td",o({parentName:"tr"},{align:"center"}))))),Object(a.b)("h2",null,Object(a.b)("strong",{parentName:"h2"},"Installation Instructions")),Object(a.b)("h3",null,"1. ",Object(a.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Applications")),Object(a.b)("p",null,"The Cloud Pak for Applications can be installed following the instructions\nin the\n",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.0.x/install-icpa.html"}),"Knowledge Center"),"\nor in the ",Object(a.b)("a",o({parentName:"p"},{href:"/apps/cp4a_overview"}),"Cloud Pak for Applications"),"\nsection of this Playbook."),Object(a.b)("h3",null,"2. ",Object(a.b)("strong",{parentName:"h3"},"Before Installing Cloud Pak for Integration:")),Object(a.b)("p",null,"The instructions to install Cloud Pak for Integration are further\ndown the page. Before you do that installation, read the following\nparagraphs to understand that your first installation attempt will\nfail. The following paragraphs describe the problem and the solution\nfor you to complete your installation of Cloud Pak for Integration\nsuccessfully."),Object(a.b)("h4",null,Object(a.b)("strong",{parentName:"h4"},"Conflict with Installed Helm Component Issue:")," "),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Helm")," component is installed and used by Cloud Pak for Application.\nThe installation of Cloud Pak for Integration also includes the ",Object(a.b)("inlineCode",{parentName:"p"},"Helm"),"\ncomponent. At the time of writing, there was no built-in function in the\ninstaller to deal with an already existing ",Object(a.b)("inlineCode",{parentName:"p"},"Helm"),"."),Object(a.b)("p",null,"When the Cloud Pak for Integration is trying to install ",Object(a.b)("inlineCode",{parentName:"p"},"Helm")," on the same\ncluster, and finds an existing Custom Resource Definition (CRD) with",Object(a.b)("br",{parentName:"p"}),"\n","a certificate for ",Object(a.b)("inlineCode",{parentName:"p"},"Helm"),", the installation fails. Cloud Pak for Applications\nand Cloud Pak for Integration share the same certificate, and the\nCloud Pak for Integration installer cannot tolerate the condition where\nthe certificate already exists."),Object(a.b)("p",null,"Trying to complete an installation after a failed partial install will\nresult in failure of the IBM Cloud Pak (ICP) common services creation in\nin the ",Object(a.b)("inlineCode",{parentName:"p"},"kube-system")," namespace, due to missing secrets."),Object(a.b)("h4",null,Object(a.b)("strong",{parentName:"h4"},"Solution:")),Object(a.b)("p",null,"The solution is to do a full uninstall of Cloud Pak for Integration after\nafter your initial installation fails, and then to reinstall it.\nThe uninstaller removes the common component and allows the reinstall to\nrun without encountering the conflict."),Object(a.b)("p",null,"It is possible that the uninstall might hang. You can check for and\nclear that condition by checking for pods in a terminating state and\ndoing a force delete on them. Use the following command to see if you\nhave pods stuck in a terminating state."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc get pods --all-namespaces | grep Terminating\n")),Object(a.b)("p",null,"If you do find pods in that condition, use the following command on each\nsuch pod to do a force deletion."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc delete pod <pod name> -n <project-name> --force --grace-period=0 \n")),Object(a.b)("h3",null,"3. ",Object(a.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Integration")),Object(a.b)("p",null,"The Cloud Pak for Integration can be installed following the instructions\nin the\n",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/install.html"}),"Knowledge Center"),"\nor in the ",Object(a.b)("a",o({parentName:"p"},{href:"/integration/introduction"}),"Cloud Pak for Integration"),"\nsection of this Playbook."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-multipak-cp-4-a-cp-4-i-index-mdx-8f492a95e31fa0bab571.js.map