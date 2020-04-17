<template>
  <div>{{user}}</div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.users;
    }
  }
};
</script>