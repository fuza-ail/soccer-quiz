<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in users" :key="index" style="background:white !important">
          <td>{{user.name}}</td>
          <td>{{user.score}}</td>
        </tr>
        <!-- <button type="button" v-if="win" @click.prevent="getPrize" class="btn btn-dark">Gift</button> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      win: false
    };
  },
  created() {
    this.calculateScore();
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    calculateScore() {
      this.$store.state.users.sort(function(b, a) {
        return a.score - b.score;
      });
      let max = this.$store.state.users[0].score;

      for (let i = 0; i < this.$store.state.users.length; i++) {
        if (
          this.$store.state.users[i].score == max &&
          this.$store.state.users[i].score != 0
        ) {
          if (
            this.$store.state.users[i].name == localStorage.getItem("username")
          ) {
            this.$router.push("/gift");
          }
        }
      }
    }
    // getPrize() {
    //   this.$router.push("/gift");
    // }
  }
};
</script>