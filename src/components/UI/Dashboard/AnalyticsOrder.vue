<template>
  <div class="q-my-sm">
    <div class="row items-start justify-around" dir="rtl">
      <!-- //////////////// -->
      <!-- title bar & sort -->
      <!-- //////////////// -->
      <div dir="rtl" class="q-my-sm full-width row justify-between">
        <div class="col-8">
          <div class="row justify-around items-center">
            <div class="text-body2 col-8 text-center" style="font-weight: 500">
              {{ label_title }}
            </div>
            <!-- ///////////////////////////////// -->
            <!-- dropdown for sellect sorted value -->
            <!-- ///////////////////////////////// -->
            <q-btn-dropdown class="col text-grey-7" flat label="اليوم">
              <q-list>
                <q-item
                  v-for="(sort, i) in sort_by"
                  :key="i"
                  clickable
                  v-close-popup
                  @click="$emit('passSorting', sort)"
                >
                  <q-item-section>
                    <q-item-label>{{ sort.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <!-- /////// -->
        <!-- see all -->
        <!-- /////// -->
        <div class="col-4 text-body2 text-left">
          <q-btn
            @click="$emit('showAll')"
            size="sm"
            label="مشاهدة الكل"
            class=""
            flat
            color="primary"
          ></q-btn>
        </div>
      </div>
      <!-- ///// -->
      <!-- card  -->
      <!-- ///// -->

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
  props: ["cards", "label_title"],
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
