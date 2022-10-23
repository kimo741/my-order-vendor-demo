<template>
  <div class="q-pa-md row items-start q-gutter-md" dir="rtl">
    <!-- //////////////// -->
    <!-- title bar & sort -->
    <!-- //////////////// -->
    <div dir="rtl" class="q-my-sm full-width row justify-between">
      <div class="col">
        <div class="text-body2 text-bold">{{ label_title }}</div>
      </div>
      <div class="col text-body2 text-left">
        <q-btn
          @click="$emit('showAll')"
          size="sm"
          label="مشاهدة الكل"
          flat
          color="primary"
        ></q-btn>
      </div>
    </div>
    <!-- ///// -->
    <!-- card  -->
    <!-- ///// -->
    <q-card v-for="(card, i) in cards" :key="i" class="my-card card1">
      <q-card-section>
        <div class="row">
          <div class="col">
            <!-- ////////// -->
            <!-- card image -->
            <!-- ////////// -->
            <img class="handel-img" :src="card.img" />
          </div>
          <div class="col text-left">
            <!-- ////////// -->
            <!-- presenteage -->
            <!-- ////////// -->
            <div class="text-green" v-if="parseInt(card.analytics) > 0">
              +{{ card.analytics }}%
              <q-icon name="eva-arrow-upward-outline" />
            </div>
            <!-- ////////// -->
            <!-- presenteage -->
            <!-- ////////// -->
            <div class="text-red" v-else>
              {{ card.analytics }}%
              <q-icon name="eva-arrow-downward-outline" />
            </div>
          </div>
        </div>
        <!-- ///// -->
        <!-- title -->
        <!-- ///// -->
        <div class="price" :class="card.color">ر.س{{ card.price }}</div>
        <div class="category">{{ card.title }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
  props: ["cards", "label_title"],
  components: { TitleBar },
};
</script>
<style lang="scss" scoped>
.card1 {
  width: 161px;
  // height: 128px;

  .price {
    font-family: "Tajawal";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    text-align: right;

    color: #fc5302;
  }
  .category {
    font-family: "Tajawal";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 10px;
  }
}
.handel-img {
  max-width: 100%;
  max-height: 100%;
}
</style>
