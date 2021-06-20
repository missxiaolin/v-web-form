<template>
  <a-spin :spinning="creating" tip="Loading...">
    <Header />
    <div class="index-wrapper">
      <a-card
        :key="item.id"
        v-for="item in templateList"
        hoverable
        style="width: 240px"
        @click="() => initPage(item)"
      />
      <template>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </template>
    </div>
  </a-spin>
</template>

<script>
import Header from "@/components/header";
import { reactive, toRefs } from "vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  setup() {
    const state = reactive({
      templateList: [],
      createDialog: false,
      pageInfo: {},
      creating: false,
    });

    const initPage = (config) => {
      state.pageInfo = config;
      state.createDialog = true;
    };

    return {
      ...toRefs(state),
      initPage,
    };
  },
};
</script>

<style lang="scss">
.index-wrapper {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}
</style>
