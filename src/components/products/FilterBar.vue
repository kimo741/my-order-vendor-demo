<template>
  <div class="filter-bar horizental-list">
    <div
      v-for="(item, i) in taps"
      :key="i"
      class="my-card text-sm text-hint"
      :class="tap_active == item ? 'active' : ''"
      @click="sellectTap(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tap_active: ref("الكل"),
      taps: ref(["الكل", "وجبات سريعه", "مقبلات", "سندوتشات", "مشروبات"]),
    };
  },
  methods: {
    sellectTap(item) {
      this.tap_active = item;
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
