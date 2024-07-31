<template>
  <div class="zrh-label">
    {{ label }}
  </div>
</template>
<script setup name="ZrhLabel">
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.zrh-label {
  color: red;
  font-size: 20px;
}
</style>
