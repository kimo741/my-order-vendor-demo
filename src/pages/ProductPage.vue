<template>
  <q-page class="q-mx-sm" dir="rtl">
    <!-- {{ getProducts }} -->
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
      :products="getProducts"
    />
    <!-- @changeProductStatus="changeProductStatus" -->
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
    <!-- {{ getProducts }} -->
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
import { allProducts } from "./use/productPage";
// import { updateProduct } from "./use/productPage";
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
    let auth_vendor = window.localStorage.getItem("auth_vendor");
    // const product_to_update = ref({});
    // const productId_to_update = ref("");
    // update product method
    // const changeProductStatus = async (product) => {
    //   const { id, ...productOpj } = await product;
    //   productId_to_update.value = id;
    //   product_to_update.value = productOpj;
    // };
    const { getProducts } = allProducts(auth_vendor);
    // const { mutateProductUpdate } = updateProduct(
    //   product_to_update.value,
    //   productId_to_update.value
    // );
    // const editAllProduct = getProducts.map((p) => {
    //   parseInt(p.status);
    // });
    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler
    // console.log(getProducts);

    return {
      getProducts,
      dialog: ref(false),
      dialog_delete: ref(false),
      // product_to_update,
      // mutateProductUpdate,
      // productId_to_update,
      // changeProductStatus,
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
/* console.log("Welcome to Programiz!");

For inputArray = ["aba", "aa", "ad", "vcd", "aba"],
the output should be
solution(inputArray) = ["aba", "vcd", "aba"]
function solution(inputArray) {
}
inputArray.splite() */
</style>

