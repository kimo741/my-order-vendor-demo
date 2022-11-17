<template>
  <q-card class="q-pa-md main-rounded" dir="rtl" style="width: 70%">
    <q-card-section class="text-center text-body1 text-bold">
      اتصل بنا
    </q-card-section>
    <q-card-section class="q-pa-xs q-my-md">
      <div class="col flex text-right items-center">
        <q-icon size="xs" name="img:icon/call-primary.png" />
        <div class="q-mx-sm text-body2 text-500">+966123456789</div>
      </div>
      <div class="col q-my-md flex text-right items-center">
        <q-icon size="xs" name="img:icon/post-primary.png" />
        <div class="q-mx-sm text-body2 text-500">mail@mail.com</div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-xs text-center">
      <q-icon size="xs" name="img:icon/chat.png" />
      <div class="q-mx-sm text-body2 text-500">www.my order.com</div>
    </q-card-section>
    <q-card-section class="text-center justify-center">
      <q-icon class="q-mx-xs" size="sm" name="img:icon/facebook-round.png" />
      <q-icon class="q-mx-xs" size="sm" name="img:icon/linkedin-round.png" />
      <q-icon class="q-mx-xs" size="sm" name="img:icon/twitter-round.png" />
      <q-icon class="q-mx-xs" size="sm" name="img:icon/instagram-round.png" />
    </q-card-section>
    <q-icon
      class="q-mx-xs close-icon"
      size="xs"
      name="eva-close-outline"
      @click="$emit('closeContactUs')"
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
