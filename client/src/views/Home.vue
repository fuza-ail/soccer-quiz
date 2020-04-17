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
          <button class="buttonjoin" type="submit">Join</button>
        </div>
      </form>
    </div>

    <div class="centerboxrules">
      <h4>How to play</h4>
      <ul>
        <li>Input your name</li>
        <li>Click join</li>
        <li>Wait for another player</li>
        <li>Start the game</li>
        <li>1 point each correct answer</li>
        <li>
          <strong>Highest&nbsp;</strong>score
          <strong>&nbsp;WIN&nbsp;</strong>the game
        </li>
        <li>Enjoy the game</li>
      </ul>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import music from "../assets/BGM.mp3";
// let socket = io("http://localhost:3000/");
let socket = io("https://obscure-chamber-19357.herokuapp.com/");

export default {
  data() {
    return {
      name: "",
      music: new Audio(music)
    };
  },
  created() {
    this.music.play();
    socket.emit("created", "start");
    socket.on("created", data => {
      console.log(data);
    });
    socket.on("joining", data => {
      // this.users.push({ name: data, point: 0 });
      this.$store.commit("AddUsers", data);
    });

    socket.on("start", data => {
      this.$router.push("/quiz");
    });

    socket.on("choose", data => {
      for (let i = 0; i < this.$store.state.users.length; i++) {
        if (this.$store.state.users[i].name == data) {
          this.$store.state.users[i].score++;
        }
      }
    });

    socket.on("ready", data => {
      for (let i = 0; i < this.$store.state.users.length; i++) {
        if (this.$store.state.users[i].name == data) {
          this.$store.state.users[i].status = true;
          this.$store.commit("AddReady");
        }
      }
    });
  },
  methods: {
    login() {
      this.$store.commit("AddUsers", this.name);
      this.$router.push("/listPlayer");
      localStorage.setItem("username", this.name);
      socket.username = this.name;
      socket.emit("joining", this.name);
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
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
  top: 40%;
  left: 52%;
  background-color: azure;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  border-radius: 20px;
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

.buttonjoin {
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

.centerboxrules {
  width: 550px;
  padding: 5px;
  position: absolute;
  top: 80%;
  left: 52%;
  background-color: azure;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  border-radius: 20px;
  box-shadow: 5 5px 3px white;
}

h4 {
  text-align: center;
  color: black;
  margin-top: 7px;
  margin-bottom: 7px;
  text-shadow: 1px 1.5px 1px whitesmoke;
  font-family: "Lobster", cursive;
  font-size: xx-large;
}

li {
  font-size: larger;
}
</style>
