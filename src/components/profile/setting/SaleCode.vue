<template>
  <DynamicHeader
    :addIcon="true"
    title="المدفوعات والمحفظة"
    :back-icon="true"
    @emitAdd="createCode"
  />
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader },
  setup() {
    return {
      codeOffer: ref(""),
    };
  },

  methods: {
    createCode() {},
  },
};
</script>

<style>
</style>
