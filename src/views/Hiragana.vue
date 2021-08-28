<template>
  <v-container class="white mx-auto mt-15 pb-15 pa-0 rounded-lg">
    <v-row>
      <v-col align="center" class="py-7 px-10">
        <div class="ad">
        </div>
      </v-col>
    </v-row>

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
              <span :class="{ details: show }">Detalhes</span>
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
      <v-expand-transition>
        <div v-show="show">
          <v-col class="pa-0" cols="12">
            <v-card
              id="card"
              class="list-item list-item-text--text"
              elevation="0"
              tile
            >
              <v-card-title class="text-h6 py-0"
                >Escolha a escrita da tabela:</v-card-title
              >
              <v-card-text class="pb-1 pl-6 d-inline-block">
                <v-chip-group v-model="chips.chip1">
                  <v-chip
                    :class="{
                      'main-blue white--text': chips.chip1 == 0,
                    }"
                    @click="chips.chip1 = 0"
                    >Romaji</v-chip
                  >
                  <v-chip
                    :class="{
                      'main-blue white--text': chips.chip1 == 1,
                    }"
                    @click="chips.chip1 = 1"
                    >Kana</v-chip
                  >
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col class="pa-0" cols="12">
            <v-card
              id="card"
              class="list-item list-item-text--text rounded-br-lg"
              elevation="0"
              tile
            >
              <v-card-title class="text-h6 py-0"
                >Escolha o tipo de sorteio:</v-card-title
              >
              <v-card-text class="pb-1 pl-6">
                <v-chip-group
                  v-model="chips.chip2"
                  active-class="main-blue white--text"
                >
                  <v-chip
                    id="among-all"
                    :class="{
                      'main-blue white--text': chips.chip2 == 0,
                    }"
                    @click="chips.chip2 = 0"
                    >Entre todos</v-chip
                  >
                  <v-chip
                    :class="{
                      'main-blue white--text': chips.chip2 == 1,
                    }"
                    @click="chips.chip2 = 1"
                    >Apenas entre os selecionados</v-chip
                  >
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-expand-transition>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center py-7">
        <v-simple-table class="table main-blue">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center pa-0 ma-0" colspan="5">
                  <v-btn
                    class="
                      text-h5
                      font-weight-bold
                      main-blue
                      white--text
                      pa-0
                      rounded-tl-lg
                    "
                    block
                    elevation="0"
                    tile
                    @click="selectedType = 'seion'"
                  >
                    <span :class="{ details: selectedType == 'seion' }"
                      >Seion</span
                    >
                  </v-btn>
                </th>
                <th class="text-center pa-0 ma-0" colspan="3">
                  <v-btn
                    class="text-h5 font-weight-bold main-blue white--text pa-0"
                    block
                    elevation="0"
                    tile
                    @click="selectedType = 'youon'"
                  >
                    <span :class="{ details: selectedType == 'youon' }"
                      >Youon</span
                    >
                  </v-btn>
                </th>
                <th class="text-center pa-0 ma-0" colspan="5">
                  <v-btn
                    class="
                      text-h5
                      font-weight-bold
                      main-blue
                      white--text
                      pa-0
                      rounded-tr-lg
                    "
                    block
                    elevation="0"
                    tile
                    @click="selectedType = 'sokuon'"
                  >
                    <span :class="{ details: selectedType == 'sokuon' }"
                      >Sokuon</span
                    >
                  </v-btn>
                </th>
              </tr>
            </thead>

            <tbody v-show="selectedType == 'seion'">
              <tr v-for="(row, i) in syllabaries" :key="i + 1">
                <template v-for="(col, index) in row">
                  <td
                    class="text-center text-h4 font-weight-normal rounded-lg"
                    :key="`${i} ${index}`"
                    v-if="index < 5"
                    :colspan="colSpan.seion[index]"
                    @click="selectSyllabary(i, index, $event)"
                  >
                    {{ col }}
                  </td>
                </template>
              </tr>
            </tbody>

            <tbody v-show="selectedType == 'youon'">
              <tr v-for="(row, i) in syllabaries" :key="i + 1">
                <template v-for="(col, index) in row">
                  <td
                    class="text-center text-h4 font-weight-normal rounded-lg"
                    :key="`${i} ${index}`"
                    v-if="index > 4 && index < 8"
                    :colspan="colSpan.youon[index]"
                    @click="selectSyllabary(i, index, $event)"
                  >
                    {{ col }}
                  </td>
                </template>
              </tr>
            </tbody>

            <tbody v-show="selectedType == 'sokuon'">
              <tr v-for="(row, i) in syllabaries" :key="i + 1">
                <template v-for="(col, index) in row">
                  <td
                    class="text-center text-h4 font-weight-normal rounded-lg"
                    :key="`${i} ${index}`"
                    v-if="index > 7"
                    :colspan="colSpan.sokuon[index]"
                    @click="selectSyllabary(i, index, $event)"
                  >
                    {{ col }}
                  </td>
                </template>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
        <v-btn
          class="
            decorate
            main-blue
            list-item-text--text
            rounded-lg
            pa-6
            text-h5
            font-weight-bold
          "
          :to="{ path: '/game', query: {info: JSON.stringify(info)}}"
          :disabled="selectedSyllabaries.length == 0 ? true : false"
          >Decorar</v-btn
        >
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
  data() {
    return {
      show: true,
      chips: { chip1: 0, chip2: 1 },
      selectedType: "seion",
      selectedSyllabaries: []
    };
  },
  methods: {
    selectSyllabary(row, col, event) {
      const index = this.selectedSyllabaries.findIndex((obj) => {
        return obj.row == row && obj.col == col;
      });

      if (index == -1 && event.target.innerText != "") {
        this.selectedSyllabaries.push({ row, col });
        event.target.style.backgroundColor = "#ffc107";
      } else if (index != -1 && event.target.innerText != "") {
        this.selectedSyllabaries.splice(index, 1);
        event.target.style.backgroundColor = "";
      }
    },
  },
  computed: {
    colSpan() {
      return this.$store.state.colSpan;
    },
    syllabaries() {
      if (this.chips.chip1 == 0) {
        return this.$store.state.syllabaries.romaji;
      } else {
        return this.$store.state.syllabaries.kana;
      }
    },
    info() {
      const info = {
        selectedSyllabaries: this.selectedSyllabaries,
        typeOfDraw: this.chips.chip2
      }

      return info
    }
  },
  watch: {
    "chips.chip1": function (newValue) {
      newValue == undefined ? (this.chips.chip1 = 0) : "";
    },
    "chips.chip2": function (newValue) {
      newValue == undefined ? (this.chips.chip2 = 0) : "";
    },
  },
};
</script>

