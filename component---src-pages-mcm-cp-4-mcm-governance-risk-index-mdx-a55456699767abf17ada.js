(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),c=a("q1tI"),i=a.n(c),l=a("NmYn"),o=a.n(l),r=a("OKom"),m=a("k4MR"),b=a("TSYQ"),p=a.n(b),s=a("QH2O"),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.tabs,c=void 0===n?[]:n;return Object(d.b)("div",{className:p()(s.pageHeader,(t={},t[s.withTabs]=c.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:s.text},a)))))},j=a("pEPl"),O=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,n=j.data.site.siteMetadata.repository,c=a||n,i=c.baseUrl,l=c.subDirectory,o=i+"/edit/"+c.branch+l+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(e){var t,c=o()(e,{lower:!0}),i=c===n,l=new RegExp(n+"(?!-)"),r=a.replace(l,c);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(d.b)(y.Link,{className:N.link,to:""+r},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},c))))))},n}(i.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,c=e.location,i=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,s=t.titleType,j=b.tabs,O=b.title,y=b.theme,N=b.description,C=b.keywords,w=n.data.site.pathPrefix,k=w?c.pathname.replace(w,""):c.pathname,P=j?k.split("/").filter(Boolean).slice(-1)[0]||o()(j[0],{lower:!0}):"";return Object(d.b)(m.a,{tabs:j,homepage:!1,theme:y,pageTitle:O,pageDescription:N,pageKeywords:C,titleType:s},Object(d.b)(g,{title:i?Object(d.b)(i,null):O,label:"label",tabs:j}),j&&Object(d.b)(f,{slug:k,tabs:j,currentTab:P}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(u,{relativePagePath:p})),Object(d.b)(h.a,{pageContext:t,location:c,slug:k,tabs:j,currentTab:P}),Object(d.b)(r.a,null))}},IEc2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),c=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},o={_frontmatter:l},r=c.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.b)(r,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Here how we can define and review policy definitions and see the compliance state of managed clusters."),Object(n.b)("h3",null,"Create Simple Policy"),Object(n.b)("p",null,"Let’s create a new policy"),Object(n.b)("p",null,"Open MCM Web Console ",Object(n.b)("a",i({parentName:"p"},{href:"https://icp-console.apps.res-cp4mcm.ocp.csplab.local/multicloud/policies/create"}),"https://icp-console.apps.res-cp4mcm.ocp.csplab.local/multicloud/policies/create")),Object(n.b)("p",null,"Navigate to Menu -> Govern risk.  Policies This view displays the policies that have been created and the dashboard of policy compliance for each cluster."),Object(n.b)("p",null,"   ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/PolicyCreate.png",alt:"Image"}))),Object(n.b)("p",null,"Click on Create policy button."),Object(n.b)("p",null,"   ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/cp4mcm_2.png",alt:"Image"}))),Object(n.b)("p",null,"Fill the values as specified in the table below:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"center"}),"Field Name"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"policy-namespace")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Namespace"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: Namespace-must have namespace ‘prod’ Note: You will modify the name prod to k8demo. Selecting this will provide a template to have custom namespace policy definition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Specifications"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Namespace”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Cluster Binding"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose name: “local-cluster”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Standards"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “FISMA”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Categories"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “SystemAndInformationIntegrity”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Controls"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Advisor”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Enforce if Supported"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"center"}),"Disable Policy"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")))),Object(n.b)("p",null,"In the ",Object(n.b)("strong",{parentName:"p"},"yaml file section"),", on the right, change ",Object(n.b)("strong",{parentName:"p"},"prod")," to ",Object(n.b)("strong",{parentName:"p"},"k8demo"),"."),Object(n.b)("p",null,"Changing the namespace will change the Policy Specifications to Custom Specifications as below. Notice that the policy is set to “",Object(n.b)("strong",{parentName:"p"},"inform"),"” rather than “",Object(n.b)("strong",{parentName:"p"},"enforce"),"”."),Object(n.b)("p",null,"   ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image001.png",alt:"Image"}))),Object(n.b)("p",null,"   ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image002.png",alt:"Image"}))),Object(n.b)("p",null,"Use the button Create to create your new policy."),Object(n.b)("p",null,"If you are no redirected automatically navigate ",Object(n.b)("strong",{parentName:"p"},"to Menu")," -> ",Object(n.b)("strong",{parentName:"p"},"Govern risk")," to return to the Dashboard."),Object(n.b)("p",null,"In few seconds, the policy controller will check if the namespace ",Object(n.b)("strong",{parentName:"p"},"k8demo")," is present and provides information regarding the current compliance of the policies."),Object(n.b)("p",null,"Remember, you didn’t ",Object(n.b)("strong",{parentName:"p"},"enforce")," this policy. Instead we specified ",Object(n.b)("strong",{parentName:"p"},"inform.")," As such, the Governance and risk view displays a policy violation in our cluster, as illustrated below."),Object(n.b)("p",null,"   ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image004.png",alt:"Image"}))),Object(n.b)("p",null,"Use the Cluster Violation link ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image005.png",alt:"Image"}))," to find which cluster is violating the policy."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"local-cluster")," cluster is in violation of the policy which requires a namespace called “k8demo” to exist."),Object(n.b)("p",null,"The local-cluster cluster is our cluster, and the same cluster that verified “k8sdemo” namespace does not exist. Hence it shows that there is no namespace k8demo in the cluster."),Object(n.b)("img",{src:"/assets/img/cp4mcm/clip_image006.png",alt:"Image"}),Object(n.b)("p",null,"Verify the k8demo namespace still does not exist."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc get projects\n")),Object(n.b)("p",null,"There should NOT be a namespace named k8demo listed, which indicates the policy did not ENFORCE it to be created."),Object(n.b)("p",null,"Change the “policy-namespce” policy to be enforced"),Object(n.b)("p",null,"When a policy is in “",Object(n.b)("strong",{parentName:"p"},"enforce"),"” mode, the namespace will automatically be created, if it does not exist, thereby enforcing the cluster into compliance."),Object(n.b)("p",null,"a.  In the ",Object(n.b)("strong",{parentName:"p"},"policies")," view, select ",Object(n.b)("strong",{parentName:"p"},"POLICY VIOLATIONS")),Object(n.b)("img",{src:"/assets/img/cp4mcm/clip_image008.png",alt:"Image"}),Object(n.b)("p",null,"b.  Then, select the policy named “policy-namespace” and go to ",Object(n.b)("strong",{parentName:"p"},"YAML")," view"),Object(n.b)("p",null,"c.   Click on the ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image009.png",alt:"Image"}))," button to go into edit mode."),Object(n.b)("p",null,"d.  Change the value of “",Object(n.b)("strong",{parentName:"p"},"remediationAction: inform"),"” to “",Object(n.b)("strong",{parentName:"p"},"remediationAction: enforce"),"”"),Object(n.b)("p",null,"e.  Click the ",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image010.png",alt:"Image"}))," to submit the change"),Object(n.b)("img",{src:"/assets/img/cp4mcm/clip_image011.png",alt:"Image"}),Object(n.b)("p",null,"Select the ",Object(n.b)("strong",{parentName:"p"},"policy-namespace")," link. A few seconds later, the policy violation will be gone away."),Object(n.b)("img",{src:"/assets/img/cp4mcm/clip_image012.png",alt:"Image"}),Object(n.b)("p",null,"You also can validate the same from the ",Object(n.b)("strong",{parentName:"p"},"Violations")," view."),Object(n.b)("p",null,"Run the command below command and ensure that the k8demo namespace has been created in the cluster."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc get project  | grep k8demo\n")),Object(n.b)("p",null,"!",Object(n.b)("img",i({parentName:"p"},{src:"/assets/img/cp4mcm/clip_image014.png",alt:"Image"}))),Object(n.b)("p",null,"Try deleting the namespace and check how is being created automatically again."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc delete project  k8demo\n")),Object(n.b)("h3",null,"Namespace Policy"),Object(n.b)("p",null,"This policy will check the Cluster Selector, and verify if a namespace named “policy-namespace-k8demo” exists, if the Enforce if supported field is true, the namespace will be automatically created on the selected cluster, if false then the violation/compliance of the policy will be reported on the dashboard."),Object(n.b)("p",null,"The policy controller will check if the namespace k8demo is present and provides information regarding the current compliance of the policies."),Object(n.b)("p",null,"Create policy by setting the following values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Field Name"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"policy-namespace")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Namespace"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: Namespace-must have namespace ‘prod’ Note: You will modify the name prod to k8demo. Selecting this will provide a template to have custom namespace policy definition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Specifications"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Namespace”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Cluster Binding"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose name: “local-cluster”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Standards"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “NIST-CSF”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Categories"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “SystemAndInformationIntegrity”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Controls"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Advisor”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Enforce if Supported"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Disable Policy"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")))),Object(n.b)("img",{src:"/assets/img/cp4mcm/prodnamespace.png",alt:"Image"}),Object(n.b)("p",null,"Here is the YAML that this generates."),Object(n.b)("img",{src:"/assets/img/cp4mcm/prodnamespaceyaml.png",alt:"Image"}),Object(n.b)("p",null,"As we have set this policy to ‘enforce’ this will create a ‘prod’ namespace on our targeted clusters."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc get namespace | grep -i prod\n")),Object(n.b)("p",null,"Create some more policies and then explore the console that is used to give a high level view of the cluster compliance with your defined Policies."),Object(n.b)("p",null,"Start with a high level view of the cluster policy compliance."),Object(n.b)("img",{src:"/assets/img/cp4mcm/PolicySummary.png",alt:"Image"}),Object(n.b)("p",null,"Then by ",Object(n.b)("inlineCode",{parentName:"p"},"category")," look at which clusters are found to be not compliant with named policies."),Object(n.b)("img",{src:"/assets/img/cp4mcm/ClusterSummary2.png",alt:"Image"}),Object(n.b)("img",{src:"/assets/img/cp4mcm/PolicyCollection.png",alt:"Image"}),Object(n.b)("p",null,"Finally, look at all of the policy compliance associated with you collection of ",Object(n.b)("inlineCode",{parentName:"p"},"PCI")," compliance policies."),Object(n.b)("img",{src:"/assets/img/cp4mcm/SISummary.png",alt:"Image"}),Object(n.b)("h3",null,"Network Policy"),Object(n.b)("p",null,"The Network Policy is used to control (block) network traffic from other pods."),Object(n.b)("p",null,"Configure the new network policy according to the table below"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Field Name"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Policy-network-policy")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Namespace"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: Namespace-must have namespace ‘prod’ Note: You will modify the name prod to k8demo. Selecting this will provide a template to have custom namespace policy definition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Specifications"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “NetworkPolicy”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Cluster Binding"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose name: “local-cluster”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Standards"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “NIST-CSF”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Categories"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “SystemAndInformationIntegrity”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Controls"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Advisor”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Enforce if Supported"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Disable Policy"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")))),Object(n.b)("img",{src:"/assets/img/cp4mcm/cp4mcm_clipimage00078.png",alt:"Image"}),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),'apiVersion: policy.mcm.ibm.com/v1alpha1\nkind: Policy\nmetadata:\n  name: policy-networkpolicy\n  namespace: residency2020\n  annotations:\n    policy.mcm.ibm.com/standards: NIST-CSF\n    policy.mcm.ibm.com/categories: PR.AC Identity Management Authentication and Access Control\n    policy.mcm.ibm.com/controls: PR.AC-5 Network Integrity\nspec:\n  complianceType: musthave\n  remediationAction: inform\n  disabled: false\n  namespaces:\n    exclude: ["kube-*"]\n    include: ["default"]\n  object-templates:\n    - complianceType: musthave\n      objectDefinition:\n        kind: NetworkPolicy # deny network request\n        apiVersion: networking.k8s.io/v1\n        metadata:\n          name: deny-from-other-namespaces\n        spec:\n          podSelector:\n            matchLabels:\n          ingress:\n          - from:\n            - podSelector: {} # accept ingress from all pods within this namespace only\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementBinding\nmetadata:\n  name: binding-policy-networkpolicy\n  namespace: residency2020\nplacementRef:\n  name: placement-policy-networkpolicy\n  kind: PlacementPolicy\n  apiGroup: mcm.ibm.com\nsubjects:\n- name: policy-networkpolicy\n  kind: Policy\n  apiGroup: policy.mcm.ibm.com\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementPolicy\nmetadata:\n  name: placement-policy-networkpolicy\n  namespace: residency2020\nspec:\n  clusterLabels:\n    matchExpressions:\n')),Object(n.b)("p",null,"You can validate the network policy that is created on the selected namespace."),Object(n.b)("p",null," Using the CLI, run the following command to get the network policies for the namespace"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc get networkpolicies -n <namespace>\n")),Object(n.b)("p",null,"This kind of  policy can be used to allow or deny the communication between pods living on different \t\tnamespaces."),Object(n.b)("h3",null,"Pod must exist in a given namespace Policy"),Object(n.b)("p",null,"This kind of policy validates if a pod is present in a given namespace."),Object(n.b)("p",null,"Configure the new policy, requiring pod be present, according to the table below"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Field Name"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"policy-namespace")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Namespace"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: Namespace-must have namespace ‘prod’ Note: You will modify the name prod to k8demo. Selecting this will provide a template to have custom namespace policy definition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Specifications"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Pod-nginx” must exist")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Cluster Binding"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose name: “local-cluster”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Standards"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “NIST-CSF”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Categories"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “SystemAndInformationIntegrity”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Controls"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Advisor”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Enforce if Supported"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Disable Policy"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")))),Object(n.b)("p",null,"Notice you can change the name of the pod and the image on the yaml section to create any kind of pod, make sure of write a valid value on the image parameter."),Object(n.b)("p",null," Also you can change in the namespaces section, the namespaces you want your policy takes effect."),Object(n.b)("img",{src:"/assets/img/cp4mcm/clip_image00122.png",alt:"Image"}),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),'apiVersion: policy.mcm.ibm.com/v1alpha1\nkind: Policy\nmetadata:\n  name: policy-pod\n  namespace: residency2020\n  annotations:\n    policy.mcm.ibm.com/standards: NIST-CSF\n    policy.mcm.ibm.com/categories: PR.AC Identity Management Authentication and Access Control, DE.CM Security Continuous Monitoring, PR.IP Information Protection Processes and Procedures, PR.PT Protective Technology\n    policy.mcm.ibm.com/controls: PR.AC-5 Network Integrity, DE.CM-7 Monitoring for unauthorized activity, PR.IP-1 Baseline configuration, PR.PT-3 Least Functionality\nspec:\n  complianceType: musthave\n  remediationAction: inform\n  disabled: false\n  namespaces:\n    exclude: ["kube-*"]\n    include: ["residency2020"]\n  object-templates:\n    - complianceType: musthave\n      objectDefinition:\n        apiVersion: v1\n        kind: Pod # nginx pod must exist\n        metadata:\n          name: nginx-pod\n        spec:\n          containers:\n          - image: nginx:1.7.9\n            name: nginx\n            ports:\n            - containerPort: 80\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementBinding\nmetadata:\n  name: binding-policy-pod\n  namespace: residency2020\nplacementRef:\n  name: placement-policy-pod\n  kind: PlacementPolicy\n  apiGroup: mcm.ibm.com\nsubjects:\n- name: policy-pod\n  kind: Policy\n  apiGroup: policy.mcm.ibm.com\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementPolicy\nmetadata:\n  name: placement-policy-pod\n  namespace: residency2020\nspec:\n  clusterLabels:\n    matchExpressions:\n')),Object(n.b)("h3",null,"Limits memory range for a namespace Policy"),Object(n.b)("p",null,"Configure the new policy, enforcing quota limits, according to the table below"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Field Name"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"policy-namespace")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Namespace"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: Namespace-must have namespace ‘prod’ Note: You will modify the name prod to k8demo. Selecting this will provide a template to have custom namespace policy definition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Specifications"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Limitrange-limit memory usage”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Cluster Binding"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose name: “local-cluster”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Standards"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “NIST-CSF”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Categories"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “SystemAndInformationIntegrity”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Controls"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Advisor”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Enforce if Supported"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Disable Policy"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")))),Object(n.b)("p",null," To validate the quota is created on the selected namespace"),Object(n.b)("img",{src:"/assets/img/cp4mcm/clip_image0034.png",alt:"Image"}),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc get networkpolicies -n <namespace>\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc -n <namespace> get limits\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"oc -n <namespace> get limits –o yaml\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),'apiVersion: policy.mcm.ibm.com/v1alpha1\nkind: Policy\nmetadata:\n  name: policy-limitrange\n  namespace: residency2020\n  annotations:\n    policy.mcm.ibm.com/standards: NIST-CSF\n    policy.mcm.ibm.com/categories: PR.AC Identity Management Authentication and Access Control, DE.CM Security Continuous Monitoring, PR.IP Information Protection Processes and Procedures, PR.PT Protective Technology\n    policy.mcm.ibm.com/controls: PR.AC-5 Network Integrity, DE.CM-7 Monitoring for unauthorized activity, PR.IP-1 Baseline configuration, PR.PT-3 Least Functionality\nspec:\n  complianceType: musthave\n  remediationAction: inform\n  disabled: false\n  namespaces:\n    exclude: ["kube-*"]\n    include: ["residency2020"]\n  object-templates:\n    - complianceType: musthave\n      objectDefinition:\n        apiVersion: v1\n        kind: LimitRange # limit memory usage\n        metadata:\n          name: mem-limit-range\n        spec:\n          limits:\n          - default:\n              memory: 512Mi\n            defaultRequest:\n              memory: 256Mi\n            type: Container\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementBinding\nmetadata:\n  name: binding-policy-limitrange\n  namespace: residency2020\nplacementRef:\n  name: placement-policy-limitrange\n  kind: PlacementPolicy\n  apiGroup: mcm.ibm.com\nsubjects:\n- name: policy-limitrange\n  kind: Policy\n  apiGroup: policy.mcm.ibm.com\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementPolicy\nmetadata:\n  name: placement-policy-limitrange\n  namespace: residency2020\nspec:\n  clusterLabels:\n    matchExpressions:\n')),Object(n.b)("h3",null,"Mutation Policy"),Object(n.b)("p",null,"A mutation policy contains the specifications of which pods to monitor and what action to take if a mutation is detected, for example if this policy is created and configured for an specific namespace, and you change something (such as edit or delete a file) in a running pod of that namespace, a violation will be notified, if the policy is enforced, the pod will be restarted."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Field Name"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"policy-namespace")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Namespace"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: Namespace-must have namespace ‘prod’ Note: You will modify the name prod to k8demo. Selecting this will provide a template to have custom namespace policy definition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Specifications"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Policy”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Cluster Binding"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose name: “local-cluster”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Standards"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “NIST-CSF”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Categories"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “SystemAndInformationIntegrity”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Controls"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Choose: “Mutation Advisor”")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Enforce if Supported"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Disable Policy"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),"Leave as is")))),Object(n.b)("img",{src:"/assets/img/cp4mcm/cp4mcm_clipimage0008.png",alt:"Image"}),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),'apiVersion: policy.mcm.ibm.com/v1alpha1\nkind: Policy\nmetadata:\n  name: policy-mutationpolicy\n  namespace: residency2020\n  annotations:\n    policy.mcm.ibm.com/standards: NIST-CSF\n    policy.mcm.ibm.com/categories: PR.AC Identity Management Authentication and Access Control, DE.CM Security Continuous Monitoring\n    policy.mcm.ibm.com/controls: PR.AC-5 Network Integrity, DE.CM-7 Monitoring for unauthorized activity\nspec:\n  complianceType: musthave\n  remediationAction: inform\n  disabled: false\n  namespaces:\n    exclude: ["kube-*"]\n    include: ["default"]\n  policy-templates:\n    - objectDefinition:\n        apiVersion: policies.ibm.com/v1alpha1\n        kind: MutationPolicy # no mutation allowed\n        metadata:\n          name: policy-mutationpolicy-example\n        spec:\n          namespaceSelector:\n            include: ["default","kube-*"]\n            exclude: ["kube-system"]\n          remediationAction: inform # enforce or inform\n          severity: medium\n          conditions:\n            ownership: ["ReplicaSet", "Deployment", "DeamonSet", "ReplicationController", "none"]\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementBinding\nmetadata:\n  name: binding-policy-mutationpolicy\n  namespace: residency2020\nplacementRef:\n  name: placement-policy-mutationpolicy\n  kind: PlacementPolicy\n  apiGroup: mcm.ibm.com\nsubjects:\n- name: policy-mutationpolicy\n  kind: Policy\n  apiGroup: policy.mcm.ibm.com\n---\napiVersion: mcm.ibm.com/v1alpha1\nkind: PlacementPolicy\nmetadata:\n  name: placement-policy-mutationpolicy\n  namespace: residency2020\nspec:\n  clusterLabels:\n    matchExpressions:\n')))}m.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-governance-risk-index-mdx-a55456699767abf17ada.js.map