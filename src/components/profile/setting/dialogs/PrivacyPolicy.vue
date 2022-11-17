<template>
  <q-card class="q-pa-sm main-rounded" dir="rtl" style="width: 70%">
    <q-card-section class="text-center text-body2 text-bold">
      سياية الخصوصية
    </q-card-section>
    <q-card-section class="text-sm text-right">
      <div class="q-my-xs">
        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل لوريم
        ايبسوم
      </div>
      <div class="list-posinter q-my-md">
        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل لوريم
        ايبسوم
      </div>
      <div class="list-posinter q-my-md">
        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل لوريم
        ايبسوم
      </div>
      <div class="list-posinter q-my-md">
        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل لوريم
        ايبسوم
      </div>
    </q-card-section>
    <q-icon
      class="q-mx-xs close-icon"
      size="xs"
      name="eva-close-outline"
      @click="$emit('closePrivacyPolicy')"
    />
  </q-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.close-icon {
  position: absolute;
  top: 8px;
  right: 8px;
}
.list-posinter {
  position: relative;
  padding-right: 15px;
  line-height: 1rem;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 2px;
    background-color: $primary;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
}
</style>
