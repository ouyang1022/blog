import{_ as c,s as d,o as i,n as m,c as f,a as s,u as n,d as p,m as v,p as _,f as b,E as k,q as V}from"./index-CrdDIvUk.js";const x={class:"book-base com-info"},y={class:"btn"},A={__name:"ArticleInfo",setup(I){const l=v(),u=V(),o=d(""),r=async(t,e)=>{await _({v:t,url:l.query.name})};return i(async()=>{let t=await m({value:l.query.name});o.value=t.data}),(t,e)=>(b(),f("div",x,[s("div",y,[s("button",{onClick:e[0]||(e[0]=a=>n(u).go(-1))},"返回"),s("button",{onClick:e[1]||(e[1]=a=>n(u).push("/"))},"首页")]),p(n(k),{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value=a),onOnSave:r},null,8,["modelValue"])]))}},q=c(A,[["__scopeId","data-v-1db79006"]]);export{q as default};
