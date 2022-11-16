<template>
  <div
    style="width: max-content"
    class="
      q-px-md
      flex
      q-my-sm
      justify-between
      items-center
      bg-grey-2
      border-label
    "
  >
    <div class="text-hint text-sm">{{ title }}</div>
    <div class="text-dark text-sm q-mx-sm text-bold">
      {{ value }} {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "label", "value"],
};
</script>

<style scoped>
.border-label {
  border: 0.5px solid rgba(190, 189, 189, 0.5);
}
</style>
