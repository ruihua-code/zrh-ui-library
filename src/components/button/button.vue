<template>
  <button :class="`zrh-button ${type}`">{{ label }}</button>
</template>

<script setup name="ZrhButton">
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'primary',
  },
});
</script>

<style lang="scss" scoped>
.zrh-button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  font-size: 20px;
}
.ui-button.primary {
  background-color: #007bff;
  color: white;
}
</style>
