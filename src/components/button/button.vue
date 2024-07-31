<template>
  <el-button :class="`zrh-button ${type}`" @click="showMsg">
    {{ label }}
  </el-button>
</template>

<script setup name="ZrhButton">
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },

  type: {
    type: String,
    default: 'primary'
  }
})

const msg = ref('abc')

const showMsg = () => {
  console.log(msg.value)
}
</script>

<style lang="scss" scoped>
.zrh-button {
  padding: 10px 20px;
  font-size: 20px;
  user-select: auto;
}

.zrh-button.primary {
  color: white;
  background-color: #007bff;
}
</style>
