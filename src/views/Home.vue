<template>
  <v-container class="white mx-auto mt-15 pa-0 rounded-lg">
    <v-row class="syllabaries-title mx-auto">
      <v-col class="px-0">
        <v-btn
          class="text-h5 font-weight-bold main-blue white--text rounded-t-lg"
          block
          elevation="0"
          tile
          @click="show = !show"
        >
          <v-row>
            <v-col align="center" cols="11">
              <span :class="{ 'syllabaries-name': show }">Silabários</span>
            </v-col>
            <v-col align="end" cols="1">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-col>
          </v-row>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="syllabaries-kana mx-auto mt-0">
      <v-col class="pt-0 px-0 mb-5">
        <v-expand-transition>
          <div v-show="show">
            <v-btn
              class="
                kana
                text-h6
                font-weight-normal
                list-item
                list-item-text--text
              "
              block
              elevation="0"
              tile
              to="/hiragana"
              >Hiragana</v-btn
            >
            <v-btn
              class="
                kana
                text-h6
                font-weight-normal
                list-item
                list-item-text--text
                rounded-br-lg
              "
              block
              elevation="0"
              tile
              to="/katakana"
              >Katanaka</v-btn
            >
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <svg
          class="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#bbded6"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,122.7C480,85,600,75,720,101.3C840,128,960,192,1080,192C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .syllabaries-title,
  .syllabaries-kana {
    width: 95%;
  }
}

@media screen and (min-width: 600px) {
  .syllabaries-title,
  .syllabaries-kana {
    width: 573px;
  }
}

.syllabaries-name {
  box-shadow: inset 0px -12px 0px 0px #ffc107;
}

.kana:hover {
  color: white !important;
  background-color: #afd0c8 !important;
}

.wave {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
