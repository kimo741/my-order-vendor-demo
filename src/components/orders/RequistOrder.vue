<template>
  <div class="past-order q-my-sm q-mx-sm" dir="rtl">
    <q-card
      v-for="(order, i) in orders"
      :key="i"
      class="my-card q-my-sm"
      style="border-radius: 8px"
    >
      <q-card-section>
        <div class="row">
          <div class="col-6">رقم الطلب{{ order.orderNumber }}#</div>
          <div class="col text-left">
            <q-icon size="xs" name="img:/icon/XMLID.png" />
          </div>
          <div class="col text-center">{{ order.price }} ر.س</div>
        </div>
        <div class="row">
          <div class="col item-center">
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
