<template>
  <q-page class="q-mx-sm">
    <!-- //// -->
    <!-- main header -->
    <!-- //// -->
    <DynamicHeader title="الطلبات" />
    <!-- ///////////////////// -->
    <!-- input for main search -->
    <!-- ///////////////////// -->
    <MainSearchBar />
    <!-- //// -->
    <!-- taps -->
    <!-- //// -->
    <q-tabs
      v-model="tab"
      dense
      class="no-effict primary bg-taps"
      align="justify"
      indicator-color="transparent"
      narrow-indicator
      active-class="active-class"
    >
      <q-tab label="السابقة" name="past" />
      <q-tab label="الحاليه" name="current" />
      <q-tab label="جاري التجهيز" name="done" />
    </q-tabs>
    <q-tab-panels
      style="background: #eeeeee !important"
      class="no-effict q-my-lg"
      v-model="tab"
      animated
    >
      <!-- ////////// -->
      <!-- past panel -->
      <!-- ////////// -->
      <q-tab-panel
        class="q-pa-0 no-effict"
        style="background: #eeeeee !important"
        name="past"
      >
        <PastOrder
          :pastOrders="past_orders"
          @showMorePastOrder="showMoreInfo"
        />
      </q-tab-panel>
      <!-- ///////////// -->
      <!-- current panel -->
      <!-- ///////////// -->
      <q-tab-panel
        class="q-pa-0 no-effict"
        style="background: #eeeeee !important"
        name="current"
      >
        <CurentOrder
          @acceptOrder="acceptOrder"
          @rejectOrder="rejectOrder"
          @showMore="showMoreInfo"
          :orders="current_orders"
        />
      </q-tab-panel>
      <!-- ///////////////// -->
      <!-- in progress panel -->
      <!-- ///////////////// -->
      <q-tab-panel
        class="q-pa-0 no-effict"
        style="background: #eeeeee !important"
        name="done"
      >
        <DoneOrder
          :orders="done_orders"
          @showMore="showMoreInfo"
          @doneOrder="doneOrder"
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { ref } from "vue";
import CurentOrder from "src/components/orders/CurentOrder.vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import MainSearchBar from "src/components/UI/search/mainSearchBar.vue";
import PastOrder from "src/components/orders/PastOrder.vue";
import DoneOrder from "src/components/orders/spacific/DoneOrder.vue";

export default {
  components: {
    CurentOrder,
    DynamicHeader,
    MainSearchBar,
    PastOrder,
    DoneOrder,
  },
  setup() {
    return {
      tab: ref("current"),
      // current orders data
      current_orders: ref([
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 0,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 0,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 0,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 0,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 0,
        },
      ]),
      // pastorders data
      past_orders: ref([
        {
          id: "1",
          order_compleat: true,
          oreder_num: "2345346346",
          location: "الرياض",
          date: "25/5/2022",
          time: "09:00 PM",
          status_code: 4,
        },
        {
          id: "2",
          order_compleat: false,
          oreder_num: "234534634",
          location: "القاهره",
          date: "25/5/2022",
          time: "09:00 PM",
          status_code: 4,
        },
        {
          id: "3",
          order_compleat: true,
          oreder_num: "23452352",
          location: "الدمام",
          date: "25/5/2022",
          time: "09:00 PM",
          status_code: 4,
        },
        {
          id: "4",
          order_compleat: false,
          oreder_num: "235346346",
          location: "الرياض",
          date: "25/5/2022",
          time: "09:00 PM",
          status_code: 4,
        },
        {
          id: "5",
          order_compleat: false,
          oreder_num: "213123123",
          location: "الرياض",
          date: "25/5/2022",
          time: "09:00 PM",
          status_code: 4,
        },
      ]),
      // done orders data
      done_orders: ref([
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 2,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 2,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 2,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 2,
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
          status_code: 2,
        },
      ]),
    };
  },
  methods: {
    // accebt order and send it to in progress data
    acceptOrder(id) {},
    // reject order
    rejectOrder(id) {},
    // when order is done
    doneOrder(id) {},
    // show more details about order
    showMoreInfo(order) {
      this.$router.push({
        name: "sapcific",
        params: {
          id: order.id,
          code: order.status_code,
        },
      });
      // console.log(order);
    },
    // showMorePastOrder(order) {
    //   this.$router.push({
    //     name: "sapcific",
    //     params: {
    //       id: order.id,
    //       code: order.status_code,
    //     },
    //   });
    //   // console.log(order);
    // },
  },
};
</script>

<style lang="scss">
.bg-taps {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 8px !important;
}
.active-class {
  background-color: white;
  border-radius: 10px;
  border: 1px solid $bg_slide;
}
</style>
