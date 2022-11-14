<template>
  <q-page class="q-mx-sm">
    <DynamicHeader :backIcon="true" />
    <PostCard :post_data="post_data" />
    <AreaChart :options="areaOpstions" :series="areaSeries" />
    <LineChart class="bg-white" :options="lineOpstions" :series="lineSeries" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import AreaChart from "../Charts/AreaChart.vue";
import LineChart from "../Charts/LineChart.vue";
import DynamicHeader from "../UI/DynamicHeader.vue";
import PostCard from "./PostCard.vue";
export default {
  components: { DynamicHeader, PostCard, AreaChart, LineChart },
  setup() {
    return {
      lineOpstions: ref({
        xaxis: {
          categories: [
            "السبت",
            "الاحد",
            "الاثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
          ],
        },

        colors: ["#FF6B61", "#FF6B61"],
        stroke: {
          width: [3, 3],
          curve: "smooth",
          dashArray: [0, 4],
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        legend: {
          show: false,
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        theme: {
          palette: "palette1",
        },
        tooltip: {
          intersect: false,
          shared: false,
        },
      }),
      lineSeries: ref([
        {
          name: "الارباح",
          data: [45, 52, 38, 24, 33, 26, 21],
        },
        {
          name: "المبيعات",
          data: [35, 41, 62, 42, 13, 18, 29],
          tooltip: {},
        },
      ]),
      areaOpstions: ref({
        labels: [
          "السبت",
          "الاحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "الجمعة",
        ],
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          width: 0,
        },

        colors: ["#FF6B61"],
      }),
      areaSeries: ref([
        {
          name: "مشاهدة",
          data: [45, 52, 38, 45, 19, 23, 2],
        },
      ]),
      post_data: ref({
        name: "اسم الشخص",
        post_from: "اليوم , منذ 5 ساعات",
        disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
        img: "test/1.png",
        rating: "4",
        review: "25",
        likes_count: "20",
        delevry_time: "11 دقيقة",
        distance: "2.5 km",
        order_time: "30 دقيقة",
        post_view: "1.245",
        share: "125",
        reach: "2.455",
        interaction: "375",
      }),
    };
  },
};
</script>

<style>
</style>


