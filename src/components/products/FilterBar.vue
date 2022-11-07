<template>
  <div class="filter-bar horizental-list">
    <div
      v-for="(item, i) in taps"
      :key="i"
      class="my-card text-sm text-hint text-center"
      :class="tap_active == item.label ? 'active' : ''"
      @click="sellectTap(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tap_active: ref("الكل"),
      taps: ref([
        {
          label: "الكل",
          value: "all",
        },
        {
          label: "وجبات سريعه",
          value: "fastfood",
        },
        {
          label: "مقبلات",
          value: "snaks",
        },
        {
          label: "سندوتشات",
          value: "sandwitch",
        },
        {
          label: "مشروبات",
          value: "deinks",
        },
      ]),
    };
  },
  methods: {
    sellectTap(item) {
      this.tap_active = item.label;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-bar {
  width: 100%;
  .my-card {
    transition: all 0.1s ease-in-out;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 115%;
      left: 0;
      width: 100%;
      overflow: auto;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .active {
    position: relative;
    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
