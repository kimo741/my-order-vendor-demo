<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      title="المدفوعات والمحفظة"
      :back-icon="true"
      :setingIcon="true"
    />
    <div class="current-credit column main-rounded">
      <div class="current-credit__title text-hint text-h2 q-my-sm">
        الرصيد الحالي
      </div>
      <div class="current-credit__value text-bold">950 ر.س</div>
    </div>
    <!-- <sellect-payment-getway
        selectedPayment="ahmed khaled *****123456789123"
      /> -->
    <div class="vertical-list">
      <q-card
        class="my-card bg-white"
        v-for="(card, i) in orders_cards"
        :key="i"
      >
        <q-card-section class="q-pa-0">
          <SellectPaymentGetway :selectedPayment="card.payment_card" />
        </q-card-section>
        <q-card-section class="q-pa-xs row justify-between">
          <div class="col text-right text-500">
            طلب رقم {{ card.order_numers }}#
          </div>
          <div class="col text-left justify-end flex">
            <q-icon size="xs" name="img:icon/location.png" />
            <div class="text-hint text-sm q-mx-sm">{{ card.location }}</div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-xs row justify-between">
          <div class="col text-right flex">
            <q-icon size="xs" name="img:icon/calendar.png" />
            <div class="text-hint text-sm q-mx-sm">{{ card.date }}</div>
          </div>
          <div class="col text-left justify-end flex">
            <q-icon size="xs" name="img:icon/time-hint.png" />
            <div class="text-hint text-sm q-mx-sm">{{ card.time }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import SellectPaymentGetway from "src/components/orders/spacific/SellectPaymentGetway.vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader, SellectPaymentGetway },
  setup() {
    return {
      orders_cards: ref([
        {
          id: "1",
          order_numers: "5465456454",
          location: "الرياض",
          payment_card: "ahmed khaled *****123456789123",
          date: "25/8/2022",
          time: "09:00 PM",
        },
        {
          id: "2",
          order_numers: "4123123123",
          location: "الرياض",
          payment_card: "ahmed khaled *****123456789123",
          date: "25/8/2022",
          time: "09:00 PM",
        },
        {
          id: "3",
          order_numers: "123123321",
          location: "الرياض",
          payment_card: "ahmed khaled *****123456789123",
          date: "25/8/2022",
          time: "09:00 PM",
        },
        {
          id: "4",
          order_numers: "4154523453",
          location: "الرياض",
          payment_card: "ahmed khaled *****123456789123",
          date: "25/8/2022",
          time: "09:00 PM",
        },
      ]),
    };
  },
};
</script>

<style lang="scss" scoped>
.current-credit {
  background-color: white;
  margin: 20px auto;
  padding: 30px;
  text-align: center;
  &__title {
  }
  &__title {
  }
}
</style>
