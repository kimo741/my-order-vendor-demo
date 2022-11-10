<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader :searchIcon="true" />
    <!-- ////// -->
    <!-- header -->
    <!-- ////// -->
    <div class="row justify-between q-mx-md q-my-md">
      <div class="text-right text-500">الكل(14)</div>
      <div class="text-left text-sm text-hint">تعيين الكل كمقروء</div>
    </div>
    <!-- /////////////////// -->
    <!-- list of notifcation -->
    <!-- /////////////////// -->
    <q-list separator padding dir="rtl">
      <q-item
        v-for="(notify, i) in noify_list"
        :key="i"
        :class="notify.active ? 'active' : ''"
      >
        <q-item-section side class="q-pa-0">
          <UserImage
            :imgSrc="notify.user_img"
            addStyle="width:50px ; height:50px ;"
        /></q-item-section>

        <q-item-section class="q-px-sm">
          <q-item-label class="text-no-wrap">{{
            notify.user_name
          }}</q-item-label>
          <q-item-label class="text-no-wrap" caption>{{
            notify.caption
          }}</q-item-label>
        </q-item-section>

        <q-item-section side class="q-pa-0">
          <!-- <q-badge label="10k" /> -->
          <div class="text-sm text-hint">{{ notify.data_from }}</div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "../DynamicHeader.vue";
import UserImage from "../UserImage.vue";

export default {
  components: { DynamicHeader, UserImage },
  setup() {
    return {
      noify_list: ref([
        {
          id: "1",
          user_img: "test/2.png",
          user_name: "اسم الشخص",
          caption: "قام بالتفاعل علي البوست",
          data_from: "5h",
          active: true,
        },
        {
          id: "2",
          user_img: "test/3.png",
          user_name: "اسم الشخص",
          caption: "قام بالتفاعل علي البوست",
          data_from: "5h",
          active: true,
        },
        {
          id: "3",
          user_img: "test/4.png",
          user_name: "اسم الشخص",
          caption: "قام بالتفاعل علي البوست",
          data_from: "5h",
          active: false,
        },
        {
          id: "4",
          user_img: "test/5.png",
          user_name: "اسم الشخص",
          caption: "قام بالتفاعل علي البوست",
          data_from: "5h",
          active: false,
        },
        {
          id: "5",
          user_img: "test/1.png",
          user_name: "اسم الشخص",
          caption: "قام بالتفاعل علي البوست",
          data_from: "5h",
          active: false,
        },
        {
          id: "6",
          user_img: "test/2.png",
          user_name: "اسم الشخص",
          caption: "قام بالتفاعل علي البوست",
          data_from: "5h",
          active: false,
        },
      ]),
    };
  },
};
</script>

<style scoped>
.active {
  background-color: rgba(255, 107, 97, 0.1);
}
</style>
