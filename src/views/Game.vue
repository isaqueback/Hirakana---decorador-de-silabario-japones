<template>
  <v-container class="white mx-auto mt-15 pb-10 pa-0 rounded-lg">
    <v-row class="d-flex flex-column">
      <v-col class="px-6 py-3">
        <v-icon class="close text-h5" @click="exit = true">{{
          "mdi-window-close"
        }}</v-icon>
        <v-dialog v-model="exit" max-width="370" class="main-blue">
          <v-card class>
            <v-card-title class="text-h6"
              >Você tem certeza que quer sair?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                elevation="0"
                color="white"
                class="main-blue--text"
                @click="exit = false"
                >Não</v-btn
              >
              <v-btn
                elevation="0"
                color="white"
                class="main-blue--text"
                to="/hiragana"
                >Sim</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col class="px-6 py-3">
        <v-alert
          border="left"
          type="success"
          class="answer-warning"
          :color="correctAnswer ? 'green' : 'red'"
          :value="showResult"
          transition="slide-y-transition"
        >
          <v-row>
            <v-col>
              Resposta
              {{
                correctAnswer
                  ? "Correta!"
                  : `Incorreta! A resposta correta seria "${answerSyllabary}".`
              }}
            </v-col>
            <v-col>
              <v-btn
                class="botao float-right red darken-4 list-item-text--text"
                :class="{
                  'green darken-4': correctAnswer,
                  'red darken-4': !correctAnswer,
                }"
                elevation="0"
                autofocus
                @click="next"
                >Próximo</v-btn
              >
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="py-5" align="center">
        <span class="text-h1 font-weight-bold rounded-lg list-item-text px-3">
          {{ questionSyllabary }}
        </span>
      </v-col>
    </v-row>

    <v-row style="width: 400px" class="mx-auto">
      <v-col class="pt-13 pb-7" align="center">
        <v-textarea
          class="answer-textarea rounded-lg"
          v-if="answerSyllabariesMode == 'keyboard'"
          color="main-blue"
          background-color="list-item-text"
          label="Digite o silabário:"
          no-resize
          rows="4"
          outlined
          :disabled="showResult"
          @keyup.enter="check"
          v-model="answer"
        >
        </v-textarea>
        <v-chip-group
          class="word-bank d-inline-block"
          v-else-if="answerSyllabariesMode == 'word bank'"
          active-class="main-blue white--text"
          v-model="answer"
          column
        >
          <v-chip
            class="chip text-h5 font-weight-normal"
            v-for="i in answerSyllabariesQuantity"
            :key="i"
            :disabled="showResult"
            @keyup.enter="check"
            >{{ chipsSyllabaries[i - 1] }}</v-chip
          >
        </v-chip-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="center">
        <v-btn
          class="
            check
            main-blue
            list-item-text--text
            rounded-lg
            py-3
            text-h7
            font-weight-bold
          "
          :disabled="answer == undefined || showResult"
          @click="check"
          >Verificar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      info: JSON.parse(this.$route.query.info),
      questionSyllabaryType: "",
      questionSyllabary: "",
      answerSyllabariesMode: "",
      answerSyllabary: "",
      chipsSyllabaries: "",
      answerSyllabariesQuantity: "",
      answer: undefined,
      correctAnswer: false,
      exit: false,
      showResult: false,
      showAd: false,
      count: 0,
      percentage: 0,
    };
  },
  methods: {
    drawQuestionSyllabaryType() {
      const number = this.getRandomIntInclusive(0, 1);

      if (number == 1) return (this.questionSyllabaryType = "romaji");
      else return (this.questionSyllabaryType = "kana");
    },
    drawQuestionSyllabary() {
      const index = this.getRandomIntInclusive(
        0,
        this.info.selectedSyllabaries.length - 1
      );
      const position = this.info.selectedSyllabaries[index];

      const syllabary =
        this.$store.state.syllabaries[this.questionSyllabaryType][position.row][
          position.col
        ];

      this.getAnswerSyllabary(position);
      return (this.questionSyllabary = syllabary);
    },
    drawAnswerSyllabariesMode() {
      if (this.questionSyllabaryType == "romaji") {
        return (this.answerSyllabariesMode = "word bank");
      } else {
        const number = this.getRandomIntInclusive(0, 1);

        if (number == 1) return (this.answerSyllabariesMode = "keyboard");
        else return (this.answerSyllabariesMode = "word bank");
      }
    },
    getAnswerSyllabary(position) {
      const type = this.questionSyllabaryType == "romaji" ? "kana" : "romaji";

      const syllabary =
        this.$store.state.syllabaries[type][position.row][position.col];

      return (this.answerSyllabary = syllabary);
    },
    drawAnswerSyllabariesQuantity() {
      if (this.info.typeOfDraw == 0) {
        const number = this.getRandomIntInclusive(5, 10);
        return (this.answerSyllabariesQuantity = number);
      } else {
        if (this.info.selectedSyllabaries.length <= 5) {
          return (this.answerSyllabariesQuantity =
            this.info.selectedSyllabaries.length);
        } else {
          const number = this.getRandomIntInclusive(
            5,
            this.info.selectedSyllabaries.length
          );
          return (this.answerSyllabariesQuantity = number);
        }
      }
    },
    drawChipsSyllabaries() {
      let syllabaries = new Set();
      let chipsSyllabaries = [];

      const answerSyllabaryIndex = this.getRandomIntInclusive(
        0,
        this.answerSyllabariesQuantity - 1
      );

      while (syllabaries.size != this.answerSyllabariesQuantity) {
        const row = this.getRandomIntInclusive(0, 15);
        const col = this.getRandomIntInclusive(0, 12);

        if (syllabaries.size == answerSyllabaryIndex) {
          syllabaries.add(this.answerSyllabary);
        } else {
          syllabaries.add(
            this.$store.state.syllabaries[this.answerSyllabariesType][row][col]
          );
        }

        if (syllabaries.has("")) syllabaries.delete("");
      }

      syllabaries.forEach((value) => chipsSyllabaries.push(value));

      return (this.chipsSyllabaries = chipsSyllabaries);
    },
    check() {
      if (this.answerSyllabariesMode == "keyboard") {
        if (this.answer.trim() == this.answerSyllabary) {
          this.correctAnswer = true;
        } else {
          this.correctAnswer = false;
        }
      } else {
        if (this.chipsSyllabaries[this.answer] == this.answerSyllabary) {
          this.correctAnswer = true;
        } else {
          this.correctAnswer = false;
        }
      }

      this.showResult = true;
    },
    next() {
      this.drawQuestionSyllabaryType();
      this.drawQuestionSyllabary();
      this.drawAnswerSyllabariesMode();
      if (this.answerSyllabariesMode == "word bank") {
        this.drawAnswerSyllabariesQuantity();
        this.drawChipsSyllabaries();
      }
      this.answer = undefined;
      this.showResult = false;
    },
    getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  computed: {
    answerSyllabariesType() {
      if (this.questionSyllabaryType == "romaji") return "kana";
      else return "romaji";
    },
  },
  watch: {
    count(newValue, oldValue) {
      if (newValue % 2 == 0) {
        const random = this.getRandomIntInclusive(1, 10);
        if (random > 5) {
          this.showAd = true;
        }
      }
    },
    // showAd(newValue, oldValue) {
    //   if (newValue) {
    //     const interval = setInterval(() => {
    //       this.percentage += 20;
    //       if (this.percentage == 100) clearInterval(interval);
    //     }, 1000);
    //   } else {
    //     this.percentage = 0;
    //   }
    // },
  },
  mounted() {
    this.next();

    const body = document.body;
    body.onkeyup = (e) => {
      if (this.showResult) {
        this.count++;
        this.count % 2 == 0 ? this.next() : "";
      }
    };
  },
};
</script>

<style scoped>
.v-dialog__content {
  top: 25px !important;
}

.close:hover {
  color: rgb(0 0 0 / 42%) !important;
}

.check {
  box-shadow: inset 4px 4px #afd0c8;
  width: 40% !important;
}

.check:active {
  color: white;
  box-shadow: inset 2px 2px #afd0c8;
}

.row .check:hover {
  color: white !important;
}

.answer-textarea {
  width: 360px;
}

.chip {
  padding: 0 15px;
}

.v-slide-group__wrapper .v-slide-group__content {
  display: flex;
  justify-content: center !important;
}

.answer-warning {
  top: -43px;
  z-index: 1;
  width: 100%;
}
</style>