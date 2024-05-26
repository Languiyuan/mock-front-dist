import{d as N,r,B as q,a as B,c as b,e as y,f as t,i as j,_ as K,v as Q,o as X,w as o,D as Y,g as f,F as Z,A as ee,u as te,b as i,G as ae,h as p,x as v,N as oe,t as D,s as ne}from"./index-7IicHMeD.js";import{V as le,g as se,h as ie,b as re}from"./ace.config-Be6RpzjP.js";import{k as ce,g as de}from"./project-DZ0UlzBX.js";import{f as pe}from"./index-Dgpqzut2.js";import{u as ue}from"./login-CKbHa5S2.js";const me={class:"h-48 w-full"},_e=N({__name:"AceReadOnly",props:{mockRule:{}},setup(R){const h=R,u=r("");q(()=>h.mockRule,()=>{u.value=JSON.parse(h.mockRule)},{immediate:!0});const w=B({useWorker:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showPrintMargin:!1,highlightActiveLine:!0,highlightSelectedWord:!0,tabSize:2,fontSize:14,wrap:!1,readOnly:!0,newLineMode:"windows"}),g=r("monokai");return(m,c)=>(b(),y("div",me,[t(j(le),{value:u.value,"onUpdate:value":c[0]||(c[0]=l=>u.value=l),lang:"json",theme:g.value,style:{height:"100%"},options:w},null,8,["value","theme","options"])]))}}),fe=K(_e,[["__scopeId","data-v-b45d12d1"]]),he={class:"flex items-center"},ge=f("div",null,"项目",-1),ve={class:"wrapper pt-4 mt-4 h-[calc(100%_-_40px)] bg-white"},be={class:"h-[calc(100%_-_48px)] pl-4 pr-4"},ye={class:"flex items-center"},we={key:0},ke={class:"w-full h-12 flex items-center justify-end pr-4"},ze=N({__name:"index",setup(R){const h=ue(),u=ee(),w=te(),g=Q(()=>{var e;return Number(((e=u.params)==null?void 0:e.apiId)||0)});X(async()=>{await _(),await U(),await L(),await M()});const m=r(!1),c=r([]),l=B({total:0,pageNo:1,pageSize:20}),k=r(0),_=async()=>{try{m.value=!0;const e={apiId:g.value,pageNo:l.pageNo,pageSize:l.pageSize},{data:a}=await se(e);c.value=a.list,l.total=a.total,m.value=!1,k.value=a.list[0].projectId}catch{m.value=!1}},x=r({baseUrl:"",createUserId:0,description:"",id:0,isDeleted:0,name:"",sign:"",updateTime:"",createTime:"",updateUserId:0}),M=async()=>{try{const{data:e}=await ce({projectId:k.value});x.value=e}catch{w.push("/project/index")}},s=r(),U=async()=>{const{data:e}=await ie({id:g.value});s.value=e},z=r([]),L=async()=>{const{data:e}=await de({projectId:k.value});z.value=e},$=e=>{const a=z.value.find(I=>I.userId===e);return a?a.username:e},E=e=>{D.confirm("请确认是否应用该规则","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(async()=>{const a={id:s.value.id,projectId:s.value.projectId,folderId:s.value.folderId,name:s.value.name,url:s.value.url,method:s.value.method,delay:s.value.delay,description:s.value.description,on:s.value.on,mockRule:e.mockRule};await S(a),await _()}).catch(()=>{})},O=e=>{D.confirm("请确认是否完整应用该历史记录","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(async()=>{const a={id:e.apiId,projectId:e.projectId,folderId:e.folderId,name:e.name,url:e.url,method:e.method,delay:e.delay,description:e.description,on:e.on,mockRule:e.mockRule};await S(a),await _()}).catch(()=>{})},S=async e=>{await re(e),ne.success("应用成功")};return(e,a)=>{const I=i("FolderOpened"),V=i("el-icon"),A=i("el-breadcrumb-item"),F=i("el-breadcrumb"),d=i("el-table-column"),P=i("el-tag"),T=i("el-button"),C=i("el-tooltip"),G=i("el-table"),H=i("el-pagination"),W=ae("loading");return b(),y(Z,null,[t(F,{"separator-icon":"ArrowRight"},{default:o(()=>[t(A,{class:"h-[1.2rem]",to:{path:"/project/index"}},{default:o(()=>[f("div",he,[t(V,{class:"!text-xl pr-1"},{default:o(()=>[t(I)]),_:1}),ge])]),_:1}),t(A,{class:"h-[1.2rem]",to:{path:`/apiList/${x.value.id}`}},{default:o(()=>[p(v(x.value.name||"项目名称"),1)]),_:1},8,["to"]),t(A,{class:"h-[1.2rem]"},{default:o(()=>[p(v(c.value[0]?c.value[0].name:"")+"_历史记录",1)]),_:1})]),_:1}),Y((b(),y("div",ve,[f("div",be,[t(G,{data:c.value,height:"100%",style:{width:"100%"},border:!0,"header-row-class-name":"api-history-header-row-class-name","default-sort":{prop:"updateTime",order:"descending"}},{default:o(()=>[t(d,{type:"index",label:"序号",width:"80"}),t(d,{prop:"updateUserId",label:"操作人",width:"120"},{default:o(n=>[f("div",ye,v($(n.row.updateUserId)),1),n.row.createUserId===j(h).$state.userInfo.id?(b(),y("div",we,[t(P,{type:"primary",effect:"light"},{default:o(()=>[p("创建者")]),_:1})])):oe("",!0)]),_:1}),t(d,{prop:"operateType",label:"操作类型",width:"100"}),t(d,{prop:"mockRule",label:"mock规则"},{default:o(n=>[t(fe,{"mock-rule":n.row.mockRule},null,8,["mock-rule"])]),_:1}),t(d,{prop:"updateTime",label:"操作时间",sortable:"",width:"180"},{default:o(n=>[p(v(j(pe)(n.row.updateTime)),1)]),_:1}),t(d,{label:"操作",width:"150"},{default:o(n=>[t(C,{class:"box-item",effect:"dark",content:"仅修改mockRule",placement:"bottom"},{default:o(()=>[t(T,{link:"",type:"primary",size:"small",onClick:J=>E(n.row)},{default:o(()=>[p(" 应用规则 ")]),_:2},1032,["onClick"])]),_:2},1024),t(C,{class:"box-item",effect:"dark",content:"覆盖当前api",placement:"bottom-end"},{default:o(()=>[t(T,{link:"",type:"primary",size:"small",onClick:J=>O(n.row)},{default:o(()=>[p(" 完整应用 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"])]),f("div",ke,[t(H,{"current-page":l.pageNo,"onUpdate:currentPage":a[0]||(a[0]=n=>l.pageNo=n),"page-size":l.pageSize,"onUpdate:pageSize":a[1]||(a[1]=n=>l.pageSize=n),"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])])])),[[W,m.value]])],64)}}});export{ze as default};
