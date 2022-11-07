<template>
  <q-page class="q-mx-sm" dir="rtl">
    <!-- /////// -->
    <!-- headeer -->
    <!-- /////// -->
    <DynamicHeader :addIcon="true" title="المنتجات" />
    <!-- ////////// -->
    <!-- search Bar -->
    <!-- ////////// -->
    <MainSearchBar />
    <!-- ///////// -->
    <!-- offer bar -->
    <!-- ///////// -->
    <OffersBar />
    <!-- ////////// -->
    <!-- filter bar -->
    <!-- ////////// -->
    <FilterBar />
    <!-- ////////////// -->
    <!-- slider product -->
    <!-- ////////////// -->
    <VirticalSlideProducts
      @editeOrDelete="editeOrDeleteProduct"
      :products="products"
    />
    <!-- ///////////////////////////////// -->
    <!-- dialog for edit or delete Product -->
    <!-- ///////////////////////////////// -->
    <q-dialog v-model="dialog">
      <EditAndDelete
        @editProduct="editProduct"
        @deleteProduct="deleteProduct"
      />
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import MainSearchBar from "src/components/UI/search/mainSearchBar.vue";
import OffersBar from "src/components/products/OffersBar.vue";
import FilterBar from "src/components/products/FilterBar.vue";
import VirticalSlideProducts from "src/components/products/VirticalSlideProducts.vue";
import EditAndDelete from "src/components/products/EditAndDelete.vue";
export default {
  components: {
    DynamicHeader,
    MainSearchBar,
    OffersBar,
    FilterBar,
    VirticalSlideProducts,
    EditAndDelete,
  },
  setup() {
    return {
      dialog: ref(false),
      products: ref([
        {
          id: "1",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "400",
          status: true,
          img: "apple-pay.png",
        },
        {
          id: "2",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "300",
          status: false,
          img: "prod1.png",
        },
        {
          id: "3",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "250",
          status: false,
          img: "Rectangle 4318.png",
        },
        {
          id: "4",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "600",
          status: true,
          img: "Rectangle 4322.png",
        },
      ]),
    };
  },
  methods: {
    editeOrDeleteProduct() {
      this.dialog = true;
    },
    editProduct() {},
    deleteProduct() {},
  },
};
</script>

<style>
</style>

