<template>
  <q-page class="">
    <!-- ///////////// -->
    <!-- header navbar -->
    <!-- ///////////// -->
    <DynamicHeader />
    <!-- ///////////////////// -->
    <!-- input for main search -->
    <!-- ///////////////////// -->
    <AriaChart />
    <q-input
      class="main-rounded q-mx-auto q-mt-lg"
      style="width: 90%"
      flat
      bottom-slots
      v-model="global_search"
      bg-color="grey-4"
      dense
      rounded
      filled
      label="بحث"
      @focusin="focusInput"
    >
      <!-- @focusout="outOfFocus" -->
      <!-- /////////// -->
      <!-- icon search -->
      <!-- /////////// -->
      <template v-slot:prepend>
        <q-avatar>
          <q-icon size="xs" name="img:icon/Search.png" />
        </q-avatar>
      </template>
    </q-input>
    <NumberOrder label_title="عدد الطلبات الوارده اليوم" :cards="cards" />
    <NumberOrder :cards="cards" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import NumberOrder from "src/components/UI/NumberOrder.vue";

export default {
  name: "IndexPage",
  components: { DynamicHeader, NumberOrder },
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
};
</script>
