<template>
  <Header type="white" class="edit-menu">
    <template #pageTitle>
      <div class="page-title">
        
      </div>
    </template>
  </Header>
  <div>edit</div>
</template>


<script>
import Header from "@/components/header";
import { SettingOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { toRefs } from "vue";

export default {
  name: "Edit",
  setup() {
    
  },
  components: {
    Header,
    SettingOutlined,
  },
};
</script>

<style lang="scss">
</style>