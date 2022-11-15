<template>
  <div class="profile-info row" dir="rtl">
    <div class="col-3">
      <!-- ////////////////// -->
      <!-- user profile image -->
      <!-- ////////////////// -->
      <UserImage imgSrc="test/2.png" />
      <div class="text-center text-500" style="width: 75px">اسم البائع</div>
      <div class="text-center" style="width: 75px">
        <q-rating
          v-model="ratingModel"
          size="10px"
          style="color: #dfb300"
          icon="star_border"
          icon-selected="star"
        />
      </div>
    </div>
    <div class="col-9 row justify-around items-center text-center">
      <div class="col-4">
        <div class="text-bold text-h3">28</div>
        <div class="text-body2">المنشورات</div>
      </div>
      <div class="col-4">
        <div class="text-bold text-h3">500</div>
        <div class="text-body2">متابعين</div>
      </div>
      <div class="col-4">
        <div class="text-bold text-h3">320</div>
        <div class="text-body2">متابع</div>
      </div>
      <div class="col-12 q-mt-lg q-mx-auto">
        <q-btn
          color="primary"
          class="q-px-xl main-rounded"
          size="md"
          label="تعديل الملف"
          @click="changeProfleInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserImage from "../UI/UserImage.vue";
import { ref } from "vue";

export default {
  components: { UserImage },
  setup() {
    return {
      ratingModel: ref("3"),
    };
  },
  methods: {
    changeProfleInfo() {
      this.$router.push({ name: "EditPersolInfo" });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-info {
  margin: 20px 0;
  &__img {
    position: relative;
    height: 75px;
    width: 75px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid #455a64;
    }
  }
}
</style>
