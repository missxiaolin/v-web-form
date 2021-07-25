<template>
  <div id="pg-index">
      <Header/>
  </div>
</template>

<script>
import Header from '@/components/header';

export default {
  name: "intro",
  components: {
      Header
  }
};
</script>

<style lang="scss">
#pg-index {
  width: 100%;
  background: #fff;
  overflow-x: hidden;

}
</style>
