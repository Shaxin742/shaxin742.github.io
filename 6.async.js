(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{zX0F:function(a,e,t){"use strict";var s=t("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(t("MVZn")),r=s(t("o0o1")),l=t("dCQc"),i={namespace:"chart",state:{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[],loading:!1},effects:{fetch:r.default.mark(function a(e,t){var s,n,i;return r.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=t.call,n=t.put,a.next=3,s(l.fakeChartData);case 3:return i=a.sent,a.next=6,n({type:"save",payload:i});case 6:case"end":return a.stop()}},a,this)}),fetchSalesData:r.default.mark(function a(e,t){var s,n,i;return r.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=t.call,n=t.put,a.next=3,s(l.fakeChartData);case 3:return i=a.sent,a.next=6,n({type:"save",payload:{salesData:i.salesData}});case 6:case"end":return a.stop()}},a,this)})},reducers:{save:function(a,e){var t=e.payload;return(0,n.default)({},a,t)},clear:function(){return{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]}}}};e.default=i}}]);