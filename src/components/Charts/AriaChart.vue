<template>
  <div id="chart">
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
export default {
  components: { ApexCharts },
  data() {
    return {
      series: [
        {
          data: [
            {
              x: 20,
              y: 54,
            },
            {
              x: 30,
              y: 66,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
