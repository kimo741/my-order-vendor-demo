<template>
  <q-list class="q-my-md setting-list">
    <!-- ////////////////////// -->
    <!-- list links for setting -->
    <!-- ////////////////////// -->
    <q-item
      clickable
      v-ripple
      overline
      dense
      class="row justify-between items-center setting-list__item"
      v-for="(item, i) in seting_lists"
      :key="i"
      :to="item.to"
      @click="handelClick(item)"
    >
      <div class="col-9 text-right flex items-center">
        <!-- ////////////// -->
        <!-- icon for links -->
        <!-- ////////////// -->
        <q-icon size="xs" :name="item.icon" />
        <!-- ////////////// -->
        <!-- label for link -->
        <!-- ////////////// -->
        <div class="q-mx-sm text-body2 text-500">{{ item.label }}</div>
      </div>
      <div class="col text-left">
        <q-icon color="grey-6" size="sm" name="eva-arrow-ios-back-outline" />
      </div>
    </q-item>
    <!-- ////////////// -->
    <!-- logout button  -->
    <!-- ////////////// -->
    <q-item @click="logout">
      <q-btn
        class="text-right text-primary text-500"
        label="تسجيل الخروج"
        @click="checkLogOut"
        flat
      />
    </q-item>
    <!-- /////////////////////////////////// -->
    <!-- dialog to show contuct us component -->
    <!-- /////////////////////////////////// -->
    <q-dialog v-model="contact_us_dialog">
      <ContantUs @closeContactUs="contact_us_dialog = false" />
    </q-dialog>
    <!-- ////////////////////////////////// -->
    <!-- dialog to show about app component -->
    <!-- ////////////////////////////////// -->
    <q-dialog v-model="about_app_dialog">
      <about-app @closeAboutApp="about_app_dialog = false" />
    </q-dialog>
    <!-- /////////////////////////////// -->
    <!-- dialog to show termes component -->
    <!-- /////////////////////////////// -->
    <q-dialog v-model="termes_dialog">
      <TermsOfUse @closeTermOfUse="termes_dialog = false" />
    </q-dialog>
    <!-- /////////////////////////////// -->
    <!-- dialog to show policy component -->
    <!-- /////////////////////////////// -->
    <q-dialog v-model="policy_dialog">
      <PrivacyPolicy @closePrivacyPolicy="policy_dialog = false" />
    </q-dialog>
    <!-- ///////////////////////////// -->
    <!-- dialog to show help component -->
    <!-- ///////////////////////////// -->
    <q-dialog v-model="help_dialog">
      <HelpDialog @closePrivacyPolicy="help_dialog = false" />
    </q-dialog>
    <!-- ///////////////////////////// -->
    <!-- dialog to show confirm logout -->
    <!-- ///////////////////////////// -->
    <q-dialog v-model="logout_dialog">
      <LogOut @closePrivacyPolicy="logout_dialog = false" />
    </q-dialog>
  </q-list>
</template>

<script>
import { ref } from "vue";
import ContantUs from "./setting/dialogs/ContantUs.vue";
import AboutApp from "./setting/dialogs/AboutApp.vue";
import TermsOfUse from "./setting/dialogs/TermsOfUse.vue";
import PrivacyPolicy from "./setting/dialogs/PrivacyPolicy.vue";
import HelpDialog from "./setting/dialogs/HelpDialog.vue";
import LogOut from "./setting/dialogs/LogOut.vue";

export default {
  components: {
    ContantUs,
    AboutApp,
    TermsOfUse,
    PrivacyPolicy,
    HelpDialog,
    LogOut,
  },
  setup() {
    return {
      contact_us_dialog: ref(false),
      about_app_dialog: ref(false),
      termes_dialog: ref(false),
      policy_dialog: ref(false),
      help_dialog: ref(false),
      logout_dialog: ref(false),
      seting_lists: ref([
        {
          label: "البيانات الشخصية",
          icon: "img:icon/profile_info.png",
          to: "edit-info",
        },
        {
          label: "المتجر",
          icon: "img:icon/shop.png",
          to: "my-store",
        },
        {
          label: "الأكواد",
          icon: "img:icon/ticket-discount.png",
          to: "sale-code",
        },
        {
          label: "المدفوعات والمحفظه",
          icon: "img:icon/box.png",
          to: "Payments&Wallet",
        },
        {
          label: "اللغة",
          icon: "img:icon/global.png",
          // to: "",
        },
        {
          label: "اتصل بنا",
          icon: "img:icon/call.png",
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
    checkLogOut() {
      this.logout_dialog = true;
    },
    // handel on click chack the label for link to open his dailog
    handelClick(item) {
      switch (item.label) {
        case "اتصل بنا":
          this.contact_us_dialog = true;
          break;
        case "عن التطبيق":
          this.about_app_dialog = true;
          break;
        case "شروط الاستخدام":
          this.termes_dialog = true;
          break;
        case "سياسة الخصوصية":
          this.policy_dialog = true;
          break;
        case "المساعدة":
          this.help_dialog = true;
          break;
      }
    },
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
