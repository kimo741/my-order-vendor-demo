<template>
  <div class="h-line" dir="rtl">
    <!-- ///////////// -->
    <!-- status code 1 -->
    <!-- ///////////// -->
    <div
      class="h-line__posint"
      :class="orderCode >= 1 ? 'h-line__posint-active' : ''"
    >
      <div class="h-line__lable">تم ارسال الطلب</div>
    </div>
    <!-- ///////////// -->
    <!-- status code 2 -->
    <!-- ///////////// -->
    <div
      class="h-line__posint"
      :class="orderCode >= 2 ? 'h-line__posint-active' : ''"
    >
      <div class="h-line__lable">تم قبول الطلب</div>
    </div>
    <!-- ///////////// -->
    <!-- status code 3 -->
    <!-- ///////////// -->
    <div
      class="h-line__posint"
      :class="orderCode >= 3 ? 'h-line__posint-active' : ''"
    >
      <div class="h-line__lable">جاري التجهيز</div>
    </div>
    <!-- ///////////// -->
    <!-- status code 4 -->
    <!-- ///////////// -->
    <div
      class="h-line__posint"
      :class="orderCode >= 4 ? 'h-line__posint-active' : ''"
    >
      <div class="h-line__lable">الطلب جاهز</div>
    </div>
    <!-- ///////////// -->
    <!-- status code 5 -->
    <!-- ///////////// -->
    <div
      class="h-line__posint h-line__posint-last"
      :class="orderCode >= 5 ? 'h-line__posint-active' : ''"
    >
      <div class="h-line__lable">تم التسبيم الطلب</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["orderId", "orderCode"],
  // setup() {
  //   return {
  //     order: ref({
  //       status_code: 3,
  //     }),
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.h-line {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px auto 30px;
  height: 30px;
  align-items: center;
  &__posint {
    position: relative;
    // background-color: $font-hint;
    height: 15px;
    z-index: 2;
    width: calc(100% / 5);

    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: $grey-5;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      z-index: 3;
      transform: translate(-50%, -50%);
    }
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: $grey-5;
      left: 50%;
      right: 0;
      top: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
    &-active {
      &::after {
        width: 13px;
        height: 13px;
        background-color: $primary;
      }
      &::before {
        background-color: $primary;
      }
    }
    &-last {
      &::before {
        width: 0;
      }
    }
  }
  &__lable {
    position: absolute;
    top: 180%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 9px;
    white-space: nowrap;
    font-weight: 800;
    letter-spacing: 0.01px;
  }
}
</style>
