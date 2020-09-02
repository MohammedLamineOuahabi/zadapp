<template>
  <div id="status-bar" class="container-fluid">
    <div class="row">
      <div class="col-3 col-md-5 col-lg-5">
        <div class="time-holder">
          <button class="btn-menu-toggle">
            <div class="toggle-icon">
              <div class="icon-shape"></div>
            </div>
          </button>
          <div class="time"><i class="zid zid-clock"></i>الساعة ٨:٣٨ صباحا بتوقيت الرياض</div>
        </div>
      </div>
      <div class="col-9 col-md-7 col-lg-7">
        <div class="search-holder">
          <form>
            <input type="text" placeholder="إبحث هنا..." /><button type="submit">
              <i class="zid zid-find"></i>
            </button>
          </form>
          <a class="btn-logout" href="#"
            ><span class="text">تسجيل خروج</span><i class="zid zid-exit"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
