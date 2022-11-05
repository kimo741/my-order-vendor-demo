<template>
  <q-card class="my-card prsonal-info q-my-md" flat dir="rtl">
    <q-card-section>
      <div class="text-h2 text-bold">عنوان التوصيل :</div>
      <div class="text-hint q-my-md">{{ adressInfo }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    adressInfo: {
      type: String,
      default: "عنوان الطلب",
    },
  },
};
</script>

<style scoped>
.prsonal-info {
  border-radius: 10px;
}
</style>
