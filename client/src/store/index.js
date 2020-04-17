import Vue from 'vue';
import Vuex from 'vuex';
import io from "socket.io-client";
// let socket = io("http://localhost:3000/");
let socket = io("https://obscure-chamber-19357.herokuapp.com/")

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    soal: [
      {
        id: 1,
        question: "Siapakah Juara Piala Dunia 2006 ?",
        choiches: {
          a: "Italy",
          b: "France",
          c: "Brazil",
          d: "Argentina"
        },
        answer: "a"
      },
      {
        id: 2,
        question: "Siapakah Tuan Rumah Piala Dunia 2002 ?",
        choiches: {
          a: "Africa",
          b: "Korea Japan",
          c: "Brazil",
          d: "Indonesia"
        },
        answer: "b"
      },
      {
        id: 3,
        question: "Nama Bola Piala Dunia 2010 ? ",
        choiches: {
          a: "Jabulani",
          b: "Bulajani",
          c: "Nijabula",
          d: "Labujani"
        },
        answer: "a"
      },
      // {
      //   id: 4,
      //   question: "Berasal darimanakah Bambang Pamungkas ? ",
      //   choiches: {
      //     a: "Spanyol",
      //     b: "Portugal",
      //     c: "Indonesia",
      //     d: "Argentina"
      //   },
      //   answer: "c"
      // },
      // {
      //   id: 5,
      //   question: "Berasal darimanakah Lionel Messi ? ",
      //   choiches: {
      //     a: "Spanyol",
      //     b: "Portugal",
      //     c: "Indonesia",
      //     d: "Argentina"
      //   },
      //   answer: "d"
      // }
    ],
    users: [],
    ready: 0
  },
  mutations: {
    AddUsers(state, payload) {
      //state.users.push({ name: payload, score: 0, status: false });
      let data = {
        name: payload,
        score: 0,
        status: false
      }
      state.users.push(data)
    },
    AddReady(state, payload) {
      state.ready++
    }
  },
  actions: {
  },
  modules: {
  },
});
