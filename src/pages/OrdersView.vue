<template>
  <q-page class="q-mx-sm">
    <!-- //// -->
    <!-- main header -->
    <!-- //// -->
    <DynamicHeader />
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
    </q-tabs>
    <q-tab-panels
      style="background: #eeeeee !important"
      class="no-effict q-my-lg"
      v-model="tab"
      animated
    >
      <!-- past panel -->
      <q-tab-panel
        class="q-pa-0 no-effict"
        style="background: #eeeeee !important"
        name="past"
      >
        <PastOrder
          :pastOrders="past_orders"
          @showMorePastOrder="showMorePastOrder"
        />
      </q-tab-panel>
      <!-- current panel -->
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
    </q-tab-panels>
  </q-page>
</template>

<script>
import { ref } from "vue";
import CurentOrder from "src/components/orders/CurentOrder.vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import MainSearchBar from "src/components/UI/search/mainSearchBar.vue";
import PastOrder from "src/components/orders/PastOrder.vue";

export default {
  components: {
    CurentOrder,
    DynamicHeader,
    MainSearchBar,
    CurentOrder,
    PastOrder,
  },
  setup() {
    return {
      tab: ref("past"),
      current_orders: ref([
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29/8/2022",
        },
      ]),
      past_orders: ref([
        {
          id: "1",
          order_compleat: true,
          oreder_num: "2345346346",
          location: "الرياض",
          date: "25/5/2022",
          time: "09:00 PM",
        },
        {
          id: "2",
          order_compleat: false,
          oreder_num: "234534634",
          location: "القاهره",
          date: "25/5/2022",
          time: "09:00 PM",
        },
        {
          id: "3",
          order_compleat: true,
          oreder_num: "23452352",
          location: "الدمام",
          date: "25/5/2022",
          time: "09:00 PM",
        },
        {
          id: "4",
          order_compleat: false,
          oreder_num: "235346346",
          location: "الرياض",
          date: "25/5/2022",
          time: "09:00 PM",
        },
        {
          id: "5",
          order_compleat: false,
          oreder_num: "21312312313333333333333323123123123123",
          location: "الرياض",
          date: "25/5/2022",
          time: "09:00 PM",
        },
      ]),
    };
  },
  methods: {
    acceptOrder(id) {},
    rejectOrder(id) {},
    showMoreInfo(id) {},
    showMorePastOrder(id) {},
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
