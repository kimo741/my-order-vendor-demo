<template>
  <div class="q-my-sm">
    <div class="row items-start justify-around" dir="rtl">
      <q-card
        v-for="(card, i) in cards"
        :key="i"
        class="my-card q-mx-auto card1"
      >
        <q-card-section>
          <div class="row">
            <div class="col">
              <!-- ////////// -->
              <!-- card image -->
              <!-- ////////// -->
              <img class="handel-img" :src="card.img" />
            </div>
            <div class="col text-left">
              <!-- //////////  -->
              <!-- presenteage -->
              <!-- //////////  -->
              <div class="text-green" v-if="parseInt(card.analytics) > 0">
                +{{ card.analytics }}%
                <q-icon name="eva-arrow-upward-outline" />
              </div>
              <!-- //////////  -->
              <!-- presenteage -->
              <!-- //////////  -->
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
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["cards"],
  setup() {
    return {
      sort_by: ref([
        { label: "اليوم", value: "day" },
        { label: "منذ اسبوع", value: "week" },
        { label: "منذ شهر", value: "monthe" },
      ]),
    };
  },
  methods: {
    getDays() {
      // get day
      // this.day  = respons
    },
    getmonth() {
      // get month
      // this.month  = respons
    },
    getYear() {
      // get day
      // this.day  = respons
    },
  },
};
</script>
<style lang="scss" scoped>
.card1 {
  width: 161px;
  margin-bottom: 25px;
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
