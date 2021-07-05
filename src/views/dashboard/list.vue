<template>
  <div class="user-page-list">
    <div v-if="!list.length" class="empty-list">
      <a-empty>
        <template #description>
          <span> 暂无页面，快去创建吧 </span>
        </template>
        <a-button type="primary">
          <router-link to="/home">创建页面</router-link>
        </a-button>
      </a-empty>
    </div>
    <div class="list" v-else>
      <a-button class="top">
        <router-link to="/home">创建页面</router-link>
      </a-button>
      <a-list
          class="demo-loadmore-list"
          :loading="loading"
          item-layout="horizontal"
          :data-source="list"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions>
              <router-link :to="`/edit?id=${item.id}&pageId=${item.git_config.id}`">编辑</router-link>
            </template>
            <a-list-item-meta>
              <template #description>

              </template>
              <template #title>
                {{ item.pageConfig.config.project_name }}
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>


<script>
import { reactive, toRefs } from "vue";
import { useLoadList } from './hooks';

export default {
  name: "DashboardList",
  async setup() {
    const state = reactive({
      list: [],
    });
    const cancel = () => {};

    const {loading, loadFn} = useLoadList();
    state.list = await loadFn();

    return {
      loading,
      ...toRefs(state),
    };
  },
};
</script>


<style lang="scss">
.user-page-list {
  background: #f5f5f5;
  height: calc(~"100vh - 60px");
  overflow: auto;
  .list {
    width: 700px;
    margin: 0 auto;
    .top {
      margin: 20px 20px 20px 0;
    }
    .demo-loadmore-list {
      background: #fff;
      padding: 20px 30px;
    }
  }
  .empty-list {
    padding-top: 150px;
  }
  .ant-list-item-meta-avatar {
    width: 100px;
    height: 100px;
    .anticon {
      display: inline-block;
      width: 100px;
      height: 100px;
      .icon {
        width: 100px;
        height: 100px;
        display: inline-block;
        font-size: 20px;
      }
    }
  }
}
</style>