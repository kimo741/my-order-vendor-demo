<template>
  <q-list class="q-my-md setting-list">
    <q-item
      clickable
      v-ripple
      overline
      dense
      class="row justify-between items-center setting-list__item"
      v-for="(item, i) in seting_lists"
      :key="i"
    >
      <div class="col-9 text-right flex items-center">
        <q-icon size="xs" :name="item.icon" />
        <div class="q-mx-sm text-body2 text-500">{{ item.label }}</div>
      </div>
      <div class="col text-left">
        <q-icon color="grey-6" size="sm" name="eva-arrow-ios-back-outline" />
      </div>
    </q-item>
    <q-item @click="logout">
      <div class="text-right text-primary text-500">تسجيل الخروج</div>
    </q-item>
  </q-list>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      seting_lists: ref([
        {
          label: "البيانات الشخصية",
          icon: "img:icon/profile_info.png",
          // to: "",
        },
        {
          label: "المتجر",
          icon: "img:icon/shop.png",
          // to: "",
        },
        {
          label: "الأكواد",
          icon: "img:icon/ticket-discount.png",
          // to: "",
        },
        {
          label: "المدفوعات والمحفظه",
          icon: "img:icon/box.png",
          // to: "",
        },
        {
          label: "اللغة",
          icon: "img:icon/global.png",
          // to: "",
        },
        {
          label: "اتصل بنا",
          icon: "img:icon/call.png",
          // to: "",
        },
        {
          label: "عن التطبيق",
          icon: "img:icon/carbon_information.png",
          // to: "",
        },
        {
          label: "شروط الاستخدام",
          icon: "img:icon/stickynote.png",
          // to: "",
        },
        {
          label: "سياسة الخصوصية",
          icon: "img:icon/privecy.png",
          // to: "",
        },
        {
          label: "المساعدة",
          icon: "img:icon/qustion-mark.png",
          // to: "",
        },
      ]),
    };
  },
  methods: {
    logout() {},
  },
};
</script>

<style lang="scss" scoped>
.setting-list {
  &__item {
    background: rgba(232, 232, 232, 0.8);
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 8px auto;
    padding: 5px;
  }
}
</style>
