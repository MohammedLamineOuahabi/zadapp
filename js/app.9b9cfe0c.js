(function(a){function e(e){for(var s,c,o=e[0],d=e[1],r=e[2],v=0,b=[];v<o.length;v++)c=o[v],Object.prototype.hasOwnProperty.call(t,c)&&t[c]&&b.push(t[c][0]),t[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(a[s]=d[s]);n&&n(e);while(b.length)b.shift()();return l.push.apply(l,r||[]),i()}function i(){for(var a,e=0;e<l.length;e++){for(var i=l[e],s=!0,o=1;o<i.length;o++){var d=i[o];0!==t[d]&&(s=!1)}s&&(l.splice(e--,1),a=c(c.s=i[0]))}return a}var s={},t={app:0},l=[];function c(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return a[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=a,c.c=s,c.d=function(a,e,i){c.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:i})},c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,e){if(1&e&&(a=c(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var s in a)c.d(i,s,function(e){return a[e]}.bind(null,s));return i},c.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(e,"a",e),e},c.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},c.p="/zadapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var n=d;l.push([0,"chunk-vendors"]),i()})({0:function(a,e,i){a.exports=i("56d7")},"56d7":function(a,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("7a23"),t={id:"app",class:"wrapper"};function l(a,e){var i=Object(s["g"])("SideBar"),l=Object(s["g"])("Content");return Object(s["f"])(),Object(s["b"])("div",t,[Object(s["e"])(i),Object(s["e"])(l)])}var c={id:"sidebar-wrapper",class:""},o=Object(s["c"])('<button class="btn-menu-close"><i class="zid zid-close"></i></button><div class="sidebar-content"><div class="sidebar-head"><div class="brand"><img src="images/no-logo.png" alt=""><div class="name">اسم المتجر</div></div><a class="btn-view" href="#"><i class="zid zid-eye"></i>مشاهدة المتجر</a><a class="btn-edit" href="#"><i class="zid zid-pen"></i>تخصيص الواجهة</a></div><div class="sidebar-body"><ul class="main-menu"><li><a href="index.html"><i class="zid zid-home"></i>الرئيسية</a></li><li><a href="reports.html"><i class="zid zid-pie-chart"></i>التقارير</a></li><li><a data-toggle="collapse" href="#menu-item1" class="collapsed"><i class="zid zid-basket"></i>الطلبات</a><div class="collapse" id="menu-item1"><ul class="sub-menu"><li><a href="orders.html">الطلبات</a></li><li><a href="order.html">إنشاء طلب</a></li><li><a href="drafts.html">المسودات</a></li><li><a href="order-notifications.html">رسائل حالات الطلبات</a></li></ul></div></li><li><a data-toggle="collapse" href="#menu-item2" class="collapsed"><i class="zid zid-apps"></i>المنتجات</a><div class="collapse" id="menu-item2"><ul class="sub-menu"><li><a href="products.html">جميع المنتجات</a></li><li><a href="categories.html">تصنيفات المنتجات</a></li></ul></div></li><li><a data-toggle="collapse" href="#menu-item3" class="collapsed"><i class="zid zid-dart-board"></i>التسويق</a><div class="collapse" id="menu-item3"><ul class="sub-menu"><li><a href="coupons.html">قسائم التخفيض</a></li><li><a href="discounts.html">الخصومات التلقائية</a></li><li><a href="sms-pricing.html">حملات الرسائل النصية</a></li></ul></div></li><li><a href="customers.html"><i class="zid zid-user"></i>العملاء</a></li><li><a data-toggle="collapse" href="#menu-item4" class="collapsed"><i class="zid zid-viral"></i>منظومة زد</a><div class="collapse" id="menu-item4"><ul class="sub-menu"><li><a href="delivery-options.html">الشحن والتوصيل</a></li><li><a href="payment-options.html">الدفع</a></li><li><a href="#">إدارة الطلبات والعمليات</a></li><li><a href="#">التصوير</a></li><li><a href="#">التصميم</a></li><li><a href="#">التغليف</a></li><li><a href="#">مساحات العمل المشتركة</a></li><li><a href="other-services.html">خدمات أخرى</a></li></ul></div></li><li><a href="#"><i class="zid zid-users"></i>فريق العمل</a></li><li><a href="settings.html"><i class="zid zid-cogwheel"></i>الإعدادات</a></li><li><a data-toggle="collapse" href="#menu-item5" class="collapsed"><i class="zid zid-options"></i>خيارات الواجهة</a><div class="collapse" id="menu-item5"><ul class="sub-menu"><li><a href="catalog-theme.html">تخصيص</a></li><li><a href="extra-pages.html">صفحات إضافية</a></li></ul></div></li><li><button id="btn-mode" class="btn-mode"><i class="zid zid-mode"></i>واجهة ليلية</button></li></ul></div></div>',2);function d(a,e){return Object(s["f"])(),Object(s["b"])("div",c,[o])}var r={name:"SideBar",props:{msg:String}};r.render=d;var n=r,v={class:"page-content-wrapper menu-closed",id:"page-content-wrapper"};function b(a,e){var i=Object(s["g"])("Header"),t=Object(s["g"])("PageHead"),l=Object(s["g"])("PageContent"),c=Object(s["g"])("Footer"),o=Object(s["g"])("Modal");return Object(s["f"])(),Object(s["b"])("div",v,[Object(s["e"])(i),Object(s["e"])(t),Object(s["e"])(l),Object(s["e"])(c),Object(s["e"])(o)])}var m={id:"status-bar",class:"container-fluid"},p=Object(s["c"])('<div class="row"><div class="col-3 col-md-5 col-lg-5"><div class="time-holder"><button class="btn-menu-toggle"><div class="toggle-icon"><div class="icon-shape"></div></div></button><div class="time"><i class="zid zid-clock"></i>الساعة ٨:٣٨ صباحا بتوقيت الرياض</div></div></div><div class="col-9 col-md-7 col-lg-7"><div class="search-holder"><form><input type="text" placeholder="إبحث هنا..."><button type="submit"><i class="zid zid-find"></i></button></form><a class="btn-logout" href="#"><span class="text">تسجيل خروج</span><i class="zid zid-exit"></i></a></div></div></div>',1);function u(a,e){return Object(s["f"])(),Object(s["b"])("div",m,[p])}var f={name:"Header",props:{msg:String}};f.render=u;var h=f,g={class:"container-fluid page-head"},O=Object(s["c"])('<div class="row"><div class="col-md-12"><div class="page-title">طرق الدفع</div><ol class="breadcrumb breadcrumb-sm"><li class="breadcrumb-item"><a href="settings.html">الإعدادات</a></li><li class="breadcrumb-item active">طرق الدفع</li></ol></div></div>',1);function j(a,e){return Object(s["f"])(),Object(s["b"])("div",g,[O])}var y={name:"PageHead",props:{msg:String}};y.render=j;var w=y,z={class:"container-fluid other-content"},x=Object(s["c"])('<div class="row"><div class="col-12"><div class="alert alert-primary"> عند تفعيلك لبوابات الدفع الموضحة ادناه، ستتمكن من ربط متجرك الإلكتروني بإحدى تلك البوابات المختلفة. كل بوابة من البوابات لديها إشتراطات معينة لتفعيل حسابك لديهم. خيارات الدفع تتيح لك استقبال المدفوعات الإلكترونية عبر البطاقات الإئتمانية وبعضهم يدعم خيار: مدى، للدفع الإلكتروني سنقوم بربطك الكترونيًا معهم ولكنك بحاجة أيضًا الى تفعيل اشتراكك لديهم وتعبئة النماذج اللازمة. </div></div><div class="col-12"><div class="other-box extended"><div class="other-box-head with-border"><div class="row"><div class="col-sm-12"><div class="content-title other-color">بوابات الدفع</div></div></div></div><div class="other-box-content"><div class="row"><div class="col-md-6"><div class="mini-info-box with-border"><span class="featured-badge">الاختيار المفضل</span><i class="zid zid-tap-logo"></i><div class="title">بوابة تاب</div><div class="subtitle">يمكنك تفعيل بوابة تاب للدفع</div><a href="payment-options-tap.html" class="btn btn-primary btn-sm">اضغط لمزيد من التفاصيل</a></div></div><div class="col-md-6"><div class="mini-info-box with-border"><i class="fas fa-money-check-alt"></i><div class="title">بوابات دفع أخرى</div><div class="subtitle">من هنا يمكنك تفعيل بوابات أخرى</div><a href="payment-options-gateways.html" class="btn btn-primary btn-sm">اضغط لمزيد من التفاصيل</a></div></div></div><div class="row"><div class="col-md-12"><div class="info-with-img"><div class="comp-logo-holder"><img class="img" src="images/apple-pay-logo.svg" alt=""></div><span class="text">يمكنك الان تفعيل Apple Pay في متجرك</span><a href="payment-options-apple-pay.html" class="btn btn-success btn-sm">اضغط لمعرفة المزيد</a></div></div></div></div></div></div><div class="col-12"><div class="other-box extended"><div class="other-box-head with-border"><div class="row"><div class="col-6 my-auto"><div class="content-title other-color">التحويل البنكي</div></div><div class="col-6"><div class="opp-dir"><a href="#" class="btn btn-success btn-sm" data-toggle="modal" data-target="#bankModal">إضافة حساب جديد</a></div></div></div></div><div class="other-box-content"><div class="row"><div class="col-md-12"><div class="bank-list"><div class="row"><div class="col-6 my-auto"><h6>مصرف الراجحي</h6></div><div class="col-6"><div class="options opp-dir"><a href="#" class="btn btn-icon-sm" data-toggle="modal" data-target="#bankModal"><i class="fas fa-pencil-alt"></i></a><a href="#" class="btn btn-icon-sm"><i class="far fa-trash-alt"></i></a></div></div><div class="col-12"><div class="img-with-details"><div class="comp-logo-holder"><img class="img" src="images/al-rajhi.png" alt=""></div><div class="details"><strong>المالك:</strong> محمد سامي<br><strong>رقم الحساب:</strong> 123456789012345<br><strong>الأيبان:</strong> SA1234567890123456789011<br></div></div></div></div><div class="row"><div class="col-6 my-auto"><h6>البنك الأهلي التجاري</h6></div><div class="col-6"><div class="options opp-dir"><a href="#" class="btn btn-icon-sm" data-toggle="modal" data-target="#bankModal"><i class="fas fa-pencil-alt"></i></a><a href="#" class="btn btn-icon-sm"><i class="far fa-trash-alt"></i></a></div></div><div class="col-12"><div class="img-with-details"><div class="comp-logo-holder"><img class="img" src="images/bank_ahli.png" alt=""></div><div class="details"><strong>المالك:</strong> متجرر اللبس الجميل للتجارة<br><strong>رقم الحساب:</strong> 123457889<br><strong>الأيبان:</strong> SA98002876190018718901<br></div></div></div></div><div class="row"><div class="col-6 my-auto"><h6>البنك الأول</h6></div><div class="col-6"><div class="options opp-dir"><a href="#" class="btn btn-icon-sm" data-toggle="modal" data-target="#bankModal"><i class="fas fa-pencil-alt"></i></a><a href="#" class="btn btn-icon-sm"><i class="far fa-trash-alt"></i></a></div></div><div class="col-12"><div class="img-with-details"><div class="comp-logo-holder"><img class="img" src="images/bank_holandi.png" alt=""></div><div class="details"><strong>المالك:</strong> Test@test<br><strong>رقم الحساب:</strong> 3456789765437<br><strong>الأيبان:</strong> Sa5467890-98765435567890<br></div></div></div></div></div></div></div></div></div></div></div><div class="row"><div class="col-12"><div class="learn-more-btn-holder"><a href="#" class="btn btn-outline-primary btn-sm">لمعرفة المزيد عن الدفع<i class="fas fa-question"></i></a></div></div></div>',2);function S(a,e){return Object(s["f"])(),Object(s["b"])("div",z,[x])}var k={name:"PageContent",props:{msg:String}};k.render=S;var P=k,X={id:"footer",class:"container-fluid"},M=Object(s["e"])("div",{class:"row"},[Object(s["e"])("div",{class:"col"},[Object(s["e"])("div",{class:"copyright"},[Object(s["d"])("Copyright "),Object(s["e"])("b",null,"Zid App"),Object(s["d"])(" © 2016-2020")])])],-1);function C(a,e){return Object(s["f"])(),Object(s["b"])("div",X,[M])}var _={name:"Footer",props:{msg:String}};_.render=C;var A=_,H={class:"modal modal-side-text-align fade",id:"bankModal",tabindex:"-1",role:"dialog","aria-hidden":"true"},B=Object(s["e"])("div",{class:"modal-dialog modal-md",role:"document"},[Object(s["e"])("div",{class:"modal-content"},[Object(s["e"])("div",{class:"modal-header"},[Object(s["e"])("div",{class:"modal-title-sm"},"أضف حساب بنكي"),Object(s["e"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(s["e"])("span",{"aria-hidden":"true"},"×")])]),Object(s["e"])("div",{class:"modal-body"},[Object(s["e"])("form",null,[Object(s["e"])("div",{class:"form-row"},[Object(s["e"])("div",{class:"col-md-6"},[Object(s["e"])("div",{class:"form-group"},[Object(s["e"])("label",{for:""},"اسم البنك"),Object(s["e"])("div",{class:"select-chosen-container select-chosen-container-sm"},[Object(s["e"])("select",{"data-placeholder":"Choose a Bank...",class:"chosen-select"},[Object(s["e"])("option",null,"البنك الأهلي التجاري"),Object(s["e"])("option",null,"ساب"),Object(s["e"])("option",null,"البنك السعودي الفرنسي"),Object(s["e"])("option",null,"البنك الأول"),Object(s["e"])("option",null,"البنك السعودي للاستثمار"),Object(s["e"])("option",null,"البنك العربي الوطني")])])])]),Object(s["e"])("div",{class:"col-md-6"},[Object(s["e"])("div",{class:"form-group"},[Object(s["e"])("label",{for:"input1"},"رقم الحساب"),Object(s["e"])("input",{type:"text",class:"form-control form-control-sm",id:"input1",placeholder:"123456789XXXXXX"})])])]),Object(s["e"])("div",{class:"form-row"},[Object(s["e"])("div",{class:"col-md-6"},[Object(s["e"])("div",{class:"form-group"},[Object(s["e"])("label",{for:"input2"},"الأيبان"),Object(s["e"])("input",{type:"text",class:"form-control form-control-sm",id:"input2",placeholder:"SA03 8000 0000 6080 XXXX XXXX"})])]),Object(s["e"])("div",{class:"col-md-6"},[Object(s["e"])("div",{class:"form-group"},[Object(s["e"])("label",{for:"input3"},"اسم المستفيد"),Object(s["e"])("input",{type:"text",class:"form-control form-control-sm",id:"input3",placeholder:"Name of the account owner"})])])])])]),Object(s["e"])("div",{class:"modal-footer"},[Object(s["e"])("button",{type:"button",class:"btn btn-accept btn-sm"},"حفظ"),Object(s["e"])("button",{type:"button",class:"btn btn-grey btn-sm","data-dismiss":"modal"},"إغلاق")])])],-1);function F(a,e){return Object(s["f"])(),Object(s["b"])("div",H,[B])}var T={name:"Modal",props:{msg:String}};T.render=F;var J=T,q={name:"Content",components:{Header:h,PageHead:w,PageContent:P,Footer:A,Modal:J}};q.render=b;var N=q,Z={name:"App",components:{SideBar:n,Content:N}};Z.render=l;var D=Z;Object(s["a"])(D).mount("#app")}});
//# sourceMappingURL=app.9b9cfe0c.js.map