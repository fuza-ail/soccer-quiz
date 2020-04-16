<template>
  <div>
    <h2>SOCCER QUIZ</h2>
    <!-- {{ countDown }} -->
    <div class="form-group row" v-for="(question,index) in questions" :key="question.id">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <div v-if="index === questionIndex">
          <input v-model="question.question" class="form-control" readonly />
          <button
            v-for="item in question.choiches"
            :key="item.id"
            class="form-control my-2"
          >{{item}}</button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-dark" @click.prevent="next">Next</button>
    <div v-show="questionIndex === questions.length">
      <h2>Quiz finished</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDown: 10,
      questionIndex: 0,
      questions: [
        {
          id: 1,
          question: "Siapakah Juara Piala Dunia 2006 ?",
          choiches: {
            a: "Italy",
            b: "France"
          },
          answer: "a"
        },
        {
          id: 2,
          question: "Siapakah Tuan Rumah Piala Dunia 2002 ?",
          choiches: {
            a: "Africa",
            b: "Korea Japan"
          },
          answer: "b"
        },
        {
          id: 3,
          question: "Nama Bola Piala Dunia 2010 ? ",
          choiches: {
            a: "Jabulani",
            b: "Bulajani"
          },
          answer: "a"
        }
      ]
    };
  },
  created() {
    this.countDownTimer();
  },
  methods: {
    next: function() {
      this.questionIndex++;
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          //return this.countDownTimer();
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    }
  }
};
</script>