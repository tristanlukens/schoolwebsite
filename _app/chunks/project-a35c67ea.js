import{S as h,i as v,s as p,R as g,e as d,k as j,j as k,Q as w,c as f,d as l,n as E,a as S,m as b,b as u,D as q,f as _,o as y,x as C,u as M,v as P}from"./vendor-e6d7407a.js";function T(i){let s,n,r,o,a,t;return document.title=s=i[1],a=new g({props:{source:i[0]}}),{c(){n=d("meta"),r=j(),o=d("section"),k(a.$$.fragment),this.h()},l(e){const c=w('[data-svelte="svelte-n4t6xj"]',document.head);n=f(c,"META",{name:!0,content:!0}),c.forEach(l),r=E(e),o=f(e,"SECTION",{class:!0});var m=S(o);b(a.$$.fragment,m),m.forEach(l),this.h()},h(){u(n,"name","description"),u(n,"content",i[2]),u(o,"class","prose prose-blue mt-8 p-10 mx-auto")},m(e,c){q(document.head,n),_(e,r,c),_(e,o,c),y(a,o,null),t=!0},p(e,[c]){(!t||c&2)&&s!==(s=e[1])&&(document.title=s),(!t||c&4)&&u(n,"content",e[2]);const m={};c&1&&(m.source=e[0]),a.$set(m)},i(e){t||(C(a.$$.fragment,e),t=!0)},o(e){M(a.$$.fragment,e),t=!1},d(e){l(n),e&&l(r),e&&l(o),P(a)}}}function x(i,s,n){let{content:r}=s,{name:o}=s,{desc:a}=s;return i.$$set=t=>{"content"in t&&n(0,r=t.content),"name"in t&&n(1,o=t.name),"desc"in t&&n(2,a=t.desc)},[r,o,a]}class D extends h{constructor(s){super();v(this,s,x,T,p,{content:0,name:1,desc:2})}}export{D as P};
