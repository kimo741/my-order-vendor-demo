<template>
  <q-card class="my-card spacific__order" flat dir="rtl">
    <q-card-section>
      <div class="row">
        <div class="col-7">
          <!-- //////////// -->
          <!-- order numper -->
          <!-- //////////// -->
          <div class="text-right text-body2 text-bold">طلب رقم 4654654564#</div>
        </div>
        <div class="col-5 text-left flex">
          <q-icon size="xs" class="q-mx-sm col-4" name="img:icon/XMLID.png" />
          <!-- //////////// -->
          <!-- order price -->
          <!-- //////////// -->
          <div class="text-body2 text-bold">500 ر.س</div>
        </div>
      </div>
      <div class="row q-my-md">
        <div class="col text-right flex">
          <q-icon
            size="xs"
            class="q-mx-sm col-4"
            name="img:icon/location.png"
          />
          <!-- ////////////// -->
          <!-- order location -->
          <!-- ////////////// -->
          <div class="text-body2 text-bold">الرياض</div>
        </div>
      </div>
      <q-icon
        size="sm"
        class="arow-up__icon"
        name="eva-arrow-ios-upward-outline"
        color="grey-7"
      />
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col-8 text-right">
          <!-- ////////// -->
          <!-- order name -->
          <!-- ////////// -->
          <div class="text-500 text-h2">اسم الطبق</div>
          <!-- ///////////////// -->
          <!-- order discruption -->
          <!-- ///////////////// -->
          <div class="text-500 text-hint q-my-sm q-pl-md">
            وريم ايبسوم هو نموذج افتراضي
          </div>
          <div class="row q-my-md justify-between">
            <!-- ///////////////// -->
            <!-- price for 1 peice -->
            <!-- ///////////////// -->
            <div class="col-6 text-body2 text-bold">400 ر.س</div>
            <div class="col-6">
              <div class="row text-no-wrap order-count items-center">
                <!-- ///////////////// -->
                <!-- button add 1 more -->
                <!-- ///////////////// -->
                <div @click="increaseOrder" class="order-count--sum"></div>
                <!-- //////////// -->
                <!-- order counte -->
                <!-- //////////// -->
                <div class="col text-center text-bold">{{ count }}</div>
                <!-- /////////////////// -->
                <!-- buttun minus 1 more -->
                <!-- /////////////////// -->
                <div @click="decreaseOrder" class="order-count--minus"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <q-img src="test/prod1.png" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      count: ref("1"),
    };
  },
  methods: {
    increaseOrder() {
      this.count++;
    },
    decreaseOrder() {
      if (this.count > 1) {
        this.count--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.spacific__order {
  img {
    max-width: 100%;
    max-height: 100%;
  }
  border-radius: 9px;
}
.order-count {
  position: relative;
  &--sum,
  &--minus {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: rgba(217, 217, 217, 0.5);
    &::before {
      content: "";
      position: absolute;
      width: 70%;
      height: 3px;
      background-color: $primary;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &:active {
      background-color: $primary;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.61), 0 2px 2px rgba(0, 0, 0, 0.527),
        0 3px 1px -2px rgba(0, 0, 0, 0.514) 2px 2px 8px black;
      &::before,
      &::after {
        background-color: rgba(217, 217, 217);
      }
    }
  }
  &--sum {
    &::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 70%;
      background-color: $primary;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.arow-up__icon {
  position: absolute;
  left: 5px;
  top: 0;
}
</style>
