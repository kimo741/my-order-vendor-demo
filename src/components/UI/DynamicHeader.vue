<template>
  <div class="main-nav row justify-between items-center" dir="rtl">
    <div class="col-3">
      <div class="row text-right">
        <!-- /////////// -->
        <!-- back Button -->
        <!-- /////////// -->
        <q-btn
          v-if="backIcon"
          flat
          class="col"
          size="md"
          icon="eva-arrow-ios-forward-outline"
          @click="this.$router.go(-1)"
        />
        <!-- //////////////// -->
        <!-- notfication icon -->
        <!-- //////////////// -->
        <q-btn
          class="col text-right"
          icon="img:icon\notfication.png"
          align="left"
          flat
          @click="openNotficatonPage"
        >
          <!-- ///////////////////////////////////// -->
          <!-- badge if have notficaton was,t see it -->
          <!-- ///////////////////////////////////// -->
          <q-badge
            class="edit-badge edit-badge__notify"
            v-show="nofiBdge"
            align="top"
            color="primary"
            rounded
            floating
          />
        </q-btn>
      </div>
    </div>
    <!-- ////////// -->
    <!-- logo image -->
    <!-- ////////// -->
    <div class="col-6 main-nav__logo"><img src="logo.png" /></div>
    <div class="col-3 text-left">
      <!-- ////////// -->
      <!-- search icon -->
      <!-- /////////// -->
      <q-btn v-if="searchIcon" flat size="md" icon="img:/icon/Search.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backIcon: {
      type: Boolean,
      default: false,
    },
    nofiBdge: {
      type: Boolean,
      default: false,
    },
    searchIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-nav {
  width: 100%;
  height: 60px;
  &__logo {
    max-width: 100%;
    max-height: 100%;
    zoom: 40%;
    margin: auto;
    text-align: center;
  }
}
.edit-badge {
  position: absolute;
  padding: 0 !important;
  width: 10px;
  height: 10px !important;
  &__notify {
    max-height: 1px !important;
    right: 18px;
    top: 0px;
    transform: translateX(-50%);
  }
}
</style>
