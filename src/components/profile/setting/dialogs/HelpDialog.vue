<template>
  <q-card class="q-pa-sm main-rounded" dir="rtl" style="width: 80%">
    <q-card-section class="text-center text-body2 text-bold">
      المساعدة
    </q-card-section>
    <q-card-section class="text-sm text-right">
      <q-list dense class="rounded-borders">
        <!-- //////////////////// -->
        <!-- list for help dialog -->
        <!-- //////////////////// -->
        <q-expansion-item
          v-for="(item, i) in 5"
          :key="i"
          dense
          class="bg-primary q-my-sm text-white main-rounded"
        >
          <template v-slot:header>
            <!-- / -->
            <!-- Q -->
            <!-- / -->
            <q-item-section> ما هو لوريم ايبسوم ؟ </q-item-section>
          </template>
          <q-card>
            <!-- / -->
            <!-- A -->
            <!-- / -->
            <q-card-section class="text-right text-hint">
              لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
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
