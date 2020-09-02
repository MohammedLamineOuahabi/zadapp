<template>
  <div class="page-content-wrapper menu-closed" id="page-content-wrapper">
    <Header />
    <PageHead />
    <PageContent />
    <Footer />
    <Modal />
  </div>
</template>

<script>
import Header from "./Header.vue";
import PageHead from "./PageHead.vue";
import PageContent from "./PageContent.vue";
import Footer from "./Footer.vue";
import Modal from "./Modal.vue";

export default {
  name: "Content",
  components: {
    Header: Header,
    PageHead: PageHead,
    PageContent: PageContent,
    Footer: Footer,
    Modal: Modal
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
