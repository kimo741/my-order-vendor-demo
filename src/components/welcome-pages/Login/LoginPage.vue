<template>
  <q-page class="login-page full-height q-px-md" dir="rtl">
    <!-- //////////////////////// -->
    <!-- top bar for back or skip -->
    <!-- //////////////////////// -->
    <BackAndSkip class="q-py-md" iconSrc="arrow_forward_ios" />
    <!-- //////////////////////// -->
    <div class="text-h5">هلا بعودتك من جديد</div>
    <div class="text-body2">ادخل رقم هاتفك لانشاء حساب جديد او تسجيل دخول</div>
    <q-form @submit.prevent="logIn">
      <div class="q-my-lg row justify-center">
        <div class="col-10 text-center q-mx-auto">
          <!-- ////////////////////// -->
          <!-- input for phone numper -->
          <!-- ////////////////////// -->
          <q-input
            class="main-rounded q-mx-auto"
            flat
            v-model="number"
            type="number"
            bg-color="grey-4"
            rounded
            required
            filled
          >
            <!-- ////////////////////////// -->
            <!-- dropdown musk phone numper -->
            <!-- ////////////////////////// -->

            <template v-slot:append>
              <q-btn-dropdown
                dir="ltr"
                dense
                flat
                push
                no-caps
                class="border-right"
              >
                <template v-slot:label>
                  <div class="row items-center no-wrap">
                    <img :src="musks.avatar" />
                    <div class="text-center q-mx-sm">{{ musks.label }}</div>
                  </div>
                </template>
                <!-- /////////////// -->
                <!-- list for musks  -->
                <!-- /////////////// -->
                <q-list>
                  <q-item
                    v-for="(musk, i) in options"
                    :key="i"
                    clickable
                    v-close-popup
                    @click="onItemClick(musk)"
                  >
                    <q-item-section>
                      <q-item-label>{{ musk.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <!-- <q-avatar :url="musk.avatar" text-color="white" /> -->
                      <img :src="musk.avatar" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </template>
          </q-input>
        </div>
        <!-- ////////////// -->
        <!-- input password -->
        <!-- ////////////// -->
        <div class="col-10 q-my-md">
          <q-input
            class="main-rounded"
            bg-color="grey-4"
            rounded
            filled
            required
            flat
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
          >
            <!-- //////////////////////////////// -->
            <!-- toggle for hide password or show -->
            <!-- //////////////////////////////// -->

            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                standout
              />
            </template>
          </q-input>
          <!-- ////////////////////// -->
          <!-- forgit password button -->
          <!-- ////////////////////// -->
          <div
            @click="forgitPassword"
            class="q-mt-sm text-right text-body2"
            style="color: #999"
          >
            نسيت كلمة المرور ؟
          </div>
        </div>
        <div class="col-10 q-my-sm btn-container">
          <!--////////////// -->
          <!-- supmit button -->
          <!-- ///////////// -->
          <q-btn
            type="submit"
            color="primary"
            class="main-rounded full-width q-py-sm q-my-sm"
            label="تسجيل دخول"
            unelevated
          />
          <!--////////////////////// -->
          <!-- rejester a new accout -->
          <!-- ///////////////////// -->
          <q-btn
            @click="newRegester"
            color="primary"
            outline
            class="main-rounded full-width q-pt-sm q-my-sm"
            label="تسجيل جديد"
            unelevated
          />
          <!--/////////////////// -->
          <!-- open app as a gust -->
          <!-- ////////////////// -->
          <div
            @click="openAsGust"
            class="q-my-sm text-center text-body2"
            style="color: #999"
          >
            الدخول كزائر
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
import { ref } from "vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      number: ref(""),
      musks: ref({
        label: "+966 ",
        value: "+966",
        avatar: "icon/flag.png",
      }),
      options: ref([
        {
          label: "+966",
          value: "+966",
          avatar: "icon/flag.png",
        },
        {
          label: "+002",
          label: "+002",
          avatar: "icon/flag.png",
        },
        {
          label: "+043",
          label: "+001",
          avatar: "icon/flag.png",
        },
      ]),
    };
  },
  methods: {
    // supmit sunction
    logIn() {
      // this.$router.push({
      //   name: "verification",
      //   params: {
      //     phone: this.number,
      //   },
      // });
    },
    ////////////////////////////////////////////
    newRegester() {
      this.$router.push({ name: "RejesterAccount" });
    },
    ////////////////////////////////////////////
    forgitPassword() {
      this.$router.push({ name: "ForgetPassword" });
    },
    ////////////////////////////////////////////
    openAsGust() {
      this.$router.push("/");
    },
    ////////////////////////////////////////////
    // on sellect musk
    onItemClick(mask) {
      this.musks = mask;
    },
    ////////////////////////////////////////////
  },
};
</script>

<style>
</style>
