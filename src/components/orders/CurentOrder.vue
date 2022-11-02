<template>
  <div class="past-order q-my-sm" dir="rtl">
    <q-card
      v-for="(order, i) in orders"
      :key="i"
      class="my-card q-my-sm"
      style="border-radius: 8px"
    >
      <q-card-section>
        <div class="row">
          <div class="col-8">رقم الطلب{{ order.orderNumber }}#</div>
          <div class="col-4 text-left flex">
            <q-icon size="xs" name="img:/icon/XMLID.png" />
            <div class="text-center q-mx-xs text-no-wrap">
              {{ order.price }} ر.س
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8 item-center flex">
            <div class="text-center">
              <img src="/icon/location.png" alt="" />
            </div>
            <div class="q-mx-sm text-no-wrap">{{ order.place }}</div>
          </div>
          <div class="col-4 text-center flex">
            <div class="col-5 text-left">
              <img src="/icon/calendar.png" alt="" />
            </div>
            <div class="col text-no-wrap">{{ order.date }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right">
            <q-btn
              @click="$emit('rejectOrder', order.id)"
              class="btn-style"
              color="primary"
              label="قبول"
            />
          </div>
          <div class="col text-left">
            <q-btn
              @click="$emit('acceptOrder', order.id)"
              class="btn-style"
              label="رفض"
              outline
              style="color: #ff6b61"
            />
          </div>
        </div>
      </q-card-section>
      <q-icon
        @click="$emit('showMore', order.id)"
        size="sm"
        class="past-order__show-more"
        name="eva-chevron-down-outline"
      />
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["orders"],
};
</script>

<style lang="scss" scoped>
.past-order {
  &__show-more {
    position: absolute;
    left: 5px;
    top: 5px;
  }
}
.btn-style {
  width: 95%;
  border-radius: 10px;
  align-items: center;
  padding: 7px 20px;
}
</style>
