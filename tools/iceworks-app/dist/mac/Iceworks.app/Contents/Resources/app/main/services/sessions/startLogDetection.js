const e=require("strip-ansi"),s=require("../../helper/sendToWebContents"),t=/https?:\/\/((?:\d+\.\d+\.\d+\.\d+)|localhost):(\d{2,}\/?)/g,o=/Compiling\.\.\./i,a=/Compiled successfully/i;module.exports=function(i,p){if(p=e(p),t.test(p)){const e=p.match(t);console.log("\u68c0\u6d4b\u5230\u8def\u5f84\u5730\u5740",e[0]),s(global.windows.home,"update_project",{message:{action:"update_project",message:"server_finished",data:{statusDev:"working",serverUrl:`${e[0]}`}},path:i})}else o.test(p)?s(global.windows.home,"update_project",{message:{action:"update_project",message:"compiler_compiling",data:{statusCompile:"compiling"}},path:i}):a.test(p)&&s(global.windows.home,"update_project",{message:{action:"update_project",message:"compiler_success",data:{statusCompile:"success"}},path:i})};