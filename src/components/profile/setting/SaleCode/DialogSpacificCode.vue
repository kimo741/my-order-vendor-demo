<template>
  <q-card class="discaound-details q-py-md q-px-lg main-rounded" dir="rtl">
    <q-icon
      class="discaound-details__label"
      size="md"
      name="img:/icon/label.png"
    />
    <q-icon
      class="discaound-details__close"
      size="xs"
      name="eva-close-outline"
      @click="$emit('closeDialog')"
    />
    <q-card-section class="q-pa-md">
      <div class="text-center text-primary q-my-md text-bold">
        خصم {{ dataCard.value }}% علي
        {{
          dataCard.type == "g" ? "جميع المنتجات" : dataCard.products.toString()
        }}
      </div>
      <div class="text-sm text-hint">{{ dataCard.disc }}</div>
      <div class="flex text-right items-center q-my-sm">
        <div class="text-right col">كود الخصم</div>
        <div class="q-px-lg q-py-xs row justify-center items-center bg-grey-3">
          <div class="text-dark text-sm">{{ dataCard.code }}</div>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <div class="text-right text-sm text-hint">التفاصيل</div>
    <DetailsFeild title="استخدام اليوم" value="250" />
    <DetailsFeild title="اخر استخدام منذ" value="3 " label="ساعات" />
    <DetailsFeild title="عدد الطلبات" value="30 " label="طبق" />
    <DetailsFeild title="المبلغ الكلي" value="820 " label="ر.س" />
    <DetailsFeild title="صلاحية الانتهاء :" :value="dataCard.end_date" />
  </q-card>
</template>

<script>
import DetailsFeild from "./DetailsFeild.vue";

export default {
  props: {
    dataCard: {
      type: Object,
      required: true,
    },
  },
  components: { DetailsFeild },
};
</script>

<style lang="scss" scoped>
.discaound-details {
  &__label {
    position: absolute;
    left: 10px;
    top: -3px;
    &::after {
      content: "رائع";
      position: absolute;
      left: 0;
      top: -3px;
      font-size: 10px;
      color: white;
    }
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
