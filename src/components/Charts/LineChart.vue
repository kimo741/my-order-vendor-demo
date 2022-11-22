<template>
  <!-- <div dir="rtl" style="max-width: 100%" class="full-width q-pa-0 p-ma-0"> -->
  <apexchart
    dir="ltr"
    class="q-pa-0 q-ma-0"
    width="100%"
    style="max-width: 100%"
    type="area"
    :options="options"
    :series="series"
  >
  </apexchart>
  <!-- </div> -->
</template>
<script>
export default {
  props: ["options", "series"],
  setup() {
    return {};
  },
};
</script>

<style>
</style>
