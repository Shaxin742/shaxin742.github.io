(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-68b3"],{"1acy":function(e,t,a){"use strict";var i=a("7fuT");a.n(i).a},"7fuT":function(e,t,a){},ICVH:function(e,t,a){"use strict";var i=a("tPxi");a.n(i).a},nA3J:function(e,t,a){"use strict";a.r(t);var i=a("gDS+"),o=a.n(i),r=a("QmE6"),n=a("YcAW"),l=a("XINx"),s=a("3s8Z"),c=a("zEiY"),h=a("mt6u"),u={name:"DoDialog",directives:{elDragDialog:l.a},components:{upload:s.a,imgShow:r.a,audioPlay:n.a},data:function(){return{dialogVisible:!1,fileList:[],title:"",form:{id:"",name:"",area:"",gender:"",birthday:"",pinyin:"",description:"",avatar_file:"",is_hot:""},formRules:{name:[{required:!0,trigger:"blur",message:"请输入名字"}],pinyin:[{required:!0,trigger:"blur",message:"请输入拼音"},{pattern:/^[A-Za-z]+$/,message:"请输入字母"}],area:[{required:!0,trigger:"change",message:"请选择"}],gender:[{required:!0,trigger:"change",message:"请选择"}],is_hot:[{required:!0,trigger:"change",message:"请选择"}],birthday:[{required:!0,trigger:"change",message:"请选择"}],description:[{required:!0,trigger:"blur",message:"请输入描述"}]},onClosed:function(){},areaOptions:[{value:1,label:"大陆"},{value:2,label:"港台"},{value:3,label:"欧美"},{value:4,label:"日韩"},{value:5,label:"其他"}],genderOptions:[{value:1,label:"男歌手"},{value:2,label:"女歌手"},{value:3,label:"组合乐队"},{value:4,label:"其他"}],hotOptions:[{value:1,label:"热门"},{value:0,label:"不热门"}],hotToOptions:{"不热门":0,"热门":1},genderToOptions:{"男歌手":1,"女歌手":2,"组合乐队":3,"其他":4},areaToOptions:{"大陆":1,"港台":2,"欧美":3,"日韩":4,"其他":5}}},methods:{init:function(e){this.$store.commit("CLOSE_WAITING"),"{}"!==o()(e)?(this.title="修改艺人信息",this.form.name=e.name,this.form.description=e.description,this.form.id=e.id,this.form.area=e.area,this.form.gender=e.gender,this.form.birthday=e.birthday,this.form.pinyin=e.pinyin,this.form.avatar_file=e.avatar_file.split("/")[e.avatar_file.split("/").length-1],this.form.is_hot=e.is_hot,console.log(this.form.avatar_file),this.form.avatar_file&&(this.fileList=[{name:e.name,url:e.avatar_file}])):(this.title="新增艺人信息",this.form.id=0,this.form.name="",this.form.description="",this.form.area="",this.form.gender="",this.form.birthday="",this.form.pinyin="",this.form.avatar_file="",this.fileList=[],this.form.is_hot="")},handleClose:function(e){this.$confirm("确认关闭？","确认信息",{confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(t){e()}).catch(function(e){})},open:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log(t),this.dialogVisible=!0,this.$nextTick(function(){e.$refs.form.clearValidate()}),this.init(t)},close:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.a.CLOSE;if(this.dialogVisible&&(this.dialogVisible=!1,"function"==typeof this.onClosed)){var t={option:e,sender:this};this.onClosed(t)}},confirm:function(){var e=this;console.log(this.form);try{this.$refs.form.validate(function(t){if(t){if(!e.form.avatar_file)return void e.$message.error("请选择图片");e.form.id?("string"==typeof e.form.area&&(e.form.area=e.areaToOptions[e.form.area]),"string"==typeof e.form.gender&&(e.form.gender=e.genderToOptions[e.form.gender]),"string"==typeof e.form.is_hot&&(e.form.is_hot=e.hotToOptions[e.form.is_hot]),e.$store.commit("SHOW_WAITING"),Object(c.k)(e.form).then(function(t){e.$store.commit("CLOSE_WAITING"),0===t.error_code&&(e.$message({message:"提交成功",type:"success"}),e.close(h.a.CONFIRM))})):(e.$store.commit("SHOW_WAITING"),Object(c.c)(e.form).then(function(t){e.$store.commit("CLOSE_WAITING"),0===t.error_code&&(e.$message({message:"提交成功",type:"success"}),e.close(h.a.CONFIRM))}))}})}catch(e){this.$store.commit("CLOSE_WAITING"),this.$message.error("获取数据失败")}},getFileList:function(e){this.form.avatar_file=this.$urlTrans(e),console.log(this.form.avatar_file)},showFile:function(e){console.log(e),"music"===e.type?this.$refs.audioPlay.open(e.file):"photo"===e.type&&this.$refs.imgShow.open(e.file)}}},f=(a("ICVH"),a("KHd+")),d=Object(f.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"content",attrs:{visible:e.dialogVisible,"before-close":e.handleClose,title:"查看详情",width:"65%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"名字",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"拼音",prop:"pinyin"}},[a("el-input",{model:{value:e.form.pinyin,callback:function(t){e.$set(e.form,"pinyin",t)},expression:"form.pinyin"}})],1),e._v(" "),a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"地区",prop:"area"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.area,callback:function(t){e.$set(e.form,"area",t)},expression:"form.area"}},e._l(e.areaOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"性别",prop:"gender"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},e._l(e.genderOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"生日",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),e._v(" "),a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"描述",prop:"description"}},[a("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),a("el-form-item",{staticClass:"wid50 fll",attrs:{label:"热门",prop:"is_hot"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.is_hot,callback:function(t){e.$set(e.form,"is_hot",t)},expression:"form.is_hot"}},e._l(e.hotOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{clear:"both"}},[a("upload",{attrs:{"file-list":e.fileList,"upload-type":"photo"},on:{getFileList:e.getFileList,showFile:e.showFile}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirm()}}},[e._v("确定")])],1)],1)],1)]),e._v(" "),a("imgShow",{ref:"imgShow"}),e._v(" "),a("audioPlay",{ref:"audioPlay"})],1)},[],!1,null,"1bf5f892",null);d.options.__file="doDialog.vue";var m=d.exports,p=a("14Xm"),g=a.n(p),v=a("D3Ub"),b=a.n(v),_=a("kbZS"),y={directives:{elDragDialog:l.a},components:{imgShow:r.a},props:{},data:function(){return{dialogVisible:!1,onClosed:function(){},fileList:[]}},methods:{beforeAvatarUpload:function(e){console.log(e);var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 jpg 或者 png 格式！"),a||this.$message.error("上传头像图片大小不能超过 2MB！"),t&&a},handleRemove:function(e,t){var a=this;console.log(e,t),this.fileList.map(function(t,i){t.name===e.name&&a.fileList.splice(i,1)})},uploadFile:function(e){var t=this;return b()(g.a.mark(function a(){var i,o;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(i=new FormData).append("photo",e.file),a.next=5,Object(_.b)(i);case 5:o=a.sent,console.log(o),0===o.error_code&&(t.$message.success("上传成功"),t.fileList.length>1&&t.fileList.splice(0,1)),console.log(t.fileList),t.$message.success("上传成功"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),t.$message.error("上传文件错误: "+a.t0.message);case 15:return a.prev=15,t.$store.commit("CLOSE_WAITING"),a.finish(15);case 18:case"end":return a.stop()}},a,t,[[0,12,15,18]])}))()},handlePreview:function(e){this.$refs.imgShow.open(e)},handleAvatarSuccess:function(e,t){this.fileList.push(t)},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"})},open:function(e){console.log(e),this.fileList=e,this.dialogVisible=!0},handleClose:function(e){this.$confirm("确认关闭？","确认信息",{confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(t){e()}).catch(function(e){})},confirm:function(){this.dialogVisible=!1,this.$emit("getFileList",this.fileList)}}},w=Object(f.a)(y,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{visible:e.dialogVisible,"before-close":e.handleClose,title:"图片查看",width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-upload",{staticClass:"upload-demo",attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"before-upload":e.beforeAvatarUpload,limit:1,"on-exceed":e.handleExceed,"on-success":e.handleAvatarSuccess,"file-list":e.fileList,"http-request":e.uploadFile,action:"",accept:"image/jpeg,image/png,image/bmp"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1),e._v(" "),a("el-button",{on:{click:function(t){e.confirm()}}},[e._v("确定")])],1),e._v(" "),a("imgShow",{ref:"imgShow"})],1)},[],!1,null,null,null);w.options.__file="index.vue";var $=w.exports,S=a("23rR"),C=a("Mz3J"),T={name:"UserManage",components:{doDialog:m,titleLeft:S.a,imgUpload:$,imgShow:r.a,pagination:C.a},data:function(){return{currentTotal:7,currentPage:1,searchVal:"",lasrSearchVal:"",flag:!1,areaTrans:{1:"大陆",2:"港台",3:"欧美",4:"日韩",5:"其他"},genderTrans:{1:"男歌手",2:"女歌手",3:"组合乐队",4:"其他"},hotTrans:{1:"热门",0:"不热门"},loading:!1,tableData:[],multipleSelection:[],currentRow:null,isSearch:!1}},computed:{hasSelect:function(){return null!==this.currentRow},hasChecked:function(){return 0!==this.multipleSelection.length||null!==this.currentRow},hasSearch:function(){return""!==this.searchVal.trim()}},watch:{searchVal:function(e,t){""===e&&this.loadData()}},mounted:function(){this.loadData()},methods:{fetchData:function(){this.isSearch?this.search():this.loadData()},loadData:function(){var e=this;try{this.loading=!0,this.isSearch&&(this.currentPage=1,this.$refs.pageN.init()),this.isSearch=!1;var t={page_index:this.currentPage,page_size:7};Object(c.o)(t).then(function(t){0===t.error_code&&(e.loading=!1,e.currentTotal=t.data[0].total,t.data[0].data.map(function(t){t.is_hot=e.hotTrans[t.is_hot],t.gender=e.genderTrans[t.gender],t.area=e.areaTrans[t.area]}),e.tableData=t.data[0].data)})}catch(e){this.$message.error("获取数据失败")}},CurrentPage:function(e){this.currentPage=e,this.fetchData()},search:function(){var e=this;if(""!==this.searchVal.trim()){this.loading=!0,this.flag?this.lasrSearchVal!==this.searchVal&&(this.currentPage=1,this.$refs.pageN.init(),this.flag=!1):(this.lasrSearchVal=this.searchVal,this.flag=!0),this.isSearch||(this.currentPage=1,this.$refs.pageN.init()),this.isSearch=!0;var t="/Artists/"+this.searchVal+"/"+this.currentPage+"/7";Object(c.s)(t).then(function(t){0===t.error_code?(e.loading=!1,e.currentTotal=t.data[0].total,t.data[0].data.map(function(t){t.is_hot=e.hotTrans[t.is_hot],t.gender=e.genderTrans[t.gender],t.area=e.areaTrans[t.area]}),e.tableData=t.data[0].data):e.loading=!1})}},handleSelectionChange:function(e){this.multipleSelection=e},handleCurrenttableChange:function(e){this.currentRow=e},edit:function(){var e=this;e.$refs.doDialog.open(this.currentRow),e.$refs.doDialog.onClosed=function(t){t.option===h.a.CONFIRM&&e.fetchData()}},addNew:function(){var e=this;e.$refs.doDialog.open(),e.$refs.doDialog.onClosed=function(t){console.log(t),console.log(h.a.CONFIRM),t.option===h.a.CONFIRM&&e.fetchData()}},remove:function(){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[];e.multipleSelection.length>0?t=e.multipleSelection:t.push(e.currentRow);var a=[];t.map(function(e){a.push(e.id)});var i={deleted_id:a};Object(c.g)(i).then(function(t){1===t.error_code&&(e.fetchData(),e.$message({type:"success",message:"删除成功!"}))})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},openUrl:function(e){var t={name:e.name,url:e.avatar_file};this.$refs.imgShow.open(t)}}},x=(a("1acy"),Object(f.a)(T,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("titleLeft")],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticStyle:{"text-align":"right"}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}})],1)]),e._v(" "),a("el-col",{attrs:{span:1}},[a("el-button",{attrs:{disabled:!e.hasSearch,type:"primary",icon:"el-icon-search",circle:""},on:{click:function(t){e.search()}}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticStyle:{"text-align":"right"}},[this.$operationTrans[this.$store.state.routerAuth.canAdd]?a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",circle:""},on:{click:function(t){e.addNew()}}}):e._e(),e._v(" "),this.$operationTrans[this.$store.state.routerAuth.canEdit]?a("el-button",{attrs:{disabled:!e.hasSelect,type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(t){e.edit()}}}):e._e(),e._v(" "),this.$operationTrans[this.$store.state.routerAuth.canDelete]?a("el-button",{attrs:{disabled:!e.hasChecked,type:"warning",icon:"el-icon-delete",circle:""},on:{click:function(t){e.remove()}}}):e._e()],1)])],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"floRight",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"","highlight-current-row":"","tooltip-effect":"dark"},on:{"current-change":e.handleCurrenttableChange,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名字"}}),e._v(" "),a("el-table-column",{attrs:{prop:"area",label:"地域"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"birthday",label:"生日"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"is_hot",label:"热度"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"图片查看",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.openUrl(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"block",staticStyle:{"text-align":"right"}},[a("pagination",{ref:"pageN",attrs:{"current-total":e.currentTotal,"current-page":e.currentPage},on:{CurrentPage:e.CurrentPage}})],1)]),e._v(" "),a("do-dialog",{ref:"doDialog"}),e._v(" "),a("imgShow",{ref:"imgShow"}),e._v(" "),a("imgUpload",{ref:"imgUpload"})],1)},[],!1,null,null,null));x.options.__file="index.vue";t.default=x.exports},tPxi:function(e,t,a){}}]);