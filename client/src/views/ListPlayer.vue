<template>
  <div>
    <h1>SOCCER QUIZ</h1>
    <div class="form-group row" v-for="(user,index) in name" :key="index">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <input v-model="user.name" class="form-control" readonly />
      </div>
    </div>
    <button type="button" v-if="ready" class="buttonready" @click.prevent="readyQuiz">Ready</button>
    <button
      type="button"
      v-if="notReady"
      class="buttonready"
      @click.prevent="notReadyQuiz"
    >Not Ready</button>
  </div>
</template>

<script>
import io from "socket.io-client";
// let socket = io("http://localhost:3000/");
let socket = io("https://obscure-chamber-19357.herokuapp.com/");

export default {
  data() {
    return {
      ready: true,
      notReady: false,
      //countReady: 0,
      users: this.$store.state.users
    };
  },
  computed: {
    name() {
      return this.$store.state.users;
    }
  },
  methods: {
    readyQuiz() {
      console.log(this.users);
      socket.emit("ready", localStorage.getItem("username"));
      console.log(this.users);
      //   let readyToPlay = this.users.length;

      ////if (this.users.length == this.$store.state.ready) {
      console.log("ayo bermain");
      if (this.users.length > 1) {
        socket.emit("start");
      }
      this.ready = false;
      this.notReady = true;
      //}
    },
    notReadyQuiz() {
      this.countReady--;
      this.ready = true;
      this.notReady = false;
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 0%;
  font-weight: bolder;
  color: whitesmoke;
  text-shadow: 5px 5px 3px black;
  font-family: "Lobster", cursive;
  font-size: 700%;
}
.buttonready {
  width: 20%;
  height: 5%;
  display: block;
  margin-top: 18.5%;
  margin-left: 41%;
  border-radius: 20px;
  color: whitesmoke;
  font-weight: bolder;
  font-size: large;
  background-color: blue;
  text-shadow: 5px 1.5px 1px black;
  cursor: pointer;
  font-family: "Lobster", cursive;
}
</style>