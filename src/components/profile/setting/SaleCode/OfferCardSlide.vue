<template>
  <div class="vertical-list">
    <q-card
      class="my-card bg-white"
      v-for="(items, i) in offerCard"
      :key="i"
      @click="$emit('passOfferCard', items)"
    >
      <q-card-section class="q-pa-sm">
        <div class="row justify-between items-center">
          <div class="col flex">
            <q-icon size="sm" name="img:/icon/tag.png" />
            <div class="text-sm text-500 q-mx-sm">{{ items.code }}</div>
          </div>
          <div class="col">
            <div class="text-left text-primary text-500">
              {{ items.end ? "منتهي" : "" }}
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-sm flex">
        <div class="col text-primary">
          خصم {{ items.value }}% علي
          {{
            items.type == "g"
              ? "جميع المنتجات"
              : items.type == "m"
              ? items.products.length + " " + "منتج"
              : items.products[0]
          }}
        </div>
        <div class="text-hint q-mx-sm">انتهاء {{ items.end_date }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    offerCard: {
      type: Array || Proxy,
      required: true,
    },
    expired: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style>
</style>
