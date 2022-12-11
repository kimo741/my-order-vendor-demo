<template>
  <q-page dir="rtl" style="overflow: hidden">
    <!-- //////////////// -->
    <!-- header component -->
    <!-- //////////////// -->
    <div>
      <DynamicHeader :notifyIcon="true" />
    </div>
    <div>
      <!-- //////////// -->
      <!-- input search -->
      <!-- //////////// -->
      <q-input
        class="main-rounded q-mx-auto q-mt-lg"
        style="width: 90%"
        flat
        bottom-slots
        v-model="global_search"
        bg-color="grey-4"
        dense
        rounded
        filled
        label="بحث"
      >
        <!-- @focusin="focusInput" -->
        <!-- @focusout="outOfFocus" -->
        <!-- /////////// -->
        <!-- icon search -->
        <!-- /////////// -->
        <template v-slot:prepend>
          <q-avatar>
            <q-icon size="xs" name="img:icon/Search.png" />
          </q-avatar>
        </template>
      </q-input>
    </div>
    <!-- /////////// -->
    <!-- icon search -->
    <!-- /////////// -->
    <div :class="menue ? 'active-filter' : 'unactive-filter'">
      <q-list separator color="primary" style="">
        <!-- /////////// -->
        <!-- user select -->
        <!-- /////////// -->
        <q-item
          :class="serchOf === 'user' ? 'active-seleted' : ''"
          @click="selectdFilter('user')"
          clickable
          v-ripple
        >
          <q-item-section>البحث عن اسم شخص</q-item-section>
        </q-item>
        <!-- /////////////// -->
        <!-- resorant select -->
        <!-- /////////////// -->
        <q-item
          :class="serchOf === 'resorant' ? 'active-seleted' : ''"
          @click="selectdFilter('resorant')"
          clickable
          v-ripple
        >
          <q-item-section>البحث عن مطعم</q-item-section>
        </q-item>
        <!-- ///////////// -->
        <!-- coffee select -->
        <!-- ///////////// -->
        <q-item
          :class="serchOf === 'coffee' ? 'active-seleted' : ''"
          @click="selectdFilter('coffee')"
          clickable
          v-ripple
        >
          <q-item-section>البحث عن مقهي</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
export default {
  setup() {
    return {
      // model search input
      global_search: ref(""),
      // toggle for display menu
      menue: ref(false),
      // sellected value for search (search in which table)
      serchOf: ref(""),
      // sellected value for search (search in which table)
      // options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
  methods: {
    // when focus in input search
    focusInput() {
      this.menue = true;
    },
    // pass sellected search type
    selectdFilter(selected) {
      this.serchOf = selected;
    },
  },
  components: { DynamicHeader },
};
</script>

<style lang="scss" scoped>
.unactive-filter {
  transition: all 0.4s ease-in-out !important;
  transform: translateX(-100%);
  opacity: 0;
}
.active-filter {
  background: white;
  padding: 10px;
  margin: auto;
  width: 80%;
  transition: all 0.4s ease-in-out !important;
  transform: translateX(0);
  opacity: 1;
  border-radius: 10px;
}
.active-seleted {
  background: #ff6b6123;
  border-radius: 10px;
}
</style>
