<template>
  <div class="offer-bar q-pa-sm">
    <!-- ////////////// -->
    <!-- time for offer -->
    <!-- ////////////// -->
    <div class="row items-center">
      <div class="text-h3 q-ml-sm">خصم 20% علي كل المنتجات</div>
      <q-btn-dropdown
        flat
        v-model="menu"
        class="bg-white text-hint text-center"
        label="اسبوع"
        padding="xs"
        dense
      >
        <q-list separator class="text-right">
          <q-item
            class="text-hint"
            dense
            clickable
            v-close-popup
            @click="editOffer"
          >
            <q-item-section>
              <q-item-label>
                <q-icon name="edit" />
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            v-for="(item, i) in list_item"
            :key="i"
            class="text-hint"
            dense
            clickable
            v-close-popup
            @click="sellectOffer(item)"
          >
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <!-- /////////// -->
    <!--  offer code -->
    <!-- /////////// -->
    <div class="row items-center q-my-sm">
      <div class="text-h3 q-ml-sm">كود خصم</div>
      <q-btn-dropdown
        flat
        v-model="menu"
        class="bg-white text-hint text-center"
        label="OM73"
        padding="xs"
        dense
      >
        <q-list separator class="text-right">
          <q-item
            class="text-hint"
            dense
            clickable
            v-close-popup
            @click="editOffer"
          >
            <q-item-section>
              <q-item-label>
                <q-icon name="edit" />
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            v-for="(item, i) in list_item"
            :key="i"
            class="text-hint"
            dense
            clickable
            v-close-popup
            @click="sellectOffer(item)"
          >
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      list_item: ref([
        {
          label: "اسبوعان",
          code: "2w",
        },
        {
          label: "شهر",
          code: "1m",
        },
        {
          label: "3 شهور",
          code: "3m",
        },
        {
          label: "6 شهور",
          code: "6m",
        },
      ]),
    };
  },
  methods: {
    editOffer() {},
    sellectOffer(item) {},
  },
};
</script>

<style lang="scss" scoped>
.offer-bar {
  background-color: rgba(255, 107, 97, 0.1);
}
</style>
