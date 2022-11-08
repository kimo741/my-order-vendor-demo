<template>
  <q-page class="q-mx-sm" dir="rtl">
    <!-- /////// -->
    <!-- headeer -->
    <!-- /////// -->
    <DynamicHeader @emitAdd="addProduct" :addIcon="true" title="المنتجات" />
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

    <q-dialog v-model="dialog_delete">
      <ConfirmDelete
        @canselDelete="canselDeleteProduct"
        @confirmDelete="confirmDeleteProduct"
    /></q-dialog>
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
import ConfirmDelete from "src/components/UI/ConfirmDelete.vue";
export default {
  components: {
    DynamicHeader,
    MainSearchBar,
    OffersBar,
    FilterBar,
    VirticalSlideProducts,
    EditAndDelete,
    ConfirmDelete,
  },
  setup() {
    return {
      dialog: ref(false),
      dialog_delete: ref(false),
      products: ref([
        {
          id: "1",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          category: "مشروبات",
          sup_categoty: null,
          additions: null,
          price: "400",
          price_sale: "0",
          status: true,
          img: "apple-pay.png",
          sale_code: null,
          sale_timeout: null,
          sale_from: null,
          sale_to: null,
        },
        {
          id: "2",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "300",
          status: false,
          img: "prod1.png",
          category: "مشروبات",
          price_sale: "0",
          sup_categoty: null,
          additions: null,
          sale_code: null,
          sale_timeout: null,
          sale_from: null,
          sale_to: null,
        },
        {
          id: "3",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "250",
          status: false,
          img: "Rectangle 4318.png",
          category: "مشروبات",
          price_sale: "0",
          sup_categoty: null,
          additions: null,
          sale_code: null,
          sale_timeout: null,
          sale_from: null,
          sale_to: null,
        },
        {
          id: "4",
          name: "اسم الطبق",
          disc: "وريم ايبسوم هو نموذج افتراضي افتراضيافتراضيافتراضيافتراضي",
          price: "600",
          status: true,
          img: "Rectangle 4322.png",
          category: "مشروبات",
          price_sale: "0",
          sup_categoty: null,
          additions: null,
          sale_code: null,
          sale_timeout: null,
          sale_from: null,
          sale_to: null,
        },
      ]),
    };
  },
  methods: {
    editeOrDeleteProduct(product) {
      this.dialog = true;
      this.$store.commit("Product/EDIT_PRODUCT", product);
    },
    editProduct() {
      this.$router.push("products/add&edit");
    },
    deleteProduct() {
      (this.dialog = false),
        setTimeout(() => {
          this.dialog_delete = true;
        }, 500);
    },
    addProduct() {
      this.$store.commit("Product/EDIT_PRODUCT", null);
      this.$router.push("products/add&edit");
    },
    canselDeleteProduct() {
      this.dialog_delete = false;
    },
    confirmDeleteProduct() {
      // confir, delete
    },
  },
};
</script>

<style>
</style>

