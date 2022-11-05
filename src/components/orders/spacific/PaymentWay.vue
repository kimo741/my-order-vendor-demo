<template>
  <q-card class="my-card payment-way q-my-md" flat dir="rtl">
    <q-card-section>
      <div class="text-h2 text-bold">طرق الدفع:</div>
      <sellect-payment-getway
        selectedPayment="ahmed khaled *****123456789123"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import SellectPaymentGetway from "./SellectPaymentGetway.vue";
export default {
  components: { SellectPaymentGetway },
};
</script>

<style lang="scss" scoped>
.my-card {
  border-radius: 9px;
}
</style>
