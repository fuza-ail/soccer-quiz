import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    soal: [
      {
        id: 1,
        question: "Siapakah Juara Piala Dunia 2006 ?",
        choiches: {
          a: "Italy",
          b: "France"
        },
        answer: "a"
      },
      {
        id: 2,
        question: "Siapakah Tuan Rumah Piala Dunia 2002 ?",
        choiches: {
          a: "Africa",
          b: "Korea Japan"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Nama Bola Piala Dunia 2010 ? ",
        choiches: {
          a: "Jabulani",
          b: "Bulajani"
        },
        answer: "a"
      }
    ],
    name: "",
    users: []
  },
  mutations: {
    AddUsers(state, payload) {
      state.users.push({ name: payload, score: 0, status: false });
    },
  },
  actions: {
  },
  modules: {
  },
});
