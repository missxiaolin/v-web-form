<template>
  <a-spin :spinning="creating" tip="Loading...">
    <Header />
  </a-spin>
</template>

<script>
import Header from '@/components/header';
import { reactive, toRefs } from 'vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  setup() {
    const state = reactive({
      creating: false,
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
