<template>
  <q-list
    bordered
    separator
    padding
    dense
    class="bg-white q-pa-sm dropdown-list"
    style="border-radius: 14px; width: 80%"
  >
    <!-- //////////////////////////////////////// -->
    <!-- //////////////////////////////////////// -->
    <!-- //////////////////////////////////////// -->
    <q-item
      class="justify-between dropdown-list__item"
      @click="$emit('editProduct')"
      clickable
      v-ripple
    >
      <q-item-section avatar class="">
        <q-icon name="img:icon/edit.png" />
      </q-item-section>
      <q-item-section class="text-right q-px-sm text-body2 text-500">
        تعديل
      </q-item-section>
    </q-item>
    <!-- //////////////////////////////////////// -->
    <q-item
      class="dropdown-list__item"
      @click="$emit('deleteProduct')"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon name="img:icon/trash.png" />
      </q-item-section>
      <q-item-section class="text-right q-px-sm text-body2 text-500"
        >حذف</q-item-section
      >
    </q-item>
  </q-list>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dropdown-list {
  &__item {
    &:active {
      color: $primary;
      background: rgba(0, 0, 0, 0.014);
    }
  }
}
</style>
