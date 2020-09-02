<template>
  <div class="wrapper">
    <SideBar />
    <Content />
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import Content from "./Content.vue";
export default {
  name: "Wrapper",
  components: {
    SideBar,
    Content
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
