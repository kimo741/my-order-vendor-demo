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

    <SpacificOrderInfoCard />
  </q-page>
</template>

<script>
import DynamicHeader from "../UI/DynamicHeader.vue";
import TimeLineBar from "src/components/orders/spacific/TimeLineBar.vue";
import SpacificOrderInfoCard from "src/components/orders/spacific/SpacificOrderInfoCard.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader, TimeLineBar, SpacificOrderInfoCard },
  created() {
    // this just for test
    this.orderId = this.$route.params.id;
    this.ordercode = this.$route.params.code;
  },
};
</script>

<style>
</style>
