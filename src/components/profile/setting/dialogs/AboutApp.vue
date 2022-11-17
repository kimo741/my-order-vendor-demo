<template>
  <q-card class="q-pa-sm main-rounded" dir="rtl" style="width: 70%">
    <q-card-section class="text-center text-body2 text-bold">
      عن التطبيق
    </q-card-section>
    <q-card-section class="text-sm text-center">
      لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل لوريم
      ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض لوريم ايبسوم هو نموذج
      افتراضي
    </q-card-section>
    <q-icon
      class="q-mx-xs close-icon"
      size="xs"
      name="eva-close-outline"
      @click="$emit('closeAboutApp')"
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
</style>
