<template>
  <div class="filter-bar horizental-list">
    <div class="my-card text-sm text-hint active">الكل</div>
    <div class="my-card text-sm text-hint">وجبات سريعه</div>
    <div class="my-card text-sm text-hint">مقبلات</div>
    <div class="my-card text-sm text-hint">سندوتشات</div>
    <div class="my-card text-sm text-hint">سندوتشات</div>
    <div class="my-card text-sm text-hint">سندوتشات</div>
    <div class="my-card text-sm text-hint">سندوتشات</div>
    <div class="my-card text-sm text-hint">مشروبات</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.filter-bar {
  width: 100%;
  .my-card {
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
  }
  .active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 115%;
      right: 0;
      left: 0;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
