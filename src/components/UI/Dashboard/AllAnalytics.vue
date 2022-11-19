<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader :notifyIcon="true" :backIcon="true" />
    <div class="q-my-md text-body2 text-500">
      عدد الطلبات الوارده <span class="text-hint q-mx-sm">اليوم</span>
    </div>
    <AnalyticsOrder @passSorting="sellectedSort" :cards="cards" />
    <div class="q-my-md text-body2 text-500">
      عدد الطلبات الوارده <span class="text-hint q-mx-sm">الاسبوع</span>
    </div>
    <AnalyticsOrder @passSorting="sellectedSort" :cards="cards" />
    <div class="q-my-md text-body2 text-500">
      عدد الطلبات الوارده <span class="text-hint q-mx-sm">الشهر</span>
    </div>
    <AnalyticsOrder @passSorting="sellectedSort" :cards="cards" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "../DynamicHeader.vue";
import AnalyticsOrder from "./AnalyticsOrder.vue";
export default {
  setup() {
    return {
      cards: ref([
        {
          id: "1",
          title: "المكسب",
          img: "icon/wins.png",
          analytics: "9.5",
          price: "6,524",
          color: "text-primary",
        },
        {
          id: "2",
          title: "وصف",
          img: "icon/discraption.png",
          analytics: "-9.5",
          price: "6,524",
          color: "text-blue",
        },
        {
          id: "3",
          title: "الطلبات المستقبله",
          img: "icon/incoming-order.png",
          analytics: "9.5",
          price: "6,524",
          color: "text-cyan-13",
        },
        {
          id: "4",
          title: "صافي الربح",
          img: "icon/net-profit.png",
          analytics: "9.5",
          price: "6,524",
          color: "text-green",
        },
      ]),
    };
  },
  components: { AnalyticsOrder, DynamicHeader },
};
</script>

<style>
</style>
