<template>
  <q-card class="full-width full-height create-post q-px-sm" dir="rtl">
    <!-- /////// -->
    <!-- header  -->
    <!-- /////// -->
    <div class="row full-height__header q-my-md">
      <q-btn
        dense
        size="md"
        class="col main-rounded"
        label="نشر"
        color="primary"
        @click="$emit('emitPost')"
      />
      <div class="col-6 text-h1 text-500 text-center q-my-auto">اضافة منتج</div>
      <div class="col-3 text-left">
        <q-btn class="" flat icon="close" size="sm" />
      </div>
    </div>
    <!-- ///////// -->
    <!-- title bar -->
    <!-- ///////// -->
    <TitleBar
      @showAll="showAllProducts"
      class="q-px-sm"
      :showBtn="true"
      label="المنتجات"
    />
    <div class="horizental-list">
      <q-card v-for="(product, i) in products" :key="i" class="my-card">
        <q-card-section
          class="q-pa-sm row justify-between text-bold text-body2"
        >
          <div class="col">{{ product.name }}</div>
          <div class="col text-left flex justify-end">
            <q-icon size="xs" name="img:icon/XMLID.png" />
            <div class="q-mx-sm">{{ product.price }} ر.س</div>
          </div>
        </q-card-section>
        <q-card-section class="row q-pa-sm">
          <div class="col-8 text-sm text-500 text-no-wrap items-center">
            {{ product.disc }}
          </div>
          <div class="col-4 handel-image">
            <img :src="product.img" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <PostForm />
    <UploadMultibleImage />
  </q-card>
</template>

<script>
import DynamicHeader from "../DynamicHeader.vue";
import TitleBar from "../TitleBar.vue";
import { ref } from "vue";
import PostForm from "./PostForm.vue";
import UploadMultibleImage from "../UploadMultibleImage.vue";
export default {
  components: { DynamicHeader, TitleBar, PostForm, UploadMultibleImage },
  setup() {
    return {
      products: ref([
        {
          id: "1",
          name: "اسم الطبق",
          price: "398",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          img: "test/Rectangle 4335.png",
        },
        {
          id: "2",
          name: "اسم الطبق",
          price: "48",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          img: "test/Rectangle 4332.png",
        },
        {
          id: "3",
          name: "اسم الطبق",
          price: "655",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          img: "test/Rectangle 4333.png",
        },
        {
          id: "4",
          name: "اسم الطبق",
          price: "80",
          disc: "وريم ايبسوم هو نموذج افتراضي ",
          img: "test/Rectangle 4322.png",
        },
      ]),
    };
  },
  methods: {
    submitPost() {},
    showAllProducts() {},
  },
};
</script>

<style lang="scss" scope >
.create-post {
  z-index: 500000000;
  background-color: #eeeeee;
  &__header {
    height: 60px;
    margin: auto;
  }
  .my-card {
    flex: 0 0 75%;
    margin: 0 6px;
    padding: 3px;
  }
  .handel-image {
    img {
      width: 120px;
      height: 50px;
    }
  }
}
</style>
