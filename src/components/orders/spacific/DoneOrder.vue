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
          <!-- //////////// -->
          <!-- order numper -->
          <!-- //////////// -->
          <div class="col-8">رقم الطلب{{ order.orderNumber }}#</div>
          <div class="col-4 text-left flex">
            <q-icon size="xs" name="img:/icon/XMLID.png" />
            <!-- /////////// -->
            <!-- order price -->
            <!-- /////////// -->
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
            <!-- ////////////// -->
            <!-- order location -->
            <!-- ////////////// -->
            <div class="q-mx-sm text-no-wrap">{{ order.place }}</div>
          </div>
          <div class="col-4 text-center flex">
            <div class="col-5 text-left">
              <img src="/icon/calendar.png" alt="" />
            </div>
            <!-- ////////// -->
            <!-- order date -->
            <!-- ////////// -->
            <div class="col text-no-wrap">{{ order.date }}</div>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-8 text-right">
            <!-- /////////////////////////////// -->
            <!-- event handel when order is done -->
            <!-- /////////////////////////////// -->
            <q-btn
              @click="$emit('doneOrder', order.id)"
              class="btn-style"
              color="primary"
              label="تم التجهيز"
              icon="eva-done-all-outline"
            />
          </div>
        </div>
      </q-card-section>
      <!-- //////////////////////////////////// -->
      <!-- event show more about spacific order -->
      <!-- //////////////////////////////////// -->
      <q-icon
        @click="$emit('showMore', order)"
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
