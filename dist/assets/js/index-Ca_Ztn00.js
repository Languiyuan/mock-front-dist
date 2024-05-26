import{_ as M,c as s,e as w,p as P,l as T,g as f,d as y,r as F,m as G,b as n,f as t,w as e,n as m,F as L,u as V,a as E,h as R,i as K,q as O,s as q,t as J,v as H,x as $,y as N,z as B,A as Q}from"./index-7IicHMeD.js";import{u as U}from"./login-CKbHa5S2.js";import{u as W}from"./user-De565Ul_.js";const X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",Y={},Z=a=>(P("data-v-2c1db0a0"),a=a(),T(),a),b={class:"footer flex items-center justify-center"},I=Z(()=>f("a",{href:"https://github.com/Languiyuan/mock-front-end",target:"_blank"}," 2024 © Lan-mock By Languiyuan. ",-1)),ee=[I];function te(a,d){return s(),w("div",b,ee)}const ne=M(Y,[["render",te],["__scopeId","data-v-2c1db0a0"]]),oe=y({__name:"index",setup(a){const d=F(!0);return G("refresh",i=>d.value=i),(i,p)=>{const c=n("RouterView"),h=n("el-main"),r=n("el-footer");return s(),w(L,null,[t(h,null,{default:e(()=>[t(c)]),_:1}),(s(),m(r,{key:0},{default:e(()=>[t(ne)]),_:1}))],64)}}}),se=M(oe,[["__scopeId","data-v-5862a1b4"]]),ae=""+new URL("../gif/avatar-Dcbh69co.gif",import.meta.url).href,le={class:"dialog-footer"},ie=y({__name:"PasswordDialog",setup(a,{expose:d}){const u=V(),i=U(),p=F(),c=E({password:""}),h=E({password:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"密码长度不能少于6位数",trigger:"blur"}]}),r=F(!1),x=()=>{r.value=!0},o=()=>{p.value&&p.value.resetFields(),r.value=!1},v=g=>{g&&g.validate(async _=>{_&&(await k(c.password.toString()),i.resetInfo(),u.replace("/login"))})},k=async g=>{const{data:_}=await W({password:g});q.success(_)};return d({openDialog:x}),(g,_)=>{const S=n("lock"),j=n("el-icon"),D=n("el-input"),l=n("el-form-item"),C=n("el-button"),z=n("el-dialog");return s(),m(z,{modelValue:r.value,"onUpdate:modelValue":_[2]||(_[2]=A=>r.value=A),title:"修改密码",width:"500px","before-close":o,draggable:""},{footer:e(()=>[f("span",le,[t(C,{onClick:o},{default:e(()=>[R("取消")]),_:1}),t(C,{type:"primary",onClick:_[1]||(_[1]=A=>v(p.value))},{default:e(()=>[R("确认")]),_:1})])]),default:e(()=>[t(K(O),{ref_key:"passwordFormRef",ref:p,model:c,rules:h,size:"large"},{default:e(()=>[t(l,{prop:"password"},{default:e(()=>[t(D,{modelValue:c.password,"onUpdate:modelValue":_[0]||(_[0]=A=>c.password=A),type:"password",placeholder:"新密码不能少于6位","show-password":"",autocomplete:"new-password"},{prefix:e(()=>[t(j,{class:"el-input__icon"},{default:e(()=>[t(S)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),re=a=>(P("data-v-77707371"),a=a(),T(),a),ce=re(()=>f("div",{class:"avatar"},[f("img",{src:ae,alt:"avatar"})],-1)),_e=y({__name:"Avatar",setup(a){const d=V(),u=U(),i=()=>{J.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{u.resetInfo(),u.$reset(),d.replace("/login"),q.success("退出登录成功！")})},p=F(null),c=h=>{var r;h=="passwordRef"&&((r=p.value)==null||r.openDialog())};return(h,r)=>{const x=n("Edit"),o=n("el-icon"),v=n("el-dropdown-item"),k=n("SwitchButton"),g=n("el-dropdown-menu"),_=n("el-dropdown");return s(),w(L,null,[t(_,{trigger:"click"},{dropdown:e(()=>[t(g,null,{default:e(()=>[t(v,{onClick:r[0]||(r[0]=S=>c("passwordRef"))},{default:e(()=>[t(o,null,{default:e(()=>[t(x)]),_:1}),R("修改密码 ")]),_:1}),t(v,{divided:"",onClick:i},{default:e(()=>[t(o,null,{default:e(()=>[t(k)]),_:1}),R("退出登录 ")]),_:1})]),_:1})]),default:e(()=>[ce]),_:1}),t(ie,{ref_key:"passwordRef",ref:p},null,512)],64)}}}),de=M(_e,[["__scopeId","data-v-77707371"]]),ue={class:"tool-bar-ri"},pe={class:"username font-bold"},me=y({__name:"ToolBarRight",setup(a){const d=U(),u=H(()=>d.userInfo.username);return(i,p)=>(s(),w("div",ue,[f("span",pe,$(u.value),1),t(de)]))}}),fe=M(me,[["__scopeId","data-v-03db8dd3"]]),he={class:"sle"},ge={class:"sle"},ve=y({__name:"SubMenu",props:{menuList:{}},setup(a){const d=V(),u=i=>{if(i.meta.isLink)return window.open(i.meta.isLink,"_blank");d.push(i.path)};return(i,p)=>{const c=n("el-icon"),h=n("SubMenu",!0),r=n("el-sub-menu"),x=n("el-menu-item");return s(!0),w(L,null,N(i.menuList,o=>{var v;return s(),w(L,{key:o.path},[(v=o.children)!=null&&v.length?(s(),m(r,{key:0,index:o.path},{title:e(()=>[t(c,null,{default:e(()=>[(s(),m(B(o.meta.icon)))]),_:2},1024),f("span",he,$(o.meta.title),1)]),default:e(()=>[t(h,{"menu-list":o.children},null,8,["menu-list"])]),_:2},1032,["index"])):(s(),m(x,{key:1,index:o.path,onClick:k=>u(o)},{title:e(()=>[f("span",ge,$(o.meta.title),1)]),default:e(()=>[t(c,null,{default:e(()=>[(s(),m(B(o.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)}),128)}}}),we=a=>(P("data-v-d50449ef"),a=a(),T(),a),xe={class:"logo flex items-center justify-center"},ke=we(()=>f("img",{class:"logo-img",src:X,alt:"logo"},null,-1)),ye={class:"logo-text"},$e=y({__name:"index",setup(a){const d="Lan Mock",u=U(),i=Q(),p=V(),c=[{path:"/project/index",name:"project",component:"/project/index",meta:{icon:"FolderOpened",title:"项目列表",isLink:"",isHide:!1,isFull:!1,isAffix:!0,isKeepAlive:!0},children:[]},{path:"/personalCenter/index",name:"personalCenter",component:"/personalCenter/index",meta:{icon:"UserFilled",title:"个人中心",isLink:"",isHide:!1,isFull:!1,isAffix:!0,isKeepAlive:!0},children:[]}],h=H(()=>{const o={path:"/Manager/index",name:"manager",component:"/Manager/index",meta:{icon:"Grid",title:"管理员页面",isLink:"",isHide:!1,isFull:!1,isAffix:!0,isKeepAlive:!0},children:[{path:"/userManage/index",name:"manager",component:"/UserManage/index",meta:{icon:"Grd",title:"成员管理",isLink:"",isHide:!1,isFull:!1,isAffix:!0,isKeepAlive:!0}},{path:"/projectManage/index",name:"manager",component:"/ProjectManage/index",meta:{icon:"",title:"项目管理",isLink:"",isHide:!1,isFull:!1,isAffix:!0,isKeepAlive:!0}}]};return u.$state.userInfo.isAdmin?[...c,o]:c}),r=H(()=>i.meta.activeMenu?i.meta.activeMenu:i.path),x=o=>{if(o.meta.isLink)return window.open(o.meta.isLink,"_blank");p.push(o.path)};return(o,v)=>{const k=n("el-icon"),g=n("el-sub-menu"),_=n("el-menu-item"),S=n("el-menu"),j=n("el-header"),D=n("el-container");return s(),m(D,{class:"layout"},{default:e(()=>[t(j,null,{default:e(()=>[f("div",xe,[ke,f("span",ye,$(K(d)),1)]),t(S,{mode:"horizontal","default-active":r.value,router:!1,"unique-opened":!0},{default:e(()=>[(s(!0),w(L,null,N(h.value,l=>{var C;return s(),w(L,{key:l.path},[(C=l==null?void 0:l.children)!=null&&C.length?(s(),m(g,{key:l.path,index:l.path+"el-sub-menu"},{title:e(()=>[t(k,null,{default:e(()=>[(s(),m(B(l.meta.icon)))]),_:2},1024),f("span",null,$(l.meta.title),1)]),default:e(()=>[t(ve,{"menu-list":l==null?void 0:l.children},null,8,["menu-list"])]),_:2},1032,["index"])):(s(),m(_,{key:l.path+"el-menu-item",index:l.path,onClick:z=>x(l)},{title:e(()=>[f("span",null,$(l.meta.title),1)]),default:e(()=>[t(k,null,{default:e(()=>[(s(),m(B(l.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)}),128))]),_:1},8,["default-active"]),t(fe)]),_:1}),t(se)]),_:1})}}}),Le=M($e,[["__scopeId","data-v-d50449ef"]]),Me=y({__name:"index",setup(a){return(d,u)=>(s(),m(Le))}}),Fe=M(Me,[["__scopeId","data-v-2eff9dc5"]]);export{Fe as default};
