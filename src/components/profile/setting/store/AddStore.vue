<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      :back-icon="true"
      title="اضافة فرع جديد"
      :notifyIcon="true"
    />
    <!-- /////////////////// -->
    <!-- form for add branch -->
    <!-- /////////////////// -->
    <q-form @submit.prevent="saveProduct" class="q-my-lg">
      <div class="q-mb-md">
        <!-- ////////////// -->
        <!-- restorant name -->
        <!-- ////////////// -->
        <div class="q-my-xs text-500">اسم المطعم</div>
        <q-input
          placeholder="ادخل اسم المطعم"
          v-model="store_data.name"
          dense
          rounded
          filled
          class="input"
          outlined
        />
      </div>
      <div class="q-mb-md">
        <!-- ////////////// -->
        <!-- branch menager -->
        <!-- ////////////// -->
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
        <!-- /////////// -->
        <!-- branch name -->
        <!-- /////////// -->
        <div class="q-my-xs text-500">الفرع</div>
        <q-input
          class="input"
          v-model="store_data.brach_name"
          dense
          rounded
          filled
          placeholder="ادخل أسم خاص بالفرع"
        />
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
      <!-- //////////////// -->
      <!-- restorant images -->
      <!-- //////////////// -->
      <div class="q-my-xs text-500">صور المطعم</div>
      <UploadMultibleImage />
      <div class="flex">
        <!-- ///////// -->
        <!-- work days -->
        <!-- ///////// -->
        <div class="text-body2 text-500">ايام العمل</div>
      </div>
      <work-days
        @workDaysIsChanged="changeWorkDays"
        :workDays="store_data.work_days"
      />
      <!-- ////////// -->
      <!-- work hours -->
      <!-- ////////// -->
      <div class="text-body2 text-500">ساعات العمل</div>
      <WorkTime
        :work_time_from="store_data.work_time_from"
        :work_time_to="store_data.work_time_to"
        @workTimeFromIsChanged="changrWorkTimeFrom"
        @workTimeToIsChanged="changeWorkTimeTo"
      />
      <!-- /////////////////// -->
      <!-- branch phone number -->
      <!-- /////////////////// -->
      <div class="row justify-around q-my-md">
        <div class="col-5">
          <q-input
            hint="ادخل رقم هاتف خاص بالفرع"
            type="tel"
            v-model="store_data.phone"
            dense
          >
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
          <q-input
            hint="ادخل بريد الكتروني خاص بالفرع"
            type="mail"
            v-model="store_data.mail"
            dense
          >
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
      <!-- ///////////// -->
      <!-- submit button -->
      <!-- ///////////// -->
      <div class="row justify-center q-my-md">
        <q-btn
          size="md"
          class="q-py-sm main-rounded"
          color="primary"
          label="حفظ"
          style="width: 80%"
          type="submit"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";

import { ref } from "vue";
import UploadPdf from "src/components/UI/UploadPdf.vue";
import UploadMultibleImage from "src/components/UI/UploadMultibleImage.vue";
import UploadSingleImage from "src/components/UI/UploadSingleImage.vue";
import WorkDays from "./WorkDays.vue";
import WorkTime from "./WorkTime.vue";
export default {
  components: {
    DynamicHeader,
    UploadPdf,
    UploadMultibleImage,
    UploadSingleImage,
    WorkDays,
    WorkTime,
  },
  setup() {
    return {
      // option for sellect data
      stringOptions: ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]),
      // form data
      store_data: ref({
        name: "",
        brach_menager: "",
        brach_name: "",
        identity: "",
        commercial_register: "",
        phone: "",
        mail: "",
        work_days: ["الاحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
        work_time_from: "",
        work_time_to: "",
      }),
      // option for sellect data
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
    // function set or edit work days
    changeWorkDays(val) {
      this.store_data.work_days = val;
    },
    // function set or edit work time from

    changrWorkTimeFrom(val) {
      this.store_data.work_time_from = val;
      console.log(val);
      s;
    },
    // function set or edit work to
    changeWorkTimeTo(val) {
      this.store_data.work_time_to = val;
      console.log(val);
    },
    // submit function
    saveProduct(val) {
      // this.store_data.work_time_to = val;
      // console.log(val);
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
