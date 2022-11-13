<template>
  <q-card class="main-rounded post-card" dir="rtl">
    <q-card-section class="q-py-sm">
      <div class="flex items-center">
        <UserImage
          imgSrc="test/Rectangle 4335.png"
          addStyle="width:50px ; height:50px"
        />
        <div class="q-mr-sm">
          <div class="text-body2 text-bold">{{ post_data.name }}</div>
          <div class="text-sm text-hint">{{ post_data.post_from }}</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="text-hint q-py-sm">
      {{ post_data.disc }}</q-card-section
    >
    <q-card-section class="q-py-sm">
      <img class="main-rounded" :src="post_data.img" alt="" />
    </q-card-section>
    <q-card-section class="q-py-0">
      <div class="flex">
        <q-rating
          v-model="post_data.rating"
          size="12px"
          style="color: #dfb300"
          readonly
          icon="star_border"
          icon-selected="star"
        />
        <div class="text-sm text-bold q-mx-xs">{{ post_data.rating }}</div>
        <div class="text-sm text-bold q-mx-xs">({{ post_data.review }})</div>
        <div class="text-sm text-hint">تقيم</div>
      </div>
      <div class="flex items-center">
        <q-icon color="grey-9" size="sm" name="eva-heart-outline" />
        <div class="text-hint text-body1 q-mx-xs">
          {{ post_data.likes_count }} اعجاب
        </div>
      </div>
      <div class="flex items-center q-my-sm">
        <q-icon color="grey-9" size="xs" name="img:/icon/car.png" />
        <div class="text-hint text-body1 q-mx-xs">
          {{ post_data.delevry_time }}
        </div>
        <div class="text-hint text-body1 q-mx-xs">
          ({{ post_data.distance }})
        </div>
        <q-icon
          class="q-mx-md"
          color="grey-9"
          size="xs"
          name="img:/icon/time.png"
        />
        <div class="text-hint text-body1">{{ post_data.order_time }}</div>
      </div>
    </q-card-section>
    <q-separator class="q-my-md" color="grey-5" />
    <q-card-section
      class="q-py-sm row justify-between items-center text-center"
    >
      <div class="col">
        <div class="text-sm text-hint">مشاهده</div>
        <div class="text-body2 text-bold">{{ post_data.post_view }}</div>
      </div>
      <div class="col">
        <div class="text-sm text-hint">مشاركه</div>
        <div class="text-body2 text-bold">{{ post_data.share }}</div>
      </div>
      <div class="col-6">
        <div class="text-sm text-hint">الاشخاص التي تم الوصول اليهم</div>
        <div class="text-body2 text-bold">{{ post_data.reach }}</div>
      </div>
      <div class="col">
        <div class="text-sm text-hint">تفاعل</div>
        <div class="text-body2 text-bold">{{ post_data.interaction }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import UserImage from "../UI/UserImage.vue";
export default {
  components: { UserImage },
  props: {
    post_data: {
      type: Object || Proxy,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    object-position: 100% 60%;
  }
}
</style>
