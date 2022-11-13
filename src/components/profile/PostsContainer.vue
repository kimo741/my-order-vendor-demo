<template>
  <div dir="rtl">
    <div
      class="
        full-width
        row
        justify-center
        items-center
        bg-grey-4
        q-py-xs
        main-rounded
      "
    >
      <div class="text-body2 q-mx-sm text-500">منشوراتي</div>
      <q-icon name="img:icon/Vector.png" />
    </div>
    <div class="q-my-md flex">
      <div class="text-sm text-500">ماتم نشره مؤخرا</div>
      <span class="text-hint q-mx-sm">(25)</span>
    </div>
    <div class="profile-posts">
      <div
        v-for="(post, i) in user_posts"
        @click="openSpacificPost(post)"
        :key="i"
        class="profile-posts__img"
      >
        <img :src="post.img" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      user_posts: ref([
        {
          id: "1",
          name: "اسم الشخص",
          post_from: "اليوم , منذ 5 ساعات",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
          img: "test/Rectangle 4322.png",
          rating: "4",
          review: "25",
          likes_count: "20",
          delevry_time: "11 دقيقة",
          distance: "2.5 km",
          order_time: "30 دقيقة",
          post_view: "1.245",
          share: "125",
          reach: "2.455",
          interaction: "375",
        },
        {
          id: "2",
          name: "اسم الشخص",
          post_from: "اليوم , منذ 5 ساعات",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
          img: "test/Rectangle 4335.png",
          rating: "4",
          review: "25",
          likes_count: "20",
          delevry_time: "11 دقيقة",
          distance: "2.5 km",
          order_time: "30 دقيقة",
          post_view: "1.245",
          share: "125",
          reach: "2.455",
          interaction: "375",
        },
        {
          id: "3",
          name: "اسم الشخص",
          post_from: "اليوم , منذ 5 ساعات",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
          img: "test/Rectangle 4334.png",
          rating: "4",
          review: "25",
          likes_count: "20",
          delevry_time: "11 دقيقة",
          distance: "2.5 km",
          order_time: "30 دقيقة",
          post_view: "1.245",
          share: "125",
          reach: "2.455",
          interaction: "375",
        },
        {
          id: "4",
          name: "اسم الشخص",
          post_from: "اليوم , منذ 5 ساعات",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
          img: "test/Rectangle 4333.png",
          rating: "4",
          review: "25",
          likes_count: "20",
          delevry_time: "11 دقيقة",
          distance: "2.5 km",
          order_time: "30 دقيقة",
          post_view: "1.245",
          share: "125",
          reach: "2.455",
          interaction: "375",
        },
        {
          id: "5",
          name: "اسم الشخص",
          post_from: "اليوم , منذ 5 ساعات",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
          img: "test/Rectangle 4332.png",
          rating: "4",
          review: "25",
          likes_count: "20",
          delevry_time: "11 دقيقة",
          distance: "2.5 km",
          order_time: "30 دقيقة",
          post_view: "1.245",
          share: "125",
          reach: "2.455",
          interaction: "375",
        },
        {
          id: "6",
          name: "اسم الشخص",
          post_from: "اليوم , منذ 5 ساعات",
          disc: "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم على العميل ليتصور طريقه وضع النصوص",
          img: "test/Rectangle 4331.png",
          rating: "4",
          review: "25",
          likes_count: "20",
          delevry_time: "11 دقيقة",
          distance: "2.5 km",
          order_time: "30 دقيقة",
          post_view: "1.245",
          share: "125",
          reach: "2.455",
          interaction: "375",
        },
      ]),
    };
  },
  methods: {
    openSpacificPost(post) {
      this.$router.push({
        name: "spacificPost",
        params: {
          post: post.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &__img {
    flex: 0 0 31%;
    height: 110px;
    margin: calc(7% / 6);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
