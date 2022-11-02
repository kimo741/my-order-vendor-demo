<template>
  <div dir="rtl" class="q-my-sm full-width row justify-between">
    <div class="col">
      <div class="text-body2" style="font-weight: 500">{{ label }}</div>
    </div>
    <div class="col text-body2 text-left">
      <q-btn
        v-if="showBtn"
        @click="$emit('showAll')"
        size="sm"
        label="مشاهدةالكل"
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
    showBtn: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
};
</script>

<style>
</style>
