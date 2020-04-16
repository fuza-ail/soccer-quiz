<template>
  <div>
    <h2>SOCCER QUIZ</h2>
    <div class="form-group row" v-for="(user,index) in name" :key="index">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <input v-model="user.name" class="form-control" readonly />
      </div>
    </div>
    <button type="button" v-if="ready" class="btn btn-outline-dark" @click.prevent="readyQuiz">Ready</button>
    <button
      type="button"
      v-if="notReady"
      class="btn btn-outline-info"
      @click.prevent="notReadyQuiz"
    >Not Ready</button>
  </div>
</template>

<script>
import io from "socket.io-client";
let socket = io("http://localhost:3000/");

export default {
  data() {
    return {
      ready: true,
      notReady: false,
      countReady: 0,
      countUser: this.$store.state.users.length
    };
  },
  computed: {
    name() {
      return this.$store.state.users;
    }
  },
  created() {
    socket.emit("created", "StartChat");
    socket.on("created", data => {
      console.log(data);
    });
    socket.on("joining", data => {
      // this.users.push({ name: data, score: 0, status: false });
      this.$store.commit("AddUsers", data);
    });
  },
  methods: {
    readyQuiz() {
      this.countReady++;
      this.ready = false;
      this.notReady = true;
      //   if (this.countUser == this.countReady && this.countUser > 1) {
      if (this.countUser == this.countReady) {
        this.$router.push("/quiz");
      }
    },
    notReadyQuiz() {
      this.countReady--;
      this.ready = true;
      this.notReady = false;
    }
  }
};
</script>