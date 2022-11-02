<template>
  <q-page class="q-mx-sm q-my-md">
    <DynamicHeader :backIcon="true" />
    <main-search-bar />
    <titleBar :showBtn="false" label="الوجبات الاكثر طلبا" />
    <SliderItemV @showItem="showItem" :products="items" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import SliderItemV from "src/components/UI/sliders/SliderItemV.vue";
import MainSearchBar from "src/components/UI/search/mainSearchBar.vue";
import TitleBar from "src/components/UI/TitleBar.vue";
export default {
  components: { DynamicHeader, SliderItemV, MainSearchBar, TitleBar },
  setup() {
    const showItem = () => {
      // show this item
    };
    return {
      showItem,
      items: ref([
        {
          id: "1",
          img: "test/prod1.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod1.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه  ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
        {
          id: "1",
          img: "test/prod2.png",
          title: "اسم الطبق",
          price: "400",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع فيالتصاميم على العميل ليتصور طريقه ",
        },
      ]),
    };
  },
};
</script>

<style>
</style>
