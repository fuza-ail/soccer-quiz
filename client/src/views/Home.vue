<template>
  <div>
    <h1>Soccer Quiz</h1>
    <div class="centerboxregister">
      <h3>Input Name</h3>
      <form @submit.prevent="login">
        <div>
          <input type="text" class="inputboxregister" placeholder="Name" v-model="name" />
        </div>
        <div>
          <button class="buttonplay" type="submit">Play</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
let socket = io("http://localhost:3000/");
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    login() {
      // socket.on("joining", data => {
      //   this.users.push({ name: data, score: 0, status: false });
      // });
      this.$store.commit("AddUsers", this.name);
      this.$router.push("/listPlayer");
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.loginPage {
  /* //background-image: url("./assets/soccer.jpg"); */
  background-repeat: no-repeat;
  background-size: 110%;
}
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

.centerboxregister {
  width: 350px;
  height: 200px;
  position: absolute;
  top: 35%;
  left: 52%;
  background-color: azure;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  border-radius: 10%;
  box-shadow: 5 5px 3px white;
}

h3 {
  text-align: center;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  text-shadow: 1px 1.5px 1px whitesmoke;
  font-family: "Lobster", cursive;
}

.inputboxregister {
  width: 80%;
  height: 40px;
  border-radius: 15px;
  display: block;
  margin: auto;
  color: blue;
  text-align: center;
  font-weight: bolder;
  font-family: "Lobster", cursive;
}

.buttonplay {
  width: 50%;
  height: 40px;
  display: block;
  left: 30%;
  margin-top: 20px;
  margin-left: 85px;
  border-radius: 20px;
  color: whitesmoke;
  font-weight: bolder;
  font-size: large;
  background-color: rgb(7, 5, 8);
  text-shadow: 1px 1.5px 1px black;
  cursor: pointer;
  font-family: "Lobster", cursive;
}
</style>
