<template>
  <div class="zrh-label">
    {{ label }}
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.zrh-label {
  color: orange;
  font-size: 20px;
}
</style>
