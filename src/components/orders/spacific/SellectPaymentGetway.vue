<template>
  <div class="container q-my-md" dir="rtl">
    <div @click="selectPayment" class="payment-feild row justify-between">
      <q-radio dense v-model="payment" val="master_card" />
      <div class="col row justify-end items-center">
        <div class="q-ml-sm">{{ selectedPayment }}</div>
        <q-icon class="" size="sm" name="img:icon/XMLID.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["selectedPayment"],
  setup() {
    return {
      payment: ref("master_card"),
    };
  },
};
</script>

<style lang="scss" scoped>
.payment-feild {
  background-color: $bg_slide;
  padding: 10px;
  border-radius: 10px;
}
</style>
