<template>
  <div class="duonat">
    <apexchart
      type="radialBar"
      height="100%"
      width="100%"
      :options="chartOptions"
      :series="chartOptions.series"
    ></apexchart>
    <div class="duonat__value">{{ chartOptions.series[0] }}%</div>
  </div>
</template>

<script>
export default {
  props: {
    chartOptions: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.duonat {
  position: relative;
  width: 100%;
  height: 100%;
  &__value {
    position: absolute;
    font-size: 20px;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
}
</style>
