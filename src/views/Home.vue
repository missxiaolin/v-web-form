<template>
  <a-spin :spinning="creating" tip="Loading...">
  </a-spin>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Home',
  components: {
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
