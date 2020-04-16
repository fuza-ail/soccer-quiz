<template>
  <div>
    <h2>SOCCER QUIZ</h2>
    <div class="form-group row" v-for="user in users" :key="user.id">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <input v-model="user.name" class="form-control" readonly />
      </div>
    </div>
    <button type="button" class="btn btn-outline-dark" @click.prevent="StartQuiz">Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Chandra"
        },
        {
          id: 2,
          name: "Fuzail"
        },
        {
          id: 3,
          name: "Indra"
        }
      ]
    };
  },
  methods: {
    StartQuiz() {
      this.$emit("StartQuiz");
    }
  }
};
</script>