<template>
  <q-card class="my-card prsonal-info q-my-md" flat dir="rtl">
    <q-card-section>
      <div class="text-h2 text-500 text-primary">ملخص الدفع :</div>
      <!-- /////////// -->
      <!-- رسوم التوصيل -->
      <!-- /////////// -->
      <div class="row justify-between items-center q-my-sm">
        <div class="col-6 text-right">رسوم التوصيل</div>
        <div class="col-6 text-left">{{ bill.delivry_bill }} ر.س</div>
      </div>
      <!-- /////////// -->
      <!-- رسوم الخدمة -->
      <!-- /////////// -->
      <div class="row justify-between items-center q-my-sm">
        <div class="col-6 text-right">رسوم الخدمة</div>
        <div class="col-6 text-left">{{ bill.service_bill }} ر.س</div>
      </div>
      <!-- /////////// -->
      <!-- رسوم الضريبة -->
      <!-- /////////// -->
      <div class="row justify-between items-center q-my-sm">
        <div class="col-6 text-right flex items-center">
          <div class="q-ml-sm">سعر الضريبه</div>
          <div class="text-hint" style="font-size: 10px">15%</div>
        </div>
        <div class="col-6 text-left">{{ bill.tax_bill }} ر.س</div>
      </div>
      <!-- /////// -->
      <!-- المجموع -->
      <!-- /////// -->
      <div class="row justify-between items-center text-bold q-my-sm">
        <div class="col-6 text-right">المجموع</div>
        <div class="col-6 text-left">{{ bill.sum }} ر.س</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["bill"],
};
</script>

<style>
</style>
