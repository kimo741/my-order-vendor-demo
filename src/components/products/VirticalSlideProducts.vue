<template>
  <div class="vertical-list product-slide">
    <q-card
      v-for="(product, i) in products"
      :key="i"
      class="my-card main-transetion"
      style="padding: 0"
      @click="showAllinfo(product)"
    >
      <q-card-section class="row" style="padding: 10px">
        <!-- ///////////// -->
        <!-- product image -->
        <!-- ///////////// -->
        <div class="col-3">
          <q-img src="test/apple-pay.png" />
        </div>
        <!-- /////////////// -->
        <!-- product content -->
        <!-- /////////////// -->
        <div class="col-9 q-py-sm q-pr-md">
          <!-- //////////// -->
          <!-- product name -->
          <!-- //////////// -->
          <div
            class="text-h3 text-500"
            :class="
              product.id == product_active ? 'vertical-list__all-info' : ''
            "
          >
            {{ product.name }}
          </div>
          <div
            class="text-body2 q-my-sm text-hint text-no-wrap"
            :class="
              product.id == product_active ? 'vertical-list__all-info' : ''
            "
          >
            <!-- //////////// -->
            <!-- product disc -->
            <!-- //////////// -->
            {{ product.disc }}
          </div>
          <div class="row justify-between items-center">
            <div class="col text-bold text-h3">{{ product.price }} ر.س</div>
            <div class="col text-left row">
              <!-- ///////////// -->
              <!-- active toggle -->
              <!-- ///////////// -->
              <q-toggle
                dense
                class="text-no-wrap"
                @click="changeStatus(product)"
                v-model="product.status"
              />
              <!-- @click="changeStatus(product)" -->
              <div
                class="text-left q-mx-sm"
                :class="!product.status ? 'text-hint' : ''"
              >
                {{ product.status ? "متوفر" : "غير متوفر" }}
              </div>
            </div>
          </div>
        </div>
        <!-- ////////////// -->
        <!-- icon more info -->
        <!-- ////////////// -->
        <q-icon
          class="vertical-list__more"
          size="sm"
          @click="$emit('editeOrDelete', product)"
          name="img:icon/more.png"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      product_active: "",
    };
  },
  computed: {
    statusValue: {
      get() {},
    },
  },
  methods: {
    changeStatus(product) {
      let status = product.status;
      let id = product.id;
      console.log(status, id);
    },
    showAllinfo(product) {
      if (this.product_active == product.id) {
        this.product_active = "";
      } else {
        this.product_active = product.id;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vertical-list {
  &__more {
    position: absolute;
    left: 20px;
    top: 20px;
  }
  &__all-info {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    text-overflow: none;
  }
}
</style>

