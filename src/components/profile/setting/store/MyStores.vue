<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      title="تفاصيل المطعم"
      :addIcon="true"
      :notifyIcon="true"
      @emitAdd="creatBranch"
    />
    <TestMap />
    <!-- //////////////////////// -->
    <!-- form for my store branch -->
    <!-- //////////////////////// -->
    <q-form @submit.prevent="saveProduct" class="q-my-lg">
      <div class="q-mb-md">
        <div class="q-my-xs text-500">اسم المطعم</div>
        <!-- ////////////// -->
        <!-- restorant name -->
        <!-- ////////////// -->
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
      <!-- ////////////// -->
      <!-- branch menager -->
      <!-- ////////////// -->
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
        <!-- ///////////// -->
        <!-- branch branch -->
        <!-- ///////////// -->
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
        <!-- /////////// -->
        <!-- branch logo -->
        <!-- /////////// -->
        <div class="q-my-xs text-500">هوية المتجر</div>
        <upload-single-image @uploadFile="getLogo" />
      </div>
      <div class="q-my-xs text-500">السجل التجاري</div>
      <!-- /////////////////// -->
      <!-- Commercial Register -->
      <!-- /////////////////// -->
      <UploadPdf @uploadFile="getPdfFile" />
      <div class="q-my-xs text-500">صور المطعم</div>
      <!-- //////////////// -->
      <!-- restorant images -->
      <!-- //////////////// -->
      <UploadMultibleImage />
      <div class="flex">
        <div class="text-body2 text-500">ايام العمل</div>
      </div>
      <!-- ///////// -->
      <!-- work days -->
      <!-- ///////// -->
      <work-days
        @workDaysIsChanged="changeWorkDays"
        :workDays="store_data.work_days"
      />
      <div class="text-body2 text-500">ساعات العمل</div>
      <!-- ////////// -->
      <!-- work hours -->
      <!-- ////////// -->
      <WorkTime
        :work_time_from="store_data.work_time_from"
        :work_time_to="store_data.work_time_to"
        @workTimeFromIsChanged="changrWorkTimeFrom"
        @workTimeToIsChanged="changeWorkTimeTo"
      />
      <div class="row justify-around q-my-md">
        <div class="col-5">
          <!-- /////////////////// -->
          <!-- branch phone number -->
          <!-- /////////////////// -->
          <q-input type="tel" v-model="store_data.phone" dense>
            <template v-slot:prepend>
              <q-icon
                class="q-mx-xs"
                size="xs"
                name="img:icon/call-primary.png"
              />
            </template>
          </q-input>
        </div>
        <!-- //////////// -->
        <!-- branch email -->
        <!-- //////////// -->
        <div class="col-5">
          <q-input type="mail" v-model="store_data.mail" dense>
            <template v-slot:prepend>
              <q-icon
                size="xs"
                class="q-mx-xs"
                name="img:icon/post-primary.png"
              />
            </template>
          </q-input>
        </div>
      </div>
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
import WorkTime from "./WorkTime.vue";
export default {
  components: {
    DynamicHeader,
    TestMap,
    UploadPdf,
    UploadMultibleImage,
    UploadSingleImage,
    WorkDays,
    WorkTime,
  },
  setup() {
    return {
      // loader,
      stringOptions: ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]),
      store_data: ref({
        name: "",
        brach_menager: "",
        brach_name: "",
        identity: "",
        commercial_register: "",
        phone: "+966123456789 ",
        mail: "mail@mail.com",
        work_days: ["الاحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
        work_time_from: "10:56",
        work_time_to: "10:56",
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
    // function get file pdf file
    getPdfFile(file) {
      this.store_data.commercial_register = file;
    },
    // function get logo image file
    getLogo(file) {
      this.store_data.identity = file;
    },
    // function edit work days
    changeWorkDays(val) {
      this.store_data.work_days = val;
    },
    // function set or edit work time from
    changrWorkTimeFrom(val) {
      this.store_data.work_time_from = val;
      console.log(val);
    },
    // function set or edit work to
    changeWorkTimeTo(val) {
      this.store_data.work_time_to = val;
      console.log(val);
    },
    // create new branch
    creatBranch() {
      this.$router.push({ name: "AddStore" });
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
