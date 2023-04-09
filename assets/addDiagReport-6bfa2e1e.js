import{b as c,z as g,c as m,o as b,k as V,w as o,i as I,f as a,g as i}from"./index-c04e0510.js";import{s as N}from"./addData-499d0411.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const v={__name:"addDiagReport",setup(k){const e=c({formData:{StuID:"",med_ID:"",med_Name:"",med_Num:0,sick_Desc:""},rules:{StuID:[{required:!0,message:"字段值不可为空"},{pattern:/^[-]?\d+(\.\d+)?$/,trigger:["blur","change"],message:""}],med_ID:[{required:!0,message:"字段值不可为空"}],med_Name:[{required:!0,message:"字段值不可为空"}],med_Num:[{required:!0,message:"字段值不可为空"}],sick_Desc:[{required:!0,message:"字段值不可为空"}]}}),d=g(),p=()=>{d.proxy.$refs.vForm.validate(n=>{n&&N("http://39.98.244.18/api/Manager/AddDiagReport",{stu_StuID:e.formData.StuID.toString(),med_List:[{med_ID:e.formData.med_ID,med_Name:e.formData.med_Name.toString(),med_Num:e.formData.med_Num}],sick_Desc:e.formData.sick_Desc.toString()},function(){console.log("ok")})})},_=()=>{d.proxy.$refs.vForm.resetFields()};return(n,t)=>{const s=m("el-input"),r=m("el-form-item"),f=m("el-input-number"),u=m("el-button"),D=m("el-form");return b(),V(D,{model:e.formData,ref:"vForm",rules:e.rules,"label-position":"left","label-width":"100px",size:"large",onSubmit:t[7]||(t[7]=I(()=>{},["prevent"]))},{default:o(()=>[a(r,{label:"学生学号",prop:"StuID",class:"required label-right-align"},{default:o(()=>[a(s,{modelValue:e.formData.StuID,"onUpdate:modelValue":t[0]||(t[0]=l=>e.formData.StuID=l),size:"large",type:"text",placeholder:"请输入11位学生学号",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{label:"药品编号",prop:"med_ID",class:"required label-right-align"},{default:o(()=>[a(s,{modelValue:e.formData.med_ID,"onUpdate:modelValue":t[1]||(t[1]=l=>e.formData.med_ID=l),size:"large",type:"text",placeholder:"请输入药品编号",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{label:"药品名称",prop:"med_Name",class:"required label-right-align"},{default:o(()=>[a(s,{modelValue:e.formData.med_Name,"onUpdate:modelValue":t[2]||(t[2]=l=>e.formData.med_Name=l),type:"text",placeholder:"请输入药品名称",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{label:"药品数量",prop:"med-Num",class:"required label-right-align"},{default:o(()=>[a(f,{modelValue:e.formData.med_Num,"onUpdate:modelValue":t[3]||(t[3]=l=>e.formData.med_Num=l),class:"full-width-input","controls-position":"right",min:-0,max:999,precision:0,step:1},null,8,["modelValue"])]),_:1}),a(r,{label:"病情介绍",prop:"sick_Desc",class:"required label-right-align"},{default:o(()=>[a(s,{type:"textarea",modelValue:e.formData.sick_Desc,"onUpdate:modelValue":t[4]||(t[4]=l=>e.formData.sick_Desc=l),placeholder:"请输入病情介绍",rows:"4"},null,8,["modelValue"])]),_:1}),a(u,{type:"primary",plain:"",onClick:t[5]||(t[5]=l=>p())},{default:o(()=>[i("提交表单")]),_:1}),a(u,{type:"danger",onClick:t[6]||(t[6]=l=>_())},{default:o(()=>[i("重置表单")]),_:1})]),_:1},8,["model","rules"])}}},w=x(v,[["__scopeId","data-v-b3e710bc"]]);export{w as default};
