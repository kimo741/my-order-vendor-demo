<template>
  <div dir="rtl">
    <apexchart width="100%" type="area" :options="options" :series="series">
    </apexchart>
  </div>
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
