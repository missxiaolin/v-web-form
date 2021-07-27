<template>
  <div id="pg-index">
    <Header />
    <div class="kaer-home-banner">
      <div class="fd-home-banner-content">
        <div class="fd-home-banner-content-info">
          <h1 class="" style="transform: translate(0px, 0px); opacity: 1">
            极简制作，一键呈现
          </h1>
          <p class="" style="transform: translate(0px, 0px); opacity: 1">
            海量组件、模板，随意使用<br />
            支持自定义开发组件、模板，满足不同场景的业务诉求
          </p>
          <div class="" style="transform: translate(0px, 0px); opacity: 1">
            <router-link to="/dashboard" data-external="true">
              <button type="button" class="fdAnt-btn fd-guide-btn">
                <span>开始使用</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "intro",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#pg-index {
  width: 100%;
  background: #fff;
  overflow-x: hidden;
}
</style>
