<template>
  <div dir="rtl" class="q-my-sm full-width row justify-between">
    <div class="col-8">
      <div class="flex justify-around items-center q-mr-md">
        <div class="text-body2 col-8 right" style="font-weight: 500">
          {{ label_title }}
        </div>
        <!-- ///////////////////////////////// -->
        <!-- dropdown for sellect sorted value -->
        <!-- ///////////////////////////////// -->
        <q-btn-dropdown class="col text-grey-7" align="left" flat label="اليوم">
          <q-list>
            <q-item
              v-for="(sort, i) in sort_by"
              :key="i"
              clickable
              dense
              v-close-popup
              @click="$emit('passSorting', sort)"
            >
              <q-item-section>
                <q-item-label>{{ sort.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <!-- /////// -->
    <!-- see all -->
    <!-- /////// -->
    <div class="col-4 text-body2 text-left">
      <q-btn
        @click="$emit('showAll')"
        size="sm"
        label="مشاهدة الكل"
        class=""
        flat
        color="primary"
      ></q-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["label_title"],
  setup() {
    return {
      sort_by: ref([
        { label: "اليوم", value: "day" },
        { label: "منذ اسبوع", value: "week" },
        { label: "منذ شهر", value: "monthe" },
      ]),
    };
  },
};
</script>

<style>
</style>
