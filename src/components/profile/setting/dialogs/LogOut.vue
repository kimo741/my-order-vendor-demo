<template>
  <q-card class="q-pa-sm main-rounded" dir="rtl" style="width: 80%">
    <q-card-section
      class="text-primary text-bold text-center text-body2 text-bold"
    >
      تسجيل الخروج
    </q-card-section>
    <q-card-section class="row justify-around">
      <q-btn color="primary" label="نعم" class="col-5 main-rounded" />
      <q-btn color="primary" label="لا" class="col-5 main-rounded" outline />
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

<style lang="scss" scoped >
.close-icon {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
