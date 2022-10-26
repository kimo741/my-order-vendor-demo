<template>
  <div class="slider-v bg-white" dir="rtl">
    <!-- ////////////////////// -->
    <!-- product virtical slide -->
    <!-- ////////////////////// -->
    <q-card v-for="(product, i) in products" :key="i" class="my-card" flat>
      <q-card-section horizontal class="">
        <!-- ///////////// -->
        <!-- product image -->
        <!-- ///////////// -->
        <img
          class="col-3 slider-v__img"
          :src="product.img"
          style="border-radius: 8px"
        />
        <!-- /////////////////////// -->
        <!-- product content section -->
        <!-- /////////////////////// -->
        <q-card-section class="slider-v__content col-9">
          <div class="row">
            <div class="col text-right slider-v__content--hint">
              {{ product.title }}
            </div>
            <div class="col text-left slider-v__content--price text-bold">
              {{ product.price }} ر.س
            </div>
          </div>
          <div class="slider-v__content--views">{{ product.disc }},</div>
        </q-card-section>
      </q-card-section>
      <q-separator
        class="q-my-sm"
        v-if="i !== products.length - 1"
        color="grey-4"
      />
      <!-- ////////////////////////// -->
      <!-- product button add to cart -->
      <!-- ////////////////////////// -->
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style lang="scss" scoped>
.slider-v {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scroll-padding: 100%;
  scroll-snap-type: y mandatory;
  height: max-content;
  padding: 4px;

  .my-card {
    padding: 0 15px;
    border-radius: 8px;
    flex: 0 0 100%;
    display: inline-block;
    // height: 20px !important;
    // margin-bottom: 5px;
  }
  &__content {
    // height: 100%;
    padding: 20px;
    &--hint {
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // color: $font-hint;
      font-weight: 500;
    }
    &--views {
      font-size: 13px;
      color: $font-hint;
    }
    &--ratting {
    }
  }
  &__img {
    height: 90%;
    max-width: 100%;
    margin: auto;
  }
  // &__add-to-card {
  //   direction: ltr;
  //   position: absolute;
  //   bottom: 4px;
  //   left: 85%;
  // }
}
</style>
