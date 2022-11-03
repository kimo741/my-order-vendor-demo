<template>
  <div class="vertical-list" dir="rtl">
    <!-- ////////////////////// -->
    <!-- product virtical slide -->
    <!-- ////////////////////// -->
    <q-card
      v-for="(order, i) in pastOrders"
      :key="i"
      class="bg-white my-card card-shadow"
      flat
    >
      <!-- <q-card-section horizontal> -->
      <!-- /////////////////////// -->
      <!-- product content section -->
      <!-- /////////////////////// -->
      <q-card-section style="padding: 5px">
        <div class="row justify-between">
          <!-- first row -->
          <div class="col-6 text-right">
            <!-- ////////// -->
            <!-- if success -->
            <!-- ////////// -->
            <div v-if="order.order_compleat" class="row">
              <q-badge color="green-2">
                <q-icon name="eva-checkmark-outline" color="green-10" />
              </q-badge>
              <div class="q-mx-sm text-body2 text-green">تم التوصيل</div>
            </div>
            <!-- //// -->
            <!-- else -->
            <!-- //// -->
            <div v-else class="row">
              <!-- ////////// -->
              <!-- if success -->
              <!-- ////////// -->
              <q-badge color="red-4">
                <q-icon name="eva-close-outline" color="red-9" />
              </q-badge>
              <div class="q-mx-sm text-body2 text-red-3">لم يتم التوصيل</div>
            </div>
          </div>
          <div class="col-6 text-left">
            <q-icon
              @click="$emit('showMorePastOrder', order)"
              size="sm"
              name="eva-chevron-down-outline"
            />
          </div>
        </div>
        <!-- /////// -->
        <!-- suc row -->
        <!-- /////// -->
        <div class="row justify-between q-my-sm">
          <div class="col-8 text-body2 text-500 text-no-wrap">
            طلب رقم {{ order.oreder_num }} #
          </div>
          <div class="col-4 row">
            <q-icon
              class="col-2 q-my-auto text-center"
              size="xs"
              name="img:icon/sm-location.png"
            />
            <div class="col text-hint q-mx-sm text-no-wrap">
              {{ order.location }}
            </div>
          </div>
        </div>
        <!-- /////// -->
        <!-- th3 row -->
        <!-- /////// -->
        <div class="row justify-between">
          <div class="col-8 text-hint">
            <q-icon
              class="q-my-auto text-center text-no-wrap"
              size="xs"
              name="img:icon/calendar.png"
            />
            {{ order.date }}
          </div>
          <div class="col-4 row">
            <q-icon
              class="q-my-auto text-center"
              size="xs"
              name="img:icon/time-hint.png"
            />

            <div class="text-no-wrap col text-hint q-mx-sm">
              {{ order.time }}
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["pastOrders"],
};
</script>

<style lang="scss" scoped>
</style>
