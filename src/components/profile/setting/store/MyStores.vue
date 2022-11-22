<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader title="تفاصيل المطعم" :addIcon="true" :notifyIcon="true" />
    <TestMap />

    <q-form @submit.prevent="saveProduct" class="q-my-lg">
      <div class="q-mb-md">
        <div class="q-my-xs text-500">اسم المطعم</div>
        <q-input
          placeholder="اسم المطعم"
          v-model="store_data.name"
          dense
          rounded
          filled
          class="input"
          outlined
        />
      </div>
      <div class="q-mb-md">
        <div class="q-my-xs text-500">مسئول الفرع</div>
        <q-select
          filled
          v-model="store_data.brach_menager"
          use-input
          label="مسئول الفرع"
          :options="list_item"
          behavior="menu"
          @keyup="getInputValue"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> لا يوجد </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="q-mb-md">
        <div class="q-my-xs text-500">الفرع</div>
        <q-select
          class="input"
          v-model="store_data.brach_name"
          outlined
          dense
          rounded
          :options="list_item"
          filled
          placeholder="الفرع "
        >
        </q-select>
      </div>
      <div class="q-mb-md">
        <div class="q-my-xs text-500">هوية المتجر</div>
        <!-- <q-input
          placeholder="هوية المتجر"
          v-model="store_data.identity"
          dense
          rounded
          filled
          class="input"
          outlined
        /> -->
        <upload-single-image @uploadFile="getLogo" />
      </div>
      <div class="q-my-xs text-500">السجل التجاري</div>
      <UploadPdf @uploadFile="getPdfFile" />
      <div class="q-my-xs text-500">صور المطعم</div>
      <UploadMultibleImage />
      <div class="flex">
        <div class="text-body2 text-500">ايام العمل</div>
      </div>
      <work-days
        @workDaysIsChanged="changeWorkDays"
        :workDays="store_data.work_days"
      />
    </q-form>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";

import { ref } from "vue";
import TestMap from "src/components/TestMap.vue";
import UploadPdf from "src/components/UI/UploadPdf.vue";
import UploadMultibleImage from "src/components/UI/UploadMultibleImage.vue";
import UploadSingleImage from "src/components/UI/UploadSingleImage.vue";
import WorkDays from "./WorkDays.vue";
export default {
  components: {
    DynamicHeader,
    TestMap,
    UploadPdf,
    UploadMultibleImage,
    UploadSingleImage,
    WorkDays,
  },
  setup() {
    // const loader = new Loader({
    //   apiKey: "YOUR_API_KEY",
    //   version: "weekly",
    // });
    return {
      // loader,
      stringOptions: ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]),
      store_data: ref({
        name: "",
        brach_menager: "",
        brach_name: "",
        identity: "",
        commercial_register: "",
        work_days: ["الاحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
      }),
      list_item: [
        {
          label: "اسبوعان",
          code: "2w",
        },
        {
          label: "شهر",
          code: "1m",
        },
        {
          label: "3 شهور",
          code: "3m",
        },
        {
          label: "6 شهور",
          code: "6m",
        },
      ],
    };
  },
  methods: {
    getPdfFile(file) {
      this.store_data.commercial_register = file;
    },
    getLogo(file) {
      this.store_data.identity = file;
    },
    changeWorkDays(val) {
      this.store_data.work_days = val;
    },
    // getInputValue(e) {
    //   const val = e.target.value;
    //   // console.log(val);
    // },
  },
  // mounted() {
  //   this.loader.load().then(() => {
  //     map = new google.maps.Map(document.getElementById("map"), {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8,
  //     });
  //   });
  // },
  // created() {
  //   this.$getLocation()
  //     .then((coordinates) => {
  //       console.log(coordinates);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>

<style>
</style>
