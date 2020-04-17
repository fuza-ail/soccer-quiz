<template>
  <div>
    <h1>SOCCER QUIZ</h1>
    <div v-if="finish">{{ countDown }}</div>

    <div class="form-group row" v-for="(question,index) in soal" :key="question.id">
      <!-- <div class="col-sm-4"></div> -->
      <div
        class="col-sm-4 mb-3 questionbox"
        style="text-align:center !important; margin:auto !important;"
      >
        <div v-if="index === questionIndex">
          <input
            v-model="question.question"
            class="form-control my-3 question"
            style="width:500px !important;"
            readonly
          />
          <button
            v-for="(item,index2) in question.choiches"
            :key="index2"
            class="form-control my-2 item. answer"
            style="background:#D3D3D3"
            @click.prevent="checkAnswer(index2,index)"
          >{{item}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
// let socket = io("http://localhost:3000/");
let socket = io("https://obscure-chamber-19357.herokuapp.com/");
export default {
  data() {
    return {
      countDown: 5,
      score: 0,
      questionIndex: 0,
      finish: true
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
            timer: 2000,
            onClose: () => {
              this.countDown = 5;
              console.log(
                this.$store.state.soal.length - 1,
                this.questionIndex
              );
              if (this.$store.state.soal.length - 1 == this.questionIndex) {
                this.finish = false;
                this.$router.push("/win");
              } else {
                this.countDownTime();
              }
              this.questionIndex++;
            }
          });
        }
      }, 1000);
    },
    checkAnswer(data, index) {
      if (this.soal[index].answer == data) {
        // for (let i = 0; i < this.$store.state.users.length; i++) {
        //   if (
        //     this.$store.state.users[i].name == localStorage.getItem("username")
        //   ) {
        //     socket.emit("choose", this.$store.state.users[i].score++);
        //     //this.$store.state.users[i].score++;
        //   }
        // }
        socket.emit("choose", localStorage.getItem("username"));
        this.$swal({
          position: "center",
          icon: "success",
          title: `:) Correct!!`,
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false
        });
      } else {
        this.$swal({
          position: "center",
          icon: "error",
          title: `:(  Incorrect !!!`,
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false
        });
      }
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px;
  font-weight: bolder;
  color: whitesmoke;
  text-shadow: 5px 5px 3px black;
  font-family: "Lobster", cursive;
  font-size: 3cm;
  text-indent: 50px;
}
</style>