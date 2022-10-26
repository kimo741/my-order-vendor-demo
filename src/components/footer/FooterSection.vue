<template>
  <transition-group name="fade">
    <div class="footer-section full-width row justify-between">
      <q-list class="col-5 row">
        <q-item
          :class="
            this.$route.path == '/profile' ? 'footer-section__active' : ''
          "
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == '/profile'
                ? 'img:icon/person-footer-active.png'
                : 'img:icon/person-footer.png'
            "
          />
          <div
            v-if="this.$route.path == 'profile'"
            class="text-center text-links"
          >
            ملفي
          </div>
        </q-item>

        <q-item
          :class="
            this.$route.path == '/products' ? 'footer-section__active' : ''
          "
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == 'products'
                ? 'img:icon/product-avtive.png'
                : 'img:icon/product.png'
            "
          />

          <div
            v-if="this.$route.path == '/favorts'"
            class="text-center text-links"
          >
            المنتجات
          </div>
        </q-item>
      </q-list>
      <q-list class="col-5 row">
        <q-item
          :class="this.$route.path == '/order' ? 'footer-section__active' : ''"
          to="/order"
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == '/order'
                ? 'img:icon/orders-active.png'
                : 'img:icon/orders.png'
            "
          />
          <div
            v-if="this.$route.path == '/order'"
            class="text-center text-links"
          >
            الطلبات
          </div>
        </q-item>

        <q-item
          :class="this.$route.path == '/' ? 'footer-section__active' : ''"
          to="/"
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == '/'
                ? 'img:icon/Home-active.png'
                : 'img:icon/Home.png'
            "
          />
          <div v-if="this.$route.path == '/'" class="text-center text-links">
            الرئيسة
          </div></q-item
        >
      </q-list>
    </div>
    <q-btn round size="lg" color="primary" icon="eva-plus" class="add-button" />
  </transition-group>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      active_footer: ref(""),
    };
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.footer-section {
  &__active {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 80%;
      height: 2px;
      background-color: $primary;
      transform: translateX(-50%);
    }
  }
}
.add-button {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text-links {
  font-size: 10px;
  color: $primary;
}
</style>
