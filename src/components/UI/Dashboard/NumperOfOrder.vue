<template>
  <div class="q-my-sm">
    <div class="row items-start justify-around" dir="rtl">
      <!-- //////////////// -->
      <!-- title bar & sort -->
      <!-- //////////////// -->
      <div class="q-my-sm full-width row justify-between">
        <div class="col-8">
          <div class="row items-right">
            <div
              class="text-body2 col-8 text-right q-mr-md"
              style="font-weight: 500"
            >
              {{ label_title }}
            </div>
          </div>
        </div>
        <!-- /////// -->
        <!-- see all -->
        <!-- /////// -->
        <div class="col-4 text-body2 text-left">
          <q-btn
            @click="$emit('showCurentOreder')"
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
        v-for="(order, i) in orders"
        :key="i"
        class="my-card q-mx-auto card1"
      >
        <q-card-section class="q-pa-sm">
          <div class="row">
            <img :src="order.img" alt="" class="handel-img" />
          </div>
        </q-card-section>
        <q-card-section class="q-pa-sm">
          <div class="row">
            <div class="col name-style">{{ order.name }}</div>
            <div class="col price">{{ order.price }}ر.س</div>
          </div>
          <div class="row">
            <div class="col order-number">طلب رقم {{ order.orderNumber }}</div>
            <div class="col date">{{ order.date }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label_title"],
  setup() {
    return {
      orders: [
        {
          id: 1,
          img: "/img1.png",
          name: "اسم الطبق",
          price: 400,
          orderNumber: 123,
          date: " 25 / 8 / 2022",
        },
        {
          id: 2,
          img: "/img2.png",
          name: "اسم الطبق",
          price: 400,
          orderNumber: 125,
          date: "29 / 8 / 2022",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card1 {
  width: 161px;
  margin-bottom: 25px;
  padding: 0 !important;
  margin: 0 !important;

  .handel-img {
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
  }
  .name-style {
    font-family: "Tajawal";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: right;

    color: rgba(0, 0, 0, 0.8);
  }
  .price {
    font-family: "Tajawal";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;

    text-align: left;
  }
  .date {
    font-family: "Tajawal";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 22px;
    /* identical to box height, or 220% */

    align-items: center;
    text-align: left;
    letter-spacing: -0.408px;

    color: rgba(0, 0, 0, 0.5);
  }
  .order-number {
    font-family: "Tajawal";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 22px;

    align-items: center;
    letter-spacing: -0.408px;

    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
