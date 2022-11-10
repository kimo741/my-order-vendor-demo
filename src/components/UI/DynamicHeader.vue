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
          v-if="notifyIcon"
          class="col text-right"
          icon="img:icon\notfication.png"
          align="left"
          flat
          @click="$router.push({ name: 'notify' })"
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
        <!-- <q-btn
          v-if="post"
          dense
          style="width: 110px; padding: 3px 40px"
          class="main-rounded"
          label="نشر"
          color="primary"
          @click="$emit('emitPost')"
        /> -->
      </div>
    </div>
    <!-- ////////// -->
    <!-- logo image -->
    <!-- ////////// -->
    <div
      @click="this.$router.push('/')"
      v-if="title === null"
      class="col-6 main-nav__logo"
    >
      <img src="logo.png" />
    </div>
    <div v-else class="text-h1 text-500 q-ma-auto">{{ title }}</div>
    <div class="col-3 text-left">
      <!-- ////////// -->
      <!-- search icon -->
      <!-- /////////// -->
      <q-btn
        v-if="searchIcon"
        @click="$emit('emitSearch')"
        flat
        size="md"
        icon="img:/icon/Search.png"
      />
      <q-btn
        v-if="addIcon"
        @click="$emit('emitAdd')"
        color="primary"
        flat
        size="md"
        icon="add"
      />
      <q-btn
        v-if="setingIcon"
        @click="$emit('emitSetting')"
        color="primary"
        flat
        size="md"
        icon="img:icon/setting.png"
      />
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
    notifyIcon: {
      type: Boolean,
      default: true,
    },
    setingIcon: {
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
    post: {
      type: Boolean,
      default: false,
    },
    addIcon: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
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
    margin: auto;
    text-align: center;
    zoom: 40%;
    img {
    }
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
