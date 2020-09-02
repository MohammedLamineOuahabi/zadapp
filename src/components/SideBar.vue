<template>
  <div id="sidebar-wrapper" class="">
    <button class="btn-menu-close"><i class="zid zid-close"></i></button>
    <div class="sidebar-content">
      <div class="sidebar-head">
        <div class="brand">
          <img src="images/no-logo.png" alt="" />
          <div class="name">اسم المتجر</div>
        </div>
        <a class="btn-view" href="#"><i class="zid zid-eye"></i>مشاهدة المتجر</a>
        <a class="btn-edit" href="#"><i class="zid zid-pen"></i>تخصيص الواجهة</a>
      </div>
      <div class="sidebar-body">
        <ul class="main-menu">
          <li>
            <a href="index.html"><i class="zid zid-home"></i>الرئيسية</a>
          </li>
          <li>
            <a href="reports.html"><i class="zid zid-pie-chart"></i>التقارير</a>
          </li>
          <li>
            <a data-toggle="collapse" href="#menu-item1" class="collapsed"
              ><i class="zid zid-basket"></i>الطلبات</a
            >
            <div class="collapse" id="menu-item1">
              <ul class="sub-menu">
                <li><a href="orders.html">الطلبات</a></li>
                <li><a href="order.html">إنشاء طلب</a></li>
                <li><a href="drafts.html">المسودات</a></li>
                <li><a href="order-notifications.html">رسائل حالات الطلبات</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#menu-item2" class="collapsed"
              ><i class="zid zid-apps"></i>المنتجات</a
            >
            <div class="collapse" id="menu-item2">
              <ul class="sub-menu">
                <li><a href="products.html">جميع المنتجات</a></li>
                <li><a href="categories.html">تصنيفات المنتجات</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#menu-item3" class="collapsed"
              ><i class="zid zid-dart-board"></i>التسويق</a
            >
            <div class="collapse" id="menu-item3">
              <ul class="sub-menu">
                <li><a href="coupons.html">قسائم التخفيض</a></li>
                <li><a href="discounts.html">الخصومات التلقائية</a></li>
                <li><a href="sms-pricing.html">حملات الرسائل النصية</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="customers.html"><i class="zid zid-user"></i>العملاء</a>
          </li>
          <li>
            <a data-toggle="collapse" href="#menu-item4" class="collapsed"
              ><i class="zid zid-viral"></i>منظومة زد</a
            >
            <div class="collapse" id="menu-item4">
              <ul class="sub-menu">
                <li><a href="delivery-options.html">الشحن والتوصيل</a></li>
                <li><a href="payment-options.html">الدفع</a></li>
                <li><a href="#">إدارة الطلبات والعمليات</a></li>
                <li><a href="#">التصوير</a></li>
                <li><a href="#">التصميم</a></li>
                <li><a href="#">التغليف</a></li>
                <li><a href="#">مساحات العمل المشتركة</a></li>
                <li><a href="other-services.html">خدمات أخرى</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#"><i class="zid zid-users"></i>فريق العمل</a>
          </li>
          <li>
            <a href="settings.html"><i class="zid zid-cogwheel"></i>الإعدادات</a>
          </li>
          <li>
            <a data-toggle="collapse" href="#menu-item5" class="collapsed"
              ><i class="zid zid-options"></i>خيارات الواجهة</a
            >
            <div class="collapse" id="menu-item5">
              <ul class="sub-menu">
                <li><a href="catalog-theme.html">تخصيص</a></li>
                <li><a href="extra-pages.html">صفحات إضافية</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button id="btn-mode" class="btn-mode"><i class="zid zid-mode"></i>واجهة ليلية</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
