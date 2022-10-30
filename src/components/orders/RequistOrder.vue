<template>
  <div class="q-my-sm q-mx-sm" dir="rtl">
    <q-card
      v-for="(order, i) in orders"
      :key="i"
      class="my-card q-my-sm"
      style="border-radius: 8px"
    >
      <q-card-section>
        <div class="row">
          <div class="col-6 q-mx-sm">رقم الطلب{{ order.orderNumber }}#</div>
          <div class="col text-left"><img src="/icon/XMLID.png" alt="" /></div>
          <div class="col text-center">{{ order.price }} ر.س</div>
        </div>
        <div class="row q-my-sm">
          <div class="col q-mx-sm item-center">
            <div class="row">
              <div class="col-3 text-center">
                <img src="/icon/location.png" alt="" />
              </div>
              <div class="col">{{ order.place }}</div>
            </div>
          </div>
          <div class="col text-center">
            <div class="row">
              <div class="col-5 text-left">
                <img src="/icon/calendar.png" alt="" />
              </div>
              <div class="col">{{ order.date }}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <q-btn class="btn-style" color="primary" label="قبول" />
          </div>
          <div class="col text-left">
            <q-btn
              class="btn-style"
              label="رفض"
              outline
              style="color: #ff6b61"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      orders: [
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29 / 8 / 2022", //new Date()
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29 / 8 / 2022", //new Date()
        },
        {
          id: 1,
          orderNumber: 2345684,
          price: 400,
          place: "الرياض",
          date: "29 / 8 / 2022", //new Date()
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-style {
  width: 95%;
  border-radius: 10px;
  // gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 13px 20px;
}
</style>
