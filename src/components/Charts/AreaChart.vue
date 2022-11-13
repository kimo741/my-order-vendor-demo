<template>
  <div class="bg-white q-my-md main-rounded" dir="rtl">
    <div class="text-body2 text-500 q-pa-md">
      عدد المشاهدات البوست (اخر 7 ايام)
    </div>
    <apexchart width="100%" type="area" :options="options" :series="series">
    </apexchart>
  </div>
</template>
<script>
export default {
  props: ["options", "series"],
  setup() {
    return {
      // options: ref({
      //   labels: [
      //     "السبت",
      //     "الاحد",
      //     "الاثنين",
      //     "الثلاثاء",
      //     "الأربعاء",
      //     "الخميس",
      //     "الجمعة",
      //   ],
      //   grid: {
      //     yaxis: {
      //       lines: {
      //         show: false,
      //       },
      //     },
      //   },
      //   dataLabels: {
      //     enabled: false,
      //   },
      //   fill: {
      //     type: "gradient",
      //     gradient: {
      //       shadeIntensity: 1,
      //       opacityFrom: 0.7,
      //       opacityTo: 0.9,
      //       stops: [0, 90, 100],
      //     },
      //   },
      //   stroke: {
      //     width: 0,
      //   },
      //   colors: ["#FF6B61"],
      // }),
      // series: ref([
      //   {
      //     name: "Series 1",
      //     data: [45, 52, 38, 45, 19, 23, 2],
      //   },
      // ]),
    };
  },
};
</script>

<style>
</style>
