<template>
  <div dir="rtl" class="q-my-sm full-width row justify-between">
    <div class="col">
      <div class="text-body2 text-bold">{{ label }}</div>
    </div>
    <div class="col text-body2 text-left">
      <q-btn
        @click="$emit('showAll')"
        size="sm"
        label="مشاهدة الكل"
        flat
        color="primary"
      ></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
</style>
