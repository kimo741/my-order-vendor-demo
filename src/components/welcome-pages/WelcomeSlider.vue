<template>
  <q-page>
    <!-- //////////////////////// -->
    <!-- top bar for back or skip -->
    <!-- //////////////////////// -->
    <BackAndSkip @emitSkip="lastSlide" title="تخطي" />
    <!-- //////// -->
    <!-- carousel -->
    <!-- //////// -->
    <div class="">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="primary"
        :navigation-position="navPos"
        navigation
        padding
        style="height: calc(100vh - 50px); border-radius: none !important"
        class="welcom-sliede full-width rounded-borders"
      >
        <!-- /////////// -->
        <!-- first slide -->
        <!-- /////////// -->
        <q-carousel-slide name="browse" class="column no-wrap flex-center">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="row welcom">
            <div class="col-12 welcom__content text-center">
              <div class="text-h5 text-primary q-py-sm text-500">
                سهولة تصفح المتاجر
              </div>
              <div class="text-body2 disc-color">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ للنص أو شكل توضع
              </div>
            </div>
            <div class="col-12 welcom__img">
              <img src="img/Group.png" />
            </div>
            <q-btn
              @click="firstSlide"
              class="q-my-md welcom__btn"
              label="التالى"
            />
          </div>
        </q-carousel-slide>
        <!-- /////////// -->
        <!-- soc slide -->
        <!-- /////////// -->
        <q-carousel-slide name="review" class="column no-wrap flex-center">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="row welcom">
            <div class="col-12 welcom__img">
              <img src="img/Customer Survey.png" />
            </div>
            <div class="col-12 welcom__content text-center">
              <div class="text-h5 text-primary q-py-sm text-500">
                يمكن الطلب والتوصيل بكل سهولة
              </div>
              <div class="text-body2 disc-color">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ للنص أو شكل توضع
              </div>
            </div>

            <q-btn
              @click="socSlide"
              class="q-my-md welcom__btn"
              label="التالى"
            />
          </div>
        </q-carousel-slide>
        <!-- ////////// -->
        <!-- last slide -->
        <!-- ////////// -->
        <q-carousel-slide name="orders" class="column no-wrap flex-center">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="row welcom">
            <div class="col-12 welcom__content text-center">
              <div class="text-h5 text-primary q-py-sm text-500">
                سهولة تصفح المتاجر
              </div>
              <div class="text-body2 disc-color">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ للنص أو شكل توضع
              </div>
              <div class="text-center text-body2 cursor-pointer">
                الدخول كذائر
              </div>
            </div>
            <div class="col-12 welcom__img">
              <img src="img/Delivery-amico 1 (1).png" />
            </div>
            <q-btn
              @click="lastSlide"
              class="q-my-md welcom__btn"
              label="ابدأ"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";

export default {
  setup() {
    return {
      navPos: ref("bottom"),
      slide: ref("browse"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  methods: {
    // go to next slide
    firstSlide() {
      this.slide = "review";
    },
    // go to next slide
    socSlide() {
      this.slide = "orders";
    },
    // finish
    lastSlide() {
      this.$router.push({ name: "login" });
      localStorage.setItem("first_view", true);
    },
  },
  components: { BackAndSkip },
};
</script>
<style lang="scss" scoped>
.welcom {
  text-align: right;
  // position: relative;
  // height: 100%;
  height: 100%;
  &__img {
    // overflow: hidden;
    height: 270px !important;
    width: 100%;
    overflow: hidden;
    margin-top: 70px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &__content {
    text-align: right;
    // position: fixed;
    // bottom: 0;
    // left: 0;
    // height: 300px;
    // background-color: $bg-slide;
    // text-align: center;
    // border-radius: 30px 30px 0 0;
    // padding: 0 20px 0 20px;
    // overflow: auto;
  }
  &__btn {
    position: fixed;
    right: 30px;
    bottom: 5px;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    font-weight: bolder;
    background-color: $primary;
    color: white;
  }
}
</style>
