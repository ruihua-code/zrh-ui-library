<template>
  <div class="zrh-label">
    {{ label }}
  </div>
</template>
<script setup name="ZrhLabel">
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.zrh-label {
  width: 100px;
  height: 60px;
  font-size: 20px;
  color: red;
}
</style>
