<template>
  <div class="container" dir="rtl">
    <div class="storys">
      <!-- <div
        @click="uploadStory"
        class="bg-transparent q-my-md storys__items storys__mine"
      >

        <input
          style="display: none"
          class="input"
          ref="inputStory"
          @change="uploadStoryChanged"
          type="file"
        />
        <img :src="storys[0].img" />
        <div
          style="color: black; font-size: 13px; white-space: nowrap"
          class="storys__name text-center text-normal"
        >
          إضافة قصه
        </div>
      </div> -->
      <!-- //////////////////////////////////////////// -->
      <!-- //////////for loop in other story/////////// -->
      <!-- //////////////////////////////////////////// -->

      <div
        v-for="(story, i) in storys"
        :key="i"
        class="storys__items q-my-md bg-transparent"
        @click="openThisImg(story)"
      >
        <img :src="story.prof_img" />
        <!-- i am stoped here 👇👇/////////////////////////  -->
        <div class="storys__name text-center text-sm text-hint">
          {{ story.name }}
        </div>
        <!--///////////////////👆👆///////////////////////// -->
      </div>
    </div>
    <!-- ////////////////////// -->
    <!-- dialog for other story -->
    <!-- ////////////////////// -->
    <q-dialog
      persistent
      class="popUp-story bg-white"
      style="padding: 0 !important"
      full-height
      full-width
      flat
      v-model="show_story"
    >
      <q-card
        class="bg-transparent"
        style="
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important ;
        "
      >
        <!-- ///////////////// -->
        <!-- btn to clos popup -->
        <!-- ///////////////// -->
        <q-btn
          class="closePopup"
          size="lg"
          icon="close"
          flat
          @click="closePopup"
        />
        <!-- //////////////////// -->
        <!-- img for target story -->
        <!-- //////////////////// -->
        <!-- note 👉👉👉: i was cheked for story id and find it in my array to review it
            and move next and prview from my current index -->
        <!-- //////////////////// -->
        <q-img
          class="dialog__img"
          style="z-index: 100"
          :src="storys[img_ndex].img"
        />
        <!-- //////////////////////////////// -->
        <!-- input for commint in other story -->
        <!-- //////////////////////////////// -->
        <q-input class="storys__comment" rounded outlined v-model="comment">
          <template v-slot:append>
            <q-avatar>
              <q-btn icon="send" @click="commintOnStory" />
            </q-avatar>
          </template>
        </q-input>
        <q-btn
          flat
          color="primary"
          class="storys__btn-next"
          icon="eva-arrowhead-right-outline"
          @click="slideToNextStory"
        />
        <q-btn
          flat
          color="primary"
          class="storys__btn-prview"
          icon="eva-arrowhead-left-outline"
          @click="slideTopreviewStory"
        />
      </q-card>
      <!-- </q-card> -->
    </q-dialog>
    <!-- ////////////////////////// -->
    <!-- dialog for upload my story -->
    <!-- ////////////////////////// -->
    <q-dialog
      persistent
      class="popUp-story bg-white"
      style="padding: 0 !important"
      full-height
      full-width
      flat
      v-model="dialog_upload"
    >
      <q-card
        class="bg-transparent"
        style="
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important ;
        "
      >
        <!-- ///////////////// -->
        <!-- btn to clos popup -->
        <!-- ///////////////// -->
        <q-btn
          class="closePopup"
          size="lg"
          icon="close"
          flat
          @click="closePopup"
        />
        <!-- ////////////////////////////////////// -->
        <!-- image for review img src before upload -->
        <!-- ////////////////////////////////////// -->
        <q-img
          class="dialog__img"
          style="z-index: 100"
          :src="story_upload_src"
        />
        <!-- //////////////////////// -->
        <!-- btn to submit this story -->
        <!-- //////////////////////// -->
        <q-btn
          class="storys__comment"
          icon="send"
          label="اضافة"
          color="primary"
          size="md"
          @click="commintOnStory"
        />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      // dialog for my story
      dialog_upload: ref(false),
      // image file to upload
      story_upload: ref(""),
      // img url to review
      story_upload_src: ref(""),
      // commin in other story
      comment: ref(""),
      // index for img story i was clickd it
      img_ndex: ref(""),
      // dialog for other story
      show_story: ref(false),
      // scema for testing
      storys: ref([
        {
          id: 1,
          name: "متجر",
          img: "test/1.png",
          prof_img: "test/1.png",
        },
        {
          id: 2,
          name: "مطعم",
          img: "test/2.png",
          prof_img: "test/2.png",
        },
        {
          id: 3,
          name: "مقهى",
          img: "test/3.png",
          prof_img: "test/3.png",
        },
        {
          id: 4,
          name: "مشعل إبراهيم",
          img: "test/4.png",
          prof_img: "test/4.png",
        },
        {
          id: 5,
          name: "name",
          img: "test/5.png",
          prof_img: "test/5.png",
        },
        {
          id: 5,
          name: "name",
          img: "test/5.png",
          prof_img: "test/5.png",
        },
        {
          id: 5,
          name: "name",
          img: "test/5.png",
          prof_img: "test/5.png",
        },
        {
          id: 5,
          name: "name",
          img: "test/5.png",
          prof_img: "test/5.png",
        },
        {
          id: 5,
          name: "name",
          img: "test/5.png",
          prof_img: "test/5.png",
        },
      ]),
    };
  },
  methods: {
    openThisImg(img) {
      this.show_story = true;
      const index = this.storys.findIndex((d) => d.id == img.id);
      this.img_ndex = index;
    },
    closePopup() {
      this.show_story = false;
      this.dialog_upload = false;
    },
    commintOnStory() {
      // tack commint and send it as message with story img
    },
    // on upload story
    // uploadStory() {
    //   const input = this.$refs.inputStory;
    //   input.click();
    // },
    // uploadStoryChanged() {
    //   // handel image before upload
    //   const allwoedType = [
    //     "image/jpeg",
    //     "image/png",
    //     "image/svg+xml",
    //     "image/webp",
    //   ];
    //   const file = event.target.files[0];
    //   if (allwoedType.indexOf(file.type) !== -1) {
    //     var imgData = new FileReader();
    //     imgData.readAsDataURL(file);
    //     imgData.onload = (e) => {
    //       // for review
    //       this.story_upload_src = e.target.result;
    //       // for uploading
    //       this.story_upload = file;
    //       // open dialog
    //       this.dialog_upload = true;
    //     };
    //   } else {
    //     this.$q.notify({
    //       message:
    //         "Sorry! You can't upload image With " + file.type + " Extension",
    //       color: "red",
    //     });
    //   }
    // },
    slideToNextStory() {
      // handel if this story is last story in my array
      if (this.img_ndex == this.storys.length) {
        return;
      } else {
        this.img_ndex++;
      }
    },
    slideTopreviewStory() {
      // handel if this story is first story in my array
      if (!this.img_ndex) {
        return;
      } else {
        this.img_ndex--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.storys {
  // padding: 0 1rem 1.3rem;
  display: flex;
  height: 110px;
  overflow-x: scroll !important;
  overflow-y: visible !important;
  scroll-padding: 100%;
  scroll-snap-type: x mandatory;
  &__items {
    flex: 0 0 55px;
    position: relative;
    // scroll-snap-align: center;
    display: inline-block;
    height: 55px;
    width: 50px;
    font-size: 0;
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &::before {
      content: "";
      position: absolute;
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      left: 50%;
      top: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid $primary;
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &__mine {
    border: 2px solid white;
    border-radius: 50%;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30%;
      height: 3px;
      background-color: white;
      border: none;
      border-radius: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 30px;
      background-color: white;
    }
  }
  &__comment {
    position: fixed;
    bottom: 5px;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 90%;
    z-index: 200;
    margin: auto;
  }
  &__upload-done {
    position: fixed;
    bottom: 10px;
    right: 13px;
    width: 20%;
    z-index: 200;
    margin: auto;
  }
  &__btn-next {
    position: fixed;
    top: 50%;
    right: 10px;
    z-index: 200;
    opacity: 0.8;
  }
  &__btn-prview {
    position: fixed;
    top: 50%;
    left: 10px;
    // transform: translate(-50%, -50%);
    z-index: 400;
    opacity: 0.8;
  }
  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    padding: 5px 0;
    white-space: nowrap;
    color: #000;
  }
}
.closePopup {
  position: fixed;
  right: 5px;
  top: 5px;
  z-index: 200;
}
.dialog__img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  height: auto;
}
</style>
