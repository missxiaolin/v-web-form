<template>
  <div>
    <Header type="white" class="edit-menu"></Header>
    <Suspense>
      <template #default>
        <List />
      </template>
      <template #fallback>
        <a-spin />
      </template>
    </Suspense>
  </div>
</template>

<script>
import Header from "@/components/header";
import List from "./list";
export default {
  name: "Dashboard",
  components: {
    Header,
    List,
  },
};
</script>

<style lang="scss">
</style>