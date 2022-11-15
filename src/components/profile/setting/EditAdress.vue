<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader title="العنوان" :back-icon="true" />
    <q-list bordered class="bg-white main-rounded q-my-md text-500 text-body1">
      <q-expansion-item
        dense-toggle
        expand-separator
        :caption="old_adress"
        label="الفرع الرئيسي"
      >
        <q-card>
          <q-card-section>
            <q-input
              v-model="new_adress"
              filled
              dense
              type="email"
              rounded
              class=""
              placeholder="ادخل عنوان الفرع الرئيسي الجديد"
              outlined
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";

export default {
  components: { DynamicHeader },
  setup() {
    return {
      new_adress: ref(""),
      old_adress: ref("الرياض"),
    };
  },
};
</script>

<style>
</style>
