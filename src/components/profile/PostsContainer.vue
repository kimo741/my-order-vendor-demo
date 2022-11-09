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
      <div class="profile-posts__img">
        <img src="test/Rectangle 4322.png" />
      </div>
      <div class="profile-posts__img">
        <img src="test/Rectangle 4335.png" />
      </div>
      <div class="profile-posts__img">
        <img src="test/Rectangle 4334.png" />
      </div>
      <div class="profile-posts__img">
        <img src="test/Rectangle 4333.png" />
      </div>
      <div class="profile-posts__img">
        <img src="test/Rectangle 4332.png" />
      </div>
      <div class="profile-posts__img">
        <img src="test/Rectangle 4331.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