<style scoped>
.ad {
  background-color: lightgray;
  width: 300px;
  height: 200px;
}

@media screen and (max-width: 600px) {
  .syllabaries-title,
  .syllabaries-kana,
  .table {
    width: 95%;
  }
}

@media screen and (min-width: 600px) {
  .syllabaries-title,
  .syllabaries-kana,
  .table {
    width: 573px;
  }
}

.details {
  box-shadow: inset 0px -12px 0px 0px #ffc107 !important;
}

.syllabaries-kana div {
  width: 100%;
}

#card:hover {
  background-color: #afd0c8 !important;
  color: white !important;
}

.row .v-slide-group__wrapper .v-slide-group__content {
  justify-content: left !important;
}

.kana:hover {
  color: white !important;
  background-color: #afd0c8 !important;
}

button {
  height: 100% !important;
}

tr:hover {
  background-color: transparent !important;
}

td {
  background-color: #bbded6;
  color: white;
  border: 2px solid #00b8a9;
}

td:hover {
  background-color: #afd0c8;
}

.decorate {
  width: 289px;
  box-shadow: inset 4px 4px #afd0c8;
}

.decorate:active {
  color: white;
  box-shadow: inset 2px 2px #afd0c8;
}

.row .decorate:hover {
  color: white !important;
}

.wave {
  position: absolute;
  z-index: -1;
  bottom: 0px;
  left: 0;
}
</style>