<template>
  <q-form @submit.prevent="sharePost" class="profile-info q-mt-lg" dir="rtl">
    <div class="row items-center">
      <div class="col-3">
        <UserImage imgSrc="test/2.png" />
      </div>
      <!-- //////////// -->
      <!-- product name -->
      <!-- //////////// -->
      <q-input
        dir="rtl"
        class="col"
        outlined
        v-model="post_info.name"
        label="اسم الطبق"
        required
        input-class="text-right"
        input-style="text-align:right"
      />
    </div>
    <div class="q-my-sm text-right text-body2 text-bold">الوصف</div>
    <!-- /////////////////// -->
    <!-- product discruption -->
    <!-- /////////////////// -->
    <q-input
      dir="rtl"
      input-style="height:100px"
      dense
      v-model="post_info.disc"
      outlined
      type="textarea"
      placeholder="يفضل كتابة وصف للمنتج"
    />
    <div class="row justify-between profile-info__duple-form">
      <div class="profile-info__duple-form--col">
        <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">
          اسم المتجر
        </div>

        <q-input
          dir="rtl"
          class="col"
          outlined
          v-model="post_info.price"
          required
          dense
          input-class="text-right"
          input-style="text-align:right"
        />
      </div>
      <div class="profile-info__duple-form--col">
        <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">السعر</div>

        <q-input
          dir="rtl"
          class="col"
          outlined
          dense
          v-model="post_info.vendor_name"
          required
          input-class="text-right"
          input-style="text-align:right"
        />
      </div>
    </div>
    <div class="row justify-between q-my-sm">
      <div class="col-3">
        <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">
          كود خصم
        </div>
        <q-input
          dir="rtl"
          outlined
          dense
          v-model="post_info.code"
          input-class="text-right"
          input-style="text-align:right"
        />
      </div>
      <div class="col-4">
        <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">من</div>
        <q-input v-model="post_info.date_form" dense outlined type="date" />
      </div>
      <div class="col-4">
        <div class="q-my-sm q-mr-xs text-right text-body2 text-bold">الي</div>
        <q-input v-model="post_info.date_to" dense outlined type="date" />
      </div>
    </div>
    <UploadMultibleImage @passImagesFile="getUploadImages" />
    <q-toggle
      class="q-my-sm"
      label="تسويق بالعموله"
      v-model="post_info.commission_marketing"
    />
  </q-form>
</template>

<script>
import { ref } from "vue";
import UploadMultibleImage from "../UploadMultibleImage.vue";
import UserImage from "../UserImage.vue";

export default {
  components: { UserImage, UploadMultibleImage },
  setup() {
    return {
      post_info: ref({
        name: "",
        disc: "",
        price: "",
        vendor_name: "",
        code: "",
        date_form: "",
        date_to: "",
        commission_marketing: false,
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-info {
  &__duple-form {
    &--col {
      width: 47%;
    }
  }
}
</style>
