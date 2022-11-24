<template>
  <div class="row justify-around">
    <div class="col-5">
      <div class="text-sm text-500">من الساعه</div>
      <q-input dense filled v-model="handelTimeFrom" type="time" mask="time">
      </q-input>
    </div>
    <div class="col-5">
      <div class="text-sm text-500">الي الساعه</div>

      <q-input dense filled v-model="handelTimeTo" mask="time" type="time">
        <!-- :rules="['time']" -->
        <!-- <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-time v-model="handelTimeTo" mask="hh:mm A">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template> -->
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  props: ["work_time_from", "work_time_to"],
  computed: {
    handelTimeFrom: {
      get() {
        return this.work_time_from;
      },
      set(v) {
        this.$emit("workTimeFromIsChanged", v);
      },
    },
    handelTimeTo: {
      get() {
        return this.work_time_to;
      },
      set(v) {
        this.$emit("workTimeToIsChanged", v);
        this.changeToTime(v);
      },
    },
  },
  // methods: {
  //   changeToTime(val) {
  //     this.$emit("workTimeFromIsChanged", val);
  //   },
  //   changeFromTime(val) {
  //     this.$emit("workTimeToIsChanged", val);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
</style>
