<template>
  <q-page class="q-mx-sm">
    <!-- /////////// -->
    <!-- main header -->
    <!-- /////////// -->
    <DynamicHeader :searchIcon="true" title="الطلبات" :backIcon="true" />
    <!-- //////////////////////////////// -->
    <!-- time line bar for spacific order -->
    <!-- //////////////////////////////// -->
    <TimeLineBar :orderId="orderId" :orderCode="ordercode" />
    <!-- ////////// -->
    <!-- order info -->
    <!-- ////////// -->
    <SpacificOrderInfoCard />
    <!-- /////////// -->
    <!-- adress info -->
    <!-- /////////// -->
    <AdressInfo adressInfo="الرياض" />
    <!-- /////////// -->
    <!-- payment info -->
    <!-- /////////// -->
    <PaymentWay />
    <!-- /////////// -->
    <!-- Bill result -->
    <!-- /////////// -->
    <BillResalte :bill="bill" />
  </q-page>
</template>

<script>
import DynamicHeader from "../UI/DynamicHeader.vue";
import TimeLineBar from "src/components/orders/spacific/TimeLineBar.vue";
import SpacificOrderInfoCard from "src/components/orders/spacific/SpacificOrderInfoCard.vue";
import { reactive } from "vue";
import AdressInfo from "./spacific/AdressInfo.vue";
import SellectPaymentGetway from "./spacific/SellectPaymentGetway.vue";
import PaymentWay from "./spacific/PaymentWay.vue";
import BillResalte from "./spacific/BillResalte.vue";

export default {
  components: {
    DynamicHeader,
    TimeLineBar,
    SpacificOrderInfoCard,
    AdressInfo,
    SellectPaymentGetway,
    PaymentWay,
    BillResalte,
  },
  setup() {
    return {
      bill: reactive({
        delivry_bill: "20",
        service_bill: "8",
        tax_bill: "12",
        sum: "428",
      }),
    };
  },
  created() {
    AdressInfo; // this just for test
    this.orderId = this.$route.params.id;
    this.ordercode = this.$route.params.code;
  },
};
</script>

<style>
</style>
