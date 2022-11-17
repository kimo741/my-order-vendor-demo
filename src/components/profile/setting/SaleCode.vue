<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      :addIcon="true"
      title="الاكواد"
      :back-icon="true"
      @emitAdd="createCode"
    />
    <q-tabs
      v-model="tab"
      dense
      class="no-effict primary bg-taps q-my-md"
      align="justify"
      indicator-color="transparent"
      narrow-indicator
      active-class="active-class"
    >
      <q-tab label="السابقة" name="end" />
      <q-tab label="الحاليه" name="current" />
    </q-tabs>
    <q-tab-panels
      style="background: #eeeeee !important"
      class="no-effict q-my-lg"
      v-model="tab"
      animated
    >
      <!-- /////////////////// -->
      <!-- valid discount code -->
      <!-- /////////////////// -->
      <q-tab-panel
        class="q-pa-0 no-effict"
        style="background: #eeeeee !important"
        name="end"
      >
        <OfferCardSlide
          :offerCard="expired_card"
          @passOfferCard="reviewOfferData"
        />
      </q-tab-panel>
      <!-- ////////////////// -->
      <!-- past discount code -->
      <!-- ////////////////// -->
      <q-tab-panel
        class="q-pa-0 no-effict"
        style="background: #eeeeee !important"
        name="current"
      >
        <OfferCardSlide
          :offerCard="offerCard"
          @passOfferCard="reviewOfferData"
        />
      </q-tab-panel>
    </q-tab-panels>
    <!-- //////////////////////////// -->
    <!-- dialog on click open details -->
    <!-- //////////////////////////// -->
    <q-dialog v-model="dialog">
      <DialogSpacificCode @closeDialog="closeDialog" :dataCard="review_card" />
    </q-dialog>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";
import OfferCardSlide from "./SaleCode/OfferCardSlide.vue";
import DialogSpacificCode from "./SaleCode/DialogSpacificCode.vue";
export default {
  components: { DynamicHeader, OfferCardSlide, DialogSpacificCode },
  setup() {
    return {
      review_card: ref(""),
      dialog: ref(false),
      tab: ref("current"),
      offerCard: ref([
        {
          id: "1",
          code: "OM73",
          value: "20",
          type: "s",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: false,
        },
        {
          id: "2",
          code: "NH12584",
          value: "10",
          type: "g",
          disc: "",
          end_date: "05/11/2022",
          products: [null],
          end: false,
        },
        {
          id: "3",
          code: "OM73",
          value: "30",
          type: "m",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق", "اسم الطبق", "اسم الطبق"],
          end: false,
        },
        {
          id: "4",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: false,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: false,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: false,
        },
      ]),
      expired_card: ref([
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: true,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: true,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: true,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: true,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: true,
        },
        {
          id: "5",
          code: "OM73",
          value: "20",
          type: "single",
          disc: "",
          end_date: "05/11/2022",
          products: ["اسم الطبق"],
          end: true,
        },
      ]),
    };
  },

  methods: {
    createCode() {
      this.$router.push({ name: "GeneratCode" });
    },
    reviewOfferData(data) {
      this.review_card = data;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>
