import{y as D,c as s,o as b,d as g,f as o,w as l,g as u,F as v,b as y,z as V,A as F,i as $}from"./index-c04e0510.js";import{s as x}from"./addData-499d0411.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const I=D({components:{},props:{},setup(){const e=y({formData:{input42206:"",input74523:"",input17696:"",textarea94915:""},rules:{input42206:[{required:!0,message:"字段值不可为空"}],input74523:[{required:!0,message:"字段值不可为空"}]}}),t=V(),p=()=>{let m={doc_Name:e.formData.input42206,doc_Phone:e.formData.input74523,doc_LoginID:e.formData.input17696};t.proxy.$refs.vForm.validate(i=>{if(!i)return;x("http://39.98.244.18/api/Manager/Doc_Add",m,function(r){console.log(r)}),console.log(e.formData)})},d=()=>{t.proxy.$refs.vForm.resetFields()};return{...F(e),submitForm:p,resetForm:d}}});function q(e,t,p,d,m,i){const n=s("el-input"),r=s("el-form-item"),f=s("el-button"),c=s("el-form"),_=s("el-card");return b(),g(v,null,[o(_,null,{default:l(()=>[o(c,{model:e.formData,ref:"vForm",rules:e.rules,"label-position":"left","label-width":"80px",size:"default",onSubmit:t[6]||(t[6]=$(()=>{},["prevent"]))},{default:l(()=>[o(r,{label:"医生姓名",prop:"input42206",class:"required label-center-align"},{default:l(()=>[o(n,{modelValue:e.formData.input42206,"onUpdate:modelValue":t[0]||(t[0]=a=>e.formData.input42206=a),type:"text",placeholder:"请输入医生姓名",clearable:""},null,8,["modelValue"])]),_:1}),o(r,{label:"联系方式",prop:"input74523",class:"required"},{default:l(()=>[o(n,{modelValue:e.formData.input74523,"onUpdate:modelValue":t[1]||(t[1]=a=>e.formData.input74523=a),type:"text",placeholder:"请输入联系方式",clearable:""},null,8,["modelValue"])]),_:1}),o(r,{label:"LoginID",prop:"input17696",class:"label-center-align"},{default:l(()=>[o(n,{modelValue:e.formData.input17696,"onUpdate:modelValue":t[2]||(t[2]=a=>e.formData.input17696=a),type:"text",placeholder:"LoginID",clearable:""},null,8,["modelValue"])]),_:1}),o(r,{label:"简介",prop:"textarea94915",class:"required"},{default:l(()=>[o(n,{type:"textarea",modelValue:e.formData.textarea94915,"onUpdate:modelValue":t[3]||(t[3]=a=>e.formData.textarea94915=a),placeholder:"说些什么...",rows:"3"},null,8,["modelValue"])]),_:1}),o(f,{type:"primary",onClick:t[4]||(t[4]=a=>e.submitForm())},{default:l(()=>[u("提交")]),_:1}),o(f,{type:"danger",onClick:t[5]||(t[5]=a=>e.resetForm())},{default:l(()=>[u("重置")]),_:1})]),_:1},8,["model","rules"])]),_:1}),u("> ")],64)}const L=C(I,[["render",q],["__scopeId","data-v-04c43cd2"]]);export{L as default};
