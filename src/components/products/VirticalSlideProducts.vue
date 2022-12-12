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
          <q-img :src="product.img ? 'icons/favicon-96x96.png' : product.img" />
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
                :model-value="product.status === '1' ? true : false"
              />

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
      <!-- {{ changeStatus() }} -->
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
export default {
  props: {
    products: {
      type: Array,
      require: true,
    },
  },
  setup() {
    let prod_id = ref("");
    let prod_status = ref("");
    const { mutate: updateState } = useMutation(
      gql`
        mutation updateProduct($ids: Int!, $status: String!) {
          updateProduct(id: $ids, status: $status) {
            id
            status
          }
        }
      `,
      () => ({
        variables: {
          status: prod_status.value,
          ids: parseInt(prod_id.value),
        },
      })
    );

    const changeStatus = (product) => {
      if (product.status == "1") {
        prod_status.value = "0";
      } else {
        prod_status.value = "1";
      }
      prod_id.value = product.id;
      updateState();
    };
    return {
      product_active: ref(""),
      changeStatus,
      prod_id,
      prod_status,
    };
  },
  methods: {
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

