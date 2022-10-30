<template>
  <div class="full-width grids" dir="rtl">
    <div class="column grids__column">
      <div class="row grids__column--row justify-between">
        <div class="grids__column--row-single">
          <slot name="colOne">
            <!-- container 1 -->
          </slot>
        </div>
        <div class="grids__column--row-single">
          <slot name="colTow">
            <!-- container 2 -->
          </slot>
        </div>
      </div>
    </div>
    <div class="full-width column grids__column">
      <div class="row grids__column--row justify-between">
        <div class="grids__column--row-single">
          <slot name="colthree">
            <!-- container 3 -->
          </slot>
        </div>
        <div class="grids__column--row-single">
          <slot name="colFour">
            <!-- container 4 -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grids {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 400px;
  &__column {
    height: 42%;
    &--row {
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      &-single {
        text-align: center;
        width: 42%;
        max-height: 100%;
        background-color: #0000;
        background: white;
        border-radius: 12px;
        overflow: hidden;
      }
    }
  }
}
</style>
