<template>
  <div class="vertical-list bg-white" dir="rtl">
    <!-- ////////////////////// -->
    <!-- product virtical slide -->
    <!-- ////////////////////// -->
    <q-card class="my-card" flat>
      <!-- <q-card-section horizontal> -->
      <!-- /////////////////////// -->
      <!-- product content section -->
      <!-- /////////////////////// -->
      <q-card-section class="q-ma-0">
        <div class="row justify-between">
          <div class="col-6 text-right">
            <div v-if="succ" class="row">
              <!-- ////////// -->
              <!-- if success -->
              <!-- ////////// -->
              <q-badge color="red">
                <q-icon name="eva-checkmark-outline" color="green" />
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
              <q-badge style="background-color: #f44336c7">
                <q-icon name="eva-close-outline" color="red" />
              </q-badge>
              <div class="q-mx-sm text-body2 text-red">لم يتم التوصيل</div>
            </div>
          </div>
          <div class="col-6 text-left">
            <q-icon size="sm" name="eva-chevron-down-outline" />
          </div>
        </div>
      </q-card-section>
      <!-- ////////////////////////// -->
      <!-- product button add to cart -->
      <!-- ////////////////////////// -->
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["products"],
  setup() {
    return {
      succ: ref(true),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
