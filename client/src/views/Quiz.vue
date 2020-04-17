<template>
  <div>
    <h2>SOCCER QUIZ</h2>
    {{ countDown }}
    <div class="form-group row" v-for="(question,index) in soal" :key="question.id">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <div v-if="index === questionIndex">
          <input v-model="question.question" class="form-control" readonly />
          <button
            v-for="(item,index2) in question.choiches"
            :key="index2"
            class="form-control my-2 item."
            @click.prevent="checkAnswer(index2,index)"
          >{{item}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDown: 10,
      score: 0,
      questionIndex: 0
    };
  },
  created() {
    setTimeout(() => {
      this.countDownTime();
    }, 1000);
    //this.countDownTimer();
  },
  computed: {
    soal() {
      return this.$store.state.soal;
    },
    user() {
      return this.$store.state.users;
    }
  },
  methods: {
    next: function() {
      this.questionIndex++;
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.questionIndex++;
        //return this.countDownTimer();
      }
    },
    countDownTime() {
      this.timer = setInterval(() => {
        this.time = this.countDown % 60;
        this.countDown--;
        if (this.countDown <= 0) {
          clearInterval(this.timer);
          // this.questionIndex++;
          this.$swal({
            position: "center",
            icon: "error",
            title: `Time is Up !!!`,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            timer: 5000,
            onClose: () => {
              this.countDown = 10;
              this.questionIndex++;
              if (this.$store.state.soal.length - 1 < this.questionIndex) {
                alert("Quiz Finished");
              } else {
                this.countDownTime();
              }
            }
          });
        }
      }, 1000);
    },
    checkAnswer(data, index) {
      clearInterval(this.timer);
      if (this.soal[index].answer == data) {
        //this.$swal("Congratss", "Correct Answer");
        this.$swal({
          position: "center",
          icon: "success",
          title: "Congratss, Correct Answer",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          timer: 1000
        });
        setTimeout(() => {
          this.countDown = 10;
          this.questionIndex++;
          this.countDownTime();
        }, 1000);
      } else {
        //this.$swal(" :( ", "Wrong Answer");
        this.$swal({
          position: "center",
          icon: "error",
          title: ":( Wrong Answer",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          timer: 1000
        });
        setTimeout(() => {
          this.countDown = 10;
          this.questionIndex++;
          this.countDownTime();
        }, 1000);
      }
    }
  }
};
</script>