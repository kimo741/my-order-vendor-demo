<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-list class="row justify-start items-center">
        <q-item
          class="col-5"
          v-for="(day, i) in week"
          :key="i"
          tag="label"
          dense
          v-ripple
        >
          <q-item-section class="q-pa-0" avatar>
            <q-checkbox
              v-model="handelDataChange"
              :val="day"
              color="primary"
              dense
              class="q-ma-0"
            />
          </q-item-section>
          <q-item-section class="q-pa-0">
            <q-item-label>{{ day }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <!-- <div class="q-px-sm q-mt-sm">
      Your selection is: <strong>{{ work_days }}</strong>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["workDays"],
  setup() {
    return {
      work_days: ref(["الاحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"]),
      week: ref([
        "السبت",
        "الاحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعه",
      ]),
    };
  },
  // watch: {
  //   work_days(val) {
  //     this.$emit("workDaysIsChanged", val);
  //   },
  //   deep: true,
  // },
  computed: {
    handelDataChange: {
      get() {
        return this.workDays;
      },
      set(val) {
        this.$emit("workDaysIsChanged", val);
        console.log(val);
      },
    },
  },
  // mounted() {
  //   this.workDays.handelDataChange = workDays;
  // },
};
</script>
