<template>
  <div id="app">
    <Home v-if="firstPage" @StartQuiz="StartQuiz"></Home>
    <Quiz v-if="quizPage"></Quiz>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Quiz from "./views/Quiz.vue";

export default {
  name: "App",
  components: {
    Home,
    Quiz
  },
  data() {
    return {
      firstPage: true,
      quizPage: false
    };
  },
  methods: {
    StartQuiz() {
      this.firstPage = false;
      this.quizPage = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
