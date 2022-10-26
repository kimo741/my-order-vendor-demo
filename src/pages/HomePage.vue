<template>
  <q-page class="">
    <!-- ///////////// -->
    <!-- header navbar -->
    <!-- ///////////// -->
    <DynamicHeader />
    <!-- ///////////////////// -->
    <!-- input for main search -->
    <!-- ///////////////////// -->

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
    <!-- /////////////// -->
    <!-- Analytics Order -->
    <!-- /////////////// -->
    <AnalyticsOrder
      @passSorting="sellectedSort"
      label_title="عدد الطلبات الوارده اليوم"
      :cards="cards"
    />
    <!-- /////////////////////////////////////////////////////// -->
    <!-- title bar with dropdown to sellect day or month or year -->
    <!-- /////////////////////////////////////////////////////// -->
    <TitleBarWithDropdown
      @showAll="showAllChart"
      label_title="مبلغ الدخل الوارد "
      @passSorting="selectedDataTimeChart"
    />
    <!-- ////////// -->
    <!-- aria chart -->
    <!-- ////////// -->
    <AriaChart :options="options" :series="series" />
    <NumperOfOrder @showAll="curentOrders" label_title="عدد الطلبات الجارية" />
    <TitleBar @showAll="showAllTopProduct" label="الوجبات الاكثر طلبا" />
    <SliderItemV :products="items" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import AnalyticsOrder from "src/components/UI/Dashboard/AnalyticsOrder.vue";
import TitleBar from "src/components/UI/TitleBar.vue";
import AriaChart from "src/components/Charts/AriaChart.vue";
import NumperOfOrder from "src/components/UI/Dashboard/NumperOfOrder.vue";
import TitleBarWithDropdown from "src/components/UI/Dashboard/TitleBarWithDropdown.vue";
import SliderItemV from "src/components/UI/sliders/SliderItemV.vue";

export default {
  name: "IndexPage",
  components: {
    DynamicHeader,
    AnalyticsOrder,
    TitleBar,
    AriaChart,
    NumperOfOrder,
    TitleBarWithDropdown,
    SliderItemV,
  },
  setup() {
    return {
      items: ref([
        {
          id: "1",
          img: "test/prod1.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod1.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه  ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
      ]),
      // chart
      options: ref({
        xaxis: {
          categories: ["h0", "h3", "h6", "h9", "h12"],
          labels: {
            datetimeFormatter: {
              hour: "HH",
            },
          },
          title: {
            text: "الوقت بالساعه",
          },
        },
        yaxis: {
          title: {
            text: "ر س",
          },
        },
        colors: ["#FF6B61"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 5,
        },
        theme: {
          palette: "palette1",
        },
        tooltip: {
          intersect: true,
          shared: false,
        },
      }),
      // /////////
      series: ref([
        {
          name: "الدخل الوارد",
          data: [55, 62, 89, 66, 98],
        },
      ]),
      //////////////
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
  methods: {
    sellectedSort(val) {
      console.log(val);
    },
    curentOrders() {
      // see all curent orders
    },
    showAllChart() {
      // see all charts
    },
    selectedDataTimeChart(selected) {
      // selected charts
    },
    showAllTopProduct(selected) {
      // show all top products
    },
  },
};
</script>
