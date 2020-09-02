<template>
  <div id="app" class="wrapper">
    <SideBar />
    <Content />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Content
  }
};
</script>

<style></style>
