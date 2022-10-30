<template>
  <q-page dir="rtl">
    <!-- ///////////// -->
    <!-- header navbar -->
    <!-- ///////////// -->
    <DynamicHeader backIcon />
    <!-- /////////////////////////// -->
    <!-- title for chart in this day -->
    <!-- /////////////////////////// -->
    <div class="q-my-md text-body2 text-500">
      مبلغ الدخل الوارد اليوم <span class="text-hint q-mx-sm">اليوم</span>
    </div>
    <!-- ////////////////// -->
    <!--  chart in this day -->
    <!-- ////////////////// -->
    <AriaChart :options="options_day" :series="series" />
    <!-- /////////////////////////// -->
    <!-- title for chart in this week -->
    <!-- /////////////////////////// -->
    <div class="q-my-md text-body2 text-500">
      مبلغ الدخل الوارد <span class="text-hint q-mx-sm">الاسبوع</span>
    </div>
    <!-- ////////////////// -->
    <!--  chart in this week -->
    <!-- ////////////////// -->
    <AriaChart :options="options_week" :series="series" />
    <!-- /////////////////////////// -->
    <!-- title for chart in this month -->
    <!-- /////////////////////////// -->
    <div class="q-my-md text-body2 text-500">
      مبلغ الدخل الوارد <span class="text-hint q-mx-sm">الشهر</span>
    </div>
    <!-- ////////////////// -->
    <!--  chart in this month -->
    <!-- ////////////////// -->
    <AriaChart :options="options_month" :series="series" />
  </q-page>
</template>

<script>
import AriaChart from "src/components/Charts/AriaChart.vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";
export default {
  components: { AriaChart, DynamicHeader },
  setup() {
    return {
      options_day: ref({
        xaxis: {
          categories: ["h0", "h3", "h6", "h9", "h12"],
          labels: {
            datetimeFormatter: {
              hour: "HH",
            },
          },
          // title: {
          //   text: "الوقت بالساعه",
          // },
        },
        yaxis: {
          title: {
            text: "ر . س",
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
      // week
      options_week: ref({
        xaxis: {
          categories: [
            "السبت ",
            "الأحد",
            "الأثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
          ],
          labels: {
            datetimeFormatter: {
              hour: "HH",
            },
          },
          // title: {
          //   text: "الوقت بالساعه",
          // },
        },
        yaxis: {
          title: {
            text: "ر.س",
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
      // month
      options_month: ref({
        xaxis: {
          categories: ["يناير ", "فبراير", "مارس", "ابريل", "مايو"],
          labels: {
            datetimeFormatter: {
              hour: "HH",
            },
          },
          // title: {
          //   text: "الوقت بالساعه",
          // },
        },
        yaxis: {
          title: {
            text: "ر . س",
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
    };
  },
};
</script>

<style>
</style>
